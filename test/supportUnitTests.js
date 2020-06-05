// const mongoose = require('mongoose');
// const supports = mongoose.model('supports', supportSchema);
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

    // this is just example how you can design the fake request, you can also add header property if your website needs one!
    // I'm not even going to use any of these stuff inside request
    const mockRequest = (session, body) => ({
        session,
        body,
    });

    describe('createSupport', function() {

        it("", function(){

        });

        it("", function(){

        });

        it("", function(){

        });

    });

    // I just want to remind that using chai is easier to read
    describe('readAllSupports', function() {
        //Checking length with style~, isntead of assert.equal(res.json.length, 2)
        it("should have length of 2", function(){




            /*const fake = sinon.fake();
            const req = mockRequest({},{});
            const res = mockResponse(fake);
            supportController.readAllSupports(req, res);
            const result = fake.lastArg;
            expect(result).to.have.lengthOf(2);
            // result.should.have.lengthOf(2); //different way of checking
            // assert.equal(result.length, 2); //different way of checking*/
        });

        it("should have title, body", function(){



            /* const fake = sinon.fake();
            const req = mockRequest({},{});
            const res = mockResponse(fake);

            supportController.readAllSupports(req,res);
            const result = fake.lastArg;

            result.forEach(element => {
                // expect(element).to.have.property('title');//check one with chai
                expect(element).to.have.keys(['title', 'body']); //check everything with chai
                // element.should.have.property('id'); // different way of checking using should
            });*/
        });

        it('should return all supports', function(){


            /*// const mongoose = require('mongoose');
            // const Support = mongoose.model('supports', supportSchema);
            const fake = sinon.fake();
            const req = mockRequest({},{});
            const res = mockResponse(fake);

            // Quick quiz! why didn't I write line 62 like line 61? HINT: I didn't forget and I am not lazy >:(
            // let result = supportController.getAllAuthors(req,res);
            supportController.readAllSupports(req,res);
            const result = fake.lastArg;
            expect(result).to.deep.equal(supports); // Don't forget to use deep, you don't want to compare object id, you want to compare contents!*/
        });
    });

    describe('readOneSupport', function() {

        it("", function(){

        });

        it("", function(){

        });

        it("should return one support", function(){

        });

    });

    describe('updateSupport', function() {

        it("", function(){

        });

        it("", function(){

        });

        it("should update one support", function(){

        });

    });

    describe('deleteSupport', function() {

        it("", function(){

        });

        it("", function(){

        });

        it("should delete one support", function(){

        });

    });

});