const btn = document.querySelector("#btn");
const jokeEl = document.querySelector("#joke");

const apiKey = "Uj8DrcQE7gLkfLQJjim0GJQtgzivAmCJGkx7eXJe";
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options = {
    method: "GET",
    headers: { "X-Api-Key": apiKey },
};

async function getJoke() {
    try {
        jokeEl.innerText = "...";
        btn.disabled = true;
        btn.innerHTML = "Loading...";

        const response = await fetch(apiUrl, options);
        const data = await response.json();

        btn.disabled = false;
        btn.innerHTML = "Tell me a joke";
        jokeEl.innerHTML = data[0].joke;
    } catch (error) {
        jokeEl.innerText = "Error...try again later";
        btn.disabled = false;
        btn.innerHTML = "Tell me a joke";
        console.log(error);
    }
}

btn.addEventListener("click", getJoke);