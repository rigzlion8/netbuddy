import React from 'react';

const Dashboard = () => {
  const user = { username: 'JohnDoe', coins: 100, premium: false };

  return (
    <div className="dashboard-container">
      <h1>Welcome, {user.username}!</h1>
      <p className="coin-balance">Coin Balance: {user.coins} Coins</p>
      <p className="premium-status">
        Status: {user.premium ? 'Premium User' : 'Basic User'}
      </p>
    </div>
  );
};

export default Dashboard;
