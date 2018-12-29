import React, { Component } from "react";
import MainBar from "./Bars/MainBar";
import Config from "../data/config";
import "./App.css";

class App extends Component {
  state = {
    URL: Config.nflx,
    route: "nflx"
  };

  onRouteChange = route => {
    if (route === "aapl") {
      this.setState({
        URL: Config.aapl,
        route: route
      });
    } else if (route === "msft") {
      this.setState({
        URL: Config.msft,
        route: route
      });
    } else if (route === "intc") {
      this.setState({
        URL: Config.intc,
        route: route
      });
    } else if (route === "nflx") {
      this.setState({
        URL: Config.nflx,
        route: route
      });
    }
    this.setState({
      route: route
    });
  };

  render() {
    const { URL, route } = this.state;
    // console.log(route, URL);
    return (
      <div>
        <ul className="company-list">
          <li>
            <span onClick={() => this.onRouteChange("aapl")}>AAPL</span>
          </li>
          <li>
            <span onClick={() => this.onRouteChange("msft")}>MSFT</span>
          </li>
          <li>
            <span onClick={() => this.onRouteChange("intc")}>INTC</span>
          </li>
          <li>
            <span onClick={() => this.onRouteChange("nflx")}>NFLX</span>
          </li>
        </ul>
        {route === "aapl" ? (
          <React.Fragment>
            <h1>AAPL</h1>
            <MainBar className="main-bar" URL={URL} key={route}/>
          </React.Fragment>
        ) : route === "msft" ? (
          <React.Fragment>
            <h1>MSFT</h1>
            <MainBar className="main-bar" URL={URL} key={route}/>
          </React.Fragment>
        ) : route === "intc" ? (
          <React.Fragment>
            <h1>INTC</h1>
            <MainBar className="main-bar" URL={URL} key={route}/>
          </React.Fragment>
        ) : route === "nflx" ? (
          <React.Fragment>
            <h1>NFLX</h1>
            <MainBar className="main-bar" URL={URL} key={route}/>
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}

export default App;
