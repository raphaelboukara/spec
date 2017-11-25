import { expect } from 'chai';
import fetchMock from 'fetch-mock';
import * as UsersAPI from './index.js';

describe('API', () => {
    describe('Users', () => {
        context('#get', () => {
            context('When server status 500', () => {
                beforeEach(() => {
                    fetchMock.mock(/randomuser/, 500);
                });

                afterEach(() => {
                    fetchMock.restore();
                });

                it('Should reject the request', (done) => {
                    UsersAPI.get()
                    .then(() => {
                        done(new Error('Reject expected, received resolved'));
                    })
                    .catch(({ message }) => {
                        expect(message).to.equal('Request Error');
                        done();
                    })
                    .catch(done);
                });
            });

            context('When server status 200', () => {
                let expectedResponseData;

                beforeEach(() => {
                    expectedResponseData = {
                        a: 'a',
                        b: 'b'
                    };

                    fetchMock.mock(/randomuser/, {
                        status: 200,
                        body: expectedResponseData
                    });
                });

                afterEach(() => {
                    fetchMock.restore();
                });

                it('Should resolve the request', (done) => {
                    UsersAPI.get()
                    .then((data) => {
                        expect(data).to.deep.equal(expectedResponseData);
                        done();
                    })
                    .catch(done);
                });
            });
        });
    });
});
