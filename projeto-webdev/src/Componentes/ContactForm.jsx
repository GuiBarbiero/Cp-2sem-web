
function ContactForm() {
  return (
    <form className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" name="name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Mensagem:</label>
        <textarea id="message" name="message"></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default ContactForm;
