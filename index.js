const divPai = document.querySelector('#divPai-index')


async function ObjectNew (){
    const response = await fetch('https://xp41-soundgarden-api.herokuapp.com/events');
    const dados = await response.json();
    console.log (dados);
    const TresEventos = dados.slice (0,3);
    
    TresEventos.map((post) => {
        
        const artigo = document.createElement('article');
        const nomeData = document.createElement('h2');
        const atracoes = document.createElement('h4');
        const descricao = document.createElement('p');
        const link = document.createElement('a');

        divPai.className = "container d-flex justify-content-center align-items-center";
        artigo.className = "evento card p-5 m-3";
        nomeData.innerText = (`${post.name} - ${post.scheduled.substring(0,10).replaceAll('-','/')}`);
        atracoes.innerText = post.attractions.join(", ");
        descricao.innerText = post.description;
        link.setAttribute("href",`./reservar-ingresso.html?id=${post._id}`);
        link.className = "btn btn-primary";
        link.innerText = "reservar ingresso";
        
        
        artigo.appendChild(nomeData);
        artigo.appendChild(atracoes);
        artigo.appendChild(descricao);
        artigo.appendChild(link);

        divPai.appendChild(artigo);
    })

}

ObjectNew ();


