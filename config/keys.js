// figures out what set of credentials are needed

if (process.env.NODE_ENV === 'production') {
    // we are prod, return the prod set of keys
    module.exports = require('./prod');
} else {
    // we are in dev, return dev keys
    module.exports = require('./dev');
}
