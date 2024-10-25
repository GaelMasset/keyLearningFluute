<?php
header("Content-Type: application/json");

$directory = 'partition';
$pdfFiles = [];

// Vérifie si le dossier existe
if (is_dir($directory)) {
    // Récupère tous les fichiers PDF
    foreach (scandir($directory) as $file) {
        if (pathinfo($file, PATHINFO_EXTENSION) === 'pdf') {
            $pdfFiles[] = $file;
        }
    }
}

// Renvoie la liste des fichiers en JSON
echo json_encode($pdfFiles);
?>
