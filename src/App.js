import React, { Component } from 'react';
import Clock from './Clock';
import {Form, FormControl, Button} from 'react-bootstrap';
import SnowStorm from 'react-snowstorm';
import glob from './assets/ball.png';

import Sound from 'react-sound';
import soundfile from './assets/jingle-bells-country.mp3';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            deadLine: 'December 25, ' + new Date().getFullYear(),
            newDeadline: '',
            year: new Date().getFullYear()
        }

    }

    componentDidMount() {
        console.log('########### componentDidMount');
        
    }
  
    componentDidUpdate() {
        console.log('########### componentDidUpdate');
        window.soundManager.setup({ ignoreMobileRestrictions : true   });
    }

    componentWillUnmount() {
        console.log('########### componentWillUnmount');
    }

    componentDidCatch(error, info) {
        console.log(`Error log from componentDidCatch: ${error}`);
        console.log(info);
      }

    changeDeadLine(){
        const dd = new Date(this.state.newDeadline);


        if( !isNaN(dd))
        {
            this.setState({ deadLine:  this.state.newDeadline});    
        }

    }

    render(){
        // console.log('########### -----> render');
            
        
        return (
            <div className='App'>

            <Sound url={soundfile} playStatus={Sound.status.PLAYING} loop autoLoad/>


                <SnowStorm />
                 <div className='App-titile'> 
                 <div className='snowfonttitle'>Countdown Christmas {this.state.year}</div> { /* Countdown  [ {this.state.deadLine} ] */ } </div>
                <Clock deadLine={this.state.deadLine}/>

                <img src={glob} width="100%" className='globCss'/>
                
            {/*
                <Form inline>
                    <FormControl 
                    className='Deadline-input'
                    placeholder='new date'
                    onChange={ event => this.setState({newDeadline: event.target.value})} 
                    />
                    <Button 
                        onClick={ () => this.changeDeadLine() } >
                        Submit
                    </Button>
                </Form>
            */}


            </div>
        )
    }
}

export default App;