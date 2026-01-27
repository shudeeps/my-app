
import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    { id: 1, name: "shudep", age: 30, skill: "React" },
    { id: 2, name: "ram", age: 20, skill: "React" },
    { id: 3, name: "rita", age: 25, skill: "React" },
    { id: 4, name: "sita", age: 35, skill: "React" },
  ];
  const personList = persons.map(person => (
    <Person person={persons}></Person>
    
  ));
  return <div>{personList}</div>;
}

export default NameList;
