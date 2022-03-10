import React from "react";

const WhitelistCard = ({
  asset,
  date_end,
  max_amount,
  min_amount,
  name,
  url,
}) => {
  const category = true;
  const type = true;

  const formatDate = new Date(date_end);

  return (
    <div className="flex flex-col justify-between items-start p-6 text-dark bg-light rounded-lg shadow-md mb-4 text-sm overflow-hidden">
      <h5 className="mb-4 text-2xl font-bold tracking-tight">{name}</h5>

      {type ? (
        <p className="mb-2">
          Type: <b>ICO</b>
        </p>
      ) : null}

      {category ? (
        <p className="mb-2">
          Category: <b>Category</b>
        </p>
      ) : null}

      <p className="mb-2">
        Ending: <b>{formatDate.toLocaleString("en-GB")}</b>
      </p>

      {min_amount ? (
        <p>
          Min buy: <b>{min_amount}</b>
        </p>
      ) : null}

      {max_amount ? (
        <p>
          Max buy: <b>{max_amount}</b>
        </p>
      ) : null}

      {asset ? (
        <p>
          Asset: <b>{asset}</b>
        </p>
      ) : null}

      <a
        href={`//${url}`}
        rel="noreferrer"
        target="_blank"
        className="mt-4 inline-block py-2 px-4 border border-dark text-sm font-medium rounded-md text-dark hover:bg-dark hover:text-white transition-all focus:outline-none"
      >
        Go to whitelist
      </a>
    </div>
  );
};

export default WhitelistCard;
