const functions = require('firebase-functions');
const wfh = require('wfh-excuses')()

exports.wfh = functions.https.onRequest((req, res) => {
  res.send(wfh.pick(req.query.lang))
});
