console.log("Hello, Iam TypeScript : As a Registration Form !");

// const form = document.querySelector("form");        //  HTMLFormElement | null;
// const form = document.querySelector("form")!;       //   HTMLFormElement;
// const form = document.querySelector(".registration-form");     //  Element | null;
// const form = document.querySelector("form") as HTMLFormElement;     //  HTMLFormElement;

const userForm = document.querySelector(
  "#registration-form"
) as HTMLFormElement;

const userName = document.querySelector("#name") as HTMLInputElement;
const userEmail = document.querySelector("#email") as HTMLInputElement;
const userCountry = document.querySelector("#country") as HTMLSelectElement;
const userFeedback = document.querySelector("#feedback") as HTMLTextAreaElement;

userForm.addEventListener("submit", (even: Event) => {
  even.preventDefault();
  const data = {
    userName: userName.value,
    userEmail: userEmail.value,
    userCountry: userCountry.value,
    userFeedback: userFeedback.value,
  };
  console.log(data);
});
