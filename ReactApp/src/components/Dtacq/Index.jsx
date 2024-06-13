
//http://naboo:5000/state.json ?

import {Layout, Model} from 'flexlayout-react';
import 'flexlayout-react/style/light.css';

import React, { useEffect } from 'react';


import Launcher from '@dtacq/Launcher';

import Stream from "@dtacq/components/Stream";
import Live from "@dtacq/opi/Live";
import Transient from "@dtacq/components/Transient";

/*
        "tabEnableFloat": false, 
        "enableClose": false,



        ideas

        /index ->shows list of uuts
        /uutname /launcher?uut=dsds?

        moment buttons 
        buttons that set pv values

        convert csstudio opis to react opis
            capture.opi
                stream
                transient
                BLt
                stats
                dataflow
                slowmon
                multievent
                sync role
                    + sync role current
                Hudpa
                B
                D
                trg+event
                agg site
            live.opi
                live.spectrum
                live.volts
                live.raw
            Post.opi
                post.volts
                post.raw
            counters.opi
                counters
            acq400sync
                hdmi bus.opi
                timing hingway.opi
                evenyt bus
                buss state
                soft trigger
                front panel

            

*/
    

var json = {
    global: {
        "tabEnableFloat": false, 
        "tabSetEnableMaximize": false,
        "tabEnableClose": true,
    },
    borders: [],
    layout: {
        type: "row",
        weight: 100,
        children: [
            {
                type: "tabset",
                children: [
                    {
                        type: "tab",
                        name: "Stream.opi",
                        component: "Stream",
                        "enableClose": false,
                    },
                ]
            },
            {
                type: "tabset",
                children: [
                    {
                        type: "tab",
                        name: "Live.opi",
                        component: "Live",
                    },
                ]
            },
            {
                type: "tabset",
                children: [
                    {
                        type: "tab",
                        name: "Transient.opi",
                        component: "Transient",
                    },
                    {
                        "component": "grid",
                        "name": "Grid 6"
                    }
                ]
            }
        ]
    }
};


console.log(Layout)

console.log(Model)

const model = Model.fromJson(json);

console.log('hello world')
function Test1() {

    const factory = (node) => {

      var component = node.getComponent();
      console.log(node)
      console.log(component)
        

      if (component === "button") {
        return <button>{node.getName()}</button>;
      } else if ((component === "Stream")){
        return <Stream />
    } else if ((component === "Live")){
        return <Live />
    } else if ((component === "Transient")){
        return <Transient />
    }
    }

    function addNew(){
        console.log('add new')
        console.log(model);
        console.log(Layout);
        console.log(Object.getOwnPropertyNames(model))
    }
  
    return (
        <div>
            <h1>acq400_ras UUTNAME</h1>
            <div class="layoutContainer">
            <Layout
                model={model}
                factory={factory} 
            />
            </div>
        </div>
    );
}



function Index() {
    let hostnames = ['acq2106_130', 'acq1001_084'];

    function loadHost(){
        console.log('load host')
    }


    let buttons = hostnames.map((hostname, index) => {
        return(<button key={index} onClick={loadHost}>{hostname}</button>)
    })






    return (
        <div>
            <h1>Index</h1>
            {buttons}
        </div>
    );
}

export default Test1;