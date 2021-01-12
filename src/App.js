import { Component } from 'react';
import './App.css';

class TOC extends Component{
  render() {
    return (
      <nav>
      <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">JavaScript</a></li>
      </ul>
      </nav>
    );
  }
}
class Content extends Component{
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </div>
    );
  }
}


class Subject extends Component{
  render() {
    return (
      <header>
            <h1>{this.props.title}</h1>
            {this.props.sub}
        </header>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Subject title="WEB" sub="World wide web!"></Subject>
      <Subject title="React" sub="For Ui"></Subject>
      <TOC></TOC>
      <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
    </div>
  );
}

export default App;
