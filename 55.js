// console.log("Hello World");
const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World');
res.end(` <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pseudo selectors & more designing</title>
    <style>
        .container{
            border: 10px solid brown;
            background-color: rgb(249, 249, 178);
            padding: 34px;
            margin: 34px auto;
            width: 666px;
        }
        a{
            text-decoration: none;
        }
        a:hover{
            color: blanchedalmond;
            background-color: black;
        }
        a:visited{
            background-color: yellow;
        }
        a:active{
            background-color: darkblue;
        }
        .btn{
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            background-color: crimson;
            padding: 6px;
            border: none;
            cursor: pointer;
            font-size: 13px;
            border-radius: 4px;
        }
        .btn:hover{
            color: coral;
            background-color: rgb(223, 245, 201);
            border: 2px solid black;
        }

    </style>
  </head>
  <body>
    <div class="container" id="cont1">
      <h1>This is my heading</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
        repellat natus atque, hic laboriosam animi labore cupiditate et
        quisquam, explicabo modi eveniet veritatis consequatur nesciunt aut?
        Repellat voluptatibus quis, doloribus pariatur iste aliquid culpa,
        sapiente a voluptatum beatae, saepe neque!</p>
        <a href="https://google.com" class="btn">Read more</a>
        <button class="btn">Contact us</button>
    </div>
  </body>
</html> `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
