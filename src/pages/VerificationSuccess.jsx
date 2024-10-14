import React, { useState } from "react";
import { Check, AlertCircle } from "lucide-react";

const VerificationSuccess = ({ email, onBack, onComplete }) => {
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [error, setError] = useState("");

  const handleCheckboxChange = (e) => {
    setIsTermsChecked(e.target.checked);
    if (e.target.checked) {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isTermsChecked) {
      setError("Please agree to the Terms and Usage Policy to continue.");
      return;
    }
    onComplete();
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow flex items-center justify-center mb-4">
        <img
          src="/Images/LogoM.png"
          alt="MyGariApp Logo"
          className="logo-image "
        />
        <h1 className="text-2xl font-bold">MyGariApp</h1>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">Step 6 of 7</span>
          <span className="text-sm text-gray-500">85%</span>
        </div>
        <div className="bg-gray-200 h-2 rounded-full">
          <div
            className="bg-indigo-600 h-full rounded-full"
            style={{ width: "85.71%" }}
          ></div>
        </div>
      </div>

      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-xl font-semibold mb-2">
          Phone Verified Successfully!
        </h2>
        <p className="text-sm text-gray-600">
          Your phoneNumber number has been verified. To complete your
          registration, please check your email.
        </p>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <p className="text-sm text-blue-700">
          We've sent a verification link to <strong>{email}</strong>. Please
          click on the link in the email to verify your email address.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={isTermsChecked}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-indigo-600"
            />
            <span className="ml-2 text-sm text-gray-700">
              I agree to the{" "}
              <a
                href="/terms"
                className="text-indigo-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                MyGariApp Terms and Usage Policy
              </a>
            </span>
          </label>
          {error && (
            <p className="mt-2 text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {error}
            </p>
          )}
        </div>

        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={onBack}
            className="px-4 py-2 bg-white text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            ← Back
          </button>
          <button
            type="submit"
            className={`px-4 py-2 rounded-md text-white ${
              isTermsChecked
                ? "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!isTermsChecked}
          >
            Continue →
          </button>
        </div>
      </form>
    </div>
  );
};

export default VerificationSuccess;
