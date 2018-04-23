// Write code here to communicate with Github

function appendRepoLink(repo) {
  //console.log(repo.name);
  var container = document.querySelector("#repos-list");
  var repoLi = document.createElement("li");
  var repoAnchor = document.createElement("a");
  repoAnchor.setAttribute("href", repo.html_url);
  repoAnchor.innerText = repo.name;
  repoLi.appendChild(repoAnchor);
  container.appendChild(repoLi);
}

function displayRepoCount(count) {
  var repoCountAnchor = document.querySelector("#repos-count");
  repoCountAnchor.innerText = count;
}

function clearRepoList() {
  var container = document.querySelector("#repos-list");
  var repos = container.querySelectorAll("li");
  repos.forEach(repo => container.removeChild(repo));
}

function listRepos(user) {
  var url = "https://api.github.com/users/" + user + "/repos";
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(repos => {
      //clearRepoList();
      repos.forEach(appendRepoLink);
      displayRepoCount(repos.length);
    });
}

var searchBtn = document.querySelector("#search");

searchBtn.addEventListener("click", () => {
  var input = document.querySelector("#ghuser");
  clearRepoList();
  listRepos(input.value);
});

//listRepos("alastair87");
