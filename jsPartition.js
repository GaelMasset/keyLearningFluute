fetch("get_pdfs.php")
    .then(response => response.json())
    .then(files => {
        const pdfList = document.getElementById("pdf-list");

        // Création d'un bouton pour chaque fichier PDF
        files.forEach(file => {
            const button = document.createElement("button");
            button.textContent = file;
            button.onclick = () => {
                window.location.href = `view_pdf.php?file=${encodeURIComponent(file)}`;
            };
            pdfList.appendChild(button);
        });
    })
    .catch(error => {
        console.error("Erreur lors de la récupération des fichiers PDF :", error);
    });