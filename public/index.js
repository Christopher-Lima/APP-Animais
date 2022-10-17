function carregarAnimais(){
    axios.get('http://127.0.0.1:8000/animais').then(response => console.log(responde.data))
}

function app(){
    console.log("App Iniciado")
    carregarAnimais();
}

app()