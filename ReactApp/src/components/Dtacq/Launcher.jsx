import React, { useEffect, createRef, useState, Suspense, useRef} from 'react';
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


import { useContext } from 'react';
import { TestContext } from "@dtacq/TestContext";

import DtacqContext, {SiteContext} from "@dtacq/DtacqContext";

import { useParams } from 'react-router-dom';


const opiDef = [
    {
        label: 'Capture',
        children: [
            {
                label: "Stream",
                args: {
                    path: "Stream2.jsx",
                    hello: "world",
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

function Launcher(){
    console.warn("Launcher LOADED")

    const { uut } = useParams()
    const [state, setState] = useState({});
    const [site, setSite] = useState(1);

    useEffect(() => {
        updateState('uut', uut)
        updateState('site', 1)
        loadLayout(uut)
    }, [uut]);
;

    let siteC = useContext(SiteContext);
    console.log("sitec", siteC)
    siteC = 2
    console.log("sitec", siteC)
    

    const componentCache = {};

    const layoutRef = createRef()

    const [open, setOpen] = React.useState(false);

    const [model, setModel] = useState(Model.fromJson(baseJson));

    function saveLayout(){
        localStorage.setItem(state.uut, JSON.stringify(model.toJson()))
    }
    function loadLayout(key){
        const savedLayout = JSON.parse(localStorage.getItem(key))
        if(savedLayout){
            setModel(Model.fromJson(savedLayout))
        }
    }

    function updateState(key, value){
        setState(prevState => ({
            ...prevState,
            [key]: value
        }));
    };
    


    function factory(node, abc){ //change name
        let component = node.getComponent();
        let cached = componentCache[component];
        console.log(node.getExtraData())
        if (!cached) {
            let path = `./opi/${component}`
            componentCache[component] = importComponent(path);
        }
        console.log(`adding component ${component}`)
        return componentCache[component]
    }

    function importComponent(path) {
        console.log(`Importing component ${path} site ${site}`)
        const Component = React.lazy(() => import(path));
        return (
            <Suspense fallback={<div></div>}>
                <DtacqContext.Provider value={{ state, setState }}>
                    <Component site={1}/>
                </DtacqContext.Provider>
            </Suspense>
        );
    }

    function changeHandler(model, action){
        const type = action.type
        const significant_actions = [
            "FlexLayout_MoveNode",
            "FlexLayout_AddNode",
            "FlexLayout_DeleteTab"
        ]
        if (significant_actions.includes(type)){
            saveLayout()
        }
    }

    function openNewTab(props){
        console.log('openNewTab')
        console.log(props)
        let id = model.getFirstTabSet().getId()
        layoutRef.current.addTabToTabSet(id, {
            component: props.args.path,
            name: props.label,
            args: props.args
        })
    }

    function testButton1(){

    }



    

    function drawerToggle(){
        setOpen(!open);
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <div 
                className="sidebar"
                style={{
                    display: open ? '': 'none',
                }}
            
            >
            <Toolbar>
                <SiteRotor min={1} max={6} target={setSite}></SiteRotor>
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
                    <button onClick={testButton1}>testButton1</button>
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
                            {state.uut}
                        </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <div className="main">
                    <Layout
                        ref={layoutRef}
                        model={model}
                        factory={factory}
                        onModelChange={changeHandler}
                        className="test999"
                    />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Launcher;