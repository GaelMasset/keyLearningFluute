<?php
// Récupère le nom du fichier PDF depuis l'URL
$file = isset($_GET['file']) ? $_GET['file'] : '';
$directory = 'partition';
$filePath = $directory . '/' . $file;

// Vérifie que le fichier existe et qu'il s'agit bien d'un fichier PDF
if (file_exists($filePath) && pathinfo($filePath, PATHINFO_EXTENSION) === 'pdf') {
?>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Visualisation de <?php echo htmlspecialchars($file); ?></title>
</head>
<body>
  <h1><?php echo htmlspecialchars($file); ?></h1>
  <embed src="<?php echo htmlspecialchars($filePath); ?>" type="application/pdf" width="100%" height="600px" />
</body>
</html>
<?php
} else {
    echo "Fichier non trouvé ou format incorrect.";
}
?>
