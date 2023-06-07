<?php
// Get css/js bundle hashed names from manifest.json to include into html
if (file_exists('./manifest.json')) {
	$c = file_get_contents('./manifest.json');
	$c = json_decode($c, true);
	$cssBundle = '<link rel="stylesheet" href="'.$c['src/main.css']['file'].'">';
	$jsBundle = $c['src/main.js']['file'];
	unset($c);
} else {
	$cssBundle = '';
	$jsBundle = 'src/main.js';
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Vite-PHP</title>
	<link rel="icon" type="image/svg+xml" href="img/vite.svg">
	<script type="module" crossorigin="" src="<?php echo $jsBundle ?>"></script>
	<?php echo $cssBundle ?>
</head>

<body>

<section class="col">
	<h1><img src="img/vite.svg" alt="vite"> Vite-PHP Minimalistic Boilerplate</h1>
	<div id="carousel" class="carousel-container">
		<div class="carousel">
<?php
$cont = [ 'Vite', 'Node', 'HTML', 'SCSS', 'JS', 'PHP' ];
	foreach($cont as $c) {
echo <<<END
			<div class="carousel-item">{$c}</div>

END;
}
?>
		</div>
	</div>
</section>

<footer>
	See this project on <a href="https://github.com/phpcoder/vite-php" alt="">Github</a>.
</footer>

</body>
</html>