import PropTypes from 'prop-types'
import React, { Component } from "react"
import { connect } from "react-redux"
import { Outlet } from 'react-router-dom'
import {
  changeLayout,
  changeTopbarTheme,
  changeLayoutWidth,
} from "../../../store/layout/layoutSlice"

// Other Layout related Component
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap"
import Header from "./Header"
import Footer from "./Footer"

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpened: false,
      loading:true
    }
  }

  componentDidMount() {
    if (this.props.isPreloader === true) {
      document.getElementById("preloader").style.display = "block"
      document.getElementById("status").style.display = "block"

      setTimeout(function () {
        document.getElementById("preloader").style.display = "none"
        document.getElementById("status").style.display = "none"
      }, 2500)
    } else {
      document.getElementById("preloader").style.display = "none"
      document.getElementById("status").style.display = "none"
    }

    // Scrollto 0,0
    window.scrollTo(0, 0)

    const title = this.props.location.pathname
    let currentage = title.charAt(1).toUpperCase() + title.slice(2)

    document.title =
      currentage.replace('Admin/office/','') + " | PRISM"

    this.props.changeLayout("horizontal")
    if (this.props.topbarTheme) {
      this.props.changeTopbarTheme(this.props.topbarTheme)
    }
    if (this.props.layoutWidth) {
      this.props.changeLayoutWidth(this.props.layoutWidth)
    }
      // 로딩바를 2초 동안 보여준 후에 false로 변경
  setTimeout(() => {
    this.setState({ loading: false })
  }, 500)
  }

  /**
   * Opens the menu - mobile
   */
  openMenu = () => {
    this.setState({ isMenuOpened: !this.state.isMenuOpened })
  }
  render() {
    return (
      <React.Fragment>
        <div id="preloader">
          <div id="status">
            <div className="spinner-chase">
              <div className="chase-dot"></div>
              <div className="chase-dot"></div>
              <div className="chase-dot"></div>
              <div className="chase-dot"></div>
              <div className="chase-dot"></div>
              <div className="chase-dot"></div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div id="layout-wrapper">
            
            <header id="page-topbar">
            {this.state.loading && <div id="loading-bar"><div id="loading-bar-progress"></div></div>}
            {/* 로딩바가 보이는 동안에는 페이지가 보이지 않도록 설정 */}
              <Header
                theme={this.props.topbarTheme}
                isMenuOpened={this.state.isMenuOpened}
                openLeftMenuCallBack={this.openMenu}
              >
              </Header>
              
            </header>
              {this.props.location.pathname == '/dashboard'
               || this.props.location.pathname == '/dashboard2'
               || this.props.location.pathname == '/'?
                <div className="main-content">
                {!this.state.loading && <div className="outlet-wrapper" style={{ width: "100%" }}>
                  <Outlet />
                </div>}
                <Footer />
              </div>
              :
              <div className="main-content">
                
                  {!this.state.loading && <div className="outlet-wrapper" style={{ width: "100%" }}>
                    <Outlet />
                  </div>}
                  <Footer />
                </div>
              
            }

          </div>

        </div>
      </React.Fragment>
    )
  }
}

Layout.propTypes = {
  changeLayout: PropTypes.func,
  changeLayoutWidth: PropTypes.func,
  changeTopbarTheme: PropTypes.func,
  children: PropTypes.object,
  isPreloader: PropTypes.any,
  layoutWidth: PropTypes.any,
  location: PropTypes.object,
  showRightSidebar: PropTypes.any,
  topbarTheme: PropTypes.any
}

const mapStatetoProps = state => {
  return {
    ...state.layout,
  }
}
export default connect(mapStatetoProps, {
  changeTopbarTheme,
  changeLayout,
  changeLayoutWidth,
})(Layout)
