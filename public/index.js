async function carregarAnimais(){
    const response = await axios.get('http://127.0.0.1:8000/animais')
    const animais = responde.data

    const lista = document.getElementById('lista-animais')

    animais.forEach(animal => {
        const item = document.createElement('li')
        item.innerHTML = animal.name

        lista.appendChild(item)
    });
}

function app(){
    console.log("App Iniciado")
    carregarAnimais();
}

app()