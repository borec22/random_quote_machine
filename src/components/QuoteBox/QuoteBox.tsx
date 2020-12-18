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

   const onChangeQuoteClick = () => {
      restProps.changeColor();
      restProps.changeQuote();
   }

   return (
      <div className={s.quoteBox}>
         <div className={s.quoteText} style={{color: `${color}`, transition: 'color 1000ms, opacity 1000ms'}}>
            <span className={s.icon}><FaQuoteLeft/></span>
            <span className={s.text}>{quote}</span>
         </div>

         <div className={s.quoteAuthor} style={{color: `${color}`, transition: 'color 1000ms, opacity 1000ms'}}>
            <span className={s.author}>- {author}</span>
         </div>
         <div className={s.buttons}>
            {/*<button className={`${s.btn} ${s.btnPost}`} style={{background: `${color}`, transition: 'background 1000ms'}}><FaTwitter/></button>
            <button className={`${s.btn} ${s.btnPost}`} style={{background: `${color}`, transition: 'background 1000ms'}}><FaTumblr/></button>*/}

            <button className={`${s.btn} ${s.btnNewQuote}`}
                    style={{background: `${color}`, transition: 'background 1000ms'}}
                    onClick={onChangeQuoteClick}>New quote
            </button>
         </div>
      </div>
   );
}