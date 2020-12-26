import React, { Component } from 'react';
import axios from 'axios';
import { SERVER_URL } from '../../util/config';

class QrCodeDisplay extends Component {

  state = { token: '', img: '', name: 'CloudNativeApp' }

  componentDidMount() {
    //call the API
    axios.post(`${SERVER_URL}/qrcode`, {
      name: this.state.name
    }).then(response => {
      console.log(response);
      const qr_data = response.data.response.qr_data;
      this.setState({ img: qr_data });
    });

  }

  render() {
    return (
      <div style={{ width: '100%', height: '200px', display: 'block !important', margin: '30px 0 0 100px' }}>
        <h1>{this.state.name}</h1>
        <img src={this.state.img} alt="QR Code" />
      </div>
    );
  }
}

export default QrCodeDisplay;