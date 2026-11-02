export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <p><strong>Email:</strong> afrozashaweli1003050@gmail.com</p>
            
            <p><strong>Location:</strong> Dhaka, Bangladesh</p>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label>Name</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows={5} required />
              </div>
              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
