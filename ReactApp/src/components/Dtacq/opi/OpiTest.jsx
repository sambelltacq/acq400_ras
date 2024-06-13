import React, {useState, useContext} from 'react';

import  TextInput  from '@components/BaseComponents/TextInput';
import  Switch  from '@components/BaseComponents/Switch';
import  ToggleButton  from '@components/BaseComponents/ToggleButton';
import TextOutput from "@components/BaseComponents/TextOutput";
import  LightPanel  from '@components/BaseComponents/LightPanel';
import StyledIconIndicator from '@components/BaseComponents/StyledIconIndicator';
import  TextUpdate  from '@components/BaseComponents/TextUpdate';


import { Button, FormControlLabel } from "@mui/material";



import EpicsPV from '@components/SystemComponents/EpicsPV';

import PV from '@components/SystemComponents/PV';

import ReactAutomationStudioContext from "@components/SystemComponents/AutomationStudioContext";

import  ActionButton  from '@components/BaseComponents/ActionButton';




const CsButton = (props) => {
    let pvs = []
    const [actionTrigger, setActionTrigger] = useState(0);
    Object.entries(props.actions).forEach(([pvname, value]) => {
        pvs.push(
            PV({
                pv: pvname,
                newValueTrigger: actionTrigger,
                outputValue: value,
            })

        )
    });
    function handleClick(){
        setActionTrigger(actionTrigger + 1)
    }
    return (
        <Button onClick={handleClick}>{props.label}</Button>
    )
}




console.clear()

function Transient() {
    const uut = 'acq2106_130'

    const inlineStyle = {
        border: '1px solid red',
        padding: '10px',
        margin: '10px',
    };



    const [valueTest, setValueTest] = useState(null);
    const [triggerTest, setTriggerTest] = useState(0);
//    const pv=useEpicsPV({
//        pv:'acq2106_130:MODE:TRANSIENT:PRE',
//        newValueTrigger: {triggerTest},
//        outputValue: {valueTest}
//    })
//    console.error('PV HERHREH')
//    console.log(pv)

    const context = useContext(ReactAutomationStudioContext);
    console.log('context')
    context.uut = 'acq2106_130'
    console.log(context)

    let actions = {
        [`${uut}:MODE:TRANSIENT:PRE`]: 8585,
        [`${uut}:MODE:TRANSIENT:POST`]: 9599,
    }


    return (
        <React.Fragment>
            <h1>Transient</h1>
            <div style={inlineStyle}>
                <CsButton 
                    label="Default POST"
                    actions={actions}
                />
            </div>
      </React.Fragment>
    );
}
export default Transient;
