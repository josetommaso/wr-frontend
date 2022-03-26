import React, { useContext } from "react";
import WhitelistCard from "./WhitelistCard";
import WhitelistFilter from "./WhitelistFilter";
import WhitelistContext from "../context/WhitelistContext";
import logoIcon from "../assets/loading.svg";

const Whitelists = () => {
  const { allWhitelists, loading, error } = useContext(WhitelistContext);

  return (
    <div className="grid mx-5 md:mx-0 md:grid-cols-8 gap-4 pt-16">
      <div className="col-span-12 relative">
        <WhitelistFilter />
      </div>
      <div className="col-span-12 md:col-span-2 lg:col-span-2 relative"></div>
      <div className="col-span-12 md:col-span-10">
        {loading && (
          <img className="mx-auto mt-5" src={logoIcon} alt="loading icon" />
        )}
        {error && <p className="text-white">Error =(</p>}
        {allWhitelists.length >= 1 ? (
          <div className="grid md:grid-cols-2 gap-5">
            {allWhitelists.map((whitelist) => (
              <WhitelistCard
                key={whitelist.id}
                name={whitelist.name}
                date_end={whitelist.dateEnd}
                max_amount={whitelist.maxAmount}
                min_amount={whitelist.minAmount}
                url={whitelist.url}
                asset={whitelist.asset}
                type={whitelist.type}
              />
            ))}
          </div>
        ) : (
          <p className="text-white text-xl text-center font-bold">
            No whitelists available
          </p>
        )}
      </div>
    </div>
  );
};

export default Whitelists;
