import React, { useState, useEffect } from "react";
import { ChevronRight, AlertCircle } from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const PartnerCategorySelection = () => {
  const [businessType, setBusinessType] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const [categoryType, setCategoryType] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const type = searchParams.get("type");
    if (type) {
      setCategoryType(type);
    }
  }, [location]);

  const categories = {
    transport: {
      title: "Transport Providers",
      options: [
        "Private Travel",
        "Cargo Transport",
        "Funeral Transport",
        "Home-Movers",
        "Car Hire",
        "Self-Drive",
        "Hire with Driver",
        "Car trackers",
      ],
    },
    autoService: {
      title: "AutoService Providers",
      options: [
        "Road Emergencies",
        "Insurance Providers",
        "Hearse Services",
        "Private Trips",
        "Mechanic",
        "Auto-Graffiti Artist",
        "Expert Driver",
        "Garage",
        "Carwash",
        "Electrical Technician",
        "Car Electronics Tech",
        "Breakdown services",
        "Anti-Theft",
        "General Mechanic",
        "Electrician Tech",
        "Autopaint Tech",
        "Bodyworks Tech",
        "Electric Cars Tech",
        "Hybrid cars Tech",
        "Autogas Cars Tech",
        "Digital Diagnostic",
        "Car Infotainment",
      ],
    },
    rider: {
      title: "Riders",
      options: ["Motorcycle Rider", "Bicyclist", "Skater"],
    },
    vendor: {
      title: "Vendors",
      options: ["Car Seller", "Autopart Vendor"],
    },
  };

  useEffect(() => {
    validateForm();
  }, [businessType, selectedCategories]);

  const validateForm = () => {
    const newErrors = {};

    if (!businessType.trim()) {
      newErrors.businessType =
        "Please enter the kind of business you work for.";
    }

    if (selectedCategories.length > 3) {
      newErrors.categories = "You can select a maximum of 3 categories.";
    }

    setErrors(newErrors);
  };

  const handleCategoryChange = (category, option, isChecked) => {
    if (isChecked) {
      if (selectedCategories.length < 3) {
        setSelectedCategories([
          ...selectedCategories,
          `${category}: ${option}`,
        ]);
      } else {
        setErrors({
          ...errors,
          categories: "You can select a maximum of 3 categories.",
        });
      }
    } else {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== `${category}: ${option}`)
      );
    }
  };

  const handleBack = () => {
    navigate("/onboarding/partner-type");
  };

  const handleContinue = () => {
    validateForm();
    if (Object.keys(errors).length === 0 && selectedCategories.length > 0) {
      navigate("/onboarding/topic-selection");
    } else {
      console.log(
        "Form has errors or no categories selected. Please correct them."
      );
    }
  };

  const isContinueDisabled = selectedCategories.length === 0;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow flex items-center justify-center">
        <Link to="/" className="flex items-center">
          <img
            src="/Images/LogoM.png"
            alt="MyGariApp Logo"
            className="logo-image text-decoration-none"
          />
          <h1 className="text-2xl font-bold">MyGariApp</h1>
        </Link>
      </div>

      <div className="my-3">
        <div className="flex justify-between items-center my-2">
          <span className="text-sm text-gray-500">Step 2 of 7</span>
          <span className="text-sm text-gray-500">28%</span>
        </div>
        <div className="bg-gray-200 h-2 rounded-full">
          <div
            className="bg-red-500 h-full rounded-full"
            style={{ width: "28.57%" }}
          ></div>
        </div>
      </div>

      <div className="border rounded-lg p-6 shadow-sm mb-6">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Tell us a bit more about your situation
        </h1>

        <div className="mb-6">
          <div className="pl-6">
            {" "}
            {/* Added padding-left to align with input */}
            <label
              htmlFor="businessType"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              1. What kind of Business do you work for?
            </label>
          </div>
          <input
            type="text"
            id="businessType"
            className={`mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50 bg-white h-20 pl-6 ${
              errors.businessType ? "border-red-500" : ""
            }`}
            placeholder="Business Name"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            style={{
              outline: "none",
              boxShadow:
                "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
            }}
          />
          {errors.businessType && (
            <p className="mt-2 text-sm text-red-600 flex items-center pl-6">
              {" "}
              {/* Added padding-left to align error message */}
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.businessType}
            </p>
          )}
        </div>

        <div className="mb-6">
          <p className="mb-2 text-sm font-medium text-gray-700">
            2. What is your specific field of work? Choose categories that you
            would like to Sign Up for
          </p>

          <div className="border rounded-lg p-4">
            {categoryType && categories[categoryType] && (
              <div>
                <h2 className="font-semibold mb-3 flex justify-between items-center">
                  {categories[categoryType].title}
                  <ChevronRight className="w-5 h-5" />
                </h2>
                <ul className="space-y-2 max-h-64 overflow-y-auto">
                  {categories[categoryType].options.map(
                    (option, optionIndex) => (
                      <li key={optionIndex} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`${categories[categoryType].title}-${optionIndex}`}
                          className="rounded border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-offset-0 focus:ring-red-200 focus:ring-opacity-50"
                          onChange={(e) =>
                            handleCategoryChange(
                              categories[categoryType].title,
                              option,
                              e.target.checked
                            )
                          }
                          checked={selectedCategories.includes(
                            `${categories[categoryType].title}: ${option}`
                          )}
                          disabled={
                            selectedCategories.length >= 3 &&
                            !selectedCategories.includes(
                              `${categories[categoryType].title}: ${option}`
                            )
                          }
                        />
                        <label
                          htmlFor={`${categories[categoryType].title}-${optionIndex}`}
                          className="ml-2 text-sm text-gray-700"
                        >
                          {option}
                        </label>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>

          {errors.categories && (
            <p className="mt-2 text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.categories}
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          onClick={handleBack}
        >
          ← Back
        </button>
        <button
          className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            isContinueDisabled
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          }`}
          onClick={handleContinue}
          disabled={isContinueDisabled}
        >
          Continue →
        </button>
      </div>
    </div>
  );
};

export default PartnerCategorySelection;
