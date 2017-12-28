const request = require('request');
const geocodeAddress = (address, cb) => {
  request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyB5PTY5AWe7WckkJBeX9_O8enntD577o8A`,
    json: true
  }, (error, response, body) => {
    if(error){
      cb('Unable to connect to Google servers')
    }else if(body.status === 'ZERO_RESULTS'){
      cb('Unable to find that address')
    }else if(body.status === 'OK'){
      cb(undefined, {
        address: body.results[0].formmatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      })
      console.log(`Address: ${body.results[0].formatted_address}`)
      console.log(`Latitude: ${body.results[0].geometry.location.lat}`)
      console.log(`Longitude: ${body.results[0].geometry.location.lng}`)
    }
  })
}

module.exports = {
  geocodeAddress
}