const divGeral = document.querySelector('#cards-evento');
const artigoIdeal = document.querySelector('#artigo-eventos');

async function NovoObjeto (){
    const response = await fetch('https://xp41-soundgarden-api.herokuapp.com/events');
    const dados = await response.json();
    console.log (dados);


    dados.map((post) => {
        const artigo = document.createElement('article');
        const nomeData = document.createElement('h2');
        const atracoes = document.createElement('h4');
        const descricao = document.createElement('p');
        const button = document.createElement('a');

        artigo.className = 'class = evento card p-5 m-3';
        nomeData.innerText = (`${post.name} - ${post.scheduled}`);
        atracoes.innerText = post.attractions;
        descricao.innerText = post.description;
        button.setAttribute = ("href","#");
        button.className = "btn btn-primary";
        button.innerText = "reservar ingresso";
        

        artigo.appendChild(nomeData);
        artigo.appendChild(atracoes);
        artigo.appendChild(descricao);
        artigo.appendChild(button);

        divGeral.appendChild(artigo);
    })

}

NovoObjeto ();

