import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
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

import {useState} from 'react'

import NestedList from './components/NestedList'

import SiteInput from './components/SiteInput'

import SiteRotor from './components/SiteRotor'

import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';


const opiDef = [
    {
        label: 'Capture',
        children: [
            {
                label: "Stream",
                args: {
                    path: "Stream.jsx",
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
                    path: "Placeholder.jsx",
                }
            },
            {
                label: "Live 9-16",
                args: {
                    path: "Placeholder.jsx",
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


function testFunc1(props){
    console.log('test func1')
}



function setValue(){

}

function Test1(props){


    const [open, setOpen] = React.useState(false);



    function drawerToggle(){
        setOpen(!open);
    }
    //                <SiteInput />
    //<NestedList items={opiDef} target={testFunc1}/>
    //inherit

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
                    target={testFunc1}
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
                </div>
            </div>
        </React.Fragment>
    );
};

export default Test1;