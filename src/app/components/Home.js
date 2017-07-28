import React from "react";

export class Home extends React.Component {
    constructor(props){
        super();
        this.state = {
            age: props.initialAge
        };
    }
    onMakeOlder() {
        this.setState({
            age: this.state.age + 1
        });
    }
    render() {
        return (
           <div className="text-center">
               <p>Your Name: {this.props.name}</p>
               <p>Your Age: {this.state.age}</p>
               <hr/>
               <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make Me Older!</button>
               <hr/>
               <button onClick={this.props.greet} className="btn btn-success"> Greet</button>
           </div>
        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    initialAge: React.PropTypes.number,
    greet: React.PropTypes.func
};