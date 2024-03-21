import styles from './Movies.module.css'
import { MoviesContext } from '../../context/MoviesContext';
import { useContext, useEffect } from 'react';
import { tempMovieData } from '../../../public/data/movies_data';

function Movies(){
    const {btnText2,setBtnText2,movieList,setWatchList,searchValue,setMovieList} =useContext(MoviesContext);
    function btnTextHandler(){
        setBtnText2(prev => prev === "+" ? "-" : "+");
    }
    function movieCardHandler(id){
        const movieToAdd= movieList.find(val =>val.imdbID ===id);
        if(movieToAdd){
            setWatchList(currentWatchList =>{
                const isMovieInWatchList = currentWatchList.some(movie => movie.imdbID ===id);
                if(!isMovieInWatchList)
                {
                    return [...currentWatchList,movieToAdd];
                }
                return currentWatchList;
            })
        }
    }
   useEffect(()=>{
        let updatedMovieList =[...movieList];
        updatedMovieList =updatedMovieList.filter(movie=>movie.Title.toLowerCase().indexOf(searchValue.toLowerCase())!==-1);
        if(searchValue.length>0)
        {
            setMovieList(updatedMovieList);
        }
        else{
            setMovieList(tempMovieData);
        }
   },[searchValue])
    return(
        <div className={styles.movies_container}> 
            { btnText2 ==="-" &&
            <div className={styles.movies_list}>
             {
                movieList.map((movie,index)=>{
                    return(
                        <div className={styles.moviecard_container} key={index}>
                            <div className={styles.moviecard_img_container}>
                                 <img src={movie.Poster} />
                            </div>
                            <div className={styles.moviecard_details}>
                                <div>
                                <h1 className={styles.moviecard_movie_title}>{movie.Title}</h1>
                                <h1 className={styles.moviecard_movie_year}>{movie.Year}</h1>
                                </div>
                                <button onClick={()=>movieCardHandler(movie.imdbID)}>Add to watchList</button>
                            </div>
                        </div>
                    )
                })
            }
            </div>}
            <div className={styles.movies_button}>
                <button onClick={(event)=>(btnTextHandler(event))}>{btnText2}</button>
            </div>
        </div>
    )
}
export default Movies;