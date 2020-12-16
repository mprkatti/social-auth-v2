import React from 'react'
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class Header extends React.Component {

  getLabel = () => {
    if (this.props.isAuthenticated) {
      return 'Sign Out';
    } else {
      return 'Sign In with Google';
    }
  }

  componentDidMount() {

    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '708151511536-mrtn16ihas6nodbsadobqtkh75ltd4i1.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        // this.setState({ isAuthenticated: this.auth.isSignedIn.get() });
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = (isAuthenticated) => {
    if (isAuthenticated) {
      this.props.signIn(this.auth.currentUser.get().getId());
      console.log('Login action sent');
    } else {
      console.log('Logout Action sent');
      this.props.signOut();
    }

  }

  renderLoginButton() {
    return (
      <a className=" ui blue large  right floated  button" onClick={(e) => this.onSignInClick(e)}>
        <i className="medium google plus icon"></i> {this.getLabel()}
      </a>
    );

  }

  renderLogoutButton() {

    return (
      <a className=" ui negative large  right floated  button" onClick={(e) => this.onSignOutClick(e)}>
        <i className="medium google plus icon"></i> {this.getLabel()}
      </a>
    );

  }

  onSignInClick(e) {
    e.preventDefault();
    this.auth.signIn();

  }

  onSignOutClick(e) {
    console.log('Inside onSignOutClick', e.target);
    e.preventDefault();
    this.auth.signOut();
  }

  render() {
    return (
      <div>

        <div className="ui  inverted segment">
          <div style={{ width: '100%', padding: '20px', top: '10px' }}>
            <h1 style={{ textAlign: 'center' }}>Welcome to the Oyster</h1>
          </div>
          <div className="ui large  pointing menu transition ">
            <div className="ui container">
              <a className="active blue item">Home </a>
              <a className="blue item">About</a>
              <a className="blue item">Company</a>
              <a className="blue item">Careers</a>
            </div>
            {this.props.isAuthenticated ? this.renderLogoutButton() : this.renderLoginButton()}

          </div>
        </div >
      </div >
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
};

export default connect(mapStateToProps, { signIn, signOut })(Header);