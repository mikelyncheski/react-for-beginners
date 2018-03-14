import Rebase from "re-base";
import firebase from "firebase";

// Initialize Firebase
const config = {
	apiKey: "AIzaSyBxoQg2zZAIA_W7RgcaY_1igrF7ypj0iCM",
	authDomain: "catch-of-the-day-harrier.firebaseapp.com",
	databaseURL: "https://catch-of-the-day-harrier.firebaseio.com"
	// projectId: "catch-of-the-day-harrier",
	// storageBucket: "catch-of-the-day-harrier.appspot.com",
	// messagingSenderId: "837283318630"
};
const firebaseApp = firebase.initializeApp(config);

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
