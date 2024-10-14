import React from "react";
import Card from "react-bootstrap/Card";

const PartnerDashboardHome = () => {
  return (
    <div className="mt-4 bg-light w-100 h-100vh">
      <div className="d-flex justify-content-around mt-3">
        <Card style={{ width: "450px" }}>
          <Card.Header>
            <h2 className="text-center mb-4 fs-3">Total Products</h2>
          </Card.Header>
          <Card.Body>
            <p className="text-center fs-4 fw-bold">5</p>
          </Card.Body>
        </Card>
        <Card style={{ width: "450px" }}>
          <Card.Header>
            <h2 className="text-center mb-4 fs-3">Active Promotions</h2>
          </Card.Header>
          <Card.Body>
            <p className="text-center fs-4 fw-bold">6</p>
          </Card.Body>
        </Card>
        <Card style={{ width: "450px" }}>
          <Card.Header>
            <h2 className="text-center mb-4 fs-3">Pending Bookings</h2>
          </Card.Header>
          <Card.Body>
            <p className="text-center fs-4 fw-bold">4</p>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default PartnerDashboardHome;
