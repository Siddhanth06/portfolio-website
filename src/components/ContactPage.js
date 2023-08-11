import "./ContactPage.css";
function ContactPage() {
  return (
    <>
      <div className="container contact-container" id="contact">
        <div className="title">
          <h1 className="contact-title">
            GET <span className="highlight">IN TOUCH</span>
          </h1>
        </div>
        <div className="">
          <h3 className="contact-subtitle">
            i am always open to discssing product design work or partnership
          </h3>
        </div>
        <div className="contact-content">
          <div className="contact-left">
            <div className="contact-detail">
              <p className="contact-heading">Phone</p>
              <p className="contact-data">
                <ion-icon name="logo-whatsapp"></ion-icon> +917304120654
              </p>
            </div>
            <div className="contact-detail">
              <p className="contact-heading">Email</p>
              <p className="contact-data">
                <ion-icon name="mail"></ion-icon>chauhansid06@gmail.com
              </p>
            </div>
            <div className="contact-detail">
              <p className="contact-heading">Instagram</p>
              <p className="contact-data">
                <a
                  className="contact-data"
                  href="https://www.instagram.com/siddhant_chauhan0611/"
                  target="_b"
                  style={{ textDecoration: "none" }}
                >
                  <ion-icon name="logo-instagram"></ion-icon>@siddhanth0611
                </a>
              </p>
            </div>
            <div className="contact-detail">
              <p className="contact-heading">Linkedin</p>
              <p className="contact-data">
                <a
                  className="contact-data"
                  href="https://www.linkedin.com/in/siddhanth-chauhan-30a7a0208/"
                  target="_b"
                  style={{ textDecoration: "none" }}
                >
                  <ion-icon name="logo-linkedin"></ion-icon>siddhanth0611
                </a>
              </p>
            </div>
            <div className="contact-detail">
              <p className="contact-heading">Social Profiles</p>
              <p className="contact-data">
                <ion-icon name="logo-whatsapp"></ion-icon>
                <ion-icon name="logo-instagram"></ion-icon>
                <ion-icon name="logo-linkedin"></ion-icon>
                <ion-icon name="logo-facebook"></ion-icon>
              </p>
            </div>
          </div>
          <div className="contact-form">
            <div>
              <p className="form-title">
                If you have any suggestion, project or even you want to say
                Hello..please fill out the form below and i will get back to
                shortly.
              </p>
            </div>
            <div>
              <form
                className="form"
                action="https://formsubmit.co/8e265a8788aa92b927ea174fcb495b53"
                method="POST"
              >
                <input
                  className="form-input"
                  placeholder="YOUR NAME"
                  name="name"
                  type="text"
                />
                <input
                  className="form-input"
                  placeholder="YOUR EMAIL"
                  name="email"
                  type="email"
                />
                <textarea
                  className="form-input"
                  placeholder="YOUR MESSAGE"
                  name="message"
                />

                <div>
                  <button className="btn-primary align" type="submit">
                    <ion-icon name="send"></ion-icon>SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
