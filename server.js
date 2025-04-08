const http = require('http');
const port = process.env.PORT || 3000;

const requestHandler = (req, res) => {
  res.end('Hello from Docker + GitHub CI/CD 🚀');
};

const server = http.createServer(requestHandler);
server.listen(port, () => console.log(`Server running on port ${port}`));
