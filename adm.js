const tbody = document.querySelector('#tbodyAdm');

async function NewObject (){
    const response = await fetch('https://xp41-soundgarden-api.herokuapp.com/events');
    const dados = await response.json();
    console.log (dados);


   dados.map((post) => {
        
        const tr = document.createElement('tr');
        const th = document.createElement('th');
        const tdPrimeiro = document.createElement('td');
        const tdSegundo = document.createElement('td');
        const tdTerceiro = document.createElement('td');
        const tdCheio = document.createElement('td');
        const buttonVerReservas = document.createElement('a');
        const buttonEdit = document.createElement('a');
        const buttonDelete = document.createElement('a');

        th.setAttribute = (scope='row');

        tdPrimeiro.innerText = post.scheduled;
        tdSegundo.innerText = post.name;
        tdTerceiro.innerText = post.attractions.join(', ');
        
        buttonVerReservas.className = 'btn btn-dark';
        buttonEdit.className = 'btn btn-secondary';
        buttonDelete.className = 'btn btn-danger';

        buttonVerReservas.innerText = "ver reservas";
        buttonEdit.innerText = "editar";
        buttonDelete.innerText = "excluir";

        buttonVerReservas.setAttribute = ('href', `/reservas.html?id=${post._id}`);
        buttonEdit.setAttribute = ('href', `/editar-evento.html?id=${post._id}`);
        buttonDelete.setAttribute = ('href', `/editar-evento.html?id=${post._id}`);

        tdCheio.appendChild(buttonVerReservas);
        tdCheio.appendChild(buttonEdit);
        tdCheio.appendChild(buttonDelete);

        tr.appendChild(th);
        tr.appendChild(tdPrimeiro);
        tr.appendChild(tdSegundo);
        tr.appendChild(tdTerceiro);
        tr.appendChild(tdCheio);

        tbody.appendChild(tr);

    })
}
NewObject();