import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DoctorPage = () => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const { data } = await axios.get('http://localhost:3003/api/doctor/data', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setData(data);
      } catch (error) {
        console.error('Error fetching doctor data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Doctor Dashboard</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default DoctorPage;
