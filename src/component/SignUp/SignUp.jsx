

import { authSuccess } from "./check.js"
import "./style.css"
import { Component } from "react";
import $ from "jquery"
import AuthenticationService, { fetchUserData, getToken } from "../../service/AuthenticationService";

import { Link, Navigate, redirect, useLocation } from "react-router-dom";

import React from 'react'

function SignUp() {
    // initStyle()
    return (
        <>
        <div className="bodyF">

            <div className="containerF">
                <div className="messageF signupF">
                    <div className="btn-wrapperF">  
                        <button className="buttonF" id="signup" onClick={tranformLogin}>Sign Up</button>
                        <button className="buttonF" id="login"  onClick={tranformRegister}> Login</button>
                    </div>
                </div>
                <div className="formF form--signupF">
                    <div className="form--headingF">Welcome! Sign Up</div>
                    <form autoComplete="off">
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button className="buttonF">Sign Up</button>
                    </form>
                </div>
                <div className="formF form--loginF">
                    <div className="form--headingF">Welcome back! </div>
                    <div autoComplete="off">
                        <input id="userLogin" type="text" placeholder="Name" />
                        <input id="passLogin" type="password" placeholder="Password" />
                        <button className="buttonF" onClick={login}>Login</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}



export default SignUp

  
const login = () => {
    let username = $("#userLogin").val()
    let password = $("#passLogin").val()
    

   AuthenticationService.postData("http://localhost:8081/login",{userName:username,password:password}).then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
      });
    // console.log("asd"); 
    // AuthenticationService.login(username, password).then((res) => {
    //     console.log(res); 
    //     if (res.status == "ok") {

    //     }
    // }).catch((e) => { console.log(e); })
    // alert(username)
}


const tranformLogin = ()=>{
 
    $(".messageF").css("transform", "translateX(100%)");
    if ($(".messageF").hasClass("loginF")) {

        $(".messageF").removeClass("loginF");
    }
    $(".messageF").addClass("signupF");
}
const tranformRegister = ()=>{
    $(".messageF").css("transform", "translateX(0)");
        if ($(".messageF").hasClass("loginF")) {
            $(".messageF").removeClass("signupF");
        }
        $(".messageF").addClass("loginF");
}
// const initStyle = () => {
//     // alert("asd")
//     $("#signup").click(function () {
       
//     });

//     $("#login").click(function () {
       
//     });

// }