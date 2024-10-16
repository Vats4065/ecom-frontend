import React, { useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
// import PartnerTypeSelection from "./PartnerTypeSelection";

// import TopicSelection from "./TopicSelection";
// import AccountCreation from "./AccountCreation";
// import PhoneVerification from "./PhoneVerification";
// import VerificationSuccess from "./VerificationSuccess";

import HomePage from "./HomePage";
import PartnerCategorySelection from "./PartnerCategorySelection";
import PartnerTypeSelection from "./PartnerType";
import TopicSelection from "./TopicSelection";
import AccountCreation from "./AccountCreation";

const OnboardingContainer = () => {
  const navigate = useNavigate();
  const [onboardingData, setOnboardingData] = useState({});

  const updateData = (newData) => {
    setOnboardingData((prevData) => ({ ...prevData, ...newData }));
  };

  const nextStep = (path) => {
    navigate(path);
  };

  return (
    <Routes>
      <Route
        path="partner-type"
        element={
          <PartnerTypeSelection
            onComplete={(data) => {
              updateData(data);
              nextStep("/onboarding/partner-category");
            }}
          />
        }
      />
      <Route
        path="partner-category"
        element={
          <PartnerCategorySelection
            onComplete={(data) => {
              updateData(data);
              nextStep("/onboarding/topic-selection");
            }}
          />
        }
      />
      <Route
        path="topic-selection"
        element={
          <TopicSelection
            onComplete={(data) => {
              updateData(data);
              nextStep("/onboarding/account-creation");
            }}
          />
        }
      />
      <Route
        path="account-creation"
        element={
          <AccountCreation
            onComplete={(data) => {
              updateData(data);
              nextStep("/onboarding/phone-verification");
            }}
          />
        }
      />
      {/* <Route
        path="phone-verification"
        element={
          <PhoneVerification
            phoneNumber={onboardingData.phoneNumber}
            onComplete={() => nextStep("/onboarding/verification-success")}
          />
        }
      />
      <Route
        path="verification-success"
        element={
          <VerificationSuccess
            email={onboardingData.email}
            onComplete={() => nextStep("/onboarding/welcome")}
          />
        }
      /> */}
      <Route path="welcome" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/partner-type" replace />} />
    </Routes>
  );
};

export default OnboardingContainer;
