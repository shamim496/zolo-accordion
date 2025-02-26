/**
 * WordPress dependencies
 */
import { InspectorControls } from "@wordpress/block-editor";
import { TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

/**
 * Internal depencencies
 */
import {
  ResRangeControl,
  ColorControl,
  BorderControl,
  ResDimensionsControl,
  NormalBGControl,
  HeaderTabs,
  TabPanelControl,
  BoxShadowControl,
  AdvancedOptions,
  TypographyDropdown,
  ZoloPanelBody,
} from "@zoloblocks/library";

import objAttributes from "./attributes";
import {
  AC_CONTAINER_BORDER,
  AC_CONTAINER_BORDER_RADIUS,
  AC_CONTAINER_BG,
  AC_CONTAINER_BOX_SHADOW,
  AC_CONTAINER_PADDING,
  AC_CONTAINER_MARGIN,
  ICONTAINER_BG,
  ICONTAINER_HBG,
  ICONTAINER_PADDING,
  ICONTAINER_BORDER,
  ICONTAINER_BRADIUS,
  ICON_SIZE,
  AC_HEADER_BORDER,
  AC_HEADER_BORDER_RADIUS,
  AC_HEADER_BG,
  AC_HEADER_HBG,
  AC_HEADER_PADDING,
  AC_HEADER_MARGIN,
  AC_BODY_BORDER,
  AC_BODY_BORDER_RADIUS,
  AC_BODY_BG,
  AC_BODY_PADDING,
  AC_BODY_MARGIN,
  ANIMATED_BORDER_SIZE,
} from "./constants";

import ExtraImage from "../../../library/src/images/singleblocks.png";
import { TITLE_TYPO } from "./constants/typoPrefixConstant";
import { CardDivider } from "@wordpress/components";

function Inspector(props) {
  const { attributes, setAttributes } = props;
  const {
    preset,
    resMode,
    title,
    iconColor,
    iconHoverColor,
    titleColor,
    titleHoverColor,
    animatedBorderColor,
    animatedBorderActiveColor,
  } = attributes;

  const requiredProps = {
    resMode,
    setAttributes,
    attributes,
    objAttributes,
  };

  return (
    <InspectorControls key="controls">
      <HeaderTabs
        block="zolo/accordion-child"
        attributes={attributes}
        setAttributes={setAttributes}
        generalTab={
          <>
            <ZoloPanelBody
              title={__("General", "zoloblocks")}
              firstOpen={true}
              panelProps={props}
            >
              <TextControl
                label={__("Title", "zoloblocks")}
                onChange={(text) =>
                  setAttributes({
                    title: text,
                  })
                }
                value={title}
              />
            </ZoloPanelBody>
          </>
        }
        styleTab={
          <>
            <ZoloPanelBody
              title={__("Item", "zoloblocks")}
              firstOpen={true}
              stylePanel={true}
              panelProps={props}
            >
              <NormalBGControl
                requiredProps={requiredProps}
                controlName={AC_CONTAINER_BG}
                noMainBGImg={true}
              />
              <ResDimensionsControl
                label={__("Padding", "zoloblocks")}
                controlName={AC_CONTAINER_PADDING}
                requiredProps={requiredProps}
                forBorderRadius={false}
              />
              <ResDimensionsControl
                label={__("Margin", "zoloblocks")}
                controlName={AC_CONTAINER_MARGIN}
                requiredProps={requiredProps}
                forBorderRadius={false}
              />
              <CardDivider />
              <BorderControl
                label={__("Border", "zoloblocks")}
                controlName={AC_CONTAINER_BORDER}
                requiredProps={requiredProps}
              />
              <BoxShadowControl
                controlName={AC_CONTAINER_BOX_SHADOW}
                requiredProps={requiredProps}
              />
              <ResDimensionsControl
                label={__("Border Radius", "zoloblocks")}
                controlName={AC_CONTAINER_BORDER_RADIUS}
                requiredProps={requiredProps}
                forBorderRadius={true}
              />
            </ZoloPanelBody>
            <ZoloPanelBody
              title={__("Title", "zoloblocks")}
              stylePanel={true}
              panelProps={props}
            >
              <TabPanelControl
                normalComponents={
                  <>
                    <ColorControl
                      label={__("Color", "zoloblocks")}
                      color={titleColor}
                      onChange={(value) =>
                        setAttributes({
                          titleColor: value,
                        })
                      }
                    />
                    <TypographyDropdown
                      label={__("Typography", "zoloblocks")}
                      typoPrefixConstant={TITLE_TYPO}
                      requiredProps={requiredProps}
                    />
                    <CardDivider />
                    <NormalBGControl
                      requiredProps={requiredProps}
                      controlName={AC_HEADER_BG}
                      noMainBGImg={true}
                    />
                    <ResDimensionsControl
                      label={__("Padding", "zoloblocks")}
                      controlName={AC_HEADER_PADDING}
                      requiredProps={requiredProps}
                      forBorderRadius={false}
                    />
                    <ResDimensionsControl
                      label={__("Margin", "zoloblocks")}
                      controlName={AC_HEADER_MARGIN}
                      requiredProps={requiredProps}
                      forBorderRadius={false}
                    />
                    <CardDivider />
                    <BorderControl
                      label={__("Border", "zoloblocks")}
                      controlName={AC_HEADER_BORDER}
                      requiredProps={requiredProps}
                    />
                    <ResDimensionsControl
                      label={__("Border Radius", "zoloblocks")}
                      controlName={AC_HEADER_BORDER_RADIUS}
                      requiredProps={requiredProps}
                      forBorderRadius={true}
                    />
                    {preset === "style-3" && (
                      <>
                        <div className="zolo-custom-heading">
                          {__("Animated Border", "zoloblocks")}
                        </div>
                        <ColorControl
                          label={__("Color", "zoloblocks")}
                          color={animatedBorderColor}
                          onChange={(value) =>
                            setAttributes({
                              animatedBorderColor: value,
                            })
                          }
                        />
                        <ColorControl
                          label={__("Active Color", "zoloblocks")}
                          color={animatedBorderActiveColor}
                          onChange={(value) =>
                            setAttributes({
                              animatedBorderActiveColor: value,
                            })
                          }
                        />
                        <ResRangeControl
                          label={__("Thickness", "zoloblocks")}
                          controlName={ANIMATED_BORDER_SIZE}
                          requiredProps={requiredProps}
                        />
                      </>
                    )}
                  </>
                }
                hoverComponents={
                  <>
                    <ColorControl
                      label={__("Color", "zoloblocks")}
                      color={titleHoverColor}
                      onChange={(value) =>
                        setAttributes({
                          titleHoverColor: value,
                        })
                      }
                    />
                    <NormalBGControl
                      requiredProps={requiredProps}
                      controlName={AC_HEADER_HBG}
                      noMainBGImg={true}
                    />
                  </>
                }
              />
            </ZoloPanelBody>
            <ZoloPanelBody
              title={__("Icon", "zoloblocks")}
              stylePanel={true}
              panelProps={props}
            >
              <TabPanelControl
                normalComponents={
                  <>
                    <ColorControl
                      label={__("Color", "zoloblocks")}
                      color={iconColor}
                      onChange={(value) =>
                        setAttributes({
                          iconColor: value,
                        })
                      }
                    />
                    <ResRangeControl
                      label={__("Size", "zoloblocks")}
                      controlName={ICON_SIZE}
                      requiredProps={requiredProps}
                    />

                    <CardDivider />
                    <NormalBGControl
                      requiredProps={requiredProps}
                      controlName={ICONTAINER_BG}
                      noMainBGImg={true}
                    />
                    <ResDimensionsControl
                      label={__("Padding", "zoloblocks")}
                      controlName={ICONTAINER_PADDING}
                      requiredProps={requiredProps}
                      forBorderRadius={false}
                    />
                    <CardDivider />
                    <BorderControl
                      label={__("Border", "zoloblocks")}
                      controlName={ICONTAINER_BORDER}
                      requiredProps={requiredProps}
                    />
                    <ResDimensionsControl
                      label={__("Border Radius", "zoloblocks")}
                      controlName={ICONTAINER_BRADIUS}
                      requiredProps={requiredProps}
                      forBorderRadius={true}
                    />
                  </>
                }
                hoverComponents={
                  <>
                    <ColorControl
                      label={__("Color", "zoloblocks")}
                      color={iconHoverColor}
                      onChange={(value) =>
                        setAttributes({
                          iconHoverColor: value,
                        })
                      }
                    />
                    <NormalBGControl
                      requiredProps={requiredProps}
                      controlName={ICONTAINER_HBG}
                      noMainBGImg={true}
                    />
                  </>
                }
              />
            </ZoloPanelBody>
            <ZoloPanelBody
              title={__("Content", "zoloblocks")}
              stylePanel={true}
              panelProps={props}
            >
              <NormalBGControl
                requiredProps={requiredProps}
                controlName={AC_BODY_BG}
                noMainBGImg={true}
              />
              <ResDimensionsControl
                label={__("Padding", "zoloblocks")}
                controlName={AC_BODY_PADDING}
                requiredProps={requiredProps}
                forBorderRadius={false}
              />
              <ResDimensionsControl
                label={__("Margin", "zoloblocks")}
                controlName={AC_BODY_MARGIN}
                requiredProps={requiredProps}
                forBorderRadius={false}
              />
              <CardDivider />
              <BorderControl
                label={__("Border", "zoloblocks")}
                controlName={AC_BODY_BORDER}
                requiredProps={requiredProps}
              />
              <ResDimensionsControl
                label={__("Border Radius", "zoloblocks")}
                controlName={AC_BODY_BORDER_RADIUS}
                requiredProps={requiredProps}
                forBorderRadius={true}
              />
            </ZoloPanelBody>
          </>
        }
        advancedTab={
          <>
            <div className="zolo-side-premium-notice-wrap">
              <img
                src={ExtraImage}
                alt="extra settings"
                width="300"
                height="700"
              />
              <div className="zolo-side-premium-notice">
                <svg
                  className="zolo-premium-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  viewBox="0 0 100 100"
                >
                  <path
                    d="M50.17,19.22c1.91-3.48,5.22-4.43,5.22-4.43l-5.21-5.29-5.21,5.29s3.31.95,5.21,4.43Z"
                    style={{ fill: "#d59f30" }}
                  />
                  <path
                    d="M77.56,31.04c1.42-.03,3.35-1.18,3.35-3.38s-1.98-3.27-3.46-3.43-2.49,1.5-2.49,1.5c0,0,1.93-.29,2.06,1.63.13,1.93-2.63,1.85-2.46,2.33.16.48,1.58,1.37,3,1.34Z"
                    style={{ fill: "#d59f30" }}
                  />
                  <path
                    d="M72.73,18.05c.91,0,1.65-.74,1.65-1.65s-.74-1.65-1.65-1.65-1.65.74-1.65,1.65.74,1.65,1.65,1.65Z"
                    style={{ fill: "#d59f30" }}
                  />
                  <path
                    d="M92.97,19.53c-1.12,0-2.03.91-2.03,2.03s.91,2.03,2.03,2.03,2.03-.91,2.03-2.03-.91-2.03-2.03-2.03Z"
                    style={{ fill: "#d59f30" }}
                  />
                  <circle
                    cx="50.03"
                    cy="6.82"
                    r="2.22"
                    style={{ fill: "#d59f30" }}
                  />
                  <path
                    d="M22.79,31.04c1.42.03,2.84-.86,3-1.34.16-.48-2.6-.4-2.46-2.33s2.06-1.63,2.06-1.63c0,0-1.02-1.66-2.49-1.5s-3.46,1.23-3.46,3.43,1.93,3.35,3.35,3.38Z"
                    style={{ fill: "#d59f30" }}
                  />
                  <path
                    d="M27.61,18.05c.91,0,1.65-.74,1.65-1.65s-.74-1.65-1.65-1.65-1.65.74-1.65,1.65.74,1.65,1.65,1.65Z"
                    style={{ fill: "#d59f30" }}
                  />
                  <path
                    d="M7.04,19.14c-1.12,0-2.04.91-2.04,2.04s.91,2.04,2.04,2.04,2.04-.91,2.04-2.04-.91-2.04-2.04-2.04Z"
                    style={{ fill: "#d59f30" }}
                  />
                  <path
                    d="M81.35,24.63s1,1.04,1.13,2.65c.12,1.61-1.16,6.19-5.71,5.75-4.54-.44-6.35-4.98-6.27-7.15.08-2.17,1-3.7,1.77-3.94,1.45-.56,1.69-.68,1.65-1.73-.2-1.28-2.17-.56-2.81-.56-1.37-1.77-2.21-1.25-2.65-.32-.44.92,1.05,2.13,1.49,2.77-.48,2.85-6.27,7.07-10.37,7.19-4.1.12-6.51-2.93-6.97-5.55-.46-2.61,1.23-3.78,2.47-4.02,1.25-.24,2.61.52,2.93,1.45.32.92-.44,1.41-1.13,2.29,3.3.56,3.94-.96,4.26-2.09.32-1.12-.76-3.98-4.34-4.5-2.88-.42-5.65,2.61-6.62,3.82-.98-1.21-3.75-4.24-6.62-3.82-3.58.52-4.66,3.38-4.34,4.5.32,1.13.96,2.65,4.26,2.09-.68-.88-1.45-1.36-1.13-2.29.32-.92,1.69-1.69,2.93-1.45,1.25.24,2.93,1.41,2.47,4.02-.46,2.61-2.87,5.67-6.97,5.55-4.1-.12-9.89-4.34-10.37-7.19.44-.64,1.93-1.85,1.49-2.77-.44-.92-1.29-1.45-2.65.32-.64,0-2.61-.72-2.81.56-.04,1.05.2,1.17,1.65,1.73.76.24,1.69,1.77,1.77,3.94.08,2.17-1.73,6.71-6.27,7.15-4.54.44-5.83-4.14-5.71-5.75.12-1.61,1.13-2.65,1.13-2.65,0,0-5.26-2.66-9.92.32,1.12,1.32,5.55,2.25,10.31,14.02,8.08-5.09,19.29-8.24,31.67-8.24,11.68,0,22.3,2.8,30.25,7.39,4.63-10.96,8.87-11.87,9.96-13.16-4.66-2.98-9.93-.32-9.93-.32Z"
                    style={{ fill: "#d59f30" }}
                  />
                  <path
                    d="M71.72,54.99l-9.06,9.06c1.34,1.5,2.93,3.91,2.93,6.06,0,2.59-1.03,4.74-2.69,6.45-1.61,1.66-3.71,2.48-6.18,2.48h-19.67l34.55-33.99s.01,0,.02,0l5.62-5.55c-7.03-3.77-16.18-6.04-26.18-6.04s-18.92,2.22-25.92,5.91v23.64s21.69-22.03,21.69-22.03c1.39-.1,2.8-.16,4.24-.16,2.06,0,4.07.12,6.02.33l-31.95,31.81v21.52l12.76-.09h18.8c6.62,0,12.11-2.04,16.69-6.13,4.47-4.09,6.73-10.76,6.73-17.1,0-6.71-3.38-12.35-8.39-16.16ZM28.95,42.39c-.66,0-1.2-.54-1.2-1.2s.54-1.2,1.2-1.2,1.2.54,1.2,1.2-.54,1.2-1.2,1.2ZM35.1,40.45c-.66,0-1.2-.54-1.2-1.2s.54-1.2,1.2-1.2,1.2.54,1.2,1.2-.54,1.2-1.2,1.2ZM41.96,38.97c-.66,0-1.2-.54-1.2-1.2s.54-1.2,1.2-1.2,1.2.54,1.2,1.2-.54,1.2-1.2,1.2ZM49.59,38.26c-.66,0-1.2-.54-1.2-1.2s.54-1.2,1.2-1.2,1.2.54,1.2,1.2-.54,1.2-1.2,1.2ZM70.23,39.11c.66,0,1.2.54,1.2,1.2s-.54,1.2-1.2,1.2-1.2-.54-1.2-1.2.54-1.2,1.2-1.2ZM64.09,37.33c.66,0,1.2.54,1.2,1.2s-.54,1.2-1.2,1.2-1.2-.54-1.2-1.2.54-1.2,1.2-1.2ZM56.02,37.37c0-.66.54-1.2,1.2-1.2s1.2.54,1.2,1.2-.54,1.2-1.2,1.2-1.2-.54-1.2-1.2Z"
                    style={{ fill: "#d59f30" }}
                  />
                  <rect width={100} height={100} style={{ fill: "none" }} />
                </svg>

                <p>Get Zoloblocks for advanced control and extra features.</p>
                <a
                  href="https://wordpress.org/plugins/zoloblocks/"
                  target="_blank"
                >
                  Go Zoloblocks
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </>
        }
      />
    </InspectorControls>
  );
}
export default Inspector;
