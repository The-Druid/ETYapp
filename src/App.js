import React, {Component} from 'react';
import './App.css';

class App extends Component {

    state={
      text: " ",
      error: "Error: Not Found"
    }

    handleDateChange = (e) => {
      const value = this.refs.number.value;
      console.log(value);
      fetch(`http://numbersapi.com/${value}/year?json`)
      //Respons
      .then(res=>res.json())
      .then(data=>this.setState({
        text:data.text
      })) //setState służy do zmiany stanów el. reactowych
      //.then(data=>console.log(data.text)) wyswietla wynik w konsoli
      //http://numbersapi.com/{value}/year?json
      .catch(err=> console.log(err))
    }

    render() {
      return(
        <div>Enter the year:<input onChange={this.handleDateChange} type="text" ref="number"/>
         <p>Answer:{this.state.text}</p>
        
        </div>
       
        
      );
    }
}
export default App;