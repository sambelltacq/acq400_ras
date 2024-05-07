import React from "react";

import Widget from "../SystemComponents/Widgets/Widget";
import {
  svgHeight,
  svgCenterY,
  svgWidth,
  svgCenterX,
} from "../SystemComponents/svgConstants";
import { v4 as uuidv4 } from "uuid";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/system";
const TextLabel = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
}));

/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
const SlitXYComponent = (props) => {
  const theme = useTheme();
  const handleOnClick = (device) => (event) => {
    if (typeof props.handleOnClick !== "undefined") {
      props.handleOnClick(device);
    }
  };
  const checkPrecision = (value, prec) => {
    if (props.usePvPrecision === true || typeof props.prec !== "undefined") {
      let precision = parseInt(prec);
      let tempvalue = parseFloat(value);
      if (!isNaN(tempvalue)) {
        return tempvalue.toFixed(precision);
      } else {
        return value;
      }
    } else {
      return value;
    }
  };

  const { classes } = props;
  const { initialized } = props;

  let alarmSeverity = 0;

  const xGapPv = props.pvsData[0];
  const yGapPv = props.pvsData[1];
  const xOffsetPv = props.pvsData[2];
  const yOffsetPv = props.pvsData[3];
  let unitsGapX = "";
  let unitsGapY = "";
  let xGapReadback;
  let yGapReadback;

  let unitsOffsetX = "";
  let unitsOffsetY = "";
  let xOffsetReadback;
  let yOffsetReadback;

  if (initialized) {
    let precGapX = props.usePvPrecision ? xGapPv.prec : props.prec;
    let precGapY = props.usePvPrecision ? yGapPv.prec : props.prec;
    let precOffsetX = props.usePvPrecision ? xOffsetPv.prec : props.prec;
    let precOffsetY = props.usePvPrecision ? yOffsetPv.prec : props.prec;
    xGapReadback = checkPrecision(xGapPv.value, precGapX);
    yGapReadback = checkPrecision(yGapPv.value, precGapY);
    xOffsetReadback = checkPrecision(xOffsetPv.value, precOffsetX);
    yOffsetReadback = checkPrecision(yOffsetPv.value, precOffsetY);
  } else {
    xGapReadback = 0;
    yGapReadback = 0;
    xOffsetReadback = 0;
    yOffsetReadback = 0;
  }

  let color = "";
  if (initialized) {
    unitsGapX =
      props.usePvUnits === true
        ? xGapPv.units
        : props.unitsGapX
          ? props.unitsGapX
          : "";
    unitsGapY =
      props.usePvUnits === true
        ? yGapPv.units
        : props.unitsGapY
          ? props.unitsGapY
          : "";
    unitsOffsetX =
      props.usePvUnits === true
        ? xOffsetPv.units
        : props.unitsOffsetX
          ? props.unitsOffsetX
          : "";
    unitsOffsetY =
      props.usePvUnits === true
        ? yOffsetPv.units
        : props.unitsOffsetY
          ? props.unitsOffsetY
          : "";
    if (props.alarmSensitive !== "undefined") {
      if (props.alarmSensitive == true) {
        alarmSeverity =
          xGapPv.severity == 2 ||
          yGapPv.severity == 2 ||
          xOffsetPv.severity == 2 ||
          yOffsetPv.severity == 2
            ? 2
            : xGapPv.severity == 1 ||
                yGapPv.severity == 1 ||
                xOffsetPv.severity == 1 ||
                yOffsetPv.severity == 1
              ? 1
              : 0;
        if (alarmSeverity == 2) {
          color = theme.palette.alarm.major.main;
        } else if (alarmSeverity == 1) {
          color = theme.palette.alarm.minor.main;
        } else {
          color = theme.palette.beamLineComponent.main;
        }
      }
    }
  } else {
    color = "grey";
  }

  const componentId = uuidv4();

  return (
    <svg x={props.x} y={props.y} width={svgWidth} height={svgHeight}>
      <g
        transform={"translate(" + svgCenterX + "," + svgCenterY + ")"}
        onClick={handleOnClick(props.system)}
      >
        <linearGradient
          id={componentId + "elipse-gradient"}
          gradientTransform="rotate(0)"
        >
          <stop offset="0%" stopOpacity="30" stopColor={"silver"} />
          <stop offset="75%" stopColor={color} />
        </linearGradient>
        <defs>
          <filter
            id={componentId + "elipseShadow"}
            x="0"
            y="0"
            width="600%"
            height="500%"
          >
            <feOffset result="offOut" in="SourceGraphic" dx="2.5" dy="2.5" />
            <feColorMatrix
              result="matrixOut"
              in="offOut"
              type="matrix"
              values="0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0"
            />
            <feGaussianBlur
              result="blurOut"
              in="matrixOut"
              stdDeviation="2.5"
            />
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
          </filter>
        </defs>
        <g
          filter={
            props.componentShadow === true
              ? "url(#" + componentId + "elipseShadow)"
              : ""
          }
        >
          <g>
            <g
              transform="translate(-10,-1092.5)"
              fill={
                props.componentGradient === true
                  ? "url(#" + componentId + "elipse-gradient)"
                  : color
              }
              style={{
                strokeWidth: "0.3",
                stroke: "black",
              }}
            >
              <g>
                <path d="m 15.05893,1085.0254 -1.776617,20.1381 0.759263,0.6179 0.51536,-5.8416 5.003912,4.0722 0.745906,-8.4549 -5.003912,-4.0722 0.515351,-5.8416 z" />
                <path d="m 7.9498012,1076.2957 6.6301368,5.3958 0.203442,-2.3062 -1.923241,-1.565 1.340787,-15.198 -2.783656,-2.2654 -1.340787,15.1979 -1.9232398,-1.5651 z" />
                <path d="m 6.2770152,1077.8803 -0.513672,5.8398 -5.00390605,-4.0723 -0.728516,8.2461 6.16796905,-0.018 0.837891,-9.3789 z" />
                <path d="m 5.7589222,1101.1294 6.6301368,5.3958 -0.203451,2.3061 -1.92324,-1.5652 -1.3407868,15.1979 -2.783656,-2.2654 1.340787,-15.1979 -1.92324,-1.5651 z" />
              </g>
            </g>
          </g>
        </g>

        {props.showValue && (
          <g>
            <TextLabel
              x={
                typeof props.valueOffsetX !== "undefined"
                  ? props.valueOffsetX
                  : 0
              }
              y={
                typeof props.valueOffsetY !== "undefined"
                  ? props.valueOffsetY + 57.5
                  : 57.5
              }
              textAnchor="middle"
              filter={
                props.textShadow === true
                  ? "url(#" + componentId + "elipseShadow)"
                  : ""
              }
            >
              {"XGap: " + xGapReadback + " " + unitsGapX}
            </TextLabel>
            <TextLabel
              x={
                typeof props.valueOffsetX !== "undefined"
                  ? props.valueOffsetX
                  : 0
              }
              y={
                typeof props.valueOffsetY !== "undefined"
                  ? props.valueOffsetY + 72.5
                  : 72.5
              }
              textAnchor="middle"
              filter={
                props.textShadow === true
                  ? "url(#" + componentId + "elipseShadow)"
                  : ""
              }
            >
              {"YGap: " + yGapReadback + " " + unitsGapY}
            </TextLabel>
            <TextLabel
              x={
                typeof props.valueOffsetX !== "undefined"
                  ? props.valueOffsetX
                  : 0
              }
              y={
                typeof props.valueOffsetY !== "undefined"
                  ? props.valueOffsetY + 87.5
                  : 87.5
              }
              textAnchor="middle"
              filter={
                props.textShadow === true
                  ? "url(#" + componentId + "elipseShadow)"
                  : ""
              }
            >
              {"XOffset: " + xOffsetReadback + " " + unitsOffsetX}
            </TextLabel>
            <TextLabel
              x={
                typeof props.valueOffsetX !== "undefined"
                  ? props.valueOffsetX
                  : 0
              }
              y={
                typeof props.valueOffsetY !== "undefined"
                  ? props.valueOffsetY + 102.5
                  : 102.5
              }
              textAnchor="middle"
              filter={
                props.textShadow === true
                  ? "url(#" + componentId + "elipseShadow)"
                  : ""
              }
            >
              {"YOffset: " + yOffsetReadback + " " + unitsOffsetY}
            </TextLabel>
          </g>
        )}

        {props.showLabel && (
          <TextLabel
            x={
              typeof props.labelOffsetX !== "undefined" ? props.labelOffsetX : 0
            }
            y={
              typeof props.labelOffsetY !== "undefined"
                ? props.labelOffsetY - 35
                : -35
            }
            textAnchor="middle"
            filter={
              props.textShadow === true
                ? "url(#" + componentId + "elipseShadow)"
                : ""
            }
          >
            {props.label}
          </TextLabel>
        )}
      </g>
    </svg>
  );
};

