import React from "react";

import AutomationStudioContext from "../SystemComponents/AutomationStudioContext";
import TextInput from "../BaseComponents/TextInput";
import TextOutput from "../BaseComponents/TextOutput";
import Slider from "../BaseComponents/Slider";
import Grid from "@mui/material/Grid";
import GraphY from "../BaseComponents/GraphY";
import TextField from "@mui/material/TextField";
import { useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const Probe = () => {
  const context = React.useContext(AutomationStudioContext);
  const location = useLocation();
  const theme = useTheme();
  const probeObject = JSON.parse(decodeURIComponent(location.search.substr(1)));
  let probetype;

  if (typeof probeObject.probeType === "undefined") {
    probetype = "normal";
  } else {
    probetype = probeObject.probeType;
  }

  return (
    <div>
      {probetype === "normal" && (
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} sm={6} lg={4}>
            <div style={{ overflowX: "hidden" }}>
              <div style={{ padding: 24 }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-evenly"
                  spacing={2}
                >
                  <Grid item xs={12}>
                    <TextOutput
                      pv="$(device).NAME"
                      macros={{ "$(device)": probeObject.pvname.toString() }}
                      label={"EPICS PV Name:"}
                      debug={false}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextOutput
                      pv="$(device).DESC"
                      macros={{ "$(device)": probeObject.pvname }}
                      label={"EPICS PV DESC:"}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <div style={{ height: "25vh" }}>
                      <GraphY
                        pvs={["$(device)"]}
                        macros={{ "$(device)": probeObject.pvname }}
                        maxLength={1000}
                        triggerOnSingleValueChange
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <TextOutput
                      pv="$(device)"
                      macros={{ "$(device)": probeObject.pvname }}
                      label={"EPICS PV Value:"}
                      alarmSensitive={true}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextOutput
                      pv="$(device)"
                      macros={{ "$(device)": probeObject.pvname }}
                      label={"EPICS PV Timestamp:"}
                      displayTimeStamp
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextOutput
                      pv="$(device)"
                      macros={{ "$(device)": probeObject.pvname }}
                      label={"EPICS PV Write Access:"}
                      displayMetaData={"write_access"}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextOutput
                      pv="$(device)"
                      macros={{ "$(device)": probeObject.pvname }}
                      label={"EPICS PV Host:"}
                      displayMetaData={"host"}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextInput
                      pv="$(device)"
                      macros={{ "$(device)": probeObject.pvname }}
                      label={"EPICS PV Setpoint:"}
                      alarmSensitive={true}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Slider
                      pv="$(device)"
                      macros={{ "$(device)": probeObject.pvname }}
                      usePvMinMax={true}
                      label="EPICS PV Setpoint:"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextOutput
                      pv="$(device).DRVH"
                      macros={{ "$(device)": probeObject.pvname }}
                      label={"EPICS PV DRVH:"}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextOutput
                      pv="$(device).DRVL"
                      macros={{ "$(device)": probeObject.pvname }}
                      label={"EPICS PV DRVL:"}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextOutput
                      pv="$(device).HOPR"
                      macros={{ "$(device)": probeObject.pvname }}
                      label={"EPICS PV HOPR:"}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextOutput
                      pv="$(device).LOPR"
                      macros={{ "$(device)": probeObject.pvname }}
                      label={"EPICS PV LOPR:"}
                    />
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
      )}
      {probetype === "readOnly" && (
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} sm={6} lg={4}>
            <div style={{ overflowX: "hidden" }}>
              <div style={{ padding: 24 }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-evenly"
                  spacing={2}
                >
                  <Grid item xs={12}>
                    <TextOutput
                      pv="$(device).NAME"
                      macros={{ "$(device)": probeObject.pvname }}
                      label={"EPICS PV Name:"}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextOutput
                      pv="$(device).DESC"
                      macros={{ "$(device)": probeObject.pvname }}
                      label={"EPICS PV DESC:"}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <div style={{ height: "25vh" }}>
                      <GraphY
                        pvs={["$(device)"]}
                        macros={{ "$(device)": probeObject.pvname }}
                        maxLength={1000}
                        triggerOnSingleValueChange
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <TextOutput
                      pv="$(device)"
                      macros={{ "$(device)": probeObject.pvname }}
                      label={"EPICS PV Value:"}
                      alarmSensitive={true}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextOutput
                      pv="$(device)"
                      macros={{ "$(device)": probeObject.pvname }}
                      label={"EPICS PV Timestamp:"}
                      displayTimeStamp
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextOutput
                      pv="$(device)"
                      macros={{ "$(device)": probeObject.pvname }}
                      label={"EPICS PV Write Access:"}
                      displayMetaData={"write_access"}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextOutput
                      pv="$(device)"
                      macros={{ "$(device)": probeObject.pvname }}
                      label={"EPICS PV Host:"}
                      displayMetaData={"host"}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextOutput
                      pv="$(device).HOPR"
                      macros={{ "$(device)": probeObject.pvname }}
                      label={"EPICS PV HOPR:"}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextOutput
                      pv="$(device).LOPR"
                      macros={{ "$(device)": probeObject.pvname }}
                      label={"EPICS PV LOPR:"}
                    />
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
      )}
      {probetype === "simple" && (
        <Grid container justifyContent="stretch" spacing={2}>
          <Grid item xs={12} sm={6} lg={4}>
            <div style={{ overflowX: "hidden" }}>
              <div style={{ padding: 24 }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-evenly"
                  spacing={2}
                >
                  <Grid item xs={12}>
                    <TextField
                      color="secondary"
                      sx={{
                        width: "100%",

                        fontWeight: 500,
                        borderRadius: 4,
                      }}
                      value={probeObject.pvname}
                      label={"PV Name:"}
                      fullWidth={true}
                      disabled
                      margin="none"
                      variant="outlined"
                      InputLabelProps={{
                        classes: {
                          root: classes.cssLabel,
                          focused: classes.cssFocused,
                        },
                      }}
                      InputProps={{
                        classes: {
                          root: classes.cssOutlinedInput,
                          focused: classes.cssFocused,
                          input: classes.input,
                          notchedOutline: classes.notchedOutline,
                        },
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextOutput
                      pv="$(device).NAME"
                      macros={{ "$(device)": probeObject.pvname }}
                      label={"EPICS PV Name:"}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextOutput
                      pv="$(device).DESC"
                      macros={{ "$(device)": probeObject.pvname }}
                      label={"EPICS PV DESC:"}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextOutput
                      pv="$(device)"
                      macros={{ "$(device)": probeObject.pvname }}
                      label={"EPICS PV Value:"}
                      value
                      alarmSensitive={true}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextOutput
                      pv="$(device)"
                      macros={{ "$(device)": probeObject.pvname }}
                      label={"EPICS PV Timestamp:"}
                      displayTimeStamp
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextOutput
                      pv="$(device)"
                      macros={{ "$(device)": probeObject.pvname }}
                      label={"EPICS PV Write Access:"}
                      displayMetaData={"write_access"}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextOutput
                      pv="$(device)"
                      macros={{ "$(device)": probeObject.pvname }}
                      label={"EPICS PV Host:"}
                      displayMetaData={"host"}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextInput
                      pv="$(device)"
                      macros={{ "$(device)": probeObject.pvname }}
                      label={"EPICS PV Setpoint:"}
                      alarmSensitive={true}
                    />
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default Probe;
