let selectedVote = "";

function showJustification(choice) {
  selectedVote = choice;
  document.getElementById("voteStep").style.display = "none";
  document.getElementById("justificationStep").style.display = "block";
}

function submitJustification() {
  if (localStorage.getItem("voted") === "true") {
    alert("Du hast bereits abgestimmt.");
    return;
  }

  // Setze versteckte Felder
  document.getElementById("voteValue").value = selectedVote;
  document.getElementById("justificationValue").value = document.getElementById("justificationInput").value;

  // Formular absenden
  document.getElementById("voteForm").submit();

  // Stimme merken
  localStorage.setItem("voted", "true");

  // Danke anzeigen
  document.querySelector("body").innerHTML = "<h2>🎉 Danke für deine Stimme!</h2>";
}
