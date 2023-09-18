import React from 'react';
import User from './User';
import ChildComponent from './ChildComponent';

const users = [
  {
    ime: 'Branko',
    prezime: 'Branković',
    dob: 32,
  },
  {
    ime: 'Janko',
    prezime: 'Janković',
    dob: 42,
  },
  {
    ime: 'Stanko',
    prezime: 'Stanković',
    dob: 52,
  },
];

function App() {
  return (
    <div>
      <h1>Korisnici</h1>
      {users.map((user, index) => (
        <div key={index}>
          <User ime={user.ime} dob={user.dob} />
          <ChildComponent>{user.ime}</ChildComponent>
        </div>
      ))}
    </div>
  );
}

export default App;