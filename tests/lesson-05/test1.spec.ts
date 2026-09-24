import {test} from '@playwright/test'

test('navigate to Register page' , async({page}) => {
    await test.step ("Step 1: Nhap thong tin", async () =>{

    await page.goto ('https://material.playwrightvn.com/')
    await page.click ("//a [@href = '01-xpath-register-page.html']")
    

    await page.locator("//input[@id = 'username']").fill ('Rubby Nguyen');
    await page.locator("//input[@id = 'email']").fill ('rubbynguyen@gmail.com');

    await page.locator("//input[@value='male']").check();
    await page.locator("//input[@value='reading']").check();

    await page.locator("//select[@id='interests']").selectOption("technology");
    await page.locator("//select[@id = 'country']").selectOption("United States");

    await page.locator("//input[@id = 'dob']").fill ('1990-01-01');
    await page.locator("//input[@id = 'profile']").setInputFiles ("tests/lesson-05/img1.jpg");

    await page.locator("//textarea[@id = 'bio']").fill ("Learning Playwright");
});
    await test.step("Step 2: Click button Register", async () =>{
    await page.locator("//button[text()='Register']").click();
    


});
})