import React, { useEffect, createRef, useState, Suspense} from 'react';
import { styled, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';

import ListSubheader from '@mui/material/ListSubheader';
import Collapse from '@mui/material/Collapse';

import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import StarBorder from '@mui/icons-material/StarBorder';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import NestedList from './components/NestedList'

import SiteInput from './components/SiteInput'

import SiteRotor from './components/SiteRotor'

import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';


import {Layout, Model} from 'flexlayout-react';

import { useNavigate } from 'react-router-dom';

const opiDef = [
    {
        label: 'Capture',
        children: [
            {
                label: "Stream",
                args: {
                    path: "Stream2.jsx",
                }

            },
            {
                label: "Transient",
                args: {
                    path: "Transient.jsx",
                }
            },
            {
                label: "Blt",
                args: {
                    path: "Placeholder.jsx",
                }
            },
            {
                label: "Multievent",
                args: {
                    path: "Placeholder.jsx",
                }
            },
            {
                label: "Sync Role",
                args: {
                    path: "Placeholder.jsx",
                }
            },
        ]
    },
    {
        label: 'Live waveform',
        children: [
            {
                label: "Live 1-8",
                args: {
                    path: "Live.jsx",
                }
            },
            {
                label: "Live 9-16",
                args: {
                    path: "Live.jsx",
                }
            },
        ]
    },
    {
        label: 'Post waveform',
        children: [
            {
                label: "Post 1-8",
                args: {
                    path: "Placeholder.jsx",
                }
            },
            {
                label: "Post 9-16",
                args: {
                    path: "Placeholder.jsx",
                }
            },
        ]
    },
]

var baseJson = {
    global: {
        "tabEnableFloat": false, 
        "tabSetEnableMaximize": false,
        "tabEnableClose": true,
    },
    borders: [],
    layout: {
        type: "row",
        children: []
    }
};



function setValue(){

}

function Test1(props){


    const [open, setOpen] = React.useState(false);

    const [model, setModel] = useState(Model.fromJson(baseJson));
    const layoutRef = createRef()

    const componentCache = {};

    function factory2(node){
        console.log('fatory')
        console.log(node)
        var component = node.getComponent();
        let cached = componentCache[component];
        console.log(componentCache)
        if (!cached) {
            console.log('NOT CAHCED')
            let path = `./opi/${component}`
            let out = importComponent(path)
            componentCache[component] = out;
        }
        console.log(componentCache)
        return componentCache[component]


        var component = node.getComponent();
        if(component == 'Live'){
            console.error('live component')
            let path = "src/components/Dtacq/opi/Stream"
            return importComponent(path)
        }
    }
    function importComponent(path) {
        console.log("importComponent importComponent")
        console.log(path)

        const Component = React.lazy(() => import(path));

        return (
            <Suspense fallback={<div></div>}>
                <Component />
            </Suspense>
        );
    }


    function changeHandler(model, action){
        const type = action.type
        const significant_actions = ["FlexLayout_MoveNode", "FlexLayout_AddNode", "FlexLayout_DeleteTab"]
        if (significant_actions.includes(type)){
            console.log(`Action of type ${type}`)
            updateLayout()
        }
    }

    function openNewTab(props){
        console.log('openNewTab')
        console.log(props)
        let id = model.getFirstTabSet().getId()
        layoutRef.current.addTabToTabSet(id, {
            component: props.args.path,
            name: props.label
        })
    }

    

    function drawerToggle(){
        setOpen(!open);
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <div 
                class="sidebar"
                style={{
                    display: open ? '': 'none',
                }}
            
            >
            <Toolbar>
                <SiteRotor min={1} max={6}></SiteRotor>
            </Toolbar>
            <div className='ExpandScroll'>
                <NestedList 
                    items={opiDef}
                    target={openNewTab}
                />
            </div>

            </div>
            <div className="content">
                <div className="header">
                    <AppBar position="static">
                        <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={drawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            acq400_ras
                        </Typography>
                        <Typography variant="h6" component="div">
                            acq2106_130
                        </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <div className="main">
                    <span>main</span>
                    <Layout
                        ref={layoutRef}
                        model={model}
                        factory={factory2}
                        onModelChange={changeHandler}
                        className="test999"
                    />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Test1;