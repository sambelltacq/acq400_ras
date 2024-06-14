import React, { useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Collapse from '@mui/material/Collapse';

import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import StarBorder from '@mui/icons-material/StarBorder';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


function NestedList({items, header, target}){
    const [expandedItems, setExpandedItems] = useState({});


    function handleItem(item){
        if(item.children){
            setExpandedItems(prevExpandedItems => {
                const newExpandedItems = { ...prevExpandedItems };
                newExpandedItems[item.label] = !newExpandedItems[item.label];
                return newExpandedItems;
            })
        }
        if(item.args && target){
            target(item)
        }
    }

    function generateItems(items, depth = 0){
        return (
            <React.Fragment>
                {items.map((item, index) => {
                    const isExpanded = item.children ? expandedItems[item.label] : false;
                    return (
                        <React.Fragment>
                            <ListItem 
                                button 
                                onClick={() => {
                                    handleItem(item);
                                }} 
                                sx={{ pl: depth * 3 + 1}}
                                key={item.label}
                            >
                                <ListItemText primary={item.label} />
                                {item.children ? (isExpanded ? <ExpandLess /> : <ExpandMore />) : null}
                            </ListItem>
                            {item.children && (
                            <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                                <List>
                                    {generateItems(item.children, depth + 1)}
                                </List>
                            </Collapse>
                            )}
                            
                        </React.Fragment>
                    );
                })}
            </React.Fragment>
        );
    }

    return(
        <List
            className="nestedList"
        >
            {generateItems(items)}
        </List>
    )
}
export default NestedList;