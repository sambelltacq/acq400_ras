import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TraditionalLayout from "./Layout/ComposedLayouts/TraditionalLayout";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import HelpIcon from "@mui/icons-material/Help";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import makeStyles from "@mui/styles/makeStyles";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
  center: {
    margin: "auto",
    width: "15%",
    height: "50%",
  },
  Paper: {
    padding: theme.spacing(4),
    height: "100%",
  },
  MainGrid: {
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  MainGridItem: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  WhatsNew: {
    maxHeight: "35vh",
    "overflow-y": "scroll",
    paddingRight: 8,
  },
  Icon: {
    marginRight: theme.spacing(1),
    fontSize: "inherit",
  },
  Button: {
    width: "100%",
    height: "100%",
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const MainDashboard = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const paperElevation = theme.palette.paperElevation;
  const buttonVariant = "contained";
  const typographyProps = {
    color: "primary",
    style: {
      display: "inline-flex",
      alignItems: "center",
    },
    variant: "h5",
  };

  const styleguideURL =
    window.location.protocol + "//" + window.location.hostname + ":6060/";
  return (
    <TraditionalLayout
      title="React Automation Studio"
      denseAppBar
      alignTitle="center"
    >
      <Grid
        className={classes.MainGrid}
        container
        direction="row"
        item
        justifyContent="center"
        spacing={2}
        alignItems="stretch"
      >
        <Grid item lg={4} sm={6} xs={12} className={classes.MainGridItem}>
          <Paper className={classes.Paper} elevation={paperElevation}>
            <Grid
              container
              direction="row"
              item
              justifyContent="center"
              spacing={4}
              alignItems="center"
            >
              <Grid item lg={6} sm={12} xs={12}>
                <Grid
                  container
                  direction="row"
                  item
                  justifyContent="center"
                  spacing={4}
                  alignItems="center"
                >
                  <Grid
                    item
                    lg={12}
                    sm={12}
                    xs={12}
                    style={{ textAlign: "center" }}
                  >
                    <Typography {...typographyProps}>
                      <PhoneAndroidIcon className={classes.Icon} />
                      D-tacq test
                    </Typography>
                  </Grid>
                  <Grid item lg={12} sm={12} xs={12}>
                    <Button
                      fullWidth
                      className={classes.button}
                      component={Link}
                      to="/Capture"
                      color="primary"
                      variant={buttonVariant}
                    >
                      {" "}
                      Capture Opi{" "}
                    </Button>
                  </Grid>
                  <Grid item lg={12} sm={12} xs={12}>
                    <Button
                      fullWidth
                      className={classes.button}
                      component={Link}
                      to="/live"
                      color="primary"
                      variant={buttonVariant}
                    >
                      {" "}
                      Live Opi{" "}
                    </Button>
                  </Grid>
                  <Grid item lg={12} sm={12} xs={12}>
                    <Button
                      fullWidth
                      className={classes.button}
                      component={Link}
                      to="/post"
                      color="primary"
                      variant={buttonVariant}
                    >
                      {" "}
                      Post Opi{" "}
                    </Button>
                  </Grid>
                  <Grid item lg={12} sm={12} xs={12}>
                    <Button
                      fullWidth
                      className={classes.button}
                      component={Link}
                      to="/index"
                      color="primary"
                      variant={buttonVariant}
                    >
                      {" "}
                      Demo{" "}
                    </Button>
                  </Grid>
                  <Grid item lg={12} sm={12} xs={12}>
                    <Button
                      fullWidth
                      className={classes.button}
                      component={Link}
                      to="/launcher"
                      color="primary"
                      variant={buttonVariant}
                    >
                      {" "}
                      Launcher{" "}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item lg={4} sm={6} xs={12} className={classes.MainGridItem}>
          <Paper className={classes.Paper} elevation={paperElevation}>
            <Grid
              container
              direction="row"
              item
              justifyContent="center"
              spacing={4}
              alignItems="center"
            >
              <Grid item lg={6} sm={12} xs={12}>
                <Grid
                  container
                  direction="row"
                  item
                  justifyContent="center"
                  spacing={4}
                  alignItems="center"
                >
                  <Grid
                    item
                    lg={12}
                    sm={12}
                    xs={12}
                    style={{ textAlign: "center" }}
                  >
                    <Typography {...typographyProps}>
                      <DesktopWindowsIcon className={classes.Icon} /> Desktop
                      Demos
                    </Typography>
                  </Grid>
                  <Grid item lg={12} sm={12} xs={12}>
                    <Button
                      fullWidth
                      className={classes.button}
                      component={Link}
                      to="/TableControlSystem"
                      color="primary"
                      variant={buttonVariant}
                    >
                      {" "}
                      Table Control Demo
                    </Button>
                  </Grid>
                  <Grid item lg={12} sm={12} xs={12}>
                    <Button
                      fullWidth
                      className={classes.button}
                      component={Link}
                      to="/BeamlineControlSystem"
                      color="primary"
                      variant={buttonVariant}
                    >
                      {" "}
                      Beam Line Control Demo{" "}
                    </Button>
                  </Grid>
                  <Grid item lg={12} sm={12} xs={12}>
                    <Button
                      fullWidth
                      className={classes.button}
                      component={Link}
                      to="/MobileDemo1"
                      color="primary"
                      variant={buttonVariant}
                    >
                      {" "}
                      Mobile Demo 1{" "}
                    </Button>
                  </Grid>
                  <Grid item lg={12} sm={12} xs={12}>
                    <Button
                      fullWidth
                      className={classes.button}
                      component={Link}
                      to="/MobileDemo2"
                      color="primary"
                      variant={buttonVariant}
                    >
                      {" "}
                      Mobile Demo 2{" "}
                    </Button>
                  </Grid>
                  <Grid item lg={12} sm={12} xs={12}>
                    <Button
                      fullWidth
                      className={classes.button}
                      component={Link}
                      to="/EpicsDemos"
                      color="primary"
                      variant={buttonVariant}
                    >
                      {" "}
                      Epics Demos{" "}
                    </Button>
                  </Grid>
                  <Grid item lg={12} sm={12} xs={12}>
                    <Button
                      fullWidth
                      className={classes.button}
                      component={Link}
                      to="/Test3D"
                      color="primary"
                      variant={buttonVariant}
                    >
                      {" "}
                      3D Demos{" "}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </TraditionalLayout>
  );
};

export default MainDashboard;
