import React from 'react';
import './Newsletter.scss';
import Button from '../../components/button/Button';
import { ReactComponent as Form } from '../../assets/svgs/details.svg';
import { ReactComponent as Separator } from '../../assets/svgs/separators/stroke.svg';

class Newsletter extends React.Component {
  state ={
    userInput: '',
  }

  handleInput = (e) => {
    const { value } = e.target;

    this.setState({ userInput: value });
  }

  handleSubmit = () => {
    const { userInput } = this.state;
    window.alert(userInput);
    this.setState({ userInput: '' });
  }

  render() {
    const { userInput } = this.state;
    return (
      <div className="newsletter-container">
        <div className="separator">
          <Separator />
        </div>
        <div className="sign">
          <div className="img-wrapper">
            <img
              src="https://cdn.getyourguide.com/tf/assets/static/newsletter-signup/newsletter-background.jpg"
              alt="newslleter"
            />
          </div>
          <div className="form-wrapper">
            <span className="title">Wish you were there</span>
            <span className="description">
              {`Sign up for our newsletter and discover travel experiences you'll
              really want to try.`}
            </span>
            <form>
              <div className="input-wrapper">
                <label htmlFor="email">
                  <input type="email" id="email" value={userInput} placeholder="Your email" onChange={this.handleInput} />
                  <div className="details-label">
                    <Form />
                  </div>
                </label>
              </div>
              <Button btnClass="bg-blue" text="Get inspired" click={this.handleSubmit} />
            </form>
          </div>
        </div>
        <span className="privacy">
          By signing up, you agree to receive promotional emails. You can
          unsubscribe at any time. For more information, read our
          {' '}
          <a href="www.privacy" className="link">
            Privacy statement
          </a>
          .
        </span>
      </div>
    );
  }
}
export default Newsletter;
