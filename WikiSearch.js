let searchInput = document.getElementById("searchInput");
let searchResults = document.getElementById("searchResults");
let spinner = document.getElementById("spinner");

function createAndAppendSearchResults(results) {
    let {
        title,
        link,
        description
    } = results;
    // Div Container - results-item
    let resultsItemEl = document.createElement("div");
    resultsItemEl.classList.add("result-item");
    searchResults.appendChild(resultsItemEl);
    //Anchor - results-tittle
    let resultsTitleEl = document.createElement("a");
    resultsTitleEl.classList.add("result-title");
    resultsTitleEl.textContent = title;
    resultsTitleEl.href = link;
    resultsTitleEl.target = "_blank";
    resultsItemEl.appendChild(resultsTitleEl);
    // Tittle break
    let titleBreakEl = document.createElement("br");
    resultsItemEl.appendChild(titleBreakEl);
    // Anchor Url - results-url
    let urlEl = document.createElement("a");
    urlEl.classList.add("result-url");
    urlEl.href = link;
    urlEl.textContent = link;
    urlEl.target = "_blank";
    resultsItemEl.appendChild(urlEl);
    //line Break 
    let lineBreakEl = document.createElement("br");
    resultsItemEl.appendChild(lineBreakEl);
    //Paragraph Description - line-description
    let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("line-description");
    descriptionEl.textContent = description;
    resultsItemEl.appendChild(descriptionEl);

}

function displayResults(searchResults) {
    spinner.classList.toggle("d-none");
    for (let result of searchResults) {
        createAndAppendSearchResults(result);
    }
}

function searchWikiPidia(event) {
    if (event.key === "Enter") {
        searchResults.textContent = "";
        spinner.classList.toggle("d-none");
        let searchInputEl = searchInput.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInputEl;
        let options = {
            method: "GET"
        }
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                displayResults(search_results);
            });
    }
}

searchInput.addEventListener("keydown", searchWikiPidia);