import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Analytics.css"; // External CSS file

const Analytics = () => {
  const [newUserCount, setNewUserCount] = useState(0);
  const [totalUserCount, setTotalUserCount] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [userGrowth, setUserGrowth] = useState(0);
  const [amountGrowth, setAmountGrowth] = useState(0);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await axios.get("http://localhost:5000/analytics");
        const { newUsers, totalUsers, totalEarnings, userGrowth, amountGrowth } = response.data;

        setNewUserCount(newUsers || 0);
        setTotalUserCount(totalUsers || 0);
        setTotalEarnings(totalEarnings || 0);
        setUserGrowth(userGrowth || 0);
        setAmountGrowth(amountGrowth || 0);
      } catch (error) {
        console.error("Error fetching analytics:", error);
      }
    };

    fetchAnalytics();
  }, []);

  return (
    <div className="analytics-container">
      <h2 className="analytics-title">Analytics Dashboard</h2>

      <div className="analytics-grid">
        <div className="analytics-card">
          <h3>New Users</h3>
          <p>{newUserCount}</p>
        </div>
        <div className="analytics-card">
          <h3>Total Users</h3>
          <p>{totalUserCount}</p>
          <span className={`growth-text ${userGrowth >= 0 ? "growth-positive" : "growth-negative"}`}>
            {userGrowth >= 0 ? `+${userGrowth}%` : `${userGrowth}%`}
          </span>
        </div>
        <div className="analytics-card">
          <h3>Total Earnings</h3>
          <p>₹{totalEarnings ? totalEarnings.toFixed(2) : "0.00"}</p>
          <span className={`growth-text ${amountGrowth >= 0 ? "growth-positive" : "growth-negative"}`}>
            {amountGrowth >= 0 ? `+${amountGrowth}%` : `${amountGrowth}%`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
