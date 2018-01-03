import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyBcmgxgt4URWYXNinP-Ta9r32afRA--Vaw',
  authDomain: 'sociomile-pwa.firebaseapp.com',
  databaseURL: 'https://sociomile-pwa.firebaseio.com',
  projectId: 'sociomile-pwa',
  storageBucket: 'sociomile-pwa.appspot.com',
  messagingSenderId: '1021728951114'
}
firebase.initializeApp(config)

export default {
  database: firebase.database()
}
