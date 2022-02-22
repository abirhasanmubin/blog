import React from 'react';
import Nav from "../ui/Nav/Nav";
import Home from "../Home/Home";

function App() {
  return (
    <React.Fragment>
      <Nav/>
      <div>
        <Home user_id={1}/>
      </div>
    </React.Fragment>
  );
}

export default App;
