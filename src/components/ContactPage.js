import "./ContactPage.css";
function ContactPage() {
  return (
    <>
      <div className="container contact-container">
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
                <ion-icon name="logo-instagram"></ion-icon>siddhanth0611
              </p>
            </div>
            <div className="contact-detail">
              <p className="contact-heading">Linkedin</p>
              <p className="contact-data">
                <ion-icon name="logo-linkedin"></ion-icon>siddhanth/30876
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
              <form className="form">
                {/* <div className="input-container">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="YOUR NAME"
                  />
                  <input
                    type="text"
                    className="form-input"
                    placeholder="YOUR EMAIL"
                  />
                </div>
                <div style={{ marginTop: "2rem" }}>
                  <textarea
                    cols="100"
                    rows="10"
                    className="form-input"
                    placeholder="YOUR MESSAGE "
                  />
                </div> */}
                <input className="form-input" placeholder="YOUR NAME" />
                <input className="form-input" placeholder="YOUR EMAIL" />
                <textarea
                  className="form-input"
                  placeholder="YOUR MESSAGE"
                  //   cols="20"
                  //   rows="10"
                />

                <div>
                  <button className="btn-primary">
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
