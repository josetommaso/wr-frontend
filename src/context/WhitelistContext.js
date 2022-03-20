import { gql, useLazyQuery } from "@apollo/client";
import { React, createContext, useState, useEffect } from "react";

const WHITELISTS = gql`
  query getWhitelist {
    whitelists {
      id
      name
      dateEnd
      minAmount
      maxAmount
      asset
      url
    }
  }
`;

const WhitelistContext = createContext();

const WhitelistProvider = ({ children }) => {
  const [allWhitelists, setAllWhitelists] = useState([]);

  const [getAllWhitelists, { data, loading, error }] = useLazyQuery(WHITELISTS);

  useEffect(() => {
    if (loading) return;

    getAllWhitelists();

    if (data) {
      setAllWhitelists(data.whitelists);
    }
  }, [data, getAllWhitelists, loading]);

  const allData = { allWhitelists, loading, error, setAllWhitelists };

  return (
    <WhitelistContext.Provider value={allData}>
      {children}
    </WhitelistContext.Provider>
  );
};

export { WhitelistProvider };
export default WhitelistContext;
