const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
  it('should set testing environment', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });
  describe('GET /', () => {
    // test response code
    it('should return 200 OK', async () => {
      const res = await request(server).get('/');
      expect(res.status).toBe(200);
    });
    // test response data type
    it('should return JSON', async () => {
      const res = await request(server).get('/');
      expect(res.type).toBe('application/json');
    });
    // test shape of response body
    it('should return { server: "works! }', async () => {
      const res = await request(server).get('/');
      expect(res.body).toEqual({ server: 'works!' });
    });
  });
});