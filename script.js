function submitVote(choice) {
  // Bereits abgestimmt? -> blockieren
  if (localStorage.getItem("voted") === "true") {
    alert("Du hast bereits abgestimmt.");
    return;
  }

  // Stimme setzen und speichern
  document.getElementById("voteValue").value = choice;
  document.getElementById("voteForm").submit();

  // Abstimmung merken
  localStorage.setItem("voted", "true");

  // Feedback anzeigen
  alert("Danke für deine Bewertung!");
}
