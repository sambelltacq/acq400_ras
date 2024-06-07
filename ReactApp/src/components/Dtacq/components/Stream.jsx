import React from 'react';

import  Switch  from '@components/BaseComponents/Switch';
import  ToggleButton  from '@components/BaseComponents/ToggleButton';
import TextOutput from "@components/BaseComponents/TextOutput";
import  LightPanel  from '@components/BaseComponents/LightPanel';
import StyledIconIndicator from '@components/BaseComponents/StyledIconIndicator';
import  TextUpdate  from '@components/BaseComponents/TextUpdate';

function Stream() {
    const uut = 'acq2106_130'

    const inlineStyle = {
        border: '1px solid red',
        padding: '10px',
        margin: '10px',
    };

    return (
        <React.Fragment>
            <h1>Stream</h1>
            <div style={inlineStyle}>
                <Switch
                    pv={`${uut}:MODE:CONTINUOUS`}
                />
                <TextUpdate 
                    pv={`${uut}:MODE:CONTINUOUS:STATUS`}
                />
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
                    '5': 'cyan',
                    }}
                    pv={`${uut}:MODE:CONTINUOUS:STATE`}
                />
            </div>
            <div style={inlineStyle}>
                <h3>Sample_count</h3>
                <StyledIconIndicator  
                    pv={`${uut}:MODE:CONTINUOUS`}
                    onColor='lime' 
                    offColor='darkGreen'
                />
                <TextUpdate 
                    pv={`${uut}:1:SIG:sample_count:COUNT`}
                />
                <TextUpdate 
                    pv={`${uut}:1:SIG:sample_count:FREQ`}
                />
                <ToggleButton
                    pv={`${uut}:1:SIG:sample_count:RESET`}
                    labelPlacement="start"
                    label="C"
                    labelPv="C"
                    
                    momentary
                />
            </div>
            <div style={inlineStyle}>
                <TextOutput 
                    pv={`${uut}:LIVE:MODE`}
                    label="Scope mode"
                />
                <TextOutput 
                    pv={`${uut}:1:SIG:sample_count:nzcount`}
                    label="Runtime"
                />
                <TextOutput 
                    pv={`${uut}:MODE:CONTINUOUS:SC`}
                    label="Samples"
                />
                <TextOutput 
                    pv={`${uut}:0:STAT:GETS:MBPS`}
                    label="Rate MB/s"
                />
                <TextOutput 
                    pv={`${uut}:1:AI:WF:FREQ`}
                    label="Live Wf rate"
                />
            </div>
      </React.Fragment>
    );
}
export default Stream;
