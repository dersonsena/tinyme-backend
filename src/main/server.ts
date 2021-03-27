import { MongoHelper } from '../infra/repositories/mongodb/helpers'
import env from './config/env'

MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    const app = (await import ('./config/app')).default
    app.listen(env.serverPort, () => console.log(`Server running at http://localhost:${env.serverPort}`))
  })
  .catch(console.error)
