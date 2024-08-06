let listNumbersSecrets = [];
//Criando funções
function mudarTextoNoHtml(tag,text){
    document.querySelector(tag).innerHTML = text;
}
function generateNumSecret(){
    let numGenerated = parseInt((Math.random()*numSecret_max)+1);
    if (listNumbersSecrets.length == numSecret_max){listNumbersSecrets = [];};
    if (listNumbersSecrets.includes(numGenerated)){
        return generateNumSecret();
    }else{
        listNumbersSecrets.push = [numGenerated];
        return numGenerated;
    }
}
function generateMaxSecret(){
    return parseInt((Math.random()*100)+101);
}
function clearInput(){
    numEscolhido = document.querySelector('input');
    numEscolhido.value = "";
}
//Interação com CSS(Codigo pego no google), função feita por mim.
function setCursorStyle(id, style){
    document.getElementById(id).addEventListener('mouseover', function() {this.style.cursor = style;});
}
setCursorStyle("chutarbutton", "pointer");
setCursorStyle("reiniciar", "pointer");
//Definindo variaveis
let numSecret_max = generateMaxSecret();
let numTimer = 0;
let numSecret = generateNumSecret();
//Mudando o texto do html
mudarTextoNoHtml("h1", "Jogo do número secreto");
mudarTextoNoHtml("p", `Escolha um número entre 1 e ${numSecret_max}`);
//Interação com html
document.addEventListener('keypress', function(event) { if (event.key === 'Enter'){verifyButton();} });
function verifyButton(){
    if (document.querySelector('input').value != ""){
        numTimer ++;
        let numEscolhido =  document.querySelector('input').value;
        let stringTimer = numTimer > 1 ? "tentativas" : "tentativa";
        let stringMenorOrMaior = numEscolhido > numSecret ? "menor" : "maior";
        if (numEscolhido == numSecret){
            mudarTextoNoHtml("h1", "Acertou!")
            mudarTextoNoHtml("p", `Você descobriu o número secreto com ${numTimer} ${stringTimer}`);
            document.getElementById("reiniciar").removeAttribute("disabled");
        }else{
            mudarTextoNoHtml("p", `O número secreto é ${stringMenorOrMaior} que ${numEscolhido}`);
            clearInput();
        }
    }
}
function reiniciarButton(){

    numSecret = generateNumSecret();
    clearInput();
    numTimer = 0;
    mudarTextoNoHtml("h1", "Jogo do número secreto");
    mudarTextoNoHtml("p", "Escolha um número entre 1 e 100");
    document.getElementById("reiniciar").setAttribute("disabled", true);;
}