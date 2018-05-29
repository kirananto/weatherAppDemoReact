import React from 'react'
import GoogleMapReact from 'google-map-react'


class Map extends React.Component {

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '35rem', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDfVVMpmcWNAivX7AiNRrx1NYSBFvxBjF0' }}
          defaultCenter = {{ lat: this.props.lat, lng: this.props.lon}}
          defaultZoom= {15}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;