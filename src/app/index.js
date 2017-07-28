import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
class App extends React.Component {
    onGreet() {
        alert("Hello!");
    }
    render() {
        return (
            <div className="container-fluid">
                <Header/>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <h1 className="text-center">Hello !</h1>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-6 col-md-offset-3">
                        <Home name={"Dipankar"} initialAge={23} greet={this.onGreet}/>
                    </div>
                </div>
                <Footer footerText="Created With KeyBoard!"/>
            </div>
        );
    }
}
render(<App/>, window.document.getElementById("app"));