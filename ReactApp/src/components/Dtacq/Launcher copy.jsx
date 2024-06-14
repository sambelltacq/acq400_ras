
import {Layout, Model} from 'flexlayout-react';
import 'flexlayout-react/style/light.css';
import React, { useEffect, createRef, useState, Suspense} from 'react';

import { useNavigate } from 'react-router-dom';

import zlib from 'zlib'

//import queryString from 'query-string';

//import Stream from "ReactApp/src/components/Dtacq/opi/Stream"
//import Live from  "@dtacq/opi/Live"

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
                        component: "grid",
                    },
                ]
            },
            {
                type: "tabset",
                children: [
                    {
                        type: "tab",
                        name: "Live.opi",
                        component: "abc",
                    },
                ]
            },
            {
                type: "tabset",
                children: [
                    {
                        type: "tab",
                        name: "Transient.opi",
                        component: "com1",
                        id: "com1id"
                    }
                ]
            }
        ]
    }
};

var otherJson = {
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
                        name: "djiusahdhsajd",
                        component: "grid",
                    },
                ]
            }
        ]
    }
};

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


const testBase64String = "W3sidHlwZSI6InJvdyIsImNoaWxkcmVuIjpbeyJ0eXBlIjoicm93Iiwid2VpZ2h0Ijo3NSwiY2hpbGRyZW4iOlt7InR5cGUiOiJ0YWJzZXQiLCJ3ZWlnaHQiOjUwLCJjaGlsZHJlbiI6W3sidHlwZSI6InRhYiIsIm5hbWUiOiJTdHJlYW0ub3BpIiwiY29tcG9uZW50IjoiZ3JpZCJ9XX0seyJ0eXBlIjoicm93Iiwid2VpZ2h0Ijo1MCwiY2hpbGRyZW4iOlt7InR5cGUiOiJ0YWJzZXQiLCJ3ZWlnaHQiOjUwLCJjaGlsZHJlbiI6W3sidHlwZSI6InRhYiIsIm5hbWUiOiJORVcgVEFCIiwiY29tcG9uZW50IjoiZ3JpZCJ9XX0seyJ0eXBlIjoidGFic2V0Iiwid2VpZ2h0Ijo1MCwiY2hpbGRyZW4iOlt7InR5cGUiOiJ0YWIiLCJuYW1lIjoiTkVXIFRBQiIsImNvbXBvbmVudCI6ImdyaWQifV19XX0seyJ0eXBlIjoidGFic2V0Iiwid2VpZ2h0Ijo1MCwiY2hpbGRyZW4iOlt7InR5cGUiOiJ0YWIiLCJuYW1lIjoiTGl2ZS5vcGkiLCJjb21wb25lbnQiOiJhYmMifV19XX0seyJ0eXBlIjoidGFic2V0Iiwid2VpZ2h0IjoyNSwiY2hpbGRyZW4iOlt7InR5cGUiOiJ0YWIiLCJuYW1lIjoiTkVXIFRBQiIsImNvbXBvbmVudCI6ImdyaWQifV19XX0seyJ0eXBlIjoidGFic2V0Iiwid2VpZ2h0IjozMy4zMzMzMzMzMzMzMzMzMzYsImNoaWxkcmVuIjpbeyJ0eXBlIjoidGFiIiwibmFtZSI6IlRyYW5zaWVudC5vcGkiLCJjb21wb25lbnQiOiJjb20xIn1dfV0="






