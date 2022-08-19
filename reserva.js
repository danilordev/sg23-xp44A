
const findID = () => {

    const url = new URL(window.location.href);
    const id = url.searchParams.get('id');
    return id;
}
const IdReserva = document.querySelector('#achar-id').value = findID();

const exibirDetalhesEvento = document.querySelector('#cadastro-reserva');
exibirDetalhesEvento.addEventListener ('submit', async(event) => {
    event.preventDefault();
    const InputNome = document.querySelector('#nome');
    const InputEmail = document.querySelector('#Email');
    const InputIngressos = document.querySelector('#qtdIngressos');

    console.log(InputEmail.value);
    console.log(InputIngressos.value);
    console.log(IdReserva);
    console.log(InputNome.value);


    const valoresReserva = {
            "owner_name": InputNome.value,
            "owner_email": InputEmail.value,
            "number_tickets": InputIngressos.value,
            "event_id":IdReserva
        }
    const valoresJSON = JSON.stringify(valoresReserva);
    
    const dadosExibir =
        await fetch('https://xp41-soundgarden-api.herokuapp.com/bookings',{
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: valoresJSON

        }).then((response) => response.json());
       
})




    








