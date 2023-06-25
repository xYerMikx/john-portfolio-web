import React from "react";
import { FeaturedWorks } from "../../components/FeaturedWorks/FeaturedWorks";
import { MainInfo } from "../../components/MainInfo/MainInfo";
import { RecentPosts } from "../../components/RecentPosts/RecentPosts";

export const Home = () => {
  return (
    <main className="page">
      <MainInfo />
      <RecentPosts />
      <FeaturedWorks />
    </main>
  );
};
