import styles from './Card.module.css';
import { watchedMovies } from '../../../../public/data/movies_data';
import { useContext } from 'react';
import { MoviesContext } from '../../../context/MoviesContext';


function Card()
{   
    const {watchList} =useContext(MoviesContext);
    return(
        <div className={styles.card} >
            {
                watchList.map((movie,index)=>{
                    
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
                            </div>
                        </div>
                    )
                       
    
            
                   
                })
            }

           
        </div>
    )
}
export default Card;