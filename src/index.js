import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
  addDoc,
} from 'firebase/firestore'
const fs = require('fs')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDtDB3nLYXBOWZi57QsVMmpEWsEtsbJ8Vw',
  authDomain: 'trim-odyssey-366002.firebaseapp.com',
  projectId: 'trim-odyssey-366002',
  storageBucket: 'trim-odyssey-366002.appspot.com',
  messagingSenderId: '1087084535670',
  appId: '1:1087084535670:web:14dcf3cfb8b3bb94d52457',
  measurementId: 'G-VFSDBQ9BM7',
}

//initialize firestore
initializeApp(firebaseConfig)

//services
const db = getFirestore()

//collection refernce
const colRef = collection(db, 'employees')

//get documents
getDocs(colRef)
  .then((snapshot) => {
    let employees = []
    snapshot.docs.map((doc) => {
      employees.push({ ...doc.data(), id: doc.id })
    })
    console.log(employees)
  })
  .catch((error) => {
    console.log('error getting employees', error)
  })

//clear firebase docs

//read json file and add documentsone time
const employeeData = require('../assets/emplyees.json')


//add documents one by one

employeeData.map((emp)=>{
  db.collection('employees').doc().set({
    first_name: emp.first_name,
    last_name: emp.last_name,
    email: emp.email,
    number: emp.number,
    gender: emp.gender,
    id: emp.id,
    photo: emp.photo,
  });
// setDoc(colRef, {
//   first_name: emp.first_name,
//   last_name: emp.last_name,
//   email: emp.email,
//   number: emp.number,
//   gender: emp.gender,
//   id: emp.id,
//   photo: emp.photo,
// })
})



// fs.readFile('./emplyees.json', (err, jsonString) => {
//   if (err) {
//     console.log(err)

//   } else {
//     console.log(jsonString)
//     res.send(buffer)
//   }
// })

// router.get('/file/read', (req, res, next) => {
  
//   fs.readFile('./emplyees.json', (err, jsonString) => {
//     if (err) {
//       console.log(err)
  
//     } else {
//       console.log(jsonString)
//       res.send(buffer)
//     }
//   }) 
// })

