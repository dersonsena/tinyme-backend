import request from 'supertest'
import { MongoHelper } from '../../../src/infra/repositories/mongodb/helpers'
import app from '../../../src/main/config/app'

describe('SignUp Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  beforeEach(async () => {
    const collection = await MongoHelper.getCollection('accounts')
    await collection.deleteMany({})
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  it('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Kilderson',
        email: 'dersonsena@gmail.com',
        password: '123456',
        passwordConfirmation: '123456'
      })
      .expect(200)
  })
})
