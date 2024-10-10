import React, { useState, useEffect } from "react";
import { AlertCircle, Check } from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const PartnerTypeSelection = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const options = [
    { id: "rider", title: "As a Rider", icon: "/Images/Icons/RiderI.png" },
    {
      id: "autoService",
      title: "Auto Service",
      icon: "/Images/Icons/Garage.png",
    },
    { id: "vendor", title: "Vendor", icon: "/Images/Icons/Vendor.png" },
    {
      id: "transport",
      title: "Transport",
      icon: "/Images/Icons/TransportB.png",
    },
  ];

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const preselect = searchParams.get("preselect");
    if (preselect) {
      setSelectedOption(preselect);
    }
  }, [location]);

  const handleOptionSelect = (id) => {
    setSelectedOption(id);
    setError("");
  };

  const handleContinue = () => {
    if (!selectedOption) {
      setError("Please select one option before continuing.");
    } else {
      navigate(`/onboarding/partner-category?type=${selectedOption}`);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow flex items-center justify-center ">
        <Link
          to="/"
          className="flex items-center text-decoration-none text-dark "
        >
          <img
            src="/Images/LogoM.png"
            alt="MyGariApp Logo"
            className="logo-image"
          />
          <h1 className="text-2xl font-bold">MyGariApp</h1>
        </Link>
      </div>

      <div className="my-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">Step 1 of 7</span>
          <span className="text-sm text-gray-500">14%</span>
        </div>
        <div className="bg-gray-200 h-2 rounded-full">
          <div
            className="bg-red-500 h-full rounded-full"
            style={{ width: "14.28%" }}
          ></div>
        </div>
      </div>

      <div className="border rounded-lg p-6 shadow mb-6">
        <h2 className="text-xl font-semibold mb-6 text-center">
          How would you like to partner with MyGariApp?
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {options.map((option) => (
            <button
              key={option.id}
              className={`p-4 border rounded-lg text-center relative ${
                selectedOption === option.id
                  ? "border-red-500 bg-red-50"
                  : "border-gray-300"
              }`}
              onClick={() => handleOptionSelect(option.id)}
            >
              <div className="mb-2 flex justify-center items-center h-16">
                <img
                  src={option.icon}
                  alt={option.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div>{option.title}</div>
              {selectedOption === option.id && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className="bg-red-500 rounded-full p-1">
                    <Check className="text-white" size={16} />
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>

        {error && (
          <p className="text-red-500 flex items-center mb-4">
            <AlertCircle className="w-4 h-4 mr-2" />
            {error}
          </p>
        )}
      </div>

      <button
        className="w-full py-2 px-4 bg-red-500 text-white rounded-lg shadow hover:bg-red-700 transition duration-200"
        onClick={handleContinue}
      >
        Continue →
      </button>
    </div>
  );
};

export default PartnerTypeSelection;
