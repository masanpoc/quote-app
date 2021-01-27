import React, { Component } from 'react';
import Quote from './Components/Quote/Quote';
import Author from './Components/Author/Author';
import './App.css';
import logo from './logo.png';
import { Button } from 'reactstrap';

const arr = [
  ['Whatever the mind of man can conceive and believe, it can achieve.', 'Napoleon Hill'],
  ['Strive not to be a success, but rather to be of value.', 'Albert Einstein'],
  [' Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', 'Robert Frost'],
  [' I attribute my success to this: I never gave or took any excuse.', 'Florence Nightingale'],
  [ 'You miss 100% of the shots you don’t take.', 'Wayne Gretzky'],
  ['Every strike brings me closer to the next home run.', 'Babe Ruth'],
  [' Life isn\'t about getting and having, it\'s about giving and being. ', 'Kevin Kruse']
];

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      index:  [Math.floor(Math.random() * arr.length)],
      color:  "#" + ((1<<24)*Math.random() | 0).toString(16)
    }
  }
  // methods using state
  getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  randomElement = () => {
    this.setState({
      index: [Math.floor(Math.random() * arr.length)],
      color: this.getRandomColor()
    })
  };
  render() {
    // minimum variables
    return (
      <div className="App" id='quote-box' style={{transition: "background 2s ease", background: this.state.color}}>
        {/* we display the quote here */}
        <div className='Post'>
          <Quote id='text'
          quotation={arr[this.state.index][0] } 
          />
          {/* and we display the author here */}
          <Author id='author' className='author'
          writer={arr[this.state.index][1]} 
          />
          {/* we add interactive buttons/links */}
          <div className="Rectangle">
            <a id='tweet-quote' href='https://twitter.com/intent/tweet' target='_blank' rel="noreferrer">
              <img alt='twitter' className='logo' src={logo}></img>
            </a>
            {/* {console.log(this.state.index, this.state.color)} */}
            <Button outline color='primary' size="sm" id='new-quote' onClick={this.randomElement} className="btn-primary" > New Quote </Button>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
