// server.test.js
const request = require('supertest');
const app = require('./server'); 

describe('API Tests', () => {
  it('should return pong for GET /ping', async () => {
    const res = await request(app).get('/ping');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'pong' });
  });

  it('should return the sum of two numbers', async () => {
    const res = await request(app).post('/sum').send({ a: 5, b: 10 });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ result: 15 });
  });

  it('should return 400 for invalid sum input', async () => {
    const res = await request(app).post('/sum').send({ a: "5", b: 10 });
    expect(res.status).toBe(400);
    expect(res.body).toEqual({ error: 'Invalid input' });
  });
});
