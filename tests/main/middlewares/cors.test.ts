import request from 'supertest'
import app from '../../../src/main/config/app'

describe('CORS Middleware', () => {
  it('Should enable CORS', async () => {
    app.get('/test_cors', (req, res) => {
      res.send(req.body)
    })

    await request(app)
      .get('/test_cors')
      .expect('Access-Control-Allow-Origin', '*')
      .expect('Access-Control-Allow-Methods', '*')
      .expect('Access-Control-Allow-Headers', '*')
  })
})
