let selectedVote = "";

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

  document.getElementById("voteForm").submit();
  alert("Danke für deine Bewertung!");
}
