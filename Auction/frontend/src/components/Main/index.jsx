import styles from "./styles.module.css";
import img from '../../image/food.jpg'
const Main = () => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };
    return (
        <div className={styles.vic} >
            <h2> Successful  
            </h2>
            <navbar>
                <button className={styles.white_btn} onClick={handleLogout}>
                    <h3>Logout</h3>
                </button>
            </navbar>
            <div className={styles.foto}>
                <img
                src={img}
                alt="img"
                />
            </div>
        </div>
    )
}
export default Main;