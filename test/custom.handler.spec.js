var frisby = require('frisby');

require('./expect_handler/isPost1');

describe('Frisby custom expect handler', () => {
    it('Should allow custom expect handlers to be registered and used', (doneFn) => {
        frisby.get('http://jsonplaceholder.typicode.com/posts/1')
            .done(doneFn);
    });
});