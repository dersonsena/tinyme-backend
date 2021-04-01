import env from './config/env'
import app from './config/app'

app.listen(env.serverPort, () =>
  console.log(`Server running at http://localhost:${env.serverPort}`)
)
