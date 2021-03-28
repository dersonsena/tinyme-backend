import { HttpRequest, HttpResponse } from './http'
import { Presenter } from '@/adapters/controllers/contracts/presenter'

export interface Controller {
  handle: (httpRequest: HttpRequest, presenter: Presenter) => Promise<HttpResponse>
}
