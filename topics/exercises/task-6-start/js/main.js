window.onload = run;

function run() {
  document.querySelector("#stepOneButton").addEventListener("click", fetchText);


 /****** PART A:: FETCH */  
 async function fetchText() {
    console.log("in fetch");
    let raw_rainbow_text = "";
    try {
      let response = await fetch("./files/rainbow.txt");
      let parsedResponse = await response.text();
      raw_rainbow_text = parsedResponse;
      console.log(raw_rainbow_text);
      document.getElementById('stepOneButton').style.display = 'none';
      document.getElementById('inputDiv').style.display = 'block';
      document.getElementById('rainbow_text').textContent = raw_rainbow_text;
      document.querySelector("#resetButton").addEventListener("click", resetPoem);
      runPartB(raw_rainbow_text);
    } catch (e) {
      console.log(e);
    }
  }

  /****** PART B:: TEXT PROCESSING  */
  function runPartB(originalRainBowText) {
    document
      .querySelector("#produce-poem")
      .addEventListener("click", producePoem);

   /* FILL IN HERE */
    function producePoem() {
      console.log(originalRainBowText)
      let phraseInput = "";
      phraseInput = document.getElementById('phrase').value;
      console.log(phraseInput);
      const phrase_as_array =  phraseInput.split(/[ .!?,\n]/);
      const rainbow_tokens = originalRainBowText.split(/[ .!?,\n]/);
      console.log(phrase_as_array);
      console.log(rainbow_tokens);
      //SR
      runPartC(rainbow_tokens, phrase_as_array);

    }
  }


  /****** PART C:: POEM CREATION  */
  function runPartC(rainbow_words, seed_phrase_array) {
    console.log(rainbow_words);
    console.log(seed_phrase_array);
    for(let i = 0;i < seed_phrase_array.length; i++){
      let nextChar = seed_phrase_array[i];
      let incrementLetter = 0;
      console.log(nextChar.charAt(incrementLetter));
      
      console.log(nextChar)
      for (let j = 0; j < rainbow_words.length; j++){
        let nextChar2 = rainbow_words[j];
        if (nextChar2.charAt(incrementLetter) = nextChar.charAt(incrementLetter)){
          return nextChar2;
          incrementLetter += 1;
        } 
        console.log(nextChar2)
      }
      
      

    }
    //to next stage
    runPartD(poem_sentence);
  }

  
   /****** PART D:: VISUALIZE  */
  function runPartD(new_sentence){

  }

  /****** PART E:: RESET  */
  function resetPoem() {
  /*** TO FILL IN */
  
  }
} //window onload


