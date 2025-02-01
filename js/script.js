const API_KEY = "VZn-Fx2ohpPGHAs_RhP_m6IgxYA";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));
document.getElementById("submit").addEventListener("click", e => postForm(e));

async function postForm(e) {
}

async function getStatus(e) {
}

function displayErrors(data) {
}

function displayStatus(data) {