// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBct0BQhlUyghR4qurBAVPN39lcJfRYMFY",
    authDomain: "profileapp-fe1f6.firebaseapp.com",
    databaseURL: "https://profileapp-fe1f6-default-rtdb.firebaseio.com",
    projectId: "profileapp-fe1f6",
    storageBucket: "profileapp-fe1f6.appspot.com",
    messagingSenderId: "5554106061",
    appId: "1:5554106061:web:aa272d19c2958ece744384"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {getDatabase, ref, get, set, child, update, remove} 
from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

const db = getDatabase();

// Initialize Variables
var enterID = document.querySelector(".input-user-id");
var searchBtn = document.querySelector(".btn-find-user");
var searchErr = document.querySelector(".search-error");

var userName = document.querySelector(".user-name");
var userDate = document.querySelector(".user-date");
var userCaption = document.querySelector(".user-caption");
var userFav = document.querySelector(".user-favorite");
var userImg = document.querySelector(".user-image");



function FindUser(){
    const dbref = ref(db)
    get(child(dbref,  enterID.value))
    .then((snapshot)=>{
        if(snapshot.exists()){
            userImg.src = snapshot.val().image;
            console.log(snapshot.val().image);
            userName.innerHTML = "Name: " + snapshot.val().name;
            userDate.innerHTML = "Date: " + snapshot.val().date;
            userFav.innerHTML = "Favorite: " + snapshot.val().favorite;
            userCaption.innerHTML = "Caption: " + snapshot.val().caption;

            searchErr.innerHTML = "";
        }
        else{
            searchErr.innerHTML = "User Not Found"
        }
    })
    .catch((error)=>{
        alert(error);
    })
}

searchBtn.onclick = FindUser;