import React from 'react';

function App() {
//App() works as just one object element
//Renders from index.js
  return (
    <div>
      <h1>Hello Idesigner, </h1>
      <h2>This is is your first Exercise! :) </h2>

      <h3>Your Clock is clicking {new Date().toLocaleTimeString()} </h3>
    </div>
  );
}

export default App;
