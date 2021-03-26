import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectColor, newColor } from '../color/colorSlice';
import { selectQuote, newQuote } from './quoteSlice';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons';
import styles from './Quote.module.css';


function Quote() {

  const currentQuote = useSelector(selectQuote);
  const currentColor = useSelector(selectColor);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(newColor());
    dispatch(newQuote());
  }

  return (
    <div className={styles.Quote} style={{backgroundColor: currentColor}}>
      <div className={styles.mainBox}>
        <div className={styles.quoteContainer}>
          <p className={styles.quoteText} style={{color: currentColor}}>
            <FontAwesomeIcon icon={faQuoteLeft} style={{color: currentColor}}/>
            &nbsp;&nbsp;
            {currentQuote.quote}
          </p>
          <p className={styles.quoteAuthor} style={{color: currentColor}}>- {currentQuote.author}</p>
        </div>
        <div className={styles.footerContainer}>
          <div>
            <i className="fab fa-tumblr-square"></i>
          </div>
          <button className={`${styles.newQuoteButton} btn btn-dark`} style={{backgroundColor: currentColor}} onClick={handleClick}>New Quote</button>
        </div>
      </div>
    </div>
  );
}

export default Quote;
