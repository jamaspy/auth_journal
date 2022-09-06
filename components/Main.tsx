import React from "react";
import List from "./List";
import Form from "./Form";
import { getAllEntries } from "../lib/routes";

const Home = ({ session }) => {
  return (
    <div className="h-full">
      <Form />
      <hr className="my-8" />
      <List />
    </div>
  );
};

export default Home;
