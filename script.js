const userInput = document.getElementById("guess-number-value");
const submit = document.getElementById("submit-btn");
const start = document.getElementById("start-btn");
const hint = document.getElementById("hint");
const guess = document.getElementById("all-guess");

function guessNumber(){
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
    
    submit.addEventListener("click", () => {
        let inputValue = parseInt(userInput.value.trim());
        userInput.value = "";
        if(inputValue < randomNumber){
            hint.innerText = "Too Low !!";
        }
        else if(inputValue > randomNumber){
            hint.innerText = "Too High !!";
        }
        else if(inputValue === randomNumber){
            hint.innerText = "Wow ! Number is Matched !!";
            submit.disabled = true;
            submit.classList.add("disabled");
            start.classList.remove("disabled");
        }
        else{
            alert("Enter a value between 0 to 100");
        }
    });

}

guessNumber();

start.addEventListener("click", () => {
    location.reload();
});