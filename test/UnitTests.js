var sinon = require("sinon");
var expect = require("chai").expect;
var assert = require("chai").assert;
var should = require("chai").should();
const supports = require("../models/supportModels");
var conversationController = require("../controllers/conversationControllers");
var supportController = require("../controllers/supportControllers");

const supertest = require("supertest");
const app = require("../app");

//Tests the functionality of individual controllers
describe("||||||||||||||||||||||||||Unit Tests||||||||||||||||||||||||||", function () {
  const mockResponse = (fake) => {
    return {
      send: fake,
    };
  };
  const mockRequest = (session, body) => ({
    session,
    body,
  });

  describe("conversationController", function () {
    //Checks that we can get all conversations
    describe("Get All Conversations", function () {
      this.timeout(5000);
      context("Check if we can real all conversation", function () {
        it("get conversations", function (done) {
          supertest(app)
            .get("/conversation/readAll")
            .send({})
            .end(function (err, res) {
              res.body.forEach((element) => {
                //checks data for expected fields
                expect(element).to.have.keys([
                  "_id",
                  "participantsId",
                  "participantCount",
                  "status",
                  "messagesId",
                  "topic",
                  "category",
                  "topicImage",
                  "startTime",
                  "__v",
                ]);
                // assert.equal(Object.keys(element), ['id', 'first_name', 'last_name']); Not going to work because it does strict equality, not deep comparison
                // but if you really insist...
                //assert.deepEqual(Object.keys(element), ['id', 'first_name', 'last_name']); //check with assert
              });
              expect(res.statusCode).to.equal(200);
              done();
            });
        });
      });
    });

    //Commented out as this test may not work when the database is cleared, to use simply uncomment and replace id
    //by an active conversation object id

    // describe('Get Conversation participants by Id', function () {
    //     this.timeout(5000);
    //     context('Check if we can get conversation participants by Id', function () {
    //         it('get conversation participants by Id', function(done){
    //             supertest(app)
    //                 .get('/conversation/readParticipants')
    //                 .send({id:"5edb7032ec4aa75ab42f9974"})
    //                 .end(function(err,res){
    //                      console.log(res.body)

    //                     expect(res.statusCode).to.equal(200);
    //                     done();
    //                 });
    //         })
    //     })
    // });
  });

  describe("accountController", function () {
    //Checks if a controller can get a specified account by id
    describe("Get Account by Id", function () {
      this.timeout(5000);
      context("Check if we can get an account by id", function () {
        it("get an account by id", function (done) {
          supertest(app)
            .post("/account/readOne")
            .send({ accountId: "5edb7032ec4aa75ab42f9974" })
            .end(function (err, res) {
              //checks data for expected fields
              expect(res.body).to.have.keys([
                "__v",
                "_id",
                "status",
                "reportsHistoryId",
                "friendsId",
                "conversationsId",
                "firstName",
                "lastName",
                "email",
                "password",
                "birthday",
                "userImage",
              ]);
              expect(res.body.email).to.equal("test@test.com");
              expect(res.body.firstName).to.equal("test");
              expect(res.body._id).to.equal("5edb7032ec4aa75ab42f9974");
              expect(res.statusCode).to.equal(200);
              done();
            });
        });
      });
    });

    //checks if the login works correctly
    describe("log in with account", function () {
      this.timeout(5000);
      context(
        "Check if we can log in with a specific email and password",
        function () {
          it("log in", function (done) {
            supertest(app)
              .post("/account/login")
              .send({ email: "test@test.com", password: "123" })
              .end(function (err, res) {
                //console.log(res.body)
                accountId = res.body;
                //checks for success of request
                expect(res.statusCode).to.equal(200);

                supertest(app)
                  .post("/account/readOne")
                  .send({ accountId: accountId })
                  .end(function (err, res) {
                    expect(res.statusCode).to.equal(200);
                    //verifies that retrieved account matches the email we used
                    expect(res.body.email).to.equal("test@test.com");
                  });

                done();
              });
          });
        }
      );
    });
  });

  //checks if we can retrive all reports correctly
  describe("reportController", function () {
    // Below, we are going to test HTTP functions, so we need to create fake request and respond object!

    describe("Get all reports", function () {
      this.timeout(5000);
      context("Check if we can get all reports", function () {
        it("get reports", function (done) {
          supertest(app)
            .get("/report/readAll")
            .send({})
            .end(function (err, res) {
              res.body.forEach((element) => {
                //checks data for expected fields
                expect(element).to.have.keys([
                  "accountId",
                  "__v",
                  "_id",
                  "status",
                  "outcome",
                  "reason",
                  "messageId",
                ]);
              });
              expect(res.statusCode).to.equal(200);
              done();
            });
        });
      });
    });

    //checks if we can create a report succesfully
    describe("Create a report", function () {
      this.timeout(5000);
      context("Check if we can create a report", function () {
        it("create report", function (done) {
          data = {
            accountId: "5edb7032ec4aa75ab42f9974",
            messageId: "1212121",
            reason: "sample reason",
          };
          supertest(app)
            .post("/report/create")
            .send(data)
            .end(function (err, res) {
              resbody = {
                accountId: res.body.accountId,
                messageId: res.body.messageId,
                reason: res.body.reason,
              };
              expect(res.status).to.equal(200);
              //checks that the database record matches what we sent as input
              expect(resbody).to.deep.equal(data);
              done();
            });
        });
      });
    });
  });
});
