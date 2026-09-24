import { test, expect } from '@playwright/test';


test (' test 1 ', async ({page})=>{
  await test.step ("Step 1: Fill login information", async()=> {
      await page.goto ("https://google.com");
  })
});

test ('test 2', async ({page}) =>{
  await test.step("Step 2: Fill login ID", async() =>{
    await page.goto ("https://facebook.com");
 })

});