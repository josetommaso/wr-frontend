import {
  GET_WHITELISTS_WITH_NAME,
  ENDING_SOONEST,
  ENDING_LATEST,
  SORT_BY_NEWER,
  SORT_BY_TYPE,
  WHITELISTS,
} from "../GraphQL/queries";
import { useApolloClient } from "@apollo/client";
import React, { useState, useContext } from "react";
import WhitelistContext from "../context/WhitelistContext";
import Select from "react-select";

const options = [
  { value: "ICO", label: "ICO" },
  { value: "TOKEN", label: "TOKEN" },
  { value: "NFT", label: "NFT" },
  { value: "IDO", label: "IDO" },
];

const WhitelistFilter = () => {
  const client = useApolloClient();
  const { setAllWhitelists } = useContext(WhitelistContext);
  const [whitelistName, setWhitelistName] = useState("");
  const [selectedRadioBtn, setSelectedRadioBtn] = useState("newer");
  const [selectedOption, setSelectedOption] = useState(null);

  const isRadioSelected = (value) => selectedRadioBtn === value;

  const radioHandler = async (e) => {
    setSelectedRadioBtn(e.currentTarget.value);

    if (e.currentTarget.value === "newer") {
      const { data } = await client.query({
        query: SORT_BY_NEWER,
      });
      setAllWhitelists(data.whitelists);
      return;
    }

    if (e.currentTarget.value === "ending-soonest") {
      const { data } = await client.query({
        query: ENDING_SOONEST,
      });
      setAllWhitelists(data.whitelists);
      return;
    }

    if (e.currentTarget.value === "ending-latest") {
      const { data } = await client.query({
        query: ENDING_LATEST,
      });
      setAllWhitelists(data.whitelists);
      return;
    }
  };

  const handlerSelect = async (selectedOption) => {
    if (selectedOption.length) {
      setSelectedOption(selectedOption);

      const types = selectedOption.map((option) => option.value);

      const { data } = await client.query({
        query: SORT_BY_TYPE,
        variables: {
          types,
        },
      });

      setAllWhitelists(data.whitelists);
    } else {
      const { data } = await client.query({
        query: WHITELISTS,
      });
      setAllWhitelists(data.whitelists);
    }
  };

  return (
    <aside className="w-full m-h-full">
      <div className="p-5 min-h-full px-6 bg-dark rounded flex gap-5 flex-col">
        <div>
          <div className="mt-3">
            <label
              htmlFor="table-search"
              className="text-lg font-bold text-white inline-block mb-3"
            >
              Search by name
            </label>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const { data } = await client.query({
                  query: GET_WHITELISTS_WITH_NAME,
                  variables: {
                    whitelistName,
                  },
                });
                setAllWhitelists(data.whitelists);
              }}
            >
              <input
                type="text"
                id="table-search"
                onChange={(e) => setWhitelistName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search whitelist"
              />
              <button
                className="bg-secondary text-white text-sm font-bold py-2 px-4 rounded mt-2"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div>
          <h3 className="text-md font-bold text-white mb-2">Sort by</h3>
          <div>
            <input
              type="radio"
              name="newer"
              id="newer"
              value="newer"
              checked={isRadioSelected("newer")}
              onChange={radioHandler}
            />
            <label htmlFor="ending-soonest" className="text-white ml-2">
              Newer first
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="ending-soonest"
              id="ending-soonest"
              value="ending-soonest"
              checked={isRadioSelected("ending-soonest")}
              onChange={radioHandler}
            />
            <label htmlFor="ending-soonest" className="text-white ml-2">
              Ending soonest
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="ending-latest"
              id="ending-latest"
              value="ending-latest"
              checked={isRadioSelected("ending-latest")}
              onChange={radioHandler}
            />
            <label htmlFor="ending-latest" className="text-white ml-2">
              Ending Latest
            </label>
          </div>
          <div>
            <h3 className="text-md font-bold text-white my-3">Type</h3>
            <Select
              defaultValue={selectedOption}
              onChange={handlerSelect}
              options={options}
              isMulti
            />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default WhitelistFilter;
