let chai = require('chai');
let axios = require('axios');
let sinon = require('sinon');
let getBooks = require('../utils/googlebooks');
let expect = chai.expect;
let sandbox;

//Our parent block
describe('Test Async Books (Mock)', () => {
    beforeEach((done) => { //Before the test we create a server
        sandbox = sinon.createSandbox();
        done();
    });

    afterEach((done) => { //Before the test we create a server
        sandbox.restore();
        done();
    });

    it('should return an object with list books with turing in the title', function(done) {

        const resolved = new Promise(resolve => resolve({ 
            data: 'hello world',  
            status: 400,  
            statusText: 'OK',  
            headers: 'header',
            config: {
                headers: 'header'
            }
        }));
        sandbox.stub(axios, 'get').returns(resolved);

        getBooks('turing').then((result) => {
            console.log(result.data);
            expect(result.data).to.equal('hello world');
            done();
        }).catch(err => done(err));
    });
});