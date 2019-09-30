const fetch = require('node-fetch')
const token = process.env.WEBMENTIONS_TOKEN;
const domain = 'www.chriscollins.me';

module.exports = async function webmentions() {
    return fetch(`https://webmention.io/api/mentions.jf2?domain=${domain}&token=${token}&per-page=200`)
    .then((result) => result.json())
    .then((data) => {            
      return data.children || [];
    })
    .catch(ex => []);
};