import {
  Presenter,
  ResponseStatus,
  ResponseTypes
} from '@/adapters/controllers/contracts/presenter'

export class RestfulPresentation implements Presenter {
  async output(data: any, options: object | undefined): Promise<ResponseTypes> {
    return {
      status: ResponseStatus.SUCCESS,
      data: { name: 'Kilderson' }
    }
  }
}