/**
 * SlitXY Beam line component
 *
 *  The label, min, max, units, pv and tooltip all accept macros that can be replaced by the values defined in the macros prop.
 */
const SlitXY = ({
  debug = false,
  showLabel = true,
  showValue = true,
  alarmSensitive = false,
  showTooltip = false,
  labelOffsetY = 0,
  labelOffsetX = 0,
  valueOffsetY = 0,
  valueOffsetX = 0,
  componentShadow = true,
  textShadow = false,
  componentGradient = true,
  ...others
}: SlitXYProps) => {
  return (
    <Widget
      svgWidget={true}
      {...others}
      component={SlitXYComponent}
      pvs={[others.xGapPv, others.yGapPv, others.xOffsetPv, others.yOffsetPv]}
      label={others.label}
      debug={debug}
      alarmSensitive={alarmSensitive}
      showTooltip={showTooltip}
      componentProps={{
        showLabel,
        showValue,
        labelOffsetY,
        labelOffsetX,
        valueOffsetY,
        valueOffsetX,
        componentShadow,
        textShadow,
        componentGradient,
      }}
    />
  );
};

interface SlitXYProps {
  /**
   * Directive to use the  alarm severity status to alter the fields background color.
   */
  alarmSensitive?: boolean;
  /**
   * Custom PV to define the alarm severity to be used, alarmSensitive must be set to `true` and useMetadata to `false`, eg. '$(device):test$(id)'.
   */
  alarmPv?: string;
  /**
   * If defined, then the DataConnection and
   * the widget debugging information will be displayed.
   */
  debug?: boolean;

