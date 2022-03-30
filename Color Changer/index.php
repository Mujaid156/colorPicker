
 <head>
  <meta name="viewport" 
  content="width=device-width, 
  initial-scale=1.0, 
  user-scalable=no" />
   <link rel="stylesheet" href="styles.css">
 </head>
 <body class="body">

  <label for="colorpicker">Color Picker:</label>
  <input type="color" id="colorpicker" value="#0000ff">

   <h1 id="main-header">This is a header</h1>

   <label for="colorHead">Color Picker:</label>
   <input type="color" id="colorHead" value="#ff0000">

   <h3 class="sub">Sub header</h3>

   <label for="colorSub">Color Picker:</label>
   <input type="color" id="colorSub" value="#ff0000">

   <p class="color">Watch the paragraph colors change when you adjust the color picker.
    As you make changes in the color picker, the first paragraph's
    color changes, as a preview (this uses the <code>input</code>
    event). When you close the color picker, the <code>change</code>
    event fires, and we detect that to change every paragraph to
    the selected color.</p>

    <label for="colorWell">Color Picker:</label>
    <input type="color" id="colorWell" value="#ff0000">

    <div id="outerContainer">
      <div id="container">
        <div id="item">
          
        </div>
      </div>
    </div>

    <script src="./Javascript/scriptbody.js"></script>
   <script src="./Javascript/script.js"></script>
   <script src="./Javascript/headings.js"></script>
   <script src="./Javascript/sub.js"></script>
 </body>


<?php 
