function appendPull(pull) {
  console.log(pull.title);
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

function resetUserPullRequests() {
  var container = document.querySelector("#pull-requests-list");
  var pulls = container.querySelectorAll("li");
  pulls.forEach(pull => container.removeChild(pull));
}

var input = document.querySelector("#pulluser");

input.addEventListener("keyup", event => {
  // resetUserPullRequests();
  fetchUserPullRequests(event.target.value);
});