  /**
   * Local variable initialization value.
   * When using loc:// type PVs.
   */
  initialLocalVariableValue?: string;
  /**
   * Custom label to be used, if  usePvLabel is not defined.
   */
  label?: string;
  /**
   * Custom PV to define the units to be used, usePvLabel must be set to `true` and useMetadata to `false`, eg. '$(device):test$(id)'.
   */
  labelPv?: string;
  /**
   * Values of macros that will be substituted in the pv name.
   * eg. {{'$(device)':'testIOC','$(id)':'2'}}
   */
  macros?: object;
  /**
   * Custom maximum to be used, if usePvMinMax is not defined.
   */
  max?: number;
  /**
   * Custom PV to define the maximum to be used, usePvMinMax must be set to `true` and useMetadata to `false`, eg. '$(device):test$(id)'.
   */
  maxGapPv?: string;
  /**
   * Custom minimum value to be used, if usePvMinMax is not defined.
   */
  min?: number;
  /**
   * Custom PV to define the minimum to be used, usePvMinMax must be set to `true` and useMetadata to `false`, eg. '$(device):test$(id)'.
   */
  minPv?: string;

  /**
   * Custom precision to round the value.
   */
  prec?: number;
  /**
   * Custom PV to define the precision to be used, usePvPrecision must be set to `true` and useMetadata to `false`, eg. '$(device):test$(id)'.
   */
  precPv?: string;

