import { useState } from "react";
import { mintSALD } from "../utils/token";

const MintCard = () => {
  const [completed, setCompleted] = useState(false);
  const [amount, setAmount] = useState("0");
  return (
    <section className="bg-white rounded-xl p-8 text-[#202020]">
      <h3 className="text-3xl font-bold">Mint SALD</h3>
      <p className="text-sm font-medium">
        Mint some SALD for your testnet testing on Polygon Mumbai!
      </p>
      <hr className="w-full h-0.5 bg-gray-200 my-4" />
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900">
          No. of SALD
        </label>
        <input
          type="number"
          id="visitors"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder=""
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        {completed && (
          <div
            className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50"
            role="alert"
          >
            <span className="font-medium">Success alert!</span> Completed
            minting of tokens.
          </div>
        )}
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 mt-4 float-right"
          onClick={() => mintSALD(amount, setCompleted)}
        >
          MINT SALD
        </button>
      </div>
    </section>
  );
};

export default MintCard;
