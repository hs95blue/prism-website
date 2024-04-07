import React from "react"
import PropTypes from 'prop-types'
import { FormGroup } from "reactstrap"

import { useSelector, useDispatch } from "react-redux"
import { showRightSidebarAction, 
  changeLayout, 
  changeLayoutWidth,
  changeTopbarTheme,
  changeSidebarType,
  changeSidebarTheme,
  changePreloader

} from '../../../store/layout/layoutSlice'

//SimpleBar
import SimpleBar from "simplebar-react"

import { Link } from "react-router-dom"


//Import images
import layout1 from "../../../assets/images/layouts/layout-1.jpg"
import layout2 from "../../../assets/images/layouts/layout-2.jpg"
import layout3 from "../../../assets/images/layouts/layout-3.jpg"

const Settings = props => {
  const layout = useSelector(state=>state.layout)
  const dispatch = useDispatch();
  return (
      <div className="right-bar">
        <SimpleBar style={{ height: "900px" }}>
          <div data-simplebar className="h-100">
            <div className="rightbar-title d-flex align-items-center px-3 py-4">
              <h5 className="m-0 me-2">Settings</h5>
              <Link
                to="#"
                onClick={e => {
                  e.preventDefault()
                  dispatch(showRightSidebarAction({isopen:false}))
                }}
                className="right-bar-toggle ms-auto"
              >
                <i className="mdi mdi-close noti-icon" />
              </Link>
            </div>

            <hr className="my-0" />

            <div className="p-4">
              {/* <div className="radio-toolbar">
                <span className="mb-2 d-block">Layouts</span>
                <input
                  type="radio"
                  id="radioVertical"
                  name="radioFruit"
                  value="detached"
                  checked={layout.layoutType === "detached"}
                  onChange={e => {
                    if (e.target.checked) {
                      dispatch(changeLayout(e.target.value))
                    }
                  }}
                />
                <label htmlFor="radioVertical">Vertical</label>
                {" "}
                <input
                  type="radio"
                  id="radioHorizontal"
                  name="radioFruit"
                  value="horizontal"
                  checked={layout.layoutType === "horizontal"}
                  onChange={e => {
                    if (e.target.checked) {
                      dispatch(changeLayout(e.target.value))
                    }
                  }}
                />
                <label htmlFor="radioHorizontal">Horizontal</label>
              </div> 

              <hr className="mt-1" />
*/}
              <div className="radio-toolbar">
                <span className="mb-2 d-block" id="radio-title">
                  Layout Width
                </span>
                <input
                  type="radio"
                  id="radioFluid"
                  name="radioWidth"
                  value="fluid"
                  checked={layout.layoutWidth === "fluid"}
                  onChange={e => {
                    if (e.target.checked) {
                      dispatch(changeLayoutWidth(e.target.value))
                    }
                  }}
                />
                <label htmlFor="radioFluid">Fluid</label>
                {"   "}
                <input
                  type="radio"
                  id="radioBoxed"
                  name="radioWidth"
                  value="boxed"
                  checked={layout.layoutWidth === "boxed"}
                  onChange={e => {
                    if (e.target.checked) {
                      dispatch(changeLayoutWidth(e.target.value))
                    }
                  }}
                />
                <label htmlFor="radioBoxed">Boxed</label>

              </div>
              <hr className="mt-1" />

              <div className="radio-toolbar">
                <span className="mb-2 d-block" id="radio-title">
                  Topbar Theme
                </span>
                {props.layoutType === "horizontal" ? (
                  <>
                    <input
                      type="radio"
                      id="radioThemeLight"
                      name="radioTheme"
                      value="light"
                      checked={layout.topbarTheme === "light"}
                      onChange={e => {
                        if (e.target.checked) {
                          dispatch(changeTopbarTheme(e.target.value))
                        }
                      }}
                    />
                    <label htmlFor="radioThemeLight">Light</label>
                  </>
                ) : null}
                {"   "}
                <input
                  type="radio"
                  id="radioThemeDark"
                  name="radioTheme"
                  value="dark"
                  checked={layout.topbarTheme === "dark"}
                  onChange={e => {
                    if (e.target.checked) {
                      dispatch(changeTopbarTheme(e.target.value))
                    }
                  }}
                />

                <label htmlFor="radioThemeDark">Dark</label>
                {"   "}
                <>
                  {" "}
                  <input
                    type="radio"
                    id="radioThemeColored"
                    name="radioTheme"
                    value="colored"
                    checked={layout.topbarTheme === "colored"}
                    onChange={e => {
                      if (e.target.checked) {
                        dispatch(changeTopbarTheme(e.target.value))
                      }
                    }}
                  />
                  <label htmlFor="radioThemeColored">Colored</label>{" "}
                </>

              </div>

              {props.layoutType === "detached" ? (
                <React.Fragment>
                  <hr className="mt-1" />
                  <div className="radio-toolbar">
                    <span className="mb-2 d-block" id="radio-title">
                      Left Sidebar Type{" "}
                    </span>
                    <input
                      type="radio"
                      id="sidebarDefault"
                      name="sidebarType"
                      value="default"
                      checked={layout.leftSideBarType === "default"}
                      onChange={e => {
                        if (e.target.checked) {
                          dispatch(changeSidebarType(e.target.value))
                        }
                      }}
                    />
                    <label htmlFor="sidebarDefault">Default</label>
                    {"   "}
                    <input
                      type="radio"
                      id="sidebarCompact"
                      name="sidebarType"
                      value="compact"
                      checked={layout.leftSideBarType === "compact"}
                      onChange={e => {
                        if (e.target.checked) {
                          dispatch(changeSidebarType(e.target.value))
                        }
                      }}
                    />
                    <label htmlFor="sidebarCompact">Compact</label>
                    {"   "}
                    <input
                      type="radio"
                      id="sidebarIcon"
                      name="sidebarType"
                      value="icon"
                      checked={layout.leftSideBarType === "icon"}
                      onChange={e => {
                        if (e.target.checked) {
                          dispatch(changeSidebarType(e.target.value))
                        }
                      }}
                    />
                    <label htmlFor="sidebarIcon">Icon</label>
                  </div>

                  <hr className="mt-1" />

                  <div className="radio-toolbar">
                    <span className="mb-2 d-block" id="radio-title">
                      Left Sidebar Color
                    </span>
                    <input
                      type="radio"
                      id="leftsidebarThemelight"
                      name="leftsidebarTheme"
                      value="light"
                      checked={layout.leftSideBarTheme === "light"}
                      onChange={e => {
                        if (e.target.checked) {
                          dispatch(changeSidebarTheme(e.target.value))
                        }
                      }}
                    />

                    <label htmlFor="leftsidebarThemelight">Light</label>
                    {"   "}
                    <input
                      type="radio"
                      id="leftsidebarThemedark"
                      name="leftsidebarTheme"
                      value="dark"
                      checked={layout.leftSideBarTheme === "dark"}
                      onChange={e => {
                        if (e.target.checked) {
                          dispatch(changeSidebarTheme(e.target.value))
                        }
                      }}
                    />

                    <label htmlFor="leftsidebarThemedark">Dark</label>
                    {"   "}
                    <input
                      type="radio"
                      id="leftsidebarThemecolored"
                      name="leftsidebarTheme"
                      value="colored"
                      checked={layout.leftSideBarTheme === "colored"}
                      onChange={e => {
                        if (e.target.checked) {
                          dispatch(changeSidebarTheme(e.target.value))
                        }
                      }}
                    />

                    <label htmlFor="leftsidebarThemecolored">Colored</label>
                  </div>
                  <hr className="mt-1" />
                </React.Fragment>
              ) : null}

              <hr className="mt-1" />

              <FormGroup>
                <span className="mb-2 d-block" id="radio-title">
                  Preloader
                </span>

                <div className="form-check form-switch">
                  <input
                    type="checkbox"
                    className="form-check-input checkbox"
                    id="checkbox_1"
                    checked={layout.isPreloader}
                    onChange={() => {
                      dispatch(changePreloader(!layout.isPreloader))
                    }}
                  />

                  <label className="form-check-label" htmlFor="checkbox_1">
                    Preloader
                  </label>
                </div>
              </FormGroup>

              {/* <h6 className="text-center">Choose Layouts</h6>

              <div className="mb-2">
                <Link
                  to="//PRISM-v-light.react.themesbrand.com"
                  target="_blank"
                >
                  <img
                    src={layout1}
                    className="img-fluid img-thumbnail"
                    alt=""
                  />
                </Link>
              </div>

              <div className="mb-2">
                <Link to="//PRISM-v-dark.react.themesbrand.com" target="_blank">
                  <img
                    src={layout2}
                    className="img-fluid img-thumbnail"
                    alt=""
                  />
                </Link>
              </div>

              <div className="mb-2">
                <Link to="//PRISM-v-rtl.react.themesbrand.com" target="_blank">
                  <img
                    src={layout3}
                    className="img-fluid img-thumbnail"
                    alt=""
                  />
                </Link>
              </div>

              <Link
                to="#"
                className="btn btn-primary btn-block mt-3"
                target="_blank"
              >
                <i className="mdi mdi-cart mr-1" /> Purchase Now
              </Link> */}
            </div>
          </div>
        </SimpleBar>
      </div>
  )
}



export default Settings
