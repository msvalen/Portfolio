const Experience = require('../lib/resume');
const router = require('express').Router();

router.get('/', async function (req, res) {
  try {
    console.log('trying to get experience');
    const resume = await Experience.all;
    res.status(200).json({data: resume})
  } catch(err) {
    console.error(err);
    res.status(500).json({ error: err })
  }
});

module.exports = router;