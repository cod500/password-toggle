import React, { useState } from 'react';
import '../styles/login.css';
import { FiEye, FiEyeOff } from "react-icons/fi";


export default function Login() {
    const [eyeToggle, setEyetoggle] = useState(true);
    const [passwordValue, setPasswordValue] = useState("");


    const handleToggle = () => {
        setEyetoggle(!eyeToggle);
    }
    return (
        <section className="--100vh --center-all">
            <div action="" className="--flex-center --dir-column login --bg-light">
                <h2 className="--color-orange">Password Toggle</h2>
                <input type="text" name="username" placeholder="Username" className="--width-100" />
                <div className="password --width-100">
                    <input onChange={(e) => {
                        setPasswordValue(e.target.value);
                        console.log(passwordValue)
                    }} type={eyeToggle ? "password" : "text"} name="password" placeholder="Password" className="--width-100" value={passwordValue} />
                    <div className="icon" onClick={handleToggle}>
                        {eyeToggle ? <FiEye /> : <FiEyeOff />}
                    </div>
                </div>
                <button className="--width-100 btn --bg-danger">Login</button>
            </div>
        </section>
    )
}
