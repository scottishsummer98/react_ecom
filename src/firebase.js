import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAAF_b7iRFczhuISHcAfk5hhNGADNrp09M',
  authDomain: 'react-ecom-21931.firebaseapp.com',
  projectId: 'react-ecom-21931',
  storageBucket: 'react-ecom-21931.appspot.com',
  messagingSenderId: '1019605305897',
  appId: '1:1019605305897:web:10818d4c8c5bc52379ea38',
}

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)

export { auth, db }
