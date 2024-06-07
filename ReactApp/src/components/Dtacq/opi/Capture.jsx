import React, { createContext, useState } from 'react';
import withStyles from "@mui/styles/withStyles";

import Typography from "@mui/material/Typography";
import EpicsBinaryOutDebug from "@components/GroupedComponents/EpicsBinaryOutDebug";
import EpicsAnalogOutDebug from "@components/GroupedComponents/EpicsAnalogOutDebug";
import EpicsStringOutDebug from "@components/GroupedComponents/EpicsStringOutDebug";
import EpicsMbboDebug from "@components/GroupedComponents/EpicsMbboDebug";

import Stream from "@dtacq/components/Stream";
import Transient from "@dtacq/components/Transient";

import TextOutput from "@components/BaseComponents/TextOutput";
import Slider from "@components/BaseComponents/Slider";
import GraphY from "@components/BaseComponents/GraphY";
import ArrayContainer from "@components/CompoundComponents/ArrayContainer";
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";

import MobileDemo2 from "@components/Examples/Mobile/MobileDemo2";
import TraditionalLayout from "@components/UI/Layout/ComposedLayouts/TraditionalLayout";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 1, paddingTop: 36 }}>
      {props.children}
    </Typography>
  );
}

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    padding: theme.spacing(2),
  },
});


export const GlobalContext = createContext();


class EpicsDemos extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <TraditionalLayout
          title="Capture"
          denseAppBar
          alignTitle="center"
          tabs={[
            "Transient",
            "Stream",
            "BLT",
            "Stats",
            "DataFlow",
            "Slowmon",
            "Mulit-Event",
            "Sync Role",
            "HUDP A",
            "B",
            "D",
          ]}
          handleTabChange={this.handleChange}
          tabValue={value}
        />
        {value === 0 && (
          <TabContainer key="TabContainer1">
            <Transient />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer key="TabContainer1">
            <Stream />
          </TabContainer>
        )}

        {value === 2 && (
          <TabContainer key="TabContainer2">
            BLT
          </TabContainer>
        )}

        {value === 3 && (
          <TabContainer key="TabContainer3">
            Stats
          </TabContainer>
        )}

        {value === 4 && (
          <TabContainer key="TabContainer4">
            Dataflow
          </TabContainer>
        )}

        {value === 5 && (
          <TabContainer key="TabContainer5">
            Slowmon
          </TabContainer>
        )}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(EpicsDemos);


/*
import React from "react";
import Stream from "@dtacq/components/Stream";
import Transient from "@dtacq/components/Transient";

const Capture = () => {

  return (
    <React.Fragment>
        <Transient />
        <Stream />
    </React.Fragment>
  );
};

export default Capture;

*/