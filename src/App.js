import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'read',
      Subject:{title:'WEB',sub:'World Wid Web!'},
      welcome:{title:'Welcome',desc:'Hello React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:1, title:'CSS', desc:'CSS is for design'},
        {id:1, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  render(){
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode = 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
  return (
    <div className="App">
      {/*<Subject
        title={this.state.Subject.title}
        sub={this.state.Subject.sub}>
      </Subject>*/}
      <header>
          <h1><a href="/" onClick={function(e){
            console.log(e);
            e.preventDefault(); //event 발생때 그 동작을 막는 방법
            // this.state.mode = 'welcome';
            this.setState({
              mode:'welcome'
            })
          }.bind(this)}>{this.state.Subject.title}</a></h1>
          {this.state.Subject.sub}
      </header>
      <TOC data={this.state.contents}></TOC>
      <Content title={_title} desc={_desc}></Content>
    </div>
  );
}
}

export default App;
