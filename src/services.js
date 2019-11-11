import React from 'react';
import axios from 'axios';

export default class LaunchDetails extends React.Component{
    state={
        persons:[]
    }

    componentDidMount(){
        axios.get('https://api.spacexdata.com/v3/launchpads')
        .then(res => {
            console.log(res);
            this.setState({persons: res.data});
        });
    }

    render(){
        return(
            <ul className="cards">
                {this.state.persons.map(person => <li key={person.id}>
                   <span className="card_name"> {person.location.name}</span>
                        <i> {person.location.region}</i>
                   <span className="card_status"> {person.status}</span>
                   <span className="card_desc"> {person.details}</span>
                </li>)}
            </ul>
        )
    }
}

