const request = require('request');
const yargs = require('yargs');

const argv = yargs 
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;
  
console.log(argv)

request({
  url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.a)}&key=AIzaSyB5PTY5AWe7WckkJBeX9_O8enntD577o8A`,
  json: true
}, (error, response, body) => {
  console.log(`Address: ${body.results[0].formatted_address}`)
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`)
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`)
})