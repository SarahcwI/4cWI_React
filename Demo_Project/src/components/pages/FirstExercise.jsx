import React, { Component } from "react";
import Card from "../Card1";


export default class FirstExercise extends Component {
  render() {
    return (
      <div>
        <h1 className="bg-amber-300">Hello Vite + React!</h1>

        <div className="flex">
          <Card name={"Lenz"} jobtitel={"AV"} description={"lässig"} />
          <Card
            name={"Sams"}
            jobtitel={"AV"}
            description={"lässig ebenfalls"}
          />
        </div>
      </div>
    );
  }
}
