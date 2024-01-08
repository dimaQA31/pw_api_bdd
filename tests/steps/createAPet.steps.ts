import { When, Then } from '@cucumber/cucumber';
import { APIResponse, expect } from '@playwright/test';
import { PetsAPI } from '../../pages/petsAPI';

let pet: APIResponse;

When('Create a pet with url: {string}', async (url) => {
  const petsAPI = new PetsAPI();
  pet = await petsAPI.postPet(url);
});

Then('Verify response of created pet', async () => {
  expect(pet.status()).toBe(200);
  const petJson = await pet.json();
  expect(petJson.status).toBe('available');
});

Then('Verify error in response is {string}', async (errorMessage) => {
  expect(pet.status()).toBe(404);
  const petText = await pet.text();
  expect(petText).toContain(errorMessage);
});
