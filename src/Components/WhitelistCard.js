import React from "react";
import Countdown from "react-countdown";

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
    <div className="flex flex-col justify-between items-start relative p-6 text-white bg-dark rounded-lg shadow-md text-sm overflow-hidden">
      <h5 className="text-2xl font-bold mb-2">{name}</h5>

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

      <div className="absolute top-0 right-0 p-2 rounded-bl-md text-darkerWhite bg-primary countdown">
        <Countdown date={formatDate} daysInHours zeroPadTime={2} />
      </div>

      <a
        href={`//${url}`}
        rel="noreferrer"
        target="_blank"
        className="mt-4 inline-block py-2 px-4 border border-white text-sm font-medium rounded-md text-white hover:bg-white hover:text-dark transition-all focus:outline-none"
      >
        Go to whitelist
      </a>
    </div>
  );
};

export default WhitelistCard;
