import React from "react";
import axios from "axios";
import useSWR from "swr";
import Entry from "./Entry";
import { getAllEntries } from "../lib/routes";
const List = () => {
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);

  const { data, error } = useSWR(getAllEntries, fetcher);

  if (error) <p>Loading failed...</p>;
  if (data && data.length === 0) {
    return <h1 className="text-theme-blue">None Entries Created Yet</h1>;
  }

  return (
    <div>
      {data && data?.map((item) => <Entry key={item.id} item={item} />)}
    </div>
  );
};

export default List;
