const fetch = require('node-fetch')

module.exports = async function() {
  console.log('Fetching Instagram profile as JSON...')
  return fetch('https://www.instagram.com/scottishstoater/')
    .then(result => result.text())
    .then(res => {
       var jsonData = res.match(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/)[1].slice(0, -1)
       var json = JSON.parse(jsonData);
        return json.entry_data.ProfilePage[0]
    })
}
