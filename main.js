

function ex001(){
    alert("bem vindo ao site");
    let altura = prompt("DIGITE SUA ALTRA:")
    if(altura <=1.5){
        alert("SE DIVIRTA!")
    } else{
        alert("voce não pode entrar");
    }


}

function ex002(){
    alert("Bem vindo ao site");
    let estoque = prompt("valor do estoque:")
    if(estoque >=5){
        alert("OK")
    } else{
        alert("Estoque esta baixo")
    }
}

function ex001op(){
    alert ("bem vindo a operação")
    let op = prompt("Digite o valor:")
    if(op < 765.5){
        alert("ISENTO!!")
    } else{
        alert("taxa de 10%");
    }
}

function ex002op(){
    alert ("bem vindo a operação")
    let nota = prompt("digite o valor:")
    if (nota > 4){
        alert("APROVADO")
    } else{
        alert("REPROVADO");
    }
}

function ex003op(){
    alert ("bem vindo a operação")
    let cor1 = prompt("digite a cor:")
    let cor2 = prompt("Digite a segunda cor:")
    if (cor1 != cor2 ){
        alert("DIFERENTE")
    } else{
        alert("INGUAL");
    }
}

function ex004op(){
    alert ("bem vindo a operação")
    let valor = prompt("digite o valor:")
    if (valor <= 1){
        alert("baixo")
    } else{
        let resultado = valor * 100 
        alert(`o valor é ${resultado}`)
    }
}

function ex005op(){
    alert ("bem vindo a operação")
    let valor = prompt("digite o valor:")
    if (valor <= 3.5){
        alert("Barato")
    } else{
        
        alert(`valor ${valor}`)
    }
}

function ex006op(){
    alert("bem vindo a operação")
    let nome = prompt("digite o nome:")
    if (nome == "marisa"){
        alert("Certo");
    } else{
        alert("errado");
    }
}

