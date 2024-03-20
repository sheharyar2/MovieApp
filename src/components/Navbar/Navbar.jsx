import styles from './Navbar.module.css'


function Navbar()
{
    return(
        <div className={styles.navbar}>
            <div className={styles.navbar_heading}>
                <img src="public\data\videoPlayer_icon.png" alt="" />
                    <h1>Movies.com</h1>
            </div>
            <div className={styles.navbar_input_text}>
                <input type="text" name="" placeholder='Search movies...' />
            </div>
            <div className={styles.navbar_result_text}>
                <p>Found <span>0</span> results</p>
            </div>
        </div>
    )
}
export default Navbar;