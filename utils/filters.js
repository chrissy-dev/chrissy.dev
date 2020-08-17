
const { DateTime } = require('luxon')

module.exports = {
    // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    htmlDateString: (dateObj) => {
      return DateTime.fromJSDate(dateObj, {
        zone: 'utc'
      }).toFormat('yyyy-LL-dd');
    },

    prettyDate: (dateObj) => {
      return DateTime.fromJSDate(new Date(dateObj), {
        zone: 'utc'
      }).toFormat("dd LLL yyyy");
    },

    media: (filename, page) => {
      const path = page.inputPath.split('/');
      if (path.length && path.includes('log')) {
        const subdir = path[path.length - 2];
        return `/static/log/${subdir}/${filename}`;
      }
      return filename;
    },
    
    keys: (obj) => {
      return Object.keys(obj);
    },

    likesFilter: (webmentions, url) => {
      const allowedTypes = ['like-of'];
      const hasRequiredFields = entry => {
        const {
          author
        } = entry;
        return author.name && author.photo && author.url;
      };

      return webmentions
        .filter(entry => entry['wm-target'] === url)
        .filter(entry => allowedTypes.includes(entry['wm-property']))
        .filter(hasRequiredFields);
    },

    webmentionsFilter: (webmentions, url) => {
      const allowedTypes = ['mention-of', 'in-reply-to'];

      const hasRequiredFields = entry => {
        const {
          author,
          published,
          content
        } = entry;
        return author.name && published && content;
      };

      const sanitize = entry => {
        const {
          content
        } = entry;
        if (content['content-type'] === 'text/html') {
          content.value = sanitizeHTML(content.value);
        }
        return entry;
      };

      return webmentions
        .filter(entry => entry['wm-target'] === url)
        .filter(entry => allowedTypes.includes(entry['wm-property']))
        .filter(hasRequiredFields)
        .map(sanitize);
    }
}