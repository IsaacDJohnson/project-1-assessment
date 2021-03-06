// API Grab https://goweather.herokuapp.com/weather/

const api = 'cef7417a9ee136739d382bfa300fb6c7'


    const local = document.querySelector('#location');
    const Cel = document.querySelector('.celsius');
    const Far = document.querySelector('.far');
    const descr = document.querySelector('.desc');

window.addEventListener('load', () => {
    getLocation();
    favoriteAdd();
    addBegin();
    addEventListeners();
})

function getLocation(){
    let long;
    let lat;
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        
  long = position.coords.longitude;
  lat = position.coords.latitude;
        
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;
          
      fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
        const { temp } = data.main;
        const place = data.name;
        const { description} = data.weather[0];
        const fahrenheit = (temp * 9) / 5 + 32;
            local.textContent = `${place}`;
            descr.textContent = `${description}`;
            Cel.textContent = `${temp.toFixed(2)} °C`;
            Far.textContent = `${fahrenheit.toFixed(2)} °F`;
        });
      });
    }
}


//Dark Mode Activate begin
document.querySelector('.lightDark').addEventListener
    ('click' ,() => {document.body.style.background = lightToDark()});

function lightToDark() {
  let element = document.body;
  element.classList.toggle('dark-mode');
} 
//Dark Mode Activate end


//liker
// const getLiker = document.querySelector('.liker')
// const getLikeAmount = document.querySelector('.likeAmount')
let liker = 0
const incrLiker = () => {
    const getLiker = document.querySelector('.liker')
    const getLikeAmount = document.querySelector('.likeAmount')
    liker ++
    getLikeAmount.innerHTML = `${liker}`
}
// const likeClick = () => {
//     incrLiker()
// }



//Favorite Add
function favoriteAdd() {
    const main = document.querySelector("#contactAdd")//contactAdd is main ID
    console.log(main)
  
    const contactField = document.querySelector("#contact-Add")//form ID
    const contactList = document.querySelector("#contacts")//ul ID
    
    contactField.addEventListener("submit", function(e){
        e.preventDefault()
        
        const addContact = document.querySelector("#comment-field").value//first input ID
        document.querySelector("#contacts")//ul ID
        contactList.innerHTML += 
        `<li> ${addContact} 
            <button id='contact-button' data-action="delete"> remove </button>
        </li>`
  
        contactField.reset()
    })
  
    // contactList.addEventListener("click", favoriteDelete)
}

function favoriteDelete(e){
    console.log(e.target)
    if (e.target.dataset.action === "delete") {
        e.target.parentElement.remove()
    }
}

  const main = document.querySelector("#contactAdd")//contactAdd is main ID
  console.log(main)

  const contactField = document.querySelector("#contact-Add")//form ID
  const contactList = document.querySelector("#contacts")//ul ID
  
//Favorite Add

function addEventListeners(){
    contactList.addEventListener("click", deleteFavorites)
    contactField.addEventListener("submit", commentAdd)
    contactList.addEventListener("click", favoriteDelete)
    getLiker.addEventListener(('click'), incrLiker)
}

function deleteFavorites(e) {
    console.log(e.target)
    if (e.target.dataset.action === "delete") {
        e.target.parentElement.remove()
    }
}

function commentAdd(e){
    
    e.preventDefault()
    
    const addContact = document.querySelector("#comment-field").value//first input ID
    document.querySelector("#contacts")//ul ID
    contactList.innerHTML += 
    `<li> ${addContact} 
        <button id='contact-button' data-action="delete"> remove </button>
    </li>`

    contactField.reset()
}

//Comment Add begin
function addBegin(){
    const main = document.querySelector("#contactAdd")
    console.log(main)
  
    const commentField = document.querySelector("#commentform")
    const commentList = document.querySelector("#comments")
    
    commentField.addEventListener("submit", function(e){
        e.preventDefault()
        
        const addComment = document.querySelector("#postID").value
        document.querySelector("#comments")
        commentList.innerHTML +=
        `<li> ${addComment} 
        
    </li>`
        commentField.reset()
    })
  
    // commentList.addEventListener("click", function(e){
    //     console.log(e.target)
    //     if (e.target.dataset.action === "delete") {
    //         e.target.parentElement.remove()
    //     }
    // })
}
    
