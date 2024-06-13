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

function Sidebar({toggle}){
    return(
        <React.Fragment>
            <div
                className="sidebar"
                style={{
                    width: toggle ? '100px': '0px'
                }}
            >
                <span>sidebar</span>
            </div>
        </React.Fragment>
    );
}
function doingThing(args) {
    console.log("Doing thing with args:", args);
    // Implement the logic for handling the args here
  }

const opiDef = [
    {
        label: 'Capture',
        children: [
            {
                label: "Stream",
                args: {
                    path: "Stream.jsx",
                    site: 1,
                }

            },
            {label: "Transient"},
        ]
    },
    {
        label: 'Live',
        children: [
            {
                label: "Live 1",
                children: [
                    {label: "1-8"},
                    {label: "9-16"},
                ]
            },
            {
                label: "Live 2",
                children: [
                    {label: "1-8"},
                    {label: "9-16"},
                ]
            },
        ]
    },
]

function ItemsToList({ items, expandedItems, handleToggle, depth = 0}) {
    return (
        <React.Fragment>
            {items.map((item, index) => {
                const isExpanded = expandedItems[item.label];
                return (
                    <div key={index}>
                            <ListItem 
                                button 
                                onClick={() => {
                                handleToggle(item.label);
                                if (item.args) {
                                doingThing(item.args);
                                }
                                }} 
                                sx={{ pl: depth * 4 }}
                            >
                            <ListItemText primary={item.label} />
                            {item.children ? (isExpanded ? <ExpandLess /> : <ExpandMore />) : null}
                            </ListItem>
                            {item.children && (
                            <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ItemsToList 
                                items={item.children}
                                expandedItems={expandedItems}
                                handleToggle={handleToggle}
                                depth={depth + 1}
                                />
                            </List>
                            </Collapse>
                        )}
                    </div>
                );
            })}
        </React.Fragment>
    );
}
  
function OpiDrawer({ items }) {
    const [expandedItems, setExpandedItems] = useState({});

    const handleToggle = (label) => {
        setExpandedItems((prevExpandedItems) => ({
        ...prevExpandedItems,
        [label]: !prevExpandedItems[label],
        }));
    };
  
    return (
        <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
            <ListSubheader component="div" id="nested-list-subheader">
                Opis
            </ListSubheader>
            <ItemsToList 
                items={items} 
                expandedItems={expandedItems} 
                handleToggle={handleToggle} 
            />
        </List>
    );
}

/*
                style={{
                    width: open ? '200px': '0px',
                    padding: open ? 'inherit' : '0px'
                }}

*/

function Test1(props){

    const drawerWidth = 240;

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    function drawerToggle(){
        setOpen(!open);
    }


    return (
        <React.Fragment>
            <CssBaseline />
            <div 
                class="sidebar"
                style={{
                    display: open ? 'block': 'none',
                }}
            
            >
                <span>sidebar</span>
                <input placeholder='SITE'></input>
                <OpiDrawer items={opiDef}/>

            </div>
            <div className="content">
                <span>content</span>
                <div className="header">
                    <span>header</span>
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
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            acq400_ras
                        </Typography>
                        <Button color="inherit">SAVE</Button>
                        <input></input>
                        </Toolbar>
                    </AppBar>
                </div>
                <div className="main">
                    <span>main</span>
                    <h4>React flex here</h4>
                </div>
                <div className="footer">
                    <span>footer</span>
                    <h5>save or load layout here + Copywrite</h5>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Test1;