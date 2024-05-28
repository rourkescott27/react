import React, { Component } from "react";
import axios from 'axios';
import ReactLoading from 'react-loading';
import { Media, Form, FormGroup, FormControl, Button } from 'react-bootstrap'; 

class GitHub extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            isLoading: true
        }
    }

    componentDidMount() {
        this.getGitHubData('greg');
    }

    getGitHubData(_searchTerm) {
        axios.get("https://api.github.com/search/users?q=" + _searchTerm)
            .then(res => {
                this.setState({
                    isLoading: false,
                    data: res.data.items
                })
                console.log(res.data.items);
            });
    }

    render() {
        const listUsers = this.state.data.map((user) =>
            <Media key={user.id}>
                <a href={user.html_url}>
                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src={user.avatar_url}
                        alt="Generic placeholder"
                    />
                </a>
                <Media.Body>
                    <h5>Login: {user.login}</h5>
                    <p>Id: {user.id}</p>
                </Media.Body>
            </Media>
        );
        return (
            <div>
                <h3>GitHub User Results</h3>
                {this.setState.isLoading &&
                    <ReactLoading type="spinningBubbles" color="444" />
                }
                {listUsers}
            </div>
        );
    }
}

export default GitHub;