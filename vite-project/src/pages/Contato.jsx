import { Link } from 'react-router-dom';
function ContactPage() {
    return (
        <div className="home-container">
          <nav className="home-nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/sobre" className="nav-link">Sobre</Link>
            <Link to="/contato" className="nav-link">Contato</Link>
          </nav>
    
          <div className="container">
            <div className="info-section">
              <h1 className="heading">Dúvidas e suporte, entre em contato:</h1>
              <div className="icon-container">
                <a href="#" className="icon-link">
                  <img src="../Cp-2sem-web/projeto-webdev/src/assets/twitterlogo.png"></img>
                  <i className="fab fa-twitter icon"></i>
                </a>
                <a href="#" className="icon-link">
                  <i className="fab fa-instagram icon"></i>
                </a>
                <a href="#" className="icon-link">
                  <i className="fab fa-discord icon"></i>
                </a>
              </div>
            </div>
            <spam className="barra"></spam>
            <div className="form-section">
              <form className="form">
                <div className="form-group">
                  <label className="label">Nome:</label>
                  <input type="text" className="input2" />
                </div>
                <div className="form-group">
                  <label className="label">E-mail:</label>
                  <input type="email" className="input3" />
                </div>
                <div className="form-msg">
                  <label className="label">Mensagem:</label>
                  <textarea className="textarea"></textarea>
                </div>
                <button type="submit" className="button">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      );
    }
    
    export default ContactPage;