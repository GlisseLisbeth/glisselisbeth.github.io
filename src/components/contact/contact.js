import React, { Component, Fragment } from 'react';
import axios from 'axios';

import './contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: '',
      fEmail: '',
      fSubject: '',
      fMessage: '',
      mailSent: false,
      error: null
    };
  }

  handleFormSubmit = e => {
    e.preventDefault();
    axios({
      method: 'post',
      url: `${process.env.REACT_APP_API}`,
      headers: { 'content-type': 'application/json' },
      data: this.state
    })
      .then(result => {
        if (result.data.sent) {
          this.setState({
            mailSent: result.data.sent
          });
          this.setState({ error: false });
        } else {
          this.setState({ error: true });
        }
      })
      .catch(error => this.setState({ error: error.message }));
  };

  render() {
    const { data } = this.props;
    const { fName, fEmail, fSubject, fMessage, mailSent, error } = this.state;
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

              <form action="#" name="contactForm" id="contactForm">
                <div className="form-field">
                  <input
                    name="contactName"
                    type="text"
                    id="fName"
                    placeholder="Su nombre"
                    value={fName}
                    onChange={e => this.setState({ fName: e.target.value })}
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
                        id="fEmail"
                        placeholder="Su correo electrónico"
                        value={fEmail}
                        onChange={e =>
                          this.setState({ fEmail: e.target.value })
                        }
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-six tab-full">
                    <div className="form-field">
                      <input
                        name="contactSubject"
                        type="text"
                        id="fSubject"
                        placeholder="Asunto"
                        value={fSubject}
                        onChange={e =>
                          this.setState({ fSubject: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="form-field">
                  <textarea
                    name="contactMessage"
                    id="fMessage"
                    placeholder="Mensaje"
                    rows="10"
                    cols="50"
                    value={fMessage}
                    onChange={e => this.setState({ fMessage: e.target.value })}
                    required=""
                  ></textarea>
                </div>
                <div className="form-field">
                  <button
                    className="submitform"
                    type="button"
                    onClick={e => this.handleFormSubmit(e)}
                  >
                    Enviar
                  </button>
                  <div id="submit-loader">
                    <div className="text-loader">Enviando...</div>
                    <div className="s-loader">
                      <div className="bounce1"></div>
                      <div className="bounce2"></div>
                      <div className="bounce3"></div>
                    </div>
                  </div>
                </div>
              </form>
              <div>
                {error && <div id="message-warning"></div>}
                {mailSent && (
                  <div id="message-success">
                    <i className="fa fa-check"></i>Su mensaje a sido enviado, gracias!
                  </div>
                )}
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
