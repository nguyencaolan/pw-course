import { test } from '@playwright/test';

test ('Add New Todo', async ({ page }) => {

    await page.goto('https://material.playwrightvn.com/');
    await page.click("//a[@href = '03-xpath-todo-list.html']");


    for (let i = 1; i <= 100; i++) {


        await page.locator("//input[@id ='new-task']").fill(`To Do ${i}`);
        await page.locator("//button [@id ='add-task']").click();

        
    }

    

    page.on('dialog', async dialog => {
            await dialog.accept();

    });
    for (let i = 1; i <= 100; i++) {

        if (i % 2 !== 0) {
            await page.locator(`//li[span[text()='To Do ${i}']]//button[text()='Delete']`).click();
        }

    }

});

