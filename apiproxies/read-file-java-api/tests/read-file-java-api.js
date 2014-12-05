/*globals describe:true, it:true, expect:true, before:true, beforeEach:true*/
/*jslint node: true */

var chai = require('chai')
var expect = require('chai').expect
var request = require('request'), chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Read files from jar files',function() {
  "use strict";
  before(function () {
    // get OAuth 2.0 token
    // console.log('initialize');
  });
  beforeEach(function () {
    //console.log('initialize each test');
  });

  describe('Check XML Content', function() {
        it('you should be able to get StockName element from text.xml file', function(done) {
           var options = {
                    url: 'http://testmyapi-test.apigee.net/weatherjavacallout/javacallout',
           }
            request(options, function (error, response, body) {
                expect(body).to.contain('StockName')
                done()
              })
            })
    });
  });