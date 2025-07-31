let selectedVote = "";

window.onload = () => {
  // Prüfe, ob User schon gevotet hat
  if (localStorage.getItem("hasVoted")) {
    alert("Thanks for your vote!");
    // Optional: voteStep ausblenden und Nachricht anzeigen
    document.getElementById("voteStep").innerHTML = "<p>You have already voted. Thanks!</p>";
  }
};

function tryVote(choice) {
  if (localStorage.getItem("hasVoted")) {
    alert("Du kannst nur einmal abstimmen.");
    return;
  }
  showJustification(choice);
}

function showJustification(choice) {
  selectedVote = choice;
  document.getElementById("voteValue").value = selectedVote;

  document.getElementById("voteStep").style.display = "none";
  document.getElementById("justificationStep").style.display = "block";
}

function submitJustification() {
  // Wert der sichtbaren Textarea ins versteckte Input-Feld kopieren
  document.getElementById("justificationValue").value =
    document.getElementById("justificationInput").value;

  // Lokale Speicherung markieren, dass schon gevotet wurde
  localStorage.setItem("hasVoted", "true");
  localStorage.setItem("voteChoice", selectedVote);
  localStorage.setItem("voteJustification", document.getElementById("justificationInput").value);

  document.getElementById("voteForm").submit();
  alert("Thanks for your vote!");
  
  // Optional: Nach dem Absenden Formular verstecken
  document.getElementById("justificationStep").style.display = "none";
  document.getElementById("voteStep").innerHTML = "<p>Thanks for your vote!</p>";
}
