import request from 'supertest'
import app from '@/main/config/app'

describe('Content Type Middleware', () => {
  it('Should return default content type as application/json', async () => {
    app.get('/test_content_type', (req, res) => {
      res.send('')
    })

    await request(app).get('/test_content_type').expect('Content-type', /json/)
  })

  it('Should return XML content type when user provide', async () => {
    app.get('/test_content_type_xml', (req, res) => {
      res.type('xml')
      res.send('')
    })

    await request(app).get('/test_content_type_xml').expect('Content-type', /xml/)
  })
})
