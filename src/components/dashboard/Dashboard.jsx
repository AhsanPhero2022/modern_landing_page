import React from "react";
import Header from "./Header";
import RankingsCard from "./RankingsCard";
import AnalyticsCard from "./AnalyticsCard";
import LighthouseCard from "./LighthouseCard";
import BacklinksCard from "./BacklinksCard";
import SearchConsoleCard from "./SearchConsoleCard";

const Dashboard = () => {
  return (
    <div className="bg-n-8 min-h-screen text-n-1">
      <Header />
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <RankingsCard />
          <AnalyticsCard />
          <LighthouseCard />
          <BacklinksCard />
          <SearchConsoleCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
