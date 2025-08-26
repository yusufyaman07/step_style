import type { FC } from "react";
import Heading from "../../components/home/heading";
import Hero from "../../components/home/hero";
import List from "../../components/home/list";

const Home: FC = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <Hero />

      {/* Heading */}
      <Heading />
      {/* List */}
      <List />
    </div>
  );
};

export default Home;
