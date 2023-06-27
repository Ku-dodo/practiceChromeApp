const userName_form = document.querySelector("#username-form");
const userName_input = document.querySelector("#username-form input");
const userName_span = document.querySelector("#userName");
const USERNAME_KEY = "name"

console.dir(userName_span)

function userNameSubmit(event) {
    event.preventDefault();
    userName_form.classList.add("hide");
    const userName = userName_input.value;
    localStorage.setItem(USERNAME_KEY, userName_input.value)
    paintUserName(userName);
}

function paintUserName(userName) {
    userName_span.innerText = `Hello, ${userName}.`
    userName_span.classList.remove("hide")
}

const userNameSaved = localStorage.getItem(USERNAME_KEY);

if (userNameSaved == null) {
    userName_form.addEventListener("submit", userNameSubmit);
} else {
    userName_form.classList.add("hide");
    paintUserName(userNameSaved);
}