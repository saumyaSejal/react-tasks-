import React, { useState } from 'react';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);

    if (isNaN(birthDateObj)) {
      setAge('Invalid date');
      return;
    }

    const yearsDiff = today.getFullYear() - birthDateObj.getFullYear();
    const monthsDiff = today.getMonth() - birthDateObj.getMonth();
    const daysDiff = today.getDate() - birthDateObj.getDate();

    let calculatedAge = yearsDiff;

    if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
      calculatedAge--;
    }

    setAge(calculatedAge);
  };

  const handleInputChange = (event) => {
    setBirthDate(event.target.value);
  };

  return (
    <div className="text-center">
        <div className="container">
      <h2 className="text-center">Age Calculator</h2>
      <label className="heading-6 fw-bold">Enter your birthdate:</label><br/>
      <input type="date" value={birthDate} onChange={handleInputChange} /><br/><br/>
      <button className="btn btn-primary" onClick={calculateAge}>Calculate Age</button>
      {age && <p className="heading-5 fw-bold">You are {age} years old</p>}
      </div>
    </div>
  );
};

export default AgeCalculator;
