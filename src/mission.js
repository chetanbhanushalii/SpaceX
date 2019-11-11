import React from 'react'
import MissionDetails from './services2'

class Mission extends React.Component{
    render(){
        return (
            <div>
                <h1 className="head-name"> Mission</h1>
                <MissionDetails/>
            </div>   
        )               
    }
}

export default Mission