"use strict";

var chai = require("chai");
let chaiHttp = require('chai-http');
let app = require('../app');
chai.should();
var expect = chai.expect;
chai.expect();
chai.use(chaiHttp);
var io = require('socket.io');//(http);
var socket = io();

describe('Open server', () => {
    it('Should return status code 200 ok when server opens', (done) => {
      chai.request(app)
          .get('/')
          .end((err, res) => {
              res.should.have.status(200);
              chai.assert.equal(err, null);
            done();
          });
    });

    it('Should return status code 200 ok when addContacts page opens', (done) => {
      chai.request(app)
          .get('/addContacts')
          .end((err, res) => {
              res.should.have.status(200);
              chai.assert.equal(err, null);
            done();
          });
    });

    it('Should return status code 200 ok when viewContacts page opens', (done) => {
      chai.request(app)
          .get('/viewContacts')
          .end((err, res) => {
              res.should.have.status(200);
              chai.assert.equal(err, null);
            done();
          });
    });

    it('Should return status code 200 ok when editContacts page opens', (done) => {
      chai.request(app)
          .get('/editContacts')
          .end((err, res) => {
              res.should.have.status(200);
              chai.assert.equal(err, null);
            done();
          });
    });

    it('Should return status code 404 when a random page is requested',
    function testPath(done) {
      chai.request(app)
      .get('/foo')
      .end((err, res) => {
        res.should.have.status(404);
        chai.expect(err).to.not.equal(null);
        done();
      });
   });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
});
