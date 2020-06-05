const chai = require('chai');
const chaiSubset = require('chai-subset');
chai.use(chaiSubset);
let support = require('../models/supportModels');
var expect = require('chai').expect;

const supertest = require('supertest');
const app = require('../app');

describe('integration test', function() {

    //Check Create controller
    // describe('createSupport', function () {
    //     context('check if we can add a support', function () {
    //         it('post a support', async function () {
    //             const Support = mongoose.model('supports');
    //             let content = {title: 'integration test', body: 'test'};
    //             let newSupport = new Support(content);
    //
    //             const res = await supertest(app)
    //                 .post('/support/create')
    //                 .send(newSupport);
    //
    //             expect(res.statusCode).to.equal(200);
    //             expect(res.body).to.containSubset(newSupport);
    //         })
    //     })
    // })

    //Check READ controller
    describe('readAllSupports', function () {
        this.timeout(5000);
        context('check if we can get all support', function () {
            it('get all support', function (done) {
                supertest(app)
                    .get('/support/readAll')
                    .send({})
                    .end(function (err, res) {
                        expect(res.statusCode).to.equal(200);
                        expect((res.body).length).to.equal(2);
                        done();
                    })
            })
        })
    });


});

