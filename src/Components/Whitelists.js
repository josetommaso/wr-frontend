import React from "react";
import WhitelistCard from "./WhitelistCard";
import WhitelistFilter from "./WhitelistFilter";

const Whitelists = () => {
  return (
    <div className="grid mx-5 md:mx-0 md:grid-cols-4 gap-4 py-16">
      <div className="col-span-3">
        <div className="grid lg:grid-cols-2 gap-5">
          <WhitelistCard />
        </div>
      </div>
      <div className="col-span-1">
        <WhitelistFilter />
      </div>
    </div>
  );
};

export default Whitelists;
