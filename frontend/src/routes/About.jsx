import React from "react";
import "../stylesheets/About.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* About Section */}
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

      {/* Contact Section */}
      <div className="contact-section">
        <h3>Contact Us</h3>
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="info-box card">
              <i className="bi bi-geo-alt"></i>
              <h3>Address</h3>
              <p>Nuzvid<br />Andhra Pradesh, 522201</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="info-box card">
              <i className="bi bi-telephone"></i>
              <h3>Call Us</h3>
              <p>8977279699<br />9492715968</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="info-box card">
              <i className="bi bi-envelope"></i>
              <h3>Email Us</h3>
              <p>n200800@rguktn.ac.in<br /> n200715@rguktn.ac.in</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="info-box card">
              <i className="bi bi-clock"></i>
              <h3>Open Hours</h3>
              <p>24x7 Available!<br /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
