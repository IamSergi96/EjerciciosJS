const startGameButton = document.querySelector('[data-function="start-game"]');
const questionsNumber = document.querySelector('[data-function="questions-number"]');
const gameBoard = document.querySelector('[data-function="gameboard"]');
const checkButton = document.querySelector('[data-function="check-game"]');
let triviaData;

//funcionalidades
startGameButton.addEventListener("click", startGame);
checkButton.addEventListener("click", checkAnswers)
//funcion startGame
function startGame(){
    const numberOfQuestions = parseInt(questionsNumber.value);//cambiamos el valor de string en el input a integer
    if(numberOfQuestions<=0){
        alert("Please, insert at least 1");
        return;
    }
    fetchTriviaData(numberOfQuestions);
}
//funcion fetchTriviaData para peticion a API:
async function fetchTriviaData(numberOfQuestions){
    try{
        const response = await fetch(`https://opentdb.com/api.php?amount=${numberOfQuestions}&type=multiple`)//peticion con el numero de preguntas
        const data = await response.json(); //pasamos los datos a formato json
        triviaData = data.results //el resultado de los datos .jason (data) seran los datos del trivia
        displayQuestions();
    }catch(error){
        console.log("fetching error:",error);
    }
}
//funcion para dar las preguntas al usuario
function displayQuestions(){
    //primero limpliamos el gameboard
    gameBoard.innerHTML="";
    triviaData.forEach((question, index)=>{
        const questionDiv = document.createElement("div");
        questionDiv.innerHTML=`<p>Question ${index+1}: ${question.question}</p>`;
        if(question.type === "multiple"){
            //opcion con 4 respuestas
            const options = [...question.incorrect_answers, question.correct_answer];//todas opciones, incluyendo la correcta y la incorrecta. 
            options.sort(()=> Math.random()-0.5);//restar 0.5 es una convencion comun para ordenar aleatoriamente alrededor de 0 (la mitad de las veces se obtiene valor negativo y la otra mitad positivo, de Math.random)
            options.forEach((option, optionIndex)=>{
                //creamos el elemento de respuesta
                const respuesta = document.createElement("input");
                respuesta.type="radio";
                respuesta.name= `question-${index+1}`;
                respuesta.value=option;

                const label = document.createElement("label");
                label.appendChild(respuesta);
                label.innerHTML+=`${option}`;
                //las añadimos al div de preguntas
                questionDiv.appendChild(label);
            });

        }else if(question.type==="boolean"){
            //para las respuestas que sean true or false, dos opciones
            //aqui la verdadera
            const trueRespuesta = document.createElement("input")
            trueRespuesta.type = "radio";
            trueRespuesta.name = `question-${index + 1}`;
            trueRespuesta.value = "True";

            const trueLabel = document.createElement("label");
            trueLabel.appendChild(trueRespuesta);
            trueLabel.innerHTML+="True";

            //aqui las falsas
            const falseRespuesta = document.createElement("input");
            falseRespuesta.type="radio";
            falseRespuesta.name=`question-${index + 1}`;
            falseRespuesta.value="False";

            const falseLabel = document.createElement("label");
            falseLabel.appendChild(falseRespuesta);
            falseLabel.innerHTML+="False";

            //ahora las añadimos a las preguntas
            questionDiv.appendChild(trueLabel);
            questionDiv.appendChild(falseLabel);
        }
        //y luego todo al gameboard
        gameBoard.appendChild(questionDiv);
    });
    
}
//funcion checkAnswers
function checkAnswers(){
    const userAnswers = [];
    triviaData.forEach((question, index)=>{
        const selectedOption = document.querySelector(`input[name="question-${index + 1}"]:checked`);
        if(selectedOption){
            userAnswers.push(selectedOption.value);
        }else{
            userAnswers.push(null);//si el user no marca la respuesta en esa pregunta
        }
    });
    console.log("Respuestas:", userAnswers);//imprimimos las respuestas del usuario en consola (esto era para control)
    let finalResult = "Ckeck:\n";
    triviaData.forEach((question, index)=>{
        finalResult+=`Question${index + 1}: `;
        if(userAnswers[index] === question.correct_answer){
            finalResult+="Correct\n";
        }else{
            finalResult+=`Incorrect(Correct answer = ${question.correct_answer})\n`;
        }
    });
    alert(finalResult);
}