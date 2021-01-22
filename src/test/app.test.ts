import { expect } from 'chai';
import request from 'supertest';
import routes from '../routes';
import app from '../app';
import config from '../config';
const { connect } = require('marpat');
const { dbDatastore } = config.app;

routes(app);
console.clear();

describe('Global API Tests', function () {
    // ========================================
    this.slow(300);
    // ========================================

    // before((done) => {
    //     connect(dbDatastore).then(() => done());
    // });

    it('Health Endpoint', (done) => {
        request(app)
            .get('/api/')

            .end((err, res) => {
                expect(!!res.body.serverUptime).equal(true);
                done();
            });
    });

    // ========================================
    this.slow(200);
    // ========================================
});
