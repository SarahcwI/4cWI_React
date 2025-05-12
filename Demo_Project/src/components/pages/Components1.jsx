import React from "react";
import List from "../List";
import Card from "../Card";
import Button from "../Button";
import { Link, useLocation } from "react-router";
 

export default function Components1() {
  const location = useLocation()
  const animal = location.state.animal;
  return (
    <div>
      
      <div>
        <List Drink={"Beer"} />
        <List Drink={"Coffee"} />
        <List Drink={"Tea"} />
        <List Drink={"Beer"} />
      </div>
      <div className="flex flex-row">
        <Card name={"John"} jobtitle={"Developer"} description={"Lorem"} />
      </div>
      <div>
        <Button description={"Sendar"} />
      </div>

      <Link to="/" 
      className="
        bg-green-400 
        rounded-2xl 
        hover:cursor-pointer 
        hover:bg-green-900 
        p-4
        mt-4
        inline-block"
      >Person</Link>

      <div>Whos a good boy? {animal.petname} is!</div>
      
    </div>
  );
}
