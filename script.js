/* .js files add interaction to your website */


/*send call to senator*/

var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");
//Will need to explain that sometimes the DOM doesn't load all the way, so the browser can't find the element for JavaScript to use

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

/*
REFACTOR ITEM 2: 
Create a separate function for displaying the script.
Be sure to update function names.
*/

function generateScript() {
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var learning = document.getElementById("learning").value;

displayScript.innerHTML = "Hello, my name is " + name + " and I live in " + location + ".  I am calling to ask you to bring awareness to the anti-Asian American Pacific Islander sentiments that have arisen dramatically as a result of the COVID-19 pandemic. This racial discrimination has evolved from aggravated encounters to violent hate crimes, specifically targeting our elderly. It’s time we put a stop to this. The statistics show that " + learning + ". Please take the initiative to support and protect our AAPI community. Fight against racism and prejudice, and fight for equality and justice. Thank you for your time.";
}



/*Fact generator*/
var factList = [
  "In August 2021, more than 9,000 anti-Asian incidents had been reported since the beginning of the pandemic. - Stop AAPI Hate",/*0*/
  "63% of Asian adults say violence against Asian Americans in the U.S. is increasing. - Pew Research, 2022 ",/*1*/
  "48% of Asian American adults say making laws against hate crimes stronger would be the most effective policy. - Pew Research, 2022",/*2*/
  "The U.S. Department of Education reports that AAPI students already suffer from classroom bullying at higher rates than any other race or ethnicity. - AAPI Hate Crimes", /*3*/
  "43% of Asian American adults believe their local elected officials aren't properly addressing the violence against the AAPI community. - Pew Research, 2022"];/*4*/



var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}

