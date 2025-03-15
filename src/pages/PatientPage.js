import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PatientPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log('Fetching doctors with token:', token);
        const { data } = await axios.get('http://localhost:3003/api/doctors', {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log('Fetched doctors:', data);
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  const handleSelectDoctor = (doctor) => {
    setSelectedDoctor(doctor);
  };

  return (
    <div>
      <h1>Patient Dashboard</h1>
      <h2>Available Doctors</h2>
      {doctors.length > 0 ? (
        <ul>
          {doctors.map((doctor) => (
            <li key={doctor._id}>
              <p>Name: {doctor.name}</p>
              <p>Specialization: {doctor.specialization}</p>
              <button onClick={() => handleSelectDoctor(doctor)}>Select</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
      {selectedDoctor && (
        <div>
          <h2>Selected Doctor</h2>
          <p>Name: {selectedDoctor.name}</p>
          <p>Specialization: {selectedDoctor.specialization}</p>
        </div>
      )}
    </div>
  );
};

export default PatientPage;