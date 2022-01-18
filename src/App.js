import React from "react";
import './App.css';
import Header from './Header';
import UserCards from './UserCards';

function App() {
  return (
    <div className="App">
      <h1>HotDog</h1>
      <Header />
      <UserCards />
    </div>
  );
}

export default App;
