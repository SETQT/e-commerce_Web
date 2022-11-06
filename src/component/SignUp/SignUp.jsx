

import { render } from "@testing-library/react";
import style from "../../css/signUpStyle.module.css"
// import "../../css/signUpStyle.module.css"
import customRegister, { authSuccess } from "./logic.js"

import { Component } from "react";
import $ from "jquery"
import { fetchUserData, getToken } from "../../api/AuthenticationService";

import { Link, Navigate, redirect, useLocation } from "react-router-dom";


class SignUp extends Component {
    // state = {};
    state = { redirect: null };
    constructor(props) {

        super(props);
        // console.log("Asd");

        // customRegister();
    }

    componentDidMount() {
        // alert("asd");
        customRegister();
    }

    signUp() {
        // let a = fetchUserData().then(res => console.log(res));
        //not yet implement

    }
    handleClick = event => {

        event.currentTarget.classList.toggle('bg-salmon');

    };
    async signIn() {
        let user = $('#user').val();
        let pass = $('#pass').val();
        // let navigate = useNavigate();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "userName": user, "password": pass
                // , "role": "admin", "enable": "false"
            })
        };
        const requestOptionsJWT = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: ''
        };
        const dataRaw = await (await fetch(`http://localhost:8081/login`, requestOptions)).text();
        let data = JSON.parse(dataRaw)
        // console.log(data);
        authSuccess(data);
        // this.state.redirect = true;
        // window.location.href = "/home"




    }

    render() {
        if (this.state.redirect) {
            // return <Redirect to={"/home"} />
            return (<>adsds </>)
            // window.location.href("/home")
        }
        return (
            <>
                {/* <Redirect to={this.state.redirect} /> */}
                <div>

                    <div><h2> Sign in/up Form</h2>
                        <div className={style.container} id="container">
                            <div className={[style.formContainer, style.signUpContainer].join(' ')}>
                                <form action="#">
                                    <h1>Create Account</h1>
                                    <div className={style.socialContainer}>
                                        <a href="#" className="social"><i className="fa fa-facebook"></i></a>
                                        <a href="#" className="social"><i className="fa fa-google-plus"></i></a>
                                        <a href="#" className="social"><i className="fa fa-linkedin"></i></a>
                                    </div>
                                    <span>or use your email for registration</span>
                                    <input type="text" placeholder="Name" />
                                    <input type="email" placeholder="Email" />
                                    <input type="password" placeholder="Password" />
                                    <button onClick={this.signUp}>Sign Up</button>
                                </form>
                            </div>
                            {/* <div className={style.formContainer + style.signInContainer}> */}
                            <div className={[style.formContainer, style.signInContainer].join(' ')}>
                                <form action="#">
                                    <h1>Sign in</h1>
                                    <div className={style.socialContainer}>
                                        <a href="#" className="social"><i className="fa fa-facebook"></i></a>
                                        <a href="#" className="social"><i className="fa fa-google-plus"></i></a>
                                        <a href="#" className="social"><i className="fa fa-linkedin"></i></a>
                                    </div>
                                    <span>or use your account</span>
                                    <input type="text" id="user" placeholder="UserName" />
                                    <input type="password" id="pass" placeholder="Password" />
                                    <a href="#">Forgot your password?</a>
                                    <button onClick={this.signIn}> Sign In</button>
                                </form>
                            </div>
                            <div className={style.overlayContainer}>
                                <div className={style.overlay}>
                                    <div className={[style.overlayPanel, style.overlayLeft].join(' ')}>
                                        {/* <div className="overlayPanel overlayLeft"> */}
                                        <h1>Welcome Back!</h1>
                                        <p>To keep connected with us please login with your personal info</p>
                                        <button className="ghost" id="signIn">Sign In</button>
                                    </div>
                                    <div className={[style.overlayPanel, style.overlayRight].join(' ')} >
                                        {/* <div className="overlayPanel overlayRight"> */}
                                        <h1>Hello, Friend!</h1>
                                        <p>Enter your personal details and start journey with us</p>
                                        <button className={style.ghost} id="signUp">Sign Up</button>
                                        {/* <button  className="ghost" id="signUp">Sign Up</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </>
        );
    }
}

// customRegister();

// const SignUp = () => {


//     // useConstructor()
//     // useConstructor(() => {
//     //     // console.log(
//     //     //   "This only happens ONCE and it happens BEFORE the initial render."
//     //     // );
//     //     customRegister();


//     // });
//     // use
//     // useLayoutEffect(() => {
//     //     return () => {
//     //         effect
//     //     },
//     //     [input]
//     // )
//     return (
//         <>
//             <div><h2>Weekly Coding Challenge #1: Sign in/up Form</h2>
//                 <div className="container" id="container">
//                     <div className="form-container sign-up-container">
//                         <form action="#">
//                             <h1>Create Account</h1>
//                             <div className="social-container">
//                                 <a href="#" className="social"><i className="fa fa-facebook-f"></i></a>
//                                 <a href="#" className="social"><i className="fa fa-google-plus-g"></i></a>
//                                 <a href="#" className="social"><i className="fa fa-linkedin-in"></i></a>
//                             </div>
//                             <span>or use your email for registration</span>
//                             <input type="text" placeholder="Name" />
//                             <input type="email" placeholder="Email" />
//                             <input type="password" placeholder="Password" />
//                             <button>Sign Up</button>
//                         </form>
//                     </div>
//                     <div className="form-container sign-in-container">
//                         <form action="#">
//                             <h1>Sign in</h1>
//                             <div className="social-container">
//                                 <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
//                                 <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
//                                 <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
//                             </div>
//                             <span>or use your account</span>
//                             <input type="email" placeholder="Email" />
//                             <input type="password" placeholder="Password" />
//                             <a href="#">Forgot your password?</a>
//                             <button>Sign In</button>
//                         </form>
//                     </div>
//                     <div className="overlay-container">
//                         <div className="overlay">
//                             <div className="overlay-panel overlay-left">
//                                 <h1>Welcome Back!</h1>
//                                 <p>To keep connected with us please login with your personal info</p>
//                                 <button className="ghost" id="signIn">Sign In</button>
//                             </div>
//                             <div className="overlay-panel overlay-right">
//                                 <h1>Hello, Friend!</h1>
//                                 <p>Enter your personal details and start journey with us</p>
//                                 <button className="ghost" id="signUp">Sign Up</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div>

//         </>
//     );



// }

export default SignUp