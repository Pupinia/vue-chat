import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCcvYesia8guxS-nKhydif_JpVIoB-x7CU',
  authDomain: 'vue-chat-9da3b.firebaseapp.com',
  databaseURL: 'https://vue-chat-9da3b.firebaseio.com',
  projectId: 'vue-chat-9da3b',
  storageBucket: 'vue-chat-9da3b.appspot.com',
  messagingSenderId: '160082683173',
  appId: '1:160082683173:web:df50c4d3a5a97c92'
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
