import React from 'react';

import  TextInput  from '@components/BaseComponents/TextInput';
import  Switch  from '@components/BaseComponents/Switch';
import  ToggleButton  from '@components/BaseComponents/ToggleButton';
import TextOutput from "@components/BaseComponents/TextOutput";
import  LightPanel  from '@components/BaseComponents/LightPanel';
import StyledIconIndicator from '@components/BaseComponents/StyledIconIndicator';
import  TextUpdate  from '@components/BaseComponents/TextUpdate';

function Transient() {
    const uut = 'acq2106_130'

    const inlineStyle = {
        border: '1px solid red',
        padding: '10px',
        margin: '10px',
    };

    return (
        <React.Fragment>
            <h1>Transient</h1>
            <div style={inlineStyle}>
                <TextInput 
                    pv={`${uut}:MODE:TRANSIENT:PRE`}
                    label="PRE"
                />
                <TextInput 
                    pv={`${uut}:MODE:TRANSIENT:POST`}
                    label="POST"
                />
                <TextInput 
                    pv={`${uut}:MODE:TRANSIENT:OSAM`}
                    label="OSAM"
                />
                <TextInput 
                    pv={`${uut}:MODE:TRANSIENT:SOFT_TRIGGER`}
                    label="Output SOFT_TRIGGER"
                />
                <button>Deault POST</button>
                <button>Deault PRE/POST</button>
            </div>
            <div style={inlineStyle}>
                <TextInput 
                    pv={`${uut}:MODE:TRANS_ACT:PRE`}
                    label="PRE ACT"
                />
                <TextInput 
                    pv={`${uut}:MODE:TRANS_ACT:POST`}
                    label="POST ACT"
                />
                <TextInput 
                    pv={`${uut}:MODE:TRANS_ACT:TOTSAM`}
                    label="Total"
                />
                <TextInput 
                    pv={`${uut}:TRANSIENT:ACT:DEMUX`}
                    label="Post Process"
                />
                <TextInput 
                    pv={`${uut}:MODE:TRANS_ACT:POST:MDSPUTCH`}
                    label="MDSPUTCH"
                />
                <button>Deault POST</button>
                <button>Deault PRE/POST</button>
            </div>
            <div style={inlineStyle}>
                <TextOutput 
                    label="SHOTS"
                    pv={`${uut}:1:SHOT`}
                />
                <LightPanel
                    colors={{
                    '0': 'red',
                    '1': 'orange',
                    '2': 'lime',
                    '4': 'brown',
                    '5': 'cyan',
                    }}
                    pv={`${uut}:MODE:TRANS_ACT:STATE`}
                />
            </div>
            <div style={inlineStyle}>
                <TextInput 
                    pv={`${uut}:MODE:TRANSIENT:REPEAT`}
                    label="REPEAT"
                />
                <ToggleButton
                    pv={`${uut}:MODE:TRANS_ACT:STATE`}
                    label="Set mode"
                    momentary
                />
                <ToggleButton
                    pv={`${uut}:MODE:TRANSIENT:SET_ARM`}
                    label="ARM"
                    momentary
                />
                <StyledIconIndicator  
                    pv={`${uut}:MODE:TRANSIENT:SET_ARM`}
                    onColor='#e67e22' 
                    offColor='#34495e'
                />
                <ToggleButton
                    pv={`${uut}:MODE:TRANSIENT:SET_ABORT`}
                    label="STOP"
                    momentary
                />
                <StyledIconIndicator  
                    pv={`${uut}:MODE:TRANSIENT:SET_ABORT`}
                    onColor='#e74c3c' 
                    offColor='#34495e'
                />
            </div>
      </React.Fragment>
    );
}
export default Transient;
