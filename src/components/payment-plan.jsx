import iconArcade from "../assets/icon-arcade.svg";
import iconAdvanced from "../assets/icon-advanced.svg";
import iconPro from "../assets/icon-pro.svg";
import { useState } from "react";

const PaymentPlan = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("arcade");

  const handleToggle = () => {
    setIsYearly((prev) => !prev);
  };
  return (
    <div
      className="max-w-sm mx-auto bg-white rounded-xl  p-6 space-y-6 md:max-w-full md:flex md:flex-col md:justify-start
    md:items-start"
    >
      <h2 className="title-lg font-semibold text-blue-950">Select your plan</h2>
      <p className="body-lg-regular text-gray-500">
        You have the option of monthly or yearly billing.
      </p>

      <div className="space-y-4 md:flex md:justify-center md:gap-8 md:space-y-0">
        {/* Plan: Arcade */}
        <div
          className={`border rounded-lg p-4 flex items-center justify-between hover:border-purple-600 cursor-pointer ${
            selectedPlan === "arcade"
              ? "border-purple-600 bg-blue-50"
              : "hover:border-purple-600"
          } `}
          onClick={() => setSelectedPlan("arcade")}
        >
          <div className="flex items-center space-x-3 md:flex md:flex-col md:w-26 md:h-32  md:items-start md:justify-around ">
            <div>
              {/* Icon placeholder */}
              <img src={iconArcade} alt="Aracde Icon" />
            </div>
            <div>
              <p className="body-lg-medium text-blue-950">Arcade</p>
              <p className="text-sm text-gray-500">
                {isYearly ? "$90/yr" : "$9/mo"}
              </p>
            </div>
          </div>
        </div>

        {/* Plan: Advanced */}
        <div
          className={`border rounded-lg p-4 flex items-center justify-between hover:border-purple-600 cursor-pointer ${
            selectedPlan === "advanced"
              ? "border-purple-600 bg-blue-50"
              : "hover:border-purple-600"
          } `}
          onClick={() => setSelectedPlan("advanced")}
        >
          <div className="flex items-center space-x-3 md:flex md:flex-col md:w-26  md:h-32 md:items-start md:justify-around">
            <div>
              <img src={iconAdvanced} alt="Advanced Icon" />
            </div>
            <div>
              <p className="body-lg-medium text-blue-950">Advanced</p>
              <p className="text-sm text-gray-500">
                {isYearly ? "$120/yr" : "$12/mo"}
              </p>
            </div>
          </div>
        </div>

        {/* Plan: Pro */}
        <div
          className={`border rounded-lg p-4 flex items-center justify-between hover:border-purple-600 cursor-pointer ${
            selectedPlan === "pro"
              ? "border-purple-600 bg-blue-50"
              : "hover:border-purple-600"
          } `}
          onClick={() => setSelectedPlan("pro")}
        >
          <div className="flex items-center space-x-3 md:flex md:flex-col md:w-26  md:h-32 md:items-start md:justify-around ">
            <div>
              <img src={iconPro} alt="Pro-Icon" />
            </div>
            <div>
              <p className="body-lg-medium text-blue-950">Pro</p>
              <p className="text-sm text-gray-500">
                {isYearly ? "$150/yr" : "$15/mo"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Toggle: Monthly / Yearly */}
      <div className="flex items-center justify-center space-x-4 bg-blue-50 p-2 rounded-lg md:w-[478px]">
        <button
          type="button"
          onClick={() => setIsYearly(false)}
          className={`text-sm font-medium  cursor-pointer body-md-medium  ${
            !isYearly ? "text-blue-950" : "text-gray-500"
          }`}
        >
          Monthly
        </button>

        <label
          htmlFor="billingToggle"
          className="relative inline-block w-10 h-6 cursor-pointer"
        >
          <input
            type="checkbox"
            id="billingToggle"
            className="opacity-0 w-0 h-0 peer"
            checked={isYearly}
            onChange={handleToggle}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-blue-600 rounded-full peer-checked:bg-gray-300 transition"></div>
          <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md peer-checked:translate-x-full transition-transform"></div>
        </label>

        <button
          type="button"
          onClick={() => setIsYearly(true)}
          className={`text-sm font-medium  cursor-pointer body-md-medium ${
            isYearly ? "text-blue-950" : "text-gray-500"
          }`}
        >
          Yearly
        </button>
      </div>
    </div>
  );
};

export default PaymentPlan;
