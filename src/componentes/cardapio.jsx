import React from "react"; 

const itens = [
    {nome: 'Cachorro Quente', preco: 7.0, imagem: '/public/imagens/cachorro_quente.png'},
    {nome: 'Bauru Simples', preco: 7.0, imagem: '/public/imagens/bauru.png'},
    {nome: 'Bauru com Ovo', preco: 7.0, imagem: '/public/imagens/bauru_com_ovo.png'},
    {nome: 'Hamburguer', preco: 7.0, imagem: '/public/imagens/hamburguer.png'},
    {nome: 'Cheeseburguer', preco: 7.0, imagem: '/public/imagens/cheeseburguer.png'},
    {nome: 'Refrigerante', preco: 7.0, imagem: '/public/imagens/refrigerante.png'},

]

function Cardapio(){
    return(
<div className="menu-coneiner">
        {itens.map((item, index) => (
            <div key={index} className="menu-item">
                <h3> {item.nome}  </h3>
                <p>R$ {item.preco.toFixed(2)}  </p>
                <img src= {item.imagem} className='menu-item-img'></img>

                </div>
        ))
        }
</div>
    )
}

export default Cardapio;