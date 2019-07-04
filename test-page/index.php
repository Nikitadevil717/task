<?php include 'data.php'; ?>

<!DOCTYPE html>
<html lang="en">
	<?php include 'head.php';?>
	<body>
		<?php include 'header.php';?>
	
		<article class="article">
			<div class="details">
				<div class="details__img">
					<div class="details__img-block"><img class="details__img-element" src="img/<?php echo $imgPath ?>" alt="#"></div>
					<div class="wysiwyg">
						<?php echo $imgText ?>
					</div>
				</div>
				<div class="details__content">
					<div class="details__content-title">
						<h1 class="title"><?php echo $adventTitle ?></h1>
						<div class="wysiwyg"><?php echo $adventSubTitle ?></div>
					</div>
					<div class="details-advantages">
						<div class="details-advantages__block">
							<div class="details-advantages__icon <?php echo $adventIcon1 ?>"></div>
							<p class="details-advantages__text"><?php echo $adventText1 ?></p>
						</div>
						<div class="details-advantages__block">
							<div class="details-advantages__icon <?php echo $adventIcon2 ?>"></div>
							<p class="details-advantages__text"><?php echo $adventText2 ?></p>
						</div>
					</div>
				</div>
			</div>
		</article>
		<?php include 'footer.php';?>
	</body>
</html>