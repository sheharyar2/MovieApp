
import styles from './App.module.css';
import Layout from "./Layout/Layout";
import Movies from "./components/Movies/Movies";
import WatchList from "./components/WatchList/WatchList";
import { MoviesContextProvider } from './context/MoviesContext';


function App()
{
  return(
    <div>
    <MoviesContextProvider>
        
     <Layout>
      <div className={styles.container}>
        <Movies />
        <WatchList />
      </div>
      </Layout>
    </MoviesContextProvider>

    </div>
  )
}
export default App;