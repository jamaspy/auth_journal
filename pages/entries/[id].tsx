import axios from "axios";
import React, { useEffect } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import { getEntry } from "../../lib/routes";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
const Entry = ({ post }) => {
  const router = useRouter();
  const { id } = router.query;
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const address = `${getEntry}?id=${id}`;
  const { data, error } = useSWR(address, fetcher);

  if (error) {
    return <p>SORRY!, Loading failed...</p>;
  }

  return data ? (
    <div className="container mx-auto p-4 min-h-screen flex items-start justify-center flex-col">
      <h1 className="font-semibold text-2xl mb-8">{data?.title}</h1>
      <p className="text-lg text-justify">{data?.content}</p>
      <Link href="/">
        <button className="mt-8 py-2 px-4 rounded-lg bg-theme-teal hover:bg-theme-orange text-xl text-white flex flex-row items-center">
          <FaChevronLeft /> <p className="ml-2">Back</p>
        </button>
      </Link>
    </div>
  ) : (
    <p>loading</p>
  );
};

export default Entry;
