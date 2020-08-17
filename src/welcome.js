import React from "react";
import apple from './images/apple-background.jpg'
import { withRouter, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/applelogo.png';
import CountUp from 'react-countup';


class Welcome extends React.Component {

  constructor() {
    super();
    this.state = {
      zoomOutClassName: 'in',
      zoomoutEnd: false
    }
  }

  handleOnClick = () => {
    this.props.signout();
    this.props.history.push('/login');
  }

  headerZoomOut() {
    let zoomOutClassName = this.state.zoomOutClassName;
    zoomOutClassName = zoomOutClassName + ' ' + 'end'
    this.setState({ zoomOutClassName });
  }

  zoomout() {

    this.state.zoomoutEnd = true;
    this.headerZoomOut();

  }

  doEffect() {
    if (this.state.zoomoutEnd)
      return;

    setTimeout(this.zoomout.bind(this), 500);
  }


  render() {

    this.doEffect();

    return (

      
      <div className={this.state.zoomOutClassName}>
        <div className="welcome-menu zoomout">
          <div className="container-image">
            <img className="img-fluid welcome-image" src={logo} alt="Logo" />
          </div>
          <div className="base-welcome zoomout">
            <div className="container-welcome">
              <div className="header-wrap zoomout header-name">
                <h3><Link to="apple">New Products Comming This Summer</Link></h3>
              </div>
              <div className="counter">
                <CountUp
                  start={1900}
                  end={2020}
                  duration={3.75}
                  useEasing={true}
                  useGrouping={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default withRouter(Welcome);