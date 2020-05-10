
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
    }
}