import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDB3MJFgWp8qgSw6aBSz8yWjCAzmoWKrFs',
  authDomain: 'netflix-clone-2f4cb.firebaseapp.com',
  databaseURL: 'https://netflix-clone-2f4cb.firebaseio.com',
  projectId: 'netflix-clone-2f4cb',
  storageBucket: 'netflix-clone-2f4cb.appspot.com',
  messagingSenderId: '680220684999',
  appId: '1:680220684999:web:1b855e18e1553698f5c4e2',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
