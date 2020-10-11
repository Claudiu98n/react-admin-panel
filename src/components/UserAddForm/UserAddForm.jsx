import React from 'react';
import './UserAddForm.css';
import { Link } from 'react-router-dom';

class UserAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            isGoldClient: false
        };
    }

    updateName(event) {
        this.setState({name: event.target.value});
    }

    updateEmail(event) {
        this.setState({email: event.target.value});
    }

    updateIsGoldClient(event) {
        this.setState({isGoldClient: event.target.checked});
    }

    checkName(name) {
        const regex = /\d/g;
        if(regex.test(name) || name.length < 5) {
            return true;
        }
    }    

    render() {
        const {name, email, isGoldClient } = this.state;
        return (
            <form
                className="user-add-form form-group w-75"
                onSubmit={(event) => this.props.submitAddForm(event, name, email, isGoldClient, this.checkName)}
            >
                <h2>Adauga utilizatori:</h2>
                <label htmlFor="name">Nume:</label>
                <input
                    className="form-control"
                    type="text"
                    name="name"
                    required
                    onChange={(event) => this.updateName(event)}
                />
                <label htmlFor="email">Email:</label>
                <input
                    className="form-control"
                    type="email"
                    name="email"
                    required
                    onChange={(event) => this.updateEmail(event)}
                />
                <small id="emailHelp" className="form-text text-muted">Nu vom impartasi email-ul dvs. cu nimeni altcineva</small>
                <label htmlFor="is-gold-client">Client GOLD</label>
                <input
                    className="form-check w-100"
                    type="checkbox"
                    name="is-gold-client"
                    value="true"
                    onChange={(event) => this.updateIsGoldClient(event)}
                />

                <input className="btn btn-secondary mt-1" type="submit" value="Introdu utilizatorul"/>
                <Link to="/about">
                        <button className="btn btn-info w-100 mt-2">Despre Proiect</button>
                </Link>
            </form>
        )
    }
}

export default UserAddForm;