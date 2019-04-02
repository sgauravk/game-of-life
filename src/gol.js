import React, { Component } from "react";
import "./main.css";
import main from "./golLib"
import createTable from "./table";

class GOL extends Component {
  constructor(props) {
    super(props);
    this.createTable = createTable.bind(this);
    this.main = main.bind(this);
    this.state = {aliveCells: []};
    this.selectAlive = this.selectAlive.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.redirectToRules = this.redirectToRules.bind(this);
    this.reset = this.reset.bind(this);
    this.getNextGeneration = this.getNextGeneration.bind(this);

  }

  start(){
    this.gameID = setInterval(() => this.getNextGeneration(), 500);
  }

  stop(){
    clearInterval(this.gameID); 
  }

  getNextGeneration() {
    const {length, width} = this.props;
    const updatedCells = this.main(length, width, this.state.aliveCells);
    this.state.aliveCells.forEach(cell => document.getElementById(cell).innerHTML = " ");
    updatedCells.forEach(cell => document.getElementById(cell).innerHTML = "&#9917;");
    this.setState({ aliveCells: updatedCells});
  }

  selectAlive(id){
    !this.state.aliveCells.includes(id) && this.state.aliveCells.push(id);
    document.getElementById(id).innerHTML = "&#9917;";
  }

  redirectToRules(){
    window.location.href = "https://bit.ly/1yDqoU0";
  }

  reset(){
    window.location.reload();
  }

  render() {
    return (
      <div className="main">
        <div className="heading"> GAME OF LIFE </div>
        <div className="page-view">
          {this.createTable(this.props.length, this.props.width, this.selectAlive)}
          <div className="options ">
            <button onClick={this.start}>S t a r t</button>
            <button onClick={this.stop}>P a u s e</button>
            <button onClick={this.reset}>R e s e t</button>
            <button onClick={this.redirectToRules}>R u l e s</button>
          </div>
        </div>
      </div>
    );
  }
}

export default GOL;