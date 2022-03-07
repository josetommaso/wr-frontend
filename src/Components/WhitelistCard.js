import React from "react";

const WhitelistCard = () => {
  return (
    <div className="block p-6 text-primary bg-tertiary rounded-lg shadow-md mb-4 text-sm overflow-hidden">
      <h5 className="mb-4 text-2xl font-bold tracking-tight">Whitelist Name</h5>

      <p className="mb-2">
        Type: <b>ICO</b>
      </p>

      <p className="mb-2">
        Category: <b>Category</b>
      </p>

      <div>
        <p className="mb-2">
          Finish: <b>date</b>
        </p>
      </div>

      <p>
        Min buy: <b>min amount</b>
      </p>

      <p>
        Max buy: <b>max amount</b>
      </p>

      <p>
        Asset: <b>asset</b>
      </p>

      <a
        href={`//google.com`}
        rel="noreferrer"
        target="_blank"
        className="mt-4 inline-block py-2 px-4 border border-primary text-sm font-medium rounded-md text-primary bg-indigo-600 hover:bg-primary hover:text-darkerWhite transition-all focus:outline-none"
      >
        Go to whitelist
      </a>
    </div>
  );
};

export default WhitelistCard;
