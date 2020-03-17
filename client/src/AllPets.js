import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {
    Link
} from 'react-router-dom'

class AllPets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pets: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8000/api/pet")
            .then(res => this.setState({ pets: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <body>
                <Link to={`/new`} style={{marginLeft: 715}}>Add a Pet to the Shelter</Link>
                <h3 style={{marginLeft:650}}>These pets are looking for a home!</h3>
                <table border="1" style={{marginLeft: 675}}>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                        {
                            this.state.pets.map(pet =>
                                <tr key={pet._id}>
                                    <td>{pet.name}</td>
                                    <td>{pet.pet_type}</td>
                                    <td><Link to={`/pet/${pet._id}`}>Details</Link> <Link to={`/pet/${pet._id}/edit`}>Edit</Link></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

            </body>
        );
    }

}

export default AllPets;
