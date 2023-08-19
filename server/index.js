const http = require('http');
const fs = require('fs');

const host = 'localhost';
const port = 3001;

const HelpToc = fs.readFileSync(`${__dirname}/HelpTOC.json`).toString();

const requestListener = function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.writeHead(200);

  res.end(HelpToc);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
