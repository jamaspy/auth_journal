import React from "react";
import { mutate } from "swr";
import { HiOutlineTrash } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";
import { getAllEntries, deleteEntry, updateEntry } from "../lib/routes";
import Link from "next/link";
const Entry = ({ item }) => {
  const [state, setState] = React.useState({
    id: item?.id,
    content: item?.content,
    title: item?.title,
  });
  const [isEdit, setIsEdit] = React.useState(false);

  const { id, title, content } = state;

  const postFetcher = (...args) => fetch(...args).then((res) => res.json());

  const removeEntry = async () => {
    await postFetcher(deleteEntry, {
      method: "POST",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    mutate(getAllEntries);
  };
  const editEntry = async () => {
    await postFetcher(updateEntry, {
      method: "POST",
      body: JSON.stringify({ id, title, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    mutate(getAllEntries);
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editEntry();
    setIsEdit(false);
  };

  return (
    <div
      key={item.id}
      className="rounded-md border-theme-teal border-2 my-4 p-4 shadow-md  truncate overflow-hidden"
    >
      <div className="w-full flex flex-row justify-between items-center">
        <h3 className="font-semibold text-2xl">{item.title}</h3>
        <div className="flex flex-row items-center">
          <button
            className=" hover:text-theme-orange"
            onClick={() => setIsEdit(!isEdit)}
          >
            <FaRegEdit />
          </button>
          <button onClick={removeEntry} className="ml-4 hover:text-theme-red">
            <HiOutlineTrash />
          </button>
        </div>
      </div>
      <hr className="mb-4 mt-2" />
      <p className="text-ellipsis overflow-hidden text-lg">{item.content}</p>
      <p className="mt-2">
        <span className="font-semibold">Written:</span>{" "}
        {new Date(item?.createdAt).toLocaleDateString("en-gb", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <Link href={`/entries/${id}`}>
        <p className="text-lg font-semibold mt-2 text-theme-teal cursor-pointer">
          Read more
        </p>
      </Link>
      {isEdit ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start justify-start mt-6 p-2 bg-slate-100 rounded-lg shadow-sm"
        >
          <label className="font-semibold text-lg mb-2">Title</label>
          <input
            onChange={(e) => handleChange(e)}
            name="title"
            type="text"
            className="border rounded-lg mb-2 p-2"
            value={title}
          />
          <label htmlFor="content" className="font-semibold text-lg mb-2">
            Content
          </label>
          <textarea
            onChange={(e) => handleChange(e)}
            name="content"
            className="border rounded-lg w-full mb-2 p-2"
            value={content}
            rows={4}
          />
          <button
            type="submit"
            className="bg-theme-orange rounded-md py-2 px-4 text-white font-semibold hover:shadow-md"
          >
            Update
          </button>
        </form>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Entry;
