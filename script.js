document.getElementById("cv-link").addEventListener("click", function(event) {
    event.preventDefault(); // Empêche le comportement par défaut de la balise a
    var fileUrl = this.getAttribute("href"); // Récupère l'URL du fichier
    var fileName = fileUrl.split("/").pop(); // Récupère le nom du fichier
    var link = document.createElement("a"); // Crée un élément de lien
    link.download = fileName; // Définit l'attribut download de l'élément de lien
    link.href = fileUrl; // Définit l'attribut href de l'élément de lien
    link.click(); // Clique sur l'élément de lien pour déclencher le téléchargement
  });