  /**
   * Custom units to be used, if usePvUnits is not defined.
   */
  units?: string;
  /**
   * Custom PV to define the units to be used, usePvUnits must be set to `true` and useMetadata to `false`, eg. '$(device):test$(id)'.
   */
  unitsPv?: string;
  /**
   * Directive to fill the component's label with
   * the value contained in the  pv metadata's DESC field or the labelPv value.
   * If not defined it uses the custom label as defined by the label prop.
   */
  usePvLabel?: boolean;
  /**
   * When using EPICS, the RAS pv's metadata is conventionally derived from the pyEpics PV in the pvserver.
   * The pyEpics metadata is unfortunately static and the values used will be the initial values that pvserver receives when it connects the first time.
   * This is sufficient in most cases except when the user wants to dynamically update the metaData.
   * In this case a direct connection can be made to all the pv fields by setting useMetadata to false.
   * If any of the metadata pvs are defined i.e unitsPv then the PV makes a new data  connection to this alternate pv and will
   * use the value provided by this pv as the units.
   * The same is the case for the precPV, labelPv, alarmPv, unitsPv and minPv.
   * By setting useMetadata to false also enables connection to other variables as defined by different protocols.
   */
  useMetadata?: boolean;
  /**
   * Directive to use the pv metadata's HOPR and LOPR fields or the minPv and maxGapPv values
   * to limit the maximum and minimum values
   * that can be contained in the value.
   * If not defined it uses the custom min and max as defined by the min and max prop.
   */
  usePvMinMax?: boolean;
  /**
   * Directive to round the value using the precision field of the PV metadata or precPv.
   * If not defined it uses the custom precision as defined by the prec prop.
   */
  usePvPrecision?: boolean;
  /**
   * Directive to use the units contained in the   pv metdata's EGU field or unitsPv.
   *  If not defined it uses the custom units as defined by the units prop.
   */
  usePvUnits?: boolean;
  /**
   * Directive to use PV's string values.
   */
  useStringValue?: boolean;

  /**
   * If defined, then the string representation of the number can be formatted
   * using the mathjs format function
   * eg. numberFormat={{notation: 'engineering',precision: 3}}.
   * See https://mathjs.org/docs/reference/functions/format.html for more examples
   */
  numberFormat?: object;

  /** Name of the pv process variable, eg. '$(device):test$(id)'*/
  pv?: string;

  /**
   * Tooltip Text
   */
  tooltip?: string;
  /**
   * Directive to show the tooltip
   */
  showTooltip?: boolean;
  /**
   *  Any of the MUI Tooltip props can applied by defining them as an object
   */
  tooltipProps?: object;
  /**
   *  A System description object the passed to the callback function when the item is clicked on
   */
  system?: object;
  /**
   *  A callback function when the item is clicked on, returns the system object
   */
  handleOnClick?: Function;
  /**
   * Y Offset for the label
   */
  labelOffsetY?: number;
  /**
   * X Offset for the label
   */
  labelOffsetX?: number;
  /**
   * Y Offset for the pv value
   */
  valueOffsetY?: number;
  /**
   * X Offset for the pv value
   */
  valueOffsetX?: number;
  /**
   * enable a shadow behind the text
   */
  textShadow?: boolean;
  /**
   * use a gradient fil on the component
   */
  componentGradient?: boolean;
  /**
   * enable a shadow behind the component
   */
  componentShadow?: boolean;
  /**
   * Direct to show the label
   */
  showLabel?: boolean;
  /**
   * Direct to show the value
   */
  showValue?: boolean;
}

export default SlitXY;
