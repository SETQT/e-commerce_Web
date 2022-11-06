
// import "../../css/signUpStyle.module.css"

export default function customRegister() {

    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
        container.classList.add("rightPanelActive");
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
