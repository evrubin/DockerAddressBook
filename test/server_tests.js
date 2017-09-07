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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
});
