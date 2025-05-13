
import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 60000,
  reporter: [['list'], ['allure-playwright']],
  use: {
  baseURL: 'https://www.saucedemo.com/',
  headless: false,
  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
  //timeout: 60000  // increase timeout here if needed
}
});
