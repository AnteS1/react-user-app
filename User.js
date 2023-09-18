import React from 'react';

function User({ ime, dob }) {
  return (
    <div>
      <p>Ime: {ime}</p>
      <p>Godine: {dob}</p>
    </div>
  );
}

export default User;
