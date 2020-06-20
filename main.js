//Getting the section by id
// var inputValue = document.getElementById('country');
// var details = document.getElementById('results')

//getting the api from the server
// const res = await fetch('https://api.covid19api.com/summary');
// var url = 'https://api.covid19api.com/summary'

//making sure the input field is not left blank
// document.getElementById('cases').addEventListener("click",function(){
//     if(inputValue.value === ''){
//         document.getElementById("demo").innerHTML = 'Input cannot be empty';
        
//         clearTimeout(10000);
//     }
//     else{
//         document.getElementById('results').style.display = "block";
//         setTimeout(theDisplay(),5000);
//     }
// })



//Clearing the ouput fot fresh ones to enter
// inputValue.addEventListener("click",function() {
//     details.innerHTML = " "
//     details.style.display = "none"
//   })
  
//   function theDisplay() {
//     document.getElementById("loader").style.display = "none"
//     details.style.display = "block";
//       getDetails();
  
// }






var input = document.getElementById("input") 

//Getting the button then making sure that per click it runs this function
document.querySelector('#cases').addEventListener("click",function(e) {
  //This if makes sure the input is not empty
  e.preventDefault();
  if (input.value === "") {
    alert("Input cannot be empty")
  }
  else{
    //If the input is not empty
    //Fetch the API
  fetch('https://api.covid19api.com/total/country/' + input.value)
  .then(res => res.json())  //Converting it from an object to a JSON file
  .then(data => {   //This is the data we are working with'
  //Check the console; You would see that its a lot of data
    console.log(data)   //This is just a check to show that our code runs and it returns our data
    var lastItem = data[data.length - 1];     //This is to get the very last Item on the data returned array
    console.log(lastItem)   //This just shows that it works

    //From here we can now start placing our data in places
    output = `
    <h2>${lastItem.Country}</h2>
    <p>Confired: ${lastItem.Confirmed}</p>
    <p>Active: ${lastItem.Active}</p>
    <p>Recovered: ${lastItem.Recovered}</p>
    <p>Deaths: ${lastItem.Deaths}</p>
    `
    // output = `
    
    // <h2>${lastItem.Country}</h2>
    // <p>Confired: ${lastItem.TotalConfirmed}</p>
    // <p>Active: ${lastItem.Active}</p>
    // <p>Recovered: ${lastItem.TotalRecovered}</p>
    // <p>Deaths: ${lastItem.TotalDeaths}</p>
    // `
    //Then assign them to a div in the HTML
    document.getElementById("results").innerHTML = output 
  })
  
  //Incase if there is an error, this will show the error in the console
  .catch(err => console.log(err))
}
})


// fetch('https://api.covid19api.com/summary')
//   .then(res => res.json()) 
//   .then(data => {  console.log(data) })