import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted");
        try {
            const url = "http://localhost:3000/api/auth/login";
            console.log("Sending request to:", url);
            const { data: res } = await axios.post(url, data);
            console.log("Response received:", res);
            localStorage.setItem("token", res.data);
            window.location = "/";
        } catch (error) {
            console.error("Error during login:", error);
            if (error.response && error.response.status === 400) {
                setError(error.response.data.message);
            }
        }
    };

    return (
        <div className={styles.login_container}>
            <div className={styles.login_form_container}>
                <div className={styles.left}>
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            required
                            className={styles.input}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                            required
                            className={styles.input}
                        />
                        {error && <div className={styles.error_msg}>{error}</div>}
                        <button type="submit" className={styles.green_btn}>
                            Submit 
                        </button>
                    </form>
                </div>
            </div>
            <div className={styles.right}>
                <h3>New Here?</h3>
                <Link to="/signup">
                    <button type="button" className={styles.white_btn}>
                        Apply
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Login;
