import { useContext} from 'react';
import styles from './WatchList.module.css';
import  {MoviesContext}  from '../../context/MoviesContext';
import Card from '../Card/MoviesCard/Card';

function WatchList()
{
    const {btnText,setBtnText} =useContext(MoviesContext);
    function btnTextHandler(){
        setBtnText(prev => prev === "+" ? "-" : "+");

    }
    return(
        <div className={styles.watchlist_container}>
              { btnText ==="-" ?(
                <>
            <div className={styles.watched_movies_container}>
                <div className={styles.watched_movies_header}>
                   
                    <div className={styles.watched_movies_heading}><h1 >MOVIES YOU WATCHED</h1></div>
                    <div className={styles.watched_movies_button}>
                     <button onClick={()=>(btnTextHandler())}>{btnText}</button>
                    </div>
                    
                </div>
                <div className={styles.watched_movies_stats}>
                    <span>0 movies</span>
                    <span>⭐ 8.65</span>
                    <span>🌞 9.6</span>
                    <span>⌚ 132min</span>
                </div>
            </div>
            <div className={styles.watchlist_movies}>
            <Card />    
            </div></>
              ):
              <div className={styles.watched_movies_button}>
              <button onClick={()=>(()=>btnTextHandler())}>{btnText}</button>
             </div>
              }
            
        </div>
    )
}
export default WatchList;