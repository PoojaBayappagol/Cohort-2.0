import React from 'react'


const Test = ({ users }) => {
  return (
    <div className="test">
      {users.map((elem, idx) => {
        return <h1 key={idx}>{elem}</h1>;
      })}
    </div>
  );
};

export default Test
