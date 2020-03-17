import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class NewPet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pet: {
                name: "",
                pet_type: "",
                description: "",
                skill1: "",
                skill2: "",
                skill3: ""
            },
            errors: {
                name: "Name already exists",
                pet_type: "",
                description: "",
                skill1: "",
                skill2: "",
                skill3: ""
            }
        }
    }

    addPet = e => {
        e.preventDefault();
        console.log(this.state.pet)
        axios.post("http://localhost:8000/api/pet", this.state.pet)
            .then(res => {
                console.log(res);
                if (res.data.errors) {
                    console.log(res.data.errors);
                    this.setState({ errors: res.data.errors });
                } else {
                    this.props.history.push("/");
                }
            })
            .catch(err => {
                console.log(err);
        });
    }

    changeName = e => {
        this.setState({ pet: { ...this.state.pet, name: e.target.value } });
    }
    changeType = e => {
        this.setState({ pet: { ...this.state.pet, pet_type: e.target.value } });
    }
    changeDescription = e => {
        this.setState({ pet: { ...this.state.pet, description: e.target.value } });
    }
    changeSkill1 = e => {
        this.setState({ pet: { ...this.state.pet, skill1: e.target.value } });
    }
    changeSkill2 = e => {
        this.setState({ pet: { ...this.state.pet, skill2: e.target.value } });
    }
    changeSkill3 = e => {
        this.setState({ pet: { ...this.state.pet, skill3: e.target.value } });
    }

    render() {
        return (
            <body style={{textAlign: 'center'}}>
                <h2>Know of a Pet Needing a Home?</h2>
                <form onSubmit={this.addPet}>
                    <strong>Name:</strong> &nbsp;
                    <input
                        type="text"
                        placeholder="Name"
                        onChange={this.changeName}
                    />
                    {
                        this.state.errors.name ?
                            <span style={{color: "red"}}>{this.state.errors.name.message}</span> :
                            ""
                    }
                    <br />
                    <strong>Pet Type:</strong> &nbsp;
                    <input
                        type=""
                        placeholder="Pet Type"
                        onChange={this.changeType}
                    />
                    {
                        this.state.errors.pet_type ?
                            <span style={{color: "red"}}>{this.state.errors.pet_type.message}</span> :
                            ""
                    }
                    <br />
                    <strong>Description:</strong> &nbsp;
                    <input
                        type="text"
                        placeholder="Description"
                        onChange={this.changeDescription}
                    />
                    {
                        this.state.errors.description ?
                            <span style={{color: "red"}}>{this.state.errors.description.message}</span> :
                            ""
                    }
                    <br />
                    <strong>Skill 1:</strong> &nbsp;
                    <input
                        type="text"
                        placeholder="Skill 1"
                        onChange={this.changeSkill1}
                    />
                    {
                        this.state.errors.skill1 ?
                            <span style={{color: "red"}}>{this.state.errors.skill1.message}</span> :
                            ""
                    }
                    <br />
                    <strong>Skill 2:</strong> &nbsp;
                    <input
                        type="text"
                        placeholder="Skill 2"
                        onChange={this.changeSkill2}
                    />
                    {
                        this.state.errors.skill2 ?
                            <span style={{color: "red"}}>{this.state.errors.skill2.message}</span> :
                            ""
                    }
                    <br />
                    <strong>Skill 3:</strong> &nbsp;
                    <input
                        type="text"
                        placeholder="Skill 3"
                        onChange={this.changeSkill3}
                    />
                    {
                        this.state.errors.skill3 ?
                            <span style={{color: "red"}}>{this.state.errors.skill3.message}</span> :
                            ""
                    }
                    <br />

                    <input type="submit" value="Add Pet" />
                </form>
                <form action="/" method="get">
                    <input type="submit" value="Cancel" name="Cancel" />
                </form>
            </body>
        );
    }

}

export default NewPet;
