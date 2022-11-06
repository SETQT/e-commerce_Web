
// import "../../css/signUpStyle.module.css"
import * as ReactDOM from 'react-dom';
import SignUp from "./SignUp";

export default function customRegister() {

    // const signUpButton = ReactDOM.findDOMNode(SignUp).getElementsByClassName('signUp');
    // const signUpButton = document.querySelectorAll(["classname=signUp"])
    // const signInButton = document.querySelectorAll(["classname=signIn"])
    // const container = document.querySelectorAll(["classname=container"])
    // const signInButton = ReactDOM.findDOMNode(SignUp).getElementsByClassName('signIn');
    // const container = ReactDOM.findDOMNode(SignUp).getElementsByClassName('container');

    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
        container.classList.add("rightPanelActive");
        // container.classList.add.  .classList.toggle(("rightPanelActive");

    });

    signInButton.addEventListener('click', () => {
        container.classList.remove("rightPanelActive");
    });

}

export const authSuccess = (content) => {
    // console.log("haha" + content.data)
    if (content.status == "ok")
        localStorage.setItem('USER_KEY', content.data);

    // return {
    //     type:AUTH_SUCCESS,
    //     payload:content
    // }
}
