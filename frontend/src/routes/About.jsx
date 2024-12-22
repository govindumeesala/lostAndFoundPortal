import React from "react";
import "../stylesheets/About.css";

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-info">
        <h2>About Us</h2>
        <p>
          Welcome to the Lost and Found Portal! Our platform helps individuals
          find their lost items and report items they’ve found. Whether it's
          misplaced belongings or recovered items, we make connecting with the
          rightful owner simple and secure.
        </p>
      </div>

      <div className="how-it-works">
        <h3>How It Works</h3>
        <div className="steps">
          <div className="step-card">
            <h4>Step 1: Report Lost Item</h4>
            <p>
              Fill out a detailed form about your lost item, including its
              description, location, and date of loss.
            </p>
          </div>
          <div className="step-card">
            <h4>Step 2: Search Found Items</h4>
            <p>
              Browse through the database of reported found items to see if your
              lost item has been recovered.
            </p>
          </div>
          <div className="step-card">
            <h4>Step 3: Report Found Item</h4>
            <p>
              If you’ve found an item, create a report with details to help the
              owner identify and claim it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
