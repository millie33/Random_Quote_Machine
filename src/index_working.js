import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


    const quotes = [
    {
        quote: 'Let us always meet each other with smile, for the smile is the beginning of love.',
        author: 'Mother Teresa'

    },
    {
        quote: 'I have decided to stick with love. Hate is too great a burden to bear.',
        author: 'Martin Luther King, Jr.'
    },
    {
        quote: 'Kindness in words creates confidence. Kindness in thinking creates profoundness. Kindness in giving creates love.',
        author: 'Lao Tzu'
    },
    {
        quote: 'Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.',
        author: 'Lao Tzu'
    },
    {
        quote: 'We love life, not because we are used to living but because we are used to loving.',
        author: 'Friedrich Nietzsche'
    },
    {
        quote: 'Love is the beauty of the soul.',
        author: 'Saint Augustine'
    },
    {
        quote: 'Keep love in your heart. A life without it is like a sunless garden when the flowers are dead.',
        author: 'Oscar Wilde'
    },
    {
        quote: 'If your heart is a volcano, how shall you expect flowers to bloom?',
        author: 'Khalil Gibran'
    },
    {
        quote: 'The course of true love never did run smooth.',
        author: 'William Shakespeare'
    },
    {
        quote: 'A new command I give you: Love one another. As I have loved you, so you must love one another.',
        author: 'Jesus Christ'
    },
    ];

    class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
	currentQuote: 'You have everything needed for the extravagant journey that is your life.',
	currentAuthor: 'Carlos Castaneda',
   }
   
      this.handleChange = this.handleChange.bind(this);
      this.getRandomQuote = this.getRandomQuote.bind(this);

  }


getRandomQuote() {
    let curQuote = quotes[Math.floor(Math.random() * quotes.length)]
    this.setState({
    currentQuote: curQuote.quote,
    currentAuthor: curQuote.author
    });

}

  handleChange(event) {
    this.setState({
 	text: 'You have everything needed for the extravagant journey that is your life.',
	author: 'Carlos Castaneda'

    });
  }
  
  render() {
           
      return (
       <div id='quote-box'>
       <div id='text'>{this.state.currentQuote}</div>
       <div id='author'>{this.state.currentAuthor}</div>
       <button id='new-quote' onClick={this.getRandomQuote}>
          Get Random Quote
        </button><br /><br />
        <div id='tweet-quote'></div>
        
      </div>

    );
  }
};


ReactDOM.render(
   <MyApp />,
   document.getElementById('root')
 );
