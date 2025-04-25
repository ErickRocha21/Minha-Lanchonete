import './App.css'
import './styles.css'
import Cardapio from "./componentes/cardapio"

function App() {
  

  return (
    <>
      {/*<!-- ÁREA DOS ÍCONES DAS REDES SOCIAIS -->*/}
        <div className="social-icons">
            <a href="https://www.linkedin.com/in/erick-rocha21/" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/ErickRocha21" target="_blank"><i class="fab fa-github"></i></a>
            <a href="https://www.instagram.com/erickrochas21/" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="mailto:ericksant@gmail.com?subject=Fale%20Conosco"><i class="far fa-envelope"></i></a>
            <a href="https://wa.me/5521995575755" target="_blank" class="whatsapp-link"><i class="fab fa-whatsapp"></i></a>
        </div>   
      
      <div class="titulo-Cardapio"> 
        <h3>Complexo Lanches</h3>
      </div>

      <div class="menu-container">
        <Cardapio />
      </div>

      <footer>
        Desenvolvido por <a href="https://github.com/ErickRocha21" target="_blank">Erick Rocha</a> no Curso de Programador Front-End no Senai Maracanã Todos os direitos reservados - 2025
      </footer>
    </>
  )
}

export default App;
