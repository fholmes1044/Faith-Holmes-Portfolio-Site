
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const routes = require('./routes'); 

app.use(bodyParser.json());
const port = 3001;

const corsOptions = {
    origin: 'http://localhost:3000', 
  };

app.use(cors(corsOptions));
  
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});