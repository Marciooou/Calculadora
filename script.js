function somar(){
    const num1 = parseInt(document.getElementById("num1").value)
    const num2 = parseInt(document.getElementById("num2").value)
    
    const resultado = num1+num2
    document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
}

function subtrair(){
    const num1 = parseInt(document.getElementById("num1").value)
    const num2 = parseInt(document.getElementById("num2").value)
    
    const resultado = num1-num2
    document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
}

function multiplicar(){
    const num1 = parseInt(document.getElementById("num1").value)
    const num2 = parseInt(document.getElementById("num2").value)
    
    const resultado = num1*num2
    document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
}

function dividir(){
    const num1 = parseInt(document.getElementById("num1").value)
    const num2 = parseInt(document.getElementById("num2").value)
    
    const resultado = num1/num2
    document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
}

function raiz(){
    const num1 = parseInt(document.getElementById("num1").value)
    const num2 = parseInt(document.getElementById("num2").value)
    
    const resultado = num1num2
    document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
}
