import React from 'react';
import axios from 'axios';

export default class Payload extends React.Component{
    state={
        missions:[]
    }

    componentDidMount(){
        axios.get('https://api.spacexdata.com/v3/missions')
        .then(res => {
            this.setState({missions: res.data});
        })
    }

    render(){
        return(
            <div>
            <h1 className="head-name"> All Details</h1>
            <ul className="cards">
                {this.state.missions.map(mission => <li key={mission.id}>
                  <b>Mission name</b> <span className="card_name"> {mission.mission_name}</span>
                  <b>Mission id</b><span className="card_desc"> {mission.mission_id}</span>
                  <b>Mission manufacturers</b> <span className="card_desc"> {mission.manufacturers}</span>
                  <b>Mission wikipedia</b><span className="card_desc"> {mission.wikipedia}</span>
                  <b>Mission website</b><span className="card_desc"> {mission.website}</span>  
                  <b>Mission Payloads</b> {mission.payload_ids.map(temp => 
                        <span className="card_desc link"> {temp}</span>  
                   )}
                </li>
                )}
            </ul>
        </div>   
          
        )
    }
}