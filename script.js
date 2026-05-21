 const form = document.querySelector(".form-registrazione");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Prendo i valori dei campi
    const nome = document.getElementById("nome").value;
    const cognome = document.getElementById("cognome").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const conferma = document.getElementById("conferma").value;

    // controllo la password
    if (password !== conferma) {
      alert("Le password non coincidono!");
      return;
    }

    // if per vedere se la lunghezza minima viene rispettata
    if (password.length < 6) {
      alert("La password deve contenere almeno 6 caratteri.");
      return;
    }

    // Messaggio di successo
    alert(`Registrazione completata!\nBenvenuto ${nome} ${cognome}`);

    // Reset del form
    form.reset();
});

