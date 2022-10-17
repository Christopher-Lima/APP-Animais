async function carregarAnimais(){
    const response = await axios.get('http://localhost:8000/animais')

    const animais = response.data

    const lista = document.getElementById('lista-animais')

    animais.forEach(animal => {
        const item = document.createElement('li')
        item.innerText = animal.nome

        lista.appendChild(item)
    });
}

function manipularFormulario(){
    const form_animal = document.getElementById('form-animal')
    const input_nome = document.getElementById('nome')

    form_animal.onsubmit = (event) => {
        event.preventDefault()
        const nome_animal = input_nome.value
        alert('Submite chmamado');
    }
}

function app(){
    console.log("App Iniciado")
    carregarAnimais();
    manipularFormulario();
}

app()