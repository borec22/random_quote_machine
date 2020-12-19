import React from 'react';
import s from './QuoteBox.module.css';
import {FaQuoteLeft} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaTumblr} from 'react-icons/fa';
import {QuoteType} from '../../App';
import {CSSTransition} from 'react-transition-group';

type QuoteBoxPropsType = {
   color: string
   quoteData: QuoteType
   changeColor: () => void
   changeQuote: () => void
}

export function QuoteBox(props: QuoteBoxPropsType) {
   const {color, quoteData: {quote, author}, ...restProps} = props;

   let href = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quote}" ${author}`;

   const onChangeQuoteClick = () => {
      restProps.changeColor();
      restProps.changeQuote();
   }

   return (
      <div id='quote-box' className={s.quoteBox}>
         <div id='text' className={s.quoteText} style={{color: `${color}`, transition: 'color 1000ms, opacity 1000ms'}}>
            <span className={s.icon}><FaQuoteLeft/></span>
            <span className={s.text}>{quote}</span>
         </div>

         <div id='author' className={s.quoteAuthor}
              style={{color: `${color}`, transition: 'color 1000ms, opacity 1000ms'}}>
            <span className={s.author}>- {author}</span>
         </div>
         <div className={s.buttons}>
            <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quote}" ${author}`}
               target='_blank' id='tweet-quote' className={`${s.btn} ${s.btnPost}`}
               rel="noreferrer"
               style={{background: `${color}`, transition: 'background 1000ms'}}><FaTwitter/></a>
            <a href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,
                      borec22&caption=${author}&content=
                      ${quote}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
               target='_blank'
               rel='noreferrer'
               className={`${s.btn} ${s.btnPost}`}
               style={{background: `${color}`, transition: 'background 1000ms'}}><FaTumblr/></a>

            <button id='new-quote' className={`${s.btn} ${s.btnNewQuote}`}
                    style={{background: `${color}`, transition: 'background 1000ms'}}
                    onClick={onChangeQuoteClick}>New quote
            </button>
         </div>
      </div>
   );
}