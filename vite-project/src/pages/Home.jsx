
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <nav className="home-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/sobre" className="nav-link">Sobre</Link>
        <Link to="/contato" className="nav-link">Contato</Link>
      </nav>

      <header className="home-header">
        <h1>Crie seus vídeos online</h1>
        <p className='p1'>Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.</p>
        <button className="home-button">Começar agora!</button>
      </header>
        <img className="home-image" src="./src/assets/img-home.png"/>

      <section className="home-services">
        <div className="home-service-card" id='hs1'>
          <h2>01</h2>
          <img className="img" src="./src/assets/imagem 2.png"/>
          <h3>Youtube</h3>
          <p>Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.</p>
        </div>
        <div className="home-service-card" id='hs2'>
          <h2>02</h2>
          <img className="img2" src="./src/assets/imagem 3.png"/>
          <h3>Tiktok</h3>
          <p>Faça sua criatividade brilhar em vídeos curtos e envolventes que vão ativar a comunidade global do TikTok.</p>
        </div>
        <div className="home-service-card" id='hs3'>
          <h2>03</h2>
          <img className="img3" src="./src/assets/imagem4.png"/>
          <h3>Facebook</h3>
          <p>Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.</p>
        </div>
        <div className="home-service-card" id='hs4'>
          <h2>04</h2>
          <img className="img4" src="./src/assets/imagem5.png"/>
          <h3>Instagram</h3>
          <p>Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
