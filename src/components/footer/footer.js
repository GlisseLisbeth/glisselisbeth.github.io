import React, { Component, Fragment } from 'react';
import './footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thePositionFooter: false
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        this.setState({ thePositionFooter: true });
      } else {
        this.setState({ thePositionFooter: false });
      }
    });
    window.scrollTo(0, 0);
  }

  render() {
    const { thePositionFooter } = this.state;

    return (
      <Fragment>
        <footer>
          <div className="footer-bottom">
            <div className="row">
              <div className="col-twelve">
                <div className="copyright">
                  <span>
                    © Copyright <a href="https://www.glisse.co">Dev Glisse</a>
                  </span>
                  <span>
                    Template by{' '}
                    <a href="https://www.styleshout.com/templates/preview/Infinity10/">
                      Infinity10
                    </a>
                  </span>
                  <span>
                    Design by{' '}
                    <a href="http://www.styleshout.com/">styleshout</a>
                  </span>
                  <span>
                    Hecho by <a href="https://reactjs.org">reactJS</a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div id="go-top" className={`${thePositionFooter ? 'visible' : ''}`}>
            <a className="smoothscroll" title="Back to Top" href="#top">
              <i className="fa fa-long-arrow-up" aria-hidden="true"></i>
            </a>
          </div>
        </footer>
      </Fragment>
    );
  }
}

export default Footer;
