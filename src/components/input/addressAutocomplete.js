// src/components/Map.js
import React, { Component } from 'react';
import Autocomplete from 'react-google-autocomplete';
    
export default class AddressAutocomplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      load: false,
      address: '',
    }
  }

  componentDidMount() {
    if (window) {
      if (!window.google) {
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBDAZmdNIn0u8q97UClMqPC4DZ--GHs-gk&libraries=places`
        const headScript = document.getElementsByTagName('script')[0]
        headScript.parentNode.insertBefore(script, headScript)
        script.addEventListener('load', () => {
          this.setState({
            load: true,
          })
        })
      } else {
        this.setState({
          load: true,
        })
      }
    }
  }

  render() {
    return (
      <div id={this.props.id}>
        {this.state.load && <Autocomplete
          autoComplete="off"
          value={this.state.address}
          onChange={(e) => this.setState({ address: e.target.value })}
          onPlaceSelected={(address) => {
            this.props.handleSelect(address);
            this.setState({ address: address.formatted_address });
          }}
          required
          // types={['address']}
          placeholder=''
          // componentRestrictions={{country: "ca"}}
          options={{
            types: ["address"],
            componentRestrictions: { country: "ca" },
          }}
        />}
      </div>
    )
  }
}