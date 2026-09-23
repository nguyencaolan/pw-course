import {test} from '@playwright/test';

test ('Add product to cart', async ({page})=>{
    await page.goto ('https://material.playwrightvn.com/')
   

    await page.click("//a [@href = '02-xpath-product-page.html']");

    await page.locator("//button[@data-product-id = '1']").click();
    await page.locator("//button[@data-product-id = '1']").click();

    await page.locator("//button[@data-product-id = '2']").click();
    await page.locator("//button[@data-product-id = '2']").click();
    await page.locator("//button[@data-product-id = '2']").click();

    await page.locator("//button[@data-product-id = '3']").click();



});