import React, { useState } from "react";
import { AlertCircle } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const PhoneVerification = ({ phoneNumber, onBack, onComplete }) => {
  const navigate = useNavigate();
  const signup = useSelector((state) => state?.signup?.user);
  const [verificationCode, setVerificationCode] = useState("");
  const [error, setError] = useState("");

  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.target.value);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:5000/api/user/verify-otp", {
      email: signup.email,
      otp: verificationCode,
    });
    console.log(res);
    if (res.status === 200) {
      onComplete();
    }
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate("/onboarding/account-creation");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow flex items-center justify-center mb-4">
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

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">Step 5 of 7</span>
          <span className="text-sm text-gray-500">71%</span>
        </div>
        <div className="bg-gray-200 h-2 rounded-full">
          <div
            className="bg-red-600 h-full rounded-full"
            style={{ width: "71.43%" }}
          ></div>
        </div>
      </div>

      <div className="border rounded-lg p-6 shadow-sm mb-6">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Verify Your Phone Number
        </h2>
        <p className="mb-6 text-sm text-gray-600 text-center">
          We've sent a verification code to {phoneNumber}. Please enter the code
          below.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="verificationCode"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Verification Code
            </label>
            <input
              type="text"
              id="verificationCode"
              value={verificationCode}
              onChange={handleVerificationCodeChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter 6-digit code"
              maxLength={6}
              required
            />
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
              onClick={handleBack}
              className="px-4 py-2 bg-white text-red-500 border border-red-600 rounded-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              ← Back
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Verify
            </button>
          </div>
        </form>
        {/* 
        <div className="mt-4 text-center">
          <button
            onClick={handleResendCode}
            disabled={isResendDisabled}
            className={`text-sm ${
              isResendDisabled
                ? "text-gray-400"
                : "text-red-600 hover:text-red-800"
            }`}
          >
            {isResendDisabled
              ? `Resend code in ${remainingTime}s`
              : "Resend code"}
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default PhoneVerification;
