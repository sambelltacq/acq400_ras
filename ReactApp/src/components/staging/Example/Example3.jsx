import React from "react";


import  LightPanel  from '@components/BaseComponents/LightPanel';
import TextOutput from "@components/BaseComponents/TextOutput";
import GraphY from "@components/BaseComponents/GraphY";


const Example3 = () => {

  return (
    <React.Fragment>
      <div> Hello World</div>
      <TextOutput
        pv="$(device):1:SHOT"
        macros={{ "$(device)": "acq2106_130" }}
        usePvLabel={true}
        prec={0}
        alarmSensitive={true}
      />
      <LightPanel
        colors={{
          '0': 'red',
          '1': 'orange',
          '2': 'lime',
          '5': 'cyan',
        }}
        labelPlacement="top"
        macros={{
          '$(device)': 'acq2106_130',
          '$(id)': '1'
        }}
        pv="$(device):MODE:CONTINUOUS:STATE"
        useStringValue
      />

    </React.Fragment>
  );
};

export default Example3;
