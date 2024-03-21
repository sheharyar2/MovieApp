import { createContext, useState } from "react";
import { tempMovieData } from "../../public/data/movies_data";

const MoviesContext = createContext();
const MoviesContextProvider =({children})=>{

    const [btnText, setBtnText] =useState("+");
    const [btnText2, setBtnText2] = useState("+");
    const [movieList,setMovieList]= useState([...tempMovieData]);
    const [watchList,setWatchList]= useState([]);
    const [avgDetails,setAvgDetails]=useState([]);
    const [searchValue,setSearchValue]=useState("");
    
    const contextValue = {btnText,setBtnText,btnText2,setBtnText2,movieList,setMovieList,watchList,setWatchList,avgDetails,setAvgDetails,searchValue,setSearchValue};
    
return(
    <MoviesContext.Provider value={contextValue}>
        {children}
    </MoviesContext.Provider>
)

}

export {MoviesContext,MoviesContextProvider};


