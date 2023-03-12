import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Insight from './Insight';
import Personas from './Personas';
import Reflection from './Reflection';

import React, { Component }  from 'react';

function App() {
  return (
    <div className="content" >
      
      <div className="barContainer">
        <div className='bot-row'>
          <NavLink id="name" className = "" >Leonardo Pivato</NavLink>
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Home</NavLink>
          <NavLink to="/planning" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Planning</NavLink>
          <NavLink to="/personas" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Personas</NavLink>
          <NavLink to="/insights" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Insight Statements</NavLink>
          <NavLink to="/reflection" className={({ isActive }) => isActive ? 'reflection-link nav-link active' : 'reflection-link nav-link' }> Reflection </NavLink>
        </div>
      </div>
      <Routes>
        <Route path='/insights' element={<Insight text="Welcome to Insights!"/>}></Route>
        <Route exact path='/insights/1' element={<Insight text=" Huge factor of a shop would be its location. That would determine whether shops get early morning business workers who get a quick coffee in morning, community families who come for lunch, or students who stay and work in the afternoon." />}></Route>
        <Route exact path='/insights/2' element={<Insight text=" When it comes to food and retail management, the questions around the COVID pandemic isn’t if it has affected the business, but rather, how is that business recovering, and the magnitude of that recovery relies on a combination of  community, effective management and patience." />}></Route>
        <Route exact path='/insights/3' element={<Insight text="Food/Retail Managers FEEL that it is good to have a relationship with their customers/community AND they DO everything they can to improve that relationship because a healthy intersection between management and community results in a more positive business and" />}></Route>
        <Route exact path='/personas' element={<Personas/>}></Route>
        <Route path='/personas/:id' element={<Personas/>}></Route>
        <Route path='/reflection' element={<Reflection/>}></Route>
        <Route exact path='/'     element={<Home />}></Route>
      </Routes>

    </div>
  );
}

export default App;
