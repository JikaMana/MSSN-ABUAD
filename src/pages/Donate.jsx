import React from "react";
import { CreditCard, Copy, Heart, Coins } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Donate = () => {
  const accounts = [
    {
      bank: "Wema Bank",
      number: "0229896752",
      name: "MSSN ABUAD CHAPTER",
    },
  ];

  const individuals = [
    {
      name: "Hiqmah",
      number: "07069976630",
    },
    {
      name: "Ibrahum Mulero",
      number: "08108660433",
    },
    {
      name: "Ibrahim Abubakar",
      number: "08060131363",
    },
    {
      name: "Azeezat",
      number: "07089455909",
    },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Number Copied");
  };

  return (
    <div className="pt-32 pb-16">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Support Our Cause</h1>
          <p className="text-lg text-gray-600">
            Your donations help us maintain the mosque, organize programs, and
            support students in need.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <CreditCard className="text-primary" size={24} />
            <h2 className="text-2xl font-bold">Bank Account Details</h2>
          </div>

          <div className="space-y-6">
            {accounts.map((account, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {account.bank}
                    </h3>
                    <p className="text-gray-600">{account.name}</p>
                    <p className="text-xl font-mono mt-2">{account.number}</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(account.number)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <Copy size={20} className="text-gray-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Coins className="text-primary" size={24} />

            <h2 className="text-2xl font-bold">Cash Donation / Dues Payment</h2>
          </div>

          <div className="space-y-6">
            {individuals.map((individual, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-600 font-medium text-xl">
                      {individual.name}
                    </p>
                    <p className="text-xl font-mono mt-2">
                      {individual.number}
                    </p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(individual.number)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <Copy size={20} className="text-gray-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary/5 rounded-xl p-8">
          <Heart className="text-primary mx-auto mb-4" size={32} />
          <h3 className="text-xl font-semibold mb-8 text-center">
            Every Contribution Counts
          </h3>
          <ul className="flex flex-col gap-y-4">
            <li className="text-gray-600">
              The Prophet (peace be upon him) said: "Every act of kindness is
              charity."
            </li>
            <li className="text-gray-600">
              The Prophet (peace be upon him) said: "Every act of kindness is
              charity." Salat is clear proof, and Sawm (fasting) is an
              impregnable shield, and Sadaqah (charity) extinguishes sins just
              as water extinguishes fire.” [Jami' at-Tirmidhi].
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Donate;
