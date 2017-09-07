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
