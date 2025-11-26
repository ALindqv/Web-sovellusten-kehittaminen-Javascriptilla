let validateForm = (e) => {
  
    console.log('suoritettu')
    document.getElementById("errorMsg").innerText = "";
    document.getElementById("nameInput").style.border = "";
    document.getElementById("emailInput").style.border = "";
    document.getElementById("commentInput").style.border = "";

    inputDiv = document.querySelector('.no-border')

    const name = document.querySelector('#nameInput').value.trim();
    const email = document.querySelector("#emailInput").value.trim();
    const comment = document.querySelector("#commentInput").value.trim();
    
    let valid = true;


    
    // sähköpostin tarkistus
    if (name === '') {
      
      document.getElementById("nameInput").style.border = "2px solid red";
      document.getElementById("errorMsg").innerText = "Anna kelvollinen sähköpostiosoite.";
      valid = false;
    }
    // sähköpostin tarkistus
    if (email.length < 6 || !email.includes("@")) {
      
      document.getElementById("emailInput").style.border = "2px solid red";
      document.getElementById("errorMsg").innerText = "Anna kelvollinen sähköpostiosoite.";
      valid = false;
    }

    // salasanan tarkistus
    if (comment.length > 150 || comment === '') {
      document.getElementById("commentInput").style.border = "2px solid red";
      document.getElementById("errorMsg").innerText += "\nSalasanan on oltava vähintään 6 merkkiä.";
      valid = false;
    }

    // jos virheitä, estetään lähetys
    if (!valid) {
      e.preventDefault();
    }
  }