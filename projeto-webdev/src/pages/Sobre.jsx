import { Link } from 'react-router-dom';

const App = () => {
    return (
        <div className="home-container">
        <nav className="home-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/sobre" className="nav-link">Sobre</Link>
          <Link to="/contato" className="nav-link">Contato</Link>
        </nav>
  
        <section className="hero">
          <div className="content">
            <h1>Bem-vindo à revolução dos vídeos!</h1>
            <p>Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores.</p>
            <button>Baixe o app</button>
          </div>
          <div className="images">
            <img src="path/to/your/image1.png" alt="App Screenshot 1" />
            <img src="path/to/your/image2.png" alt="App Screenshot 2" />
          </div>
        </section>
  
        <section className="planos">
          <h2>Planos</h2>
          <div className="planos-grid">
            <div className="plano">
              <h3>Individual</h3>
              <p>1 Usuário</p>
              <p>10 Vídeos R$15</p>
              <button>Cadastrar</button>
            </div>
            <div className="plano">
              <h3>Profissional - Times</h3>
              <p>1-10 Usuários</p>
              <p>Vídeos Ilimitados R$48</p>
              <p>+10 Usuários</p>
              <p>Vídeos Ilimitados R$20</p>
              <button>Cadastrar</button>
            </div>
            <div className="plano">
              <h3>Corporativo</h3>
              <p>Plano sob medida para empresas.</p>
              <button>Entre em Contato</button>
            </div>
          </div>
        </section>
  
        <footer>
          <p>&copy; 2024 Revolução dos Vídeos. Todos os direitos reservados.</p>
        </footer>
      </div>
    );
  };
  
  export default App;