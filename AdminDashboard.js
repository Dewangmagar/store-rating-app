import React, { useEffect, useState } from 'react';

function AdminDashboard({ user }) {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    // Mock API call
    setStats({
      userCount: 1,
      storeCount: 0,
      ratingCount: 0
    });
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      {stats && (
        <div>
          <p>Users: {stats.userCount}</p>
          <p>Stores: {stats.storeCount}</p>
          <p>Ratings: {stats.ratingCount}</p>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;

