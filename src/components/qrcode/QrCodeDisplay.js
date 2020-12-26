import React, { Component } from 'react';
import axios from 'axios';
import { SERVER_URL } from '../../util/config';

class QrCodeDisplay extends Component {

  state = { token: '', img: '', name: 'CloudNativeApp', loading: false };

  componentDidMount() {
    //call the API
    this.setState({ loading: true })
    axios.post(`${SERVER_URL}/qrcode`, {
      name: this.state.name
    }).then(response => {
      console.log(response);
      this.setState({ loading: false });
      const qr_data = response.data.response.qr_data;
      this.setState({ img: qr_data });
    }).catch(err => {
      this.setState({ loading: false });
      console.log(err);
    });

  }

  renderLoader() {

    if (this.state.loading) {
      return (<div className="ui segment" style={{ align: 'center', height: '250px ', marginRight: '200px' }}>
        <div className="ui active dimmer">
          <div className="ui huge text entered inline loader">Loading ...</div>
        </div>
        <p></p>
        <p></p>
        <p></p>
      </div>)
    }
    else { return ''; }

  }

  render() {
    return (
      <div style={{ width: '100%', height: '200px', display: 'block !important', margin: '30px 0 0 100px' }}>
        <h1>{this.state.name}</h1>
        <img src={this.state.img} alt="QR Code" />
        {this.renderLoader()}

      </div>
    );
  }
}

export default QrCodeDisplay;