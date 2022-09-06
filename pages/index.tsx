import type { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";
import Main from "../components/Main";
import Layout from "../components/Layout";
import Signin from "../components/Signin";

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <Layout session={session}>
      {session ? <Main session={session} /> : <Signin />}
    </Layout>
  );
};

export default Home;
