import { useState } from "react";
import "../stylesheets/planner.css";

export default function Planner() {
  const [isYearly, setIsYearly] = useState(false);

  // Plan details with description
  const plans = {
    monthly: [
      { 
        name: "Basic Plan", 
        price: "100 rup/month", 
        description: "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles." 
      },
      { 
        name: "Standard Plan", 
        price: "150 rup/month", 
        description: "Access to a wider selection of movies and shows, including most new releases and exclusive content." 
      },
      { 
        name: "Premium Plan", 
        price: "300 rup/month", 
        description: "Access to a widest selection of movies and shows, including all new releases and Offline Viewing." 
      }
    ],
    yearly: [
      { 
        name: "Yearly Basic", 
        price: "1000 rup/year", 
        description: "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles." 
      },
      { 
        name: "Yearly Standard", 
        price: "1500 rup/year", 
        description: "Access to a wider selection of movies and shows, including most new releases and exclusive content." 
      },
      { 
        name: "Yearly Premium", 
        price: "3000 rup/year", 
        description: "Access to a widest selection of movies and shows, including all new releases and Offline Viewing." 
      }
    ]
  };

  return (
    <div className="container">
      {/* Header with Plan Toggle Button */}
      <div className="header">
        <h1>Choose the plan that’s right for you</h1>
        <button className="toggle-btn" onClick={() => setIsYearly(!isYearly)}>
          {isYearly ? "Yearly Plans" : "Monthly Plans"}
        </button>
      </div>

      <p className="subtext">
        Join StreamSphere and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!
      </p>

      {/* Subscription Plans */}
      <div className="Box-container">
        {(isYearly ? plans.yearly : plans.monthly).map((plan, index) => (
          <div className="sub-Box" key={index}>
            <h3>{plan.name}</h3>
            <p className="description">{plan.description}</p>
            <h4>{plan.price}</h4>
            <div className="button-group">
              <button className="free-trial-btn">Start Free Trial</button>
              <button className="subscribe-btn">Choose Plan</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
