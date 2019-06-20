import React, { Component, Fragment } from 'react';
import './contact.css';

class Contact extends Component {
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <section id="contact">
          <div className="overlay"></div>

          <div className="row narrow section-intro with-bottom-sep animate-this">
            <div className="col-twelve">
              <h3>Contactáme</h3>
            </div>
          </div>

          <div className="row contact-content">
            <div className="col-seven tab-full animate-this">
              <h5>Envíame un mensaje</h5>

              <form name="contactForm" id="contactForm" method="post">
                <div className="form-field">
                  <input
                    name="contactName"
                    type="text"
                    id="contactName"
                    placeholder="Su nombre"
                    value=""
                    minLength="2"
                    required=""
                  />
                </div>
                <div className="row">
                  <div className="col-six tab-full">
                    <div className="form-field">
                      <input
                        name="contactEmail"
                        type="email"
                        id="contactEmail"
                        placeholder="Su correo electrónico"
                        value=""
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-six tab-full">
                    <div className="form-field">
                      <input
                        name="contactSubject"
                        type="text"
                        id="contactSubject"
                        placeholder="Asunto"
                        value=""
                      />
                    </div>
                  </div>
                </div>
                <div className="form-field">
                  <textarea
                    name="contactMessage"
                    id="contactMessage"
                    placeholder="Mensaje"
                    rows="10"
                    cols="50"
                    required=""
                  ></textarea>
                </div>
                <div className="form-field">
                  <button className="submitform" type="button">
                    Enviar
                  </button>
                  <div id="submit-loader">
                    <div className="text-loader">Sending...</div>
                    <div className="s-loader">
                      <div className="bounce1"></div>
                      <div className="bounce2"></div>
                      <div className="bounce3"></div>
                    </div>
                  </div>
                </div>
              </form>
              <div id="message-warning"></div>
              <div id="message-success">
                <i className="fa fa-check"></i>Your message was sent, thank you!
              </div>
            </div>

            <div className="col-four tab-full contact-info end animate-this">
              <h5>Mi información</h5>

              <div className="cinfo">
                <h6>Dónde me encuentras</h6>
                <p>{data.address}</p>
              </div>

              <div className="cinfo">
                <h6>Envíeme un email a</h6>
                <p>{data.email}</p>
                <p>{data.email2}</p>
              </div>

              <div className="cinfo">
                <h6>Llama al</h6>
                <p>Celular: (+051) 961064075</p>
                <p>Skype: glisse86</p>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Contact;
