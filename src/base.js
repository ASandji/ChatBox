import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCkiJvR10XrOOYg0Bwe4hGEk9bTXogswAs",
    authDomain: "chatbox-app-e16b1.firebaseapp.com",
    databaseURL: "https://chatbox-app-e16b1.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp} //initialisation appli

export default base // gestion base de donnée