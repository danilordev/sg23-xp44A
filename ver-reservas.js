const SOUND_URL = 'https://xp41-soundgarden-api.herokuapp.com/bookings';

const listarEventos = async () => {

    const eventos = await fetch(SOUND_URL, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        }
    }).then((resposta) => {

        //retorna lista em array de objetos
        return resposta.json();
    });

    // console.log(eventos);

    const tbody = document.querySelector('#tbodyAdm');

    let htmlEventos = "";

    eventos.forEach((evento) => {
        htmlEventos += `
            <tr style = 'text-align:center;'>
                <th>${evento._id}</th>
                <td>${evento.owner_name}</td>
                <td>${evento.owner_email}</td>
                <td>${evento.number_tickets}</td>
              </tr>
        `;
    });

    tbody.innerHTML = htmlEventos;


}

listarEventos();