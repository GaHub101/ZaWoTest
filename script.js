let selectedVote = "";

window.onload = () => {
  // Prüfe, ob User schon gevotet hat
  if (localStorage.getItem("hasVoted")) {
    alert("Du hast bereits abgestimmt. Danke!");
    // Optional: voteStep ausblenden und Nachricht anzeigen
    document.getElementById("voteStep").innerHTML = "<p>Du hast schon abgestimmt. Danke für deine Stimme!</p>";
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
  alert("Danke für deine Bewertung!");
  
  // Optional: Nach dem Absenden Formular verstecken
  document.getElementById("justificationStep").style.display = "none";
  document.getElementById("voteStep").innerHTML = "<p>Danke für deine Stimme!</p>";
}
