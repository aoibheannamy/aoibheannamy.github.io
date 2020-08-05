< !DOCTYPE HTML >
    <html>

        <head>
            <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                    <title> Label this scene! </title>
</head>

                <body>

                    <script>



                        let bg;
                        let y = 0;

function setup() {
                            // The background image must be the same size as the parameters
                            // into the createCanvas() method. In this program, the size of
                            // the image is 720x400 pixels.
                            bg = loadImage('Images/Winterfell.jpg');
  createCanvas(720, 400);
}

function draw() {
                            background(bg);

  stroke(226, 204, 0);
  line(0, y, width, y);

  y++;
  if (y > height) {
                            y = 0;
  }
}
</script>
                </body>
</html>