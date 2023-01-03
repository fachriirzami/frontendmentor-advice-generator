const url = "https://api.adviceslip.com/advice"
      
advice()

//USING fetch
function advice(){
fetch(url)
    .then((myObject) => myObject.json())
    .then((content) => {
        document.getElementById("id").innerHTML = "ADVICE #" + content.slip.id
        document.getElementById("advice").innerHTML = '"' + content.slip.advice + '"'
    })
}

// USING async function
// async function getAPI(){
//   let myObject = await fetch(url)
//   let content = await myObject.json()

//   document.getElementById("id").innerHTML = "ADVICE #" + content.slip.id
//   document.getElementById("advice").innerHTML = '"' + content.slip.advice + '"'
// }
// getAPI()