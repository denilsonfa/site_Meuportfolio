/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Mudança de categorias
function categOpen(evt, categ) {
  // Hide all elements with class="tabcontent"
  Array.from(document.getElementsByClassName("tabcontent")).forEach(tab => {
    tab.style.display = "none";
  });

  // Remove the "active" class from all elements with class="tablinks"
  Array.from(document.getElementsByClassName("tablinks")).forEach(link => {
    link.classList.remove("active");
  });

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(categ).style.display = "block";
  evt.currentTarget.classList.add("active");
}