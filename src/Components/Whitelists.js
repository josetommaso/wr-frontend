import React from "react";
import WhitelistCard from "./WhitelistCard";
import WhitelistFilter from "./WhitelistFilter";
import { useQuery, gql } from "@apollo/client";
import logoIcon from "../assets/loading.svg";

const WHITELISTS = gql`
  query GetWhitelists {
    whitelists {
      data {
        id
        attributes {
          name
          date_end
          asset
          min_amount
          max_amount
          url
        }
      }
    }
  }
`;

const Whitelists = () => {
  const { loading, error, data } = useQuery(WHITELISTS);

  if (error) return <p>Error :(</p>;

  return (
    <div className="grid mx-5 md:mx-0 md:grid-cols-4 gap-4 py-16">
      <div className="col-span-3">
        {loading ? (
          <img className="mx-auto mt-5" src={logoIcon} alt="loading icon" />
        ) : (
          <div className="grid lg:grid-cols-2 gap-5">
            {data.whitelists.data.map((whitelist) => (
              <WhitelistCard
                key={whitelist.id}
                name={whitelist.attributes.name}
                date_end={whitelist.attributes.date_end}
                max_amount={whitelist.attributes.min_amount}
                url={whitelist.attributes.url}
                asset={whitelist.attributes.asset}
              />
            ))}
          </div>
        )}
      </div>
      <div className="col-span-1">
        <WhitelistFilter />
      </div>
    </div>
  );
};

export default Whitelists;
