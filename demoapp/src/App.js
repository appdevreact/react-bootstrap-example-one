import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Header } from "./app/components/header";
import { Footer } from "./app/components/footer";
import { Sidebar } from "./app/components/sidebar";
import Body from "./app/components/body";
export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <br />
        <Sidebar />
        <Body />
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
