const assert = require('assert');
const superagent = require('superagent');
const wagner = require('wagner-core');

const URL_ROOT = 'http://localhost:3000';

describe('Organization API', function() {

    var server;
    var OrganizationUser;

    before(function() {
        
        let app = require('express')();
        require('../config/config')(app);
        require('../endpoints/routes')(app);

        models = require('../models/models')(wagner);
        OrganizationUser = models.User; 

        server = app.listen(3000);
    });

    after(function() {
        server.close();
    });

    beforeEach(function(done) {
        OrganizationUser.remove({}, function(error) {
            assert.ifError(error);
            done();
        });
    });

    it('can register a company user', function(done) {
        assert.equal('hi', 'hi');
        done();
    })
})