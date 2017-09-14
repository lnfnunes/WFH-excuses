// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database. 
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const pickExcuse = require('./wfh-excuses')

exports.wfh = functions.https.onRequest((req, res) => {
  // res.send("Hello from Firebase!");
  admin.database().ref('/').once('value')
    .then(function(snapshot) {
      const db = snapshot.val()
      const wfh = pickExcuse(db)
      const result = wfh.pick(req.query.lang)
      res.status(200).send(result);
    })
    .catch(err => {
      console.error(err)
      res.status(500).send({error: err.message})
    });
});
