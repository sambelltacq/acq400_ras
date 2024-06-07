

import React, { useState, useContext } from 'react'
import PV from '@components/SystemComponents/PV';
import GraphY from "@components/BaseComponents/GraphY";
//import { usePV } from 'react-automation-studio';
import TraditionalLayout from "@components/UI/Layout/ComposedLayouts/TraditionalLayout";

import { GlobalContext } from '@dtacq/ContextTest.jsx';


var systemObject = {
    'hostname': 'acq2106_130',
}

function Post(){
    let uut = "acq2106_130"
    let site = 1
    let channel = String(1).padStart(2, '0')
    let [channelPVs, setChannels] = useState([`${uut}:${site}:AI:TW:${channel}`])

    const { globalVar, setGlobalVar } = useContext(GlobalContext);

    setGlobalVar(systemObject)

    console.log(globalVar)

    function test1(){
        let channel = String(2).padStart(2, '0')
        channelPVs.push(`${uut}:${site}:AI:TW:${channel}`)
        console.log(channelPVs)
        setChannels(channelPVs)
    }
    console.log('live running')

    function getInput(){

    }

    return (
        <div>
            <TraditionalLayout
            title="Post Volts"
            denseAppBar
            alignTitle="center"
            />
            <GraphY
                pvs={channelPVs}
                makeNewSocketIoConnection
            />
            <button onClick={test1}>Add Channel</button>
        </div>


    );
}

export default Post;