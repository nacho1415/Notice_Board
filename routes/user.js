const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
  res.locals.user = null;
  res.locals.followerCount = 0;
  res.locals.followingCount = 0;
  res.locals.followerIdList = [];
  next();
});

router.post('/check', (req, res, next) => {
  console.log(req.body)
  console.log("dasd")
  return res.send({ success: true })
})

router.get('/', (req, res, next) => {
  const twits = ["asdasd"];
  res.render('main', {
    title: 'NodeBird',
    twits,
  });
});

module.exports = router;