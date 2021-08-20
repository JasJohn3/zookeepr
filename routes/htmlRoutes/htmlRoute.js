const router = require("express").Router();

// _______________________________ Client Side GET Requests_______________________________
// Loads the html files for the client side
router.get('/',(req,res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/animals', (req,res) => {
  res.sendFile(path.join(__dirname, '../../public/animals.html'));
});

router.get('/zookeepers', (req,res) => {
  res.sendFile(path.join(__dirname,'../../public/zookeepers.html'));
});

router.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});
// _______________________________ Client Side GET Requests_______________________________

module.exports = router;