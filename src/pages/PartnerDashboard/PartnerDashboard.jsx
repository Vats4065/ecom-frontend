import React from "react";
import Sidebar from "../../Components/Sidebar";
import { Route, Routes } from "react-router-dom";
import PartnerDashboardHome from "./PartnerDashboardHome";
import PartnerDashboardPromotion from "./PartnerDashboardPromotion";
import PartnerDashboardBooking from "./PartnerDashboardBooking";
import ProductServices from "./ProductServices";

const PartnerDashboard = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<PartnerDashboardHome />} />
        <Route path="/product&service" element={<ProductServices />} />
        <Route path="/promotion" element={<PartnerDashboardPromotion />} />
        <Route path="/booking" element={<PartnerDashboardBooking />} />
        {/* <Route path="partner-category" element={<PartnerCategorySelection />} />
        <Route path="topic-selection" element={<TopicSelection />} />
        <Route path="account-creation" element={<AccountCreation />} />
        <Route
          path="phoneNumber-verification"
          element={<PhoneVerification />}
        />
        <Route path="verification-success" element={<VerificationSuccess />} />
        <Route path="welcome" element={<WelcomePage />} />
        <Route
          path="*"
          element={<Navigate to="/onboarding/partner-type" replace />}
        /> */}
      </Routes>
    </div>
  );
};

export default PartnerDashboard;
