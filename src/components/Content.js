import React, { Component } from 'react'
import { connect } from 'react-redux';

class Content extends Component {



  render() {
    const renderFeaturedContentConfig = {
      text: this.props.isAuthenticated ? 'Welcome to the exclusive featured content.' : 'Please login to access the content.',
      style: this.props.isAuthenticated ? "color: 'green'" : "color: 'red'"
    };

    return (
      <div className="ui container">
        <div className="ui relaxed grid">
          <div className="three column row">
            <div className="column" style={{ border: '2px solid blue', borderRadius: '10%', height: '400px', align: 'left', margin: '15px 0 2px' }}>
              <div className="content" >
                <h2 style={{ textAlign: 'center' }} >Public Content</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Nisl condimentum id venenatis a condimentum. Varius quam quisque id diam. Sit amet mauris commodo quis imperdiet. Risus feugiat in ante metus dictum at tempor. Eget est lorem ipsum dolor sit. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Velit ut tortor pretium viverra suspendisse. Vitae elementum curabitur vitae nunc sed velit dignissim.</p>
              </div>
            </div>
            <div className="column" style={{ border: '2px solid red', borderRadius: '10%', height: '400px', align: 'left', margin: '15px 180px 0' }}>
              <div className="content">
                <h2 style={{ textAlign: 'center' }} >Featured Content</h2>
                <p> <b style={{ color: 'green', textAlign: 'center' }}>{renderFeaturedContentConfig['text']} </b></p>
              </div>
            </div>
            <div className="column" style={{ border: '2px solid green', borderRadius: '10%', height: '400px', align: 'center', margin: '0 270px' }} >
              <div className="content">
                <h2 style={{ textAlign: 'center' }} >General Feed</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices neque ornare aenean euismod elementum nisi. Augue eget arcu dictum varius duis at consectetur lorem donec. Cum sociis natoque penatibus et. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Diam vulputate ut pharetra sit amet aliquam id diam. Lorem ipsum dolor sit amet consectetur adipiscing elit. Facilisis sed odio morbi quis commodo odio aenean. Volutpat lacus laoreet non curabitur gravida arcu. Fringilla urna porttitor rhoncus dolor purus non. Tellus in metus vulputate eu scelerisque felis imperdiet. Maecenas sed enim ut sem viverra aliquet eget sit. Elementum nisi quis eleifend quam adipiscing. Nec dui nunc mattis enim ut tellus elementum sagittis. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Viverra nam libero justo laoreet sit amet cursus sit.</p>
              </div>
            </div>
          </div>
        </div>
      </div >);
  }

}

const mapStateToProps = state => {

  return {
    isAuthenticated: state.auth.isAuthenticated
  };
}

export default connect(mapStateToProps)(Content);