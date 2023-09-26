
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase , ref , push , onValue , remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSetting = {
    databaseURL : 'https://realtime-database-413fc-default-rtdb.asia-southeast1.firebasedatabase.app/'
}
// data base connection
const app = initializeApp(appSetting)
const database = getDatabase(app)
const todoListInDb = ref(database, "todolist")


const newAddBtn = document.getElementById('add-new-item')
const mainEl = document.getElementById('main-el')
const listEl = document.getElementById('list-el')
const dateEl = document.getElementById('date')


// current date 
var Days = ['Sunday', 'Monday', 'Tuesday',
'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var Months = ['January', 'February', 'March', 'April',
'May', 'June', 'July', 'August', 'September',
'October', 'November', 'December'];

var currentDay = new Date();

// Get the current day name
var day = Days[currentDay.getDay()];

// Get the current month name
var month = Months[currentDay.getMonth()];

let date = currentDay.getDate()

dateEl.innerHTML = `${day} ${month} ${date}`

newAddBtn.addEventListener('click' , function(){
    mainEl.innerHTML = 
    `<textarea name="item" id="new-item" placeholder="Enter your text here" ></textarea>
    <button id="add-btn">Add</button>`
    document.getElementById('add-btn').addEventListener('click' , function(){
        const textValue =  document.getElementById('new-item').value
        push(todoListInDb , textValue)
        
        mainEl.innerHTML = ''
    })
})

onValue(todoListInDb, function(snapshot){
    
   
    if(snapshot.val() === null){
        listEl.innerHTML = ''
    }else{
        let todoListArray = Object.entries(snapshot.val())
        listEl.innerHTML =  ''
        for(let i = 0 ; i < todoListArray.length ;i++){
            mainEl.innerHTML = ''
            let currentItems = todoListArray[i]
            appendItemlist(currentItems)
        } 
       
    }
 
})
  
function appendItemlist(currentItems){
    let currentItemsId = currentItems[0]
    let currentItemsValue = currentItems[1]

    listEl.innerHTML += `<div class="wrap" id='list'>
    <label class="container">${currentItemsValue}
        <input type="checkbox"  id='${currentItemsId}'>
        <span class="checkmark"></span>
    </label>
</div>`

document.body.addEventListener('click' , function(e){
    if(e.target.id === currentItemsId){
        let id = e.target.id
        let exactLocationOfStoryInDB = ref(database, `todolist/${id}`)
        setTimeout(()=> remove(exactLocationOfStoryInDB) , 200)
    }
})

}