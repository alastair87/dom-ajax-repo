function buildUrl(amount, category, difficulty, type) {
  var url = "http://opentdb.com/api.php?amount=" + amount;
  return url;
}

function fetchQuestions(
  amount = 1,
  category = "Any",
  difficulty = "Any",
  type = ""
) {
  const url = buildUrl(amount, category, difficulty, type);
  fetch(url);
}
