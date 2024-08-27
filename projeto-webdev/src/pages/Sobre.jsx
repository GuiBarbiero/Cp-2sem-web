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
          <img src="src/assets/celular01cp.png" alt="App Screenshot 1" />
          <img src="src/assets/celular02cp.png" alt="App Screenshot 2" />
        </div>
      </section>

      <section className="planos">
        <h2>Planos</h2>
        <div className="planos-grid">
          <div className="plano individual">
            <h3>Individual</h3>
            <p>1 Usuário</p>
            <div className="dropdown">
              <select>
                <option>10 Vídeos R$15</option>
              </select>
            </div>
            <button>Cadastrar</button>
          </div>

          <div className="plano profissional">
            <h3>Profissional - Times</h3>
            <p>Usuários</p>
            <div className="dropdown">
              <select>
                <option>1-10 - Vídeos Ilimitados R$40</option>
                <option>+10 - Vídeos Ilimitados R$20</option>
              </select>
            </div>
            <button>Cadastrar</button>
          </div>

          <div className="plano corporativo">
            <h3>Corporativo</h3>
            <div className="contact-info">
            <img src="src/assets/mulhercp.png" alt="App Screenshot 1" />
            </div>
            <button>Entre em Contato</button>
          </div>
        </div>
      </section>


    </div>
  );
};

export default App;