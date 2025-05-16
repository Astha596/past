import React from 'react';
import './PastLifeContent.css'; // optional

const PastLifeContent = () => {
  return (
    <main className="main-content">
      <div className="wrapper">
        <h2>Have You Ever Wondered Who You Were in a Past Life?</h2>
        <p>Enter your birth date and full name below to discover insights about your past life.</p>

        <form className="past-life-form">
          <label htmlFor="fullname">Full Name</label>
          <input type="text" id="fullname" name="fullname" placeholder="Enter your full name" />

          <label htmlFor="birthdate">Date of Birth</label>
          <input type="date" id="birthdate" name="birthdate" />

          <button type="submit">See Past Life</button>
        </form>
      </div>
    </main>
  );
};

export default PastLifeContent;
