var sinon = require('sinon');
var expect = require('chai').expect;
var assert = require('chai').assert;
var should = require('chai').should();
const supports = require('../models/supportModels');
var supportController = require('../controllers/supportControllers');




describe('supportController', function () {
    // Below, we are going to test HTTP functions, so we need to create fake request and respond object!
    const mockResponse = (fake) => {
        return {
            send: fake
        };
    }
    const mockRequest = (session, body) => ({
        session,
        body,
    });

        it('create supports', function(){

            const fake = sinon.fake();
            const req = mockRequest({}, {});
            const res = mockResponse(fake);

            supportController.readAllSupports(req, res);

            const result = fake.lastArg;
            expect(result).to.deep.equal(supports);
            // Don't forget to use deep, you don't want to compare object id, you want to compare contents!
        });
});