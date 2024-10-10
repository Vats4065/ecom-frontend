import React, { useState } from "react";
import { AlertCircle } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const TopicSelection = () => {
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const topics = [
    "Car Technology",
    "Car Audio and Electronics",
    "Fuel and Charging Stations",
    "Car Shows and Events",
    "Car Clubs",
    "Car Modifications",
    "Fleet Management",
    "Car Tracking and GPS Services",
    "Automotive News and Blogs",
    "Car Hire and Rental Services",
    "Car Auctions",
    "Car Trade-Ins",
    "Roadside Assistance",
    "Car Financing Options",
    "New Car Listings",
    "Used Car Listings",
    "Electrical Auto Services",
    "Tires and Wheels",
    "Interior Accessories",
    "Performance Parts",
    "Used Car Listings",
    "Engine parts",
    "Mechanic Groups",
    "Auto Services",
  ];

  const handleTopicSelect = (topic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
      setError("");
    } else if (selectedTopics.length < 5) {
      setSelectedTopics([...selectedTopics, topic]);
      setError("");
    } else {
      setError("You can select a maximum of 5 topics.");
    }
  };

  const handleBack = () => {
    navigate("/onboarding/partner-category");
  };

  const handleContinue = () => {
    if (selectedTopics.length > 0) {
      navigate("/onboarding/account-creation"); // Assuming this is the next step
    } else {
      setError("Please select at least one topic before continuing.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto ">
      <div className="bg-white rounded-lg shadow flex items-center justify-content-center mt-3">
        <Link
          to="/"
          className="flex items-center text-decoration-none text-dark"
        >
          <img
            src="/Images/LogoM.png"
            alt="MyGariApp Logo"
            className="logo-image "
          />
          <h1 className="text-2xl font-bold">MyGariApp</h1>
        </Link>
      </div>

      <div className="my-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">Step 3 of 7</span>
          <span className="text-sm text-gray-500">42%</span>
        </div>
        <div className="bg-gray-200 h-2 rounded-full">
          <div
            className="bg-red-600 h-full rounded-full"
            style={{ width: "42.86%" }}
          ></div>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4">
        Help us to personalize your experience better on MyGariApp!
      </h2>
      <p className="mb-4 text-sm text-gray-600">
        Select up to 5 topics that interest you.
      </p>

      <div className="border rounded-lg p-4 shadow-sm mb-4">
        <div className="grid grid-cols-3 gap-3 mb-4">
          {topics.map((topic, index) => (
            <button
              key={index}
              className={`p-2 text-xs rounded-xl truncate ${
                selectedTopics.includes(topic)
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 text-gray-800"
              } ${
                selectedTopics.length >= 5 && !selectedTopics.includes(topic)
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              onClick={() => handleTopicSelect(topic)}
              disabled={
                selectedTopics.length >= 5 && !selectedTopics.includes(topic)
              }
              title={topic}
            >
              {topic}
            </button>
          ))}
        </div>

        {error && (
          <p className="text-red-500 flex items-center mb-4">
            <AlertCircle className="w-4 h-4 mr-2" />
            {error}
          </p>
        )}

        <div className="flex justify-between mt-4">
          <button
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            onClick={handleBack}
          >
            ← Back
          </button>
          <button
            className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              selectedTopics.length > 0
                ? "bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            onClick={handleContinue}
            disabled={selectedTopics.length === 0}
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopicSelection;
