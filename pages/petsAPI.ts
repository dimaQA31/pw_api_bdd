import { request, APIRequestContext } from '@playwright/test';

export class PetsAPI {
  readonly baseUrl: string;

  constructor() {
    this.baseUrl = 'https://petstore.swagger.io/v2';
  }

  async postPet(url: string) {
    const apiContext: APIRequestContext = await request.newContext();
    return apiContext.post(`${this.baseUrl}${url}`, {
      data: {
        id: 0,
        category: {
          id: 0,
          name: 'string'
        },
        name: 'doggie',
        photoUrls: ['string'],
        tags: [
          {
            id: 0,
            name: 'string'
          }
        ],
        status: 'available'
      }
    });
  }
}
