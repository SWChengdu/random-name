<?php
  $names = file('random-names.txt');
?>

<html>
  <head>
    <title>DrupalCamp SG 2014</title>
    <link rel="stylesheet" href="random.css" type="text/css"/>
    <script src="./jquery-1.10.2.min.js"></script>
    <script src="./random.js"></script>
  </head>

<body>

  <h1>DrupalCamp SG 2014 Raffle</h1>
  <h2>Losers</h2>
  <ul id="losers">
    <?php foreach ($names as $name) { ?>
      <?php
        $nameId = preg_replace('/\s+/', '', $name);
      ?>
      <li id="<?php echo $nameId; ?>"><?php echo trim($name); ?></li>
    <?php } ?>
  </ul>

  <span id="draw-name">Draw a Name</span>
  <h2>Winners!</h2>
  <ol id="winners">
  </ol>
</body>



