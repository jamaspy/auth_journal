import React from "react";
import { mutate } from "swr";
import { getAllEntries, createEntry } from "../lib/routes";
const Form = () => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const create = async () => {
    await fetcher(createEntry, {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    mutate(getAllEntries);
    setContent("");
    setTitle("");
  };
  return (
    <div>
      <h1 className="text-2xl font-semibold my-8 text-theme-blue">
        What&apos;s on your mind?
      </h1>
      <div className="flex flex-col mb-8 text-theme-blue">
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e?.target?.value)}
          className="rounded-md border-theme-blue border-2 py-2 px-4 focus:outline-none focus:ring-2 ring-theme-orange ring-offset-2 focus:border-none text-2xl font-semibold text-theme-blue shadow"
        />
      </div>
      <div className="flex flex-col mb-8">
        <textarea
          name="content"
          placeholder="What do you want to say?"
          value={content}
          onChange={(e) => setContent(e?.target?.value)}
          className="rounded-md  border-theme-blue border-2 py-2 px-4 focus:outline-none focus:ring-2 ring-theme-orange ring-offset-2 focus:border-none text-lg font-semibolds text-theme-blue shadow"
        />
      </div>

      {title && content && (
        <button
          className="bg-theme-teal text-white shadow rounded-md py-2 px-4"
          onClick={create}
        >
          Create
        </button>
      )}
    </div>
  );
};

export default Form;