function Launcher(props) {
    console.log(props)
    //do context here?
    const uut = props.uut

    console.log(import.meta.url)

    const [queryChecked, setQueryChecked] = useState(false);

    const [model, setModel] = useState(Model.fromJson(baseJson));
    const layoutRef = createRef()

    const navigate = useNavigate();
    loadFromQuery()
    function loadFromQuery(){
        if (queryChecked) {
            return
        }
        console.log('loadFromQuery')
        const searchParams = new URLSearchParams(window.location.search);
        let layout = searchParams.get('layout')
        if (!layout){
            console.log('no layout')
            return
        }
        const decodedString = atob(layout);
        const jsonObject = JSON.parse(decodedString);
        baseJson.layout.children = jsonObject
        setModel(Model.fromJson(baseJson))
        setQueryChecked(true)
        console.log(layout)
        //searchParams.set('layout', base64String);
        //const newSearch = '?' + searchParams.toString();
        //const newUrl = window.location.pathname + newSearch;
        //window.history.pushState({ path: newUrl }, '', newUrl);
    }

    function factory (node){
        return null
        //console.log('factory has run')
        var component = node.getComponent();
        console.warn('FACTORY')
        console.log(component)
        //console.log(node)
        //console.log(component)
        if(component  == "grid"){
            return(<p>Custom component</p>)
        }
        if(component == 'Stream'){
            return(<Stream />)
            console.log('component is stream')
            console.log(node)
            //const importedComponent = import
        }
        if(component == 'Live'){
            console.log('component is Live')
            try {
                //const { default: DynamicComponent } = import("@dtacq/components/Stream")
                //console.log(DynamicComponent)
                //return(<DynamicComponent />)
            } catch(error){
                console.error('Error importing component:', error);
            }
        }

    }

    function importTest1(){
        console.log('importTest1')

    }

    function factory2(node){
        let path = "./opi/Stream"
        var component = node.getComponent();
        console.log('is',component)
        return importComponent(path)


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
            <Suspense fallback={<div>Loading...</div>}>
                <Component />
            </Suspense>
        );
    }

    function addNew(event){
        let id = model.getFirstTabSet().getId()
        let type = event.target.value
        layoutRef.current.addTabToTabSet(id, {
            component: type,
            name: type
        })
    }
    var timestamp = Date()

    function updateLayout(){
        console.log('update Layout')
        let json = model.toJson().layout.children
        console.log(model.toJson())
        console.log(json)
        const uneeded_keys = ['id', 'active']
        let jsonString = JSON.stringify(json, (key, value) => {
            if (uneeded_keys.includes(key)){
                return undefined
            }
            return value
        })
        const base64String = btoa(jsonString);
        console.log(base64String)
        console.log(`string len is ${base64String.length}`)
        document.getElementById('layoutBase64').value = base64String;
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set('layout', base64String);
        const newSearch = '?' + searchParams.toString();
        const newUrl = window.location.pathname + newSearch;
        window.history.pushState({ path: newUrl }, '', newUrl);
    }

    function importBase64(){
        console.log('import base')
        const searchParams = new URLSearchParams(window.location.search);
        console.log(searchParams.get('layout'))
        console.log(model)
        console.log(model.toString())
        console.log(zlib)
        //model = Model.fromJson(otherJson);
        //setModel(Model.fromJson(otherJson))
        const decodedString = atob(testBase64String);
        const jsonObject = JSON.parse(decodedString);
        console.log(decodedString)
        console.log(jsonObject)
        baseJson.layout.children = jsonObject
        console.log(baseJson.layout.children)
        console.log(baseJson)
        setModel(Model.fromJson(baseJson))
    }

    function changeHandler(model, action){
        const type = action.type
        const significant_actions = ["FlexLayout_MoveNode", "FlexLayout_AddNode", "FlexLayout_DeleteTab"]
        if (significant_actions.includes(type)){
            console.log(`Action of type ${type}`)
            updateLayout()
        }
    }


    return (
    <React.Fragment>
        <div className="buttonContainer">
            <h3>acq400_ras::uut_hostname1</h3>
            <a href="launcher">Reset query</a>
            <h6>{timestamp}</h6>
            <div>
                <button onClick={addNew} value="Stream">Add Stream.opi</button>
                <button onClick={addNew} value="Live">Add Live.opi</button>
                <button onClick={addNew} value="Transient">Add Transient.opi</button>
                <button onClick={importBase64}>Test Layout</button>
                <button onClick={importTest1}>Import dynamic</button>
            </div>
            <input id="currentUUT" type="text" placeholder='uut'/>
            <input id="layoutBase64" type="text" placeholder='layout string'/>
        </div>
        <div class="maxContainer">
            container
            <Layout
                ref={layoutRef}
                model={model}
                factory={factory2}
                onModelChange={changeHandler}
            />
        </div>
    </React.Fragment>
    );
}

export default Launcher;


/*



<body>
    <overlay>
    <aside>
    <main>
        <header>
        <content>
    </main>

*/