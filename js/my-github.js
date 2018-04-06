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

function listRepos(user) {
  var url = "https://api.github.com/users/" + user + "/repos";
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(repos => {
      repos.forEach(appendRepoLink);
    });
}

listRepos("alastair87");
