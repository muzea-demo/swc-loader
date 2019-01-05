const { transform } = require('swc')

module.exports = function(source) {
  const callback = this.async();
  new Promise(function() {
    callback(null, transform(source).code);
  })
};
