const express = require('express');
const router = express.Router();

// Define routes here using router.get, router.post, etc.
router.get('/route1', (req, res) => {
  // Your route logic here
});

router.post('/route2', (req, res) => {
  // Your route logic here
});

// Export the router object
module.exports = router;
