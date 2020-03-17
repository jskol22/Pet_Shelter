import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class OnePet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pet: {},
            errors: {},
        }
    }

    componentDidMount() {
        let _id = this.props.match.params._id;
        axios.get(`http://localhost:8000/api/pet/${_id}`)
            .then(res => this.setState({ pet: res.data }))
            .catch(err => console.log(err));
    }
    deletePet = e => {
        e.preventDefault();
        let _id = this.props.match.params._id;
        axios.delete(`http://localhost:8000/api/pet/${_id}`, this.state.pet)
            .then(res => {
                if (res.data.errors) {
                    this.setState({ errors: res.data.errors });
                } else {
                    this.props.history.push("/")
                }
            })
            .catch(err => console.log(err));

    }

    render() {
        return (
            <body style={{textAlign: 'center'}}>
                <h1>Details about <span style={{color: "blue"}}>{this.state.pet.name}</span></h1>
                <h2>Pet Type: </h2> <h3 style={{color: "blue"}}>{this.state.pet.pet_type} </h3>
                <h2>Description:</h2> <h3 style={{color: "blue"}}>{this.state.pet.description}</h3>
                <h2>Skills:</h2> <h3 style={{color: "blue"}}>{this.state.pet.skill1}, {this.state.pet.skill2}, {this.state.pet.skill3}</h3>
                <form onClick={this.deletePet}>
                    <input type="submit" value="Adopt this pet!"/>
                </form>
            </body>
        );
    }

}

export default OnePet;
