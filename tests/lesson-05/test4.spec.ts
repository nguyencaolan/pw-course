import { test } from '@playwright/test';
const notes = [
    { title: 'một hoặc nhiều', content: 'một hoặc nhiều 1' },
    { title: 'một hoặc nhiều 2', content: 'một hoặc nhiều 2' },
    { title: 'play wright', content: 'play wright' },
    { title: 'play game', content: 'play game' },
    { title: 'Ronaldo', content: 'Siuuuuuuuuuu' },
    { title: 'Trump', content: 'Trump Tower' },
    { title: 'Doraemon', content: 'Cat' },
    { title: 'Husky', content: 'Dog' },
    { title: 'Add 9', content: 'Add number 9' },
    { title: 'HCM', content: 'is it raining all day' }
];
test('Personal Notes', async ({page}) =>{

    await page.goto ('https://material.playwrightvn.com/')
    await page.click("//a[@href = '04-xpath-personal-notes.html']");

    //await page.locator ("//input[@id = 'note-title']").fill ("Action 1")
    //await page.locator ("//textarea[@id = 'note-content']").fill ("Action 1")
    //await page.click ("//button[@id= 'add-note']")

    for (const note of notes){
        await page.locator("//input[@id='note-title']").fill(note.title);
        await page.locator("//textarea[@id= 'note-content']").fill(note.content)
        await page.click ("//button[@id= 'add-note']")
    }

    await page.locator("//input[@id ='search']").fill ("một hoặc nhiều");

});
