import React, { Component } from 'react';
import './App.css';
import AllPets from './AllPets';
import NewPet from './NewPet';
import OnePet from './OnePet';
import EditPet from './EditPet';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <h1 style={{marginLeft: 585}}>Welcome to the Pet Shelter!</h1>
        <Link to="/" style={{marginLeft: 775}}>Home</Link>
        <br />
        <Route exact path="/" component={AllPets} />
        <Route path="/new" component={NewPet} />
        <Route path="/pet/:_id" component={OnePet} />
        <Route path="/pet/:_id/edit" component={EditPet} />
      </BrowserRouter>
    );
  }

}

export default App;
