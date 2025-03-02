"use strict";
console.log("Hello, Iam TypeScript : As a Registration Form !");
// const form = document.querySelector("form");        //  HTMLFormElement | null;
// const form = document.querySelector("form")!;       //   HTMLFormElement;
// const form = document.querySelector(".registration-form");     //  Element | null;
// const form = document.querySelector("form") as HTMLFormElement;     //  HTMLFormElement;
const userForm = document.querySelector("#registration-form");
const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const userCountry = document.querySelector("#country");
const userFeedback = document.querySelector("#feedback");
userForm.addEventListener("submit", (even) => {
    even.preventDefault();
    const data = {
        userName: userName.value,
        userEmail: userEmail.value,
        userCountry: userCountry.value,
        userFeedback: userFeedback.value,
    };
    console.log(data);
});
