import React from 'react';
import axios from 'axios';
import { Link, BrowserRouter as Router} from 'react-router-dom';

export default class MissionDetails extends React.Component{
    state={
        missions:[],
        missionid:[]
    }

    componentDidMount(){
        axios.get('https://api.spacexdata.com/v3/missions')
        .then(res => {
            this.setState({missions: res.data});
        })
    }

    render(){
        return(
            <ul className="cards">
                {this.state.missions.map(mission => <li key={mission.id}>
                   <span className="card_name"> {mission.mission_name}</span>
                   <span className="card_desc"> {mission.description}</span>                   
                   {mission.payload_ids.map(temp => 
                        // <span className="card_desc link"> {temp}</span>  
                        <Link  className="card_desc link" to="payload/{temp.link}">{temp}</Link>
                   )}
                </li>
                )}
            </ul>
        )
    }
}