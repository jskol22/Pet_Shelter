import React, { Component } from 'react';
import axios from 'axios';

class Edit extends Component {
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
                name: "",
                pet_type: "",
                description: "",
            },
            err: ""
        }
    }

    componentDidMount() {
        let _id = this.props.match.params._id;
        axios.get(`http://localhost:8000/api/pet/${_id}`)
            .then(res => {
                this.setState({ pet: res.data });
            })
            .catch(err => console.log(err));
    }

    changeName = e => {
        let pet = { ...this.state.pet };
        pet.name = e.target.value;
        this.setState({ pet: pet });
    }

    changeType = e => {
        let pet = { ...this.state.pet };
        pet.pet_type = e.target.value;
        this.setState({ pet: pet });
    }

    changeDescription = e => {
        let pet = { ...this.state.pet };
        pet.description = e.target.value;
        this.setState({ pet: pet });
    }
    changeSkill1 = e => {
        let pet = { ...this.state.pet };
        pet.skill1 = e.target.value;
        this.setState({ pet: pet });
    }
    changeSkill2 = e => {
        let pet = { ...this.state.pet };
        pet.skill2 = e.target.value;
        this.setState({ pet: pet });
    }
    changeSkill3 = e => {
        let pet = { ...this.state.pet };
        pet.skill3 = e.target.value;
        this.setState({ pet: pet });
    }

    updatePet = e => {
        e.preventDefault();
        let _id = this.props.match.params._id;
        axios.put(`http://localhost:8000/api/pet/${_id}/edit`, this.state.pet)
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
            <body style={{ textAlign: 'center' }}>
                <h1>Edit this Pet</h1>
                <form onSubmit={this.updatePet}>
                    <label>Name: </label>
                    <input
                        type="text"
                        onChange={this.changeName}
                        value={this.state.pet.name}
                    />
                    {
                        this.state.errors.name ?
                            <span>{this.state.errors.name.message}</span> :
                            ""
                    }
                    <br />
                    <label>Pet Type: </label>
                    <input
                        type="text"
                        placeholder="Pet Type"
                        onChange={this.changeType}
                        value={this.state.pet.pet_type}
                    />
                    {
                        this.state.errors.pet_type ?
                            <span>{this.state.errors.pet_type.message}</span> :
                            ""
                    }
                    <br />
                    <label>Description: </label>
                    <input
                        type="text"
                        placeholder="Description"
                        onChange={this.changeDescription}
                        value={this.state.pet.description}
                    />
                    {
                        this.state.errors.description ?
                            <span>{this.state.errors.description.message}</span> :
                            ""
                    }
                    <br />
                    <label>Skill 1: </label>
                    <input
                        type="text"
                        placeholder="Skill 1"
                        onChange={this.changeSkill1}
                        value={this.state.pet.skill1}
                    />
                    {
                        this.state.errors.skill1 ?
                            <span>{this.state.errors.skill1.message}</span> :
                            ""
                    }
                    <br />
                    <label>Skill 2: </label>
                    <input
                        type="text"
                        placeholder="Skill 2"
                        onChange={this.changeSkill2}
                        value={this.state.pet.skill2}
                    />
                    {
                        this.state.errors.skill2 ?
                            <span>{this.state.errors.skill2.message}</span> :
                            ""
                    }
                    <br />
                    <label>Skill 3: </label>
                    <input
                        type="text"
                        placeholder="Skill 3"
                        onChange={this.changeSkill3}
                        value={this.state.pet.skill3}
                    />
                    {
                        this.state.errors.skill3 ?
                            <span>{this.state.errors.skill3.message}</span> :
                            ""
                    }
                    <br />
                    <input type="submit" value="Edit Pet" />
                </form>
                <form action="/" method="get">
                    <input type="submit" value="Cancel" name="Cancel" />
                </form>
            </body>
        );
    }
}

export default Edit;