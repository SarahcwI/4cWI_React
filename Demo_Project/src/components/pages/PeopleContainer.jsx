import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router";
import PersonCard from "../PersonCard";

export default function PeopleContainer() {

  const animal = {"petname": "Bobo", "species": "dog"}


  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState([]);

  useEffect(() => {
    fetch("https://67b84587699a8a7baef35d80.mockapi.io/person").then((res) =>
      res.json().then((data) => {
        setPeople(data);
        setFilteredPeople(data);
      })
    );
  }, []);

  const filterPeople = (filter) => {
    let filtered = people.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));
    setFilteredPeople(filtered);
  }



  return (
    <div className="">
      <div className="border mb-4 fixed bg-white w-full h-28 p-8">

        <input
          className="border p-4"
          type="text"
          placeholder="Search"
          onChange={(el) => {
            console.log(el.target.value);
            filterPeople(el.target.value);
          }}
        />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-8 pt-32">
        {filteredPeople.map((person) => {
          return (
            <PersonCard
              name={person.name}
              titel={person.jobtitel}
              imageUri={person.avatar}
            />
          );
        })}
      </div>
      <Link to="/comp" 
      state={{animal: animal, titel: "test"}}
      className="
        bg-green-400 
        rounded-2xl 
        hover:cursor-pointer 
        hover:bg-green-900 
        p-4"
        >
          Components</Link>
    </div>
  );
}
