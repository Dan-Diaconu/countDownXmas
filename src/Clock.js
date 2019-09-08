import React, { Component} from 'react';
import './App.css';

class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds:0
        }
    }

    componentDidMount(){
        this.getTimeUntill(this.props.deadLine);
        setInterval(() => this.getTimeUntill(this.props.deadLine), 1);
    }

    leading0(num){
        if(num < 10){
            return '0'+num;
        }
        return num;
    }

    getTimeUntill(deadLine){
        const time = Date.parse(deadLine) - Date.parse(new Date());
 
        const seconds = Math.floor((time/1000)%60);
        const minutes = Math.floor((time/1000/60)%60);
        const hours = Math.floor((time/(1000*60*60)%24));
        const days =  Math.floor(time/(1000*60*60*24));

        this.setState({
            days: days, hours: hours, minutes: minutes, seconds: seconds
        });
    }

    render(){
        
        return(
            <div className='snowfontnumber example'>
                
                
                
                

                <div className="grid-container">
                    <div className="grid-item"><div className='Clock-days'>{this.leading0(this.state.days)}</div></div>
                    <div className="grid-item"><div className='Clock-hours'>{this.leading0(this.state.hours)} </div></div>
                    <div className="grid-item"><div className='Clock-minutes'>{this.leading0(this.state.minutes)}</div></div>
                    <div className="grid-item"><div className='Clock-seconds'>{this.leading0(this.state.seconds)} </div></div>
                    
                    <div className="grid-item"><div className='smallText'>Days</div></div>
                    <div className="grid-item"><div className='smallText'>Hours</div></div>
                    <div className="grid-item"><div className='smallText'>Minutes</div></div>      
                    <div className="grid-item"><div className='smallText'>Seconds</div></div>              
                    
                </div>

            </div>
        )
    }
}
export default Clock;