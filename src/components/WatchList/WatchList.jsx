import { useContext, useEffect} from 'react';
import styles from './WatchList.module.css';
import  {MoviesContext}  from '../../context/MoviesContext';

function WatchList()
{
    const {btnText,setBtnText,watchList,avgDetails,setAvgDetails,setWatchList} =useContext(MoviesContext);
    function btnTextHandler(){
        setBtnText(prev => prev === "+" ? "-" : "+");
    }

    useEffect(()=>{
        if(watchList.length>0)
        {
            const totals =watchList.reduce((acc,movie)=>{
                acc.avgimdbrating += Number(movie.imdbRating);
                acc.avgUserRating += Number(movie.userRating);
                acc.avgWatchTime += Number(movie.runtime);
                return acc;
            },{avgimdbrating:0,avgUserRating:0,avgWatchTime:0})
            setAvgDetails({
                avgimdbRating : (totals.avgimdbrating/watchList.length).toFixed(2),
                avgUserRating : (totals.avgUserRating/watchList.length).toFixed(2),
                avgWatchTime : (totals.avgWatchTime/watchList.length).toFixed(2),
            })
        }
        else{
            setAvgDetails({
                avgimdbRating:0,
                avgUserRating:0,
                avgWatchTime:0
            })
        }


    },[watchList]);
    function removeMovie(id) 
    {
        setWatchList(movieList =>{
            const newWatchList = movieList.filter((movie)=>movie.imdbID!==id);
            return [...newWatchList];
        })
    }
    return(
        <div className={styles.watchlist_container}>
              { btnText ==="-" ?(
                <>
            <div className={styles.watched_movies_container}>
                <div className={styles.watched_movies_header}>
                   
                    <div className={styles.watched_movies_heading}><h1 >MOVIES ON YOUR WATCHLIST</h1></div>
                    <div className={styles.watched_movies_button}>
                     <button onClick={()=>(btnTextHandler())}>{btnText}</button>
                    </div>
                    
                </div>
                <div className={styles.watched_movies_stats}>
                    <span>{watchList.length} movies</span>
                    <span>⭐{avgDetails.avgimdbRating}</span>
                    <span>🌞{avgDetails.avgUserRating} </span>
                    <span>⌚{avgDetails.avgWatchTime} min</span>
                </div>
            </div>
            <div className={styles.watchlist_movies}>
            {
                watchList.map((movie,index)=>{
                    
                    return(
                        <div className={styles.moviecard_container} key={index}>
                            <div className={styles.moviecard_img_container}>
                                 <img src={movie.Poster} />
                            </div>
                            <div className={styles.moviecard_details}>
                                <h1 className={styles.moviecard_movie_title}>{movie.Title}</h1>
                                <div className={styles.moviecard_movie_details2}>
                                <h1 className={styles.moviecard_movie_imdbrating}>🎉{movie.imdbRating}</h1>
                                <h1 className={styles.moviecard_movie_userrating}>✨{movie.userRating}</h1>
                                <h1 className={styles.moviecard_movie_runtime}>⌛{movie.runtime}</h1>
                                <button onClick={()=>removeMovie(movie.imdbID)}>remove</button>
                                </div>
                            </div>
                        </div>
                    )  
                })
            }
            </div></>
              ):
              <div className={styles.watched_movies_button}>
              <button onClick={()=>btnTextHandler()}>{btnText}</button>
             </div>
              }
            
        </div>
    )
}
export default WatchList;