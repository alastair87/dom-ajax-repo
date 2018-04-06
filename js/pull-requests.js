function appendPull(pull) {
  var container = document.querySelector("#pull-requests-list");
  var pullLi = document.createElement("li");
  var pullAnchor = document.createElement("a");
  pullAnchor.setAttribute("href", pull.html_url);
  pullAnchor.innerText = pull.title;
  pullLi.appendChild(pullAnchor);
  container.appendChild(pullLi);
}

function fetchUserPullRequests(user) {
  var url = "https://api.github.com/repos/codeyourfuture/js-exercises/pulls";
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(pulls => {
      pulls.filter(pull => pull.user.login === user).forEach(appendPull);
    });
}

fetchUserPullRequests("neelunsiri");
