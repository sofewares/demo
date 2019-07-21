import React,{Component} from 'react'
import {Header,Main,NewPosition,Footer} from './layout'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Main/>
          <NewPosition/>
          <Footer/>
      </div>
      );
    }
}


export default App;
