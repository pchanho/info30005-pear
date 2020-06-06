const chai = require("chai");
const chaiSubset = require("chai-subset");
chai.use(chaiSubset);
let support = require("../models/supportModels");
var expect = require("chai").expect;

const supertest = require("supertest");
const app = require("../app");

//Tests interactions between controllers that would occur on run time

describe("||||||||||||||||||||||||||Integration Tests||||||||||||||||||||||||||", function () {
  describe("support integration test", function () {
    //Checks support READ controller
    describe("readAllSupports", function () {
      this.timeout(5000);
      context("check if we can get all support", function () {
        it("get all support", function (done) {
          supertest(app)
            .get("/support/readAll")
            .send({})
            .end(function (err, res) {
              expect(res.statusCode).to.equal(200);
              expect(res.body.length).to.equal(2);
              done();
            });
        });
      });
    });
  });

  //Checks for the case where a user creates a conversation
  describe("conversation integration test", function () {
    //Check READ controller
    describe("Create Conversation", function () {
      this.timeout(5000);
      context("Check if we can create a new conversation", function () {
        it("post a conversation", function (done) {
          let data = { topic: "test", category: "test" };
          supertest(app)
            .post("/conversation/create")
            .send(data)
            .end(function (err, res) {
              var resbody = {
                topic: res.body.topic,
                category: res.body.category,
              };

              expect(res.statusCode).to.equal(200);
              expect(resbody).to.deep.equal(data);
              done();
            });
        });
      });
    });

    //tests that the homepage is able to get new conversations
    describe("Read New Conversations", function () {
      this.timeout(5000);
      context(
        "check if we can get new conversations to display for the home page",
        function () {
          it("get all new conversations", function (done) {
            supertest(app)
              .get("/conversation/readNew")
              .send({})
              .end(function (err, res) {
                expect(res.statusCode).to.equal(200);
                res.body.forEach((element) => {
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
                });
                done();
              });
          });
        }
      );
    });

    //tests that a user is able to login, create a conversation and succesfully join it
    describe("Add Participant to Conversation", function () {
      this.timeout(5000);
      context("Check if we can log in", function () {
        it("log in", function (done) {
          supertest(app)
            .post("/account/login")
            .send({ email: "test@test.com", password: "123" })
            .end(function (err, res) {
              expect(res.statusCode).to.equal(200);

              //tracks participant
              participantId = res.body;

              context("Check if we can create a new conversation", function () {
                it("post a conversation", function (done) {
                  data = { topic: "test", category: "test" };
                  supertest(app)
                    .post("/conversation/create")
                    .send(data)
                    .end(function (err, res) {
                      conversationId = res.body._id;

                      var resbody = {
                        topic: res.body.topic,
                        category: res.body.category,
                      };

                      expect(res.statusCode).to.equal(200);
                      //checks if created conversation is equivalent to what was submitted
                      expect(resbody).to.deep.equal(data);

                      this.timeout(25000);
                      context(
                        "Check if a participant can join a conversation they created",
                        function () {
                          it("join a conversation", function (done) {
                            supertest(app)
                              .put("/conversation/addParticipants")
                              .send({
                                conversationId: conversationId,
                                participantsId: participantId,
                              })
                              .end(function (err, res) {
                                expect(res.statusCode).to.equal(200);
                                //checks that there is only 1 participant on login
                                expect(res.body.participantsId.length).to.equal(
                                  1
                                );
                                //checks that the first participant is the creator of the conversation
                                expect(res.body.participantsId[0]).to.equal(
                                  participantId
                                );
                                //checks if the status of the conversation is equal to 0 (not filled)
                                expect(res.body.status).to.equal(0);

                                done();
                              });
                          });
                        }
                      );

                      done();
                    });
                });
              });
              done();
            });
        });
      });
    });
  });
});
