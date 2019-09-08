import React, { Component } from 'react';
import Clock from './Clock';
import {Form, FormControl, Button} from 'react-bootstrap';
import SnowStorm from 'react-snowstorm';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            deadLine: 'December 25, ' + new Date().getFullYear(),
            newDeadline: '',
            year: new Date().getFullYear()
        }

    }

    changeDeadLine(){
        const dd = new Date(this.state.newDeadline);


        if( !isNaN(dd))
        {
            this.setState({ deadLine:  this.state.newDeadline});    
        }

    }

    render(){
        return (
            <div className='App'>
                <SnowStorm />
                 <div className='App-titile'> 
                 <div className='snowfonttitle'>Countdown Christmas {this.state.year}</div> { /* Countdown  [ {this.state.deadLine} ] */ } </div>
                <Clock deadLine={this.state.deadLine}/>
                
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