import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { getDatabase, ref, push }  from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';

const appSettings = {
    databaseUrl:"https://fir-app-fa94b-default-rtdb.firebaseio.com/"
}


const app = initializeApp(appSettings)
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList")

console.log(app);

const input = document.querySelector('#input-field');
const addBtn = document.querySelector('#add-button');


addBtn.addEventListener("click", ()=>{
    console.log(input.value);
    push(shoppingListInDB, inputValue)
});


