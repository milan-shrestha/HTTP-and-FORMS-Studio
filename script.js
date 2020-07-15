function setSearchEngine() {

    let actions = {
    "google": "https://www.google.com/search",
    "duckDuckGo": "https://www.duckduckgo.com",
    "bing": "https://www.bing.com/search",
    "ask": "https://www.ask.com/web"
};

    validateUserInput();

    if(true) {
        let form = document.getElementById("searchForm");
        let selectedSearchEngine = document.querySelector("input[name=engine]:checked");
        let action = actions[selectedSearchEngine.value];
        form.setAttribute("action", action);
    };
}

function validateUserInput(event) {

    let searchText = document.querySelector("input[name=q]");
    let selectedSearchEngine = document.querySelector("input[name=engine]:checked");

    if (searchText.value === "") {
        alert("Please enter your search word or term.");
        event.preventDefault();
    } else if (selectedSearchEngine === null) {
        alert("Please select your choice of search engine.");
        event.preventDefault();
    } else {
        return true;
    }
}

window.addEventListener("load", function(){

    let form = document.getElementById("searchForm");
    form.addEventListener("submit", setSearchEngine);
});