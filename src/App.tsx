import React, {useState} from 'react';
import {v1} from 'uuid';
import './App.css';
import {QuoteBox} from './components/QuoteBox/QuoteBox';

export type QuoteType = {
   id: string
   quote: string
   author: string
};

const colors: Array<string> = [
   '#16a085',
   '#27ae60',
   '#2c3e50',
   '#f39c12',
   '#e74c3c',
   '#9b59b6',
   '#FB6964',
   '#342224',
   '#472E32',
   '#BDBB99',
   '#77B1A9',
   '#73A857'
];
const quotesData: Array<QuoteType> = [
   {
      id: v1(),
      quote: 'Either you run the day, or the day runs you.',
      author: 'Jim Rohn',
   },
   {
      id: v1(),
      quote: 'You can’t fall if you don’t climb. But there’s no joy in living your whole life on the ground.',
      author: 'Unknown',
   },
   {
      id: v1(),
      quote: 'Nothing is impossible, the word itself says, “I’m possible!”',
      author: 'Audrey Hepburn',
   },
   {
      id: v1(),
      quote: 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.',
      author: 'Mark Twain',
   },
   {
      id: v1(),
      quote: 'Life shrinks or expands in proportion to one’s courage.',
      author: 'Anais Nin',
   },
   {
      id: v1(),
      quote: 'What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.\n',
      author: 'Bob Dylan',
   },
   {
      id: v1(),
      quote: 'The only person you are destined to become is the person you decide to be.',
      author: 'Ralph Waldo Emerson',
   },
   {
      id: v1(),
      quote: 'Challenges are what make life interesting and overcoming them is what makes life meaningful.',
      author: 'Joshua J. Marine',
   },
   {
      id: v1(),
      quote: 'There is only one way to avoid criticism: do nothing, say nothing, and be nothing.',
      author: 'Aristotle',
   },
   {
      id: v1(),
      quote: 'You can’t use up creativity. The more you use, the more you have.',
      author: 'Maya Angelou',
   }
];

function App() {
   const randomColor = (colors: Array<string>) => colors[Math.floor(Math.random() * colors.length)];
   const randomQuote = (quotes: Array<QuoteType>) => quotes[Math.floor(Math.random() * quotes.length)];

   const [currentColor, setCurrentColor] = useState<string>(randomColor(colors));
   const [currentQuote, setCurrentQuote] = useState<QuoteType>(randomQuote(quotesData));

   return (
         <div className="App" style={{background: `${currentColor}`, color: `${currentColor}`, transition: 'background 1000ms'}}>
            <QuoteBox color={currentColor}
                      quoteData={currentQuote}
                      changeColor={() => setCurrentColor(randomColor(colors))}
                      changeQuote={() => setCurrentQuote(randomQuote(quotesData))}
            />
         </div>
   );
};

export default App;

