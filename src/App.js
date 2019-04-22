import React,{Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from'./UserOutput/UserOutput';

class App extends Component {
  state ={

    username: 'Super J'
  }

  usernameChangedHandler = (event)=>{
    this.setState({
      username: event.target.value
    })
  }
  render(){
  return (
  <div className='App'>
  <h1>1st Assignment.</h1>
  <p>This is exciting...</p>

  <UserInput 
  changes={this.usernameChangedHandler}
  currentName={this.state.username} />
  <UserOutput userName={this.state.username} />
  <UserOutput userName='Mary'/>
  <UserOutput userName='Caro'/>
  </div>
    );
}
}
export default App;
