Playwright — Element & Action Cheat Sheet

1. Text Input → fill()

Công thức

await page.locator("XPATH").fill("VALUE");

Ví dụ

 <input type="text" id="username">

await page.locator("//input[@id='username']").fill("Rubby");

2. Email → fill()

Email cũng là input nên dùng fill().

<input type="email" id="email">

await page.locator("//input[@id='email']").fill("rubby@gmail.com");

3. Radio Button → check()

Ví dụ Gender:

<input type="radio" value="male">
<input type="radio" value="female">

Chọn Male:

await page.locator("//input[@value='male']").check();

Radio → check()

4. Checkbox → check()

Ví dụ Hobbies:

<input type="checkbox" value="reading">
<input type="checkbox" value="traveling">
<input type="checkbox" value="cooking">

Chọn Reading:

await page.locator("//input[@value='reading']").check();

Chọn nhiều:

await page.locator("//input[@value='reading']").check();
await page.locator("//input[@value='cooking']").check();

Checkbox → check()

5. Select / Dropdown → selectOption()

Ví dụ Interests:

<select id="interests">
    <option value="technology">Technology</option>
    <option value="science">Science</option>
    <option value="art">Art</option>
</select>

Chọn Technology:

await page.locator("//select[@id='interests']")
    .selectOption("technology");

<select> → selectOption()

Lưu ý: selectOption() thường chọn theo value, không nhất thiết theo text hiển thị.

6. Country → selectOption()

<select id="country">
    <option value="vn">Vietnam</option>
    <option value="us">United States</option>
</select>

await page.locator("//select[@id='country']")
    .selectOption("vn");

7. Date → fill()

Nếu Date of Birth là:

<input type="date" id="dob">

Dùng:

await page.locator("//input[@id='dob']")
    .fill("1990-01-01");

Native date input → có thể dùng fill().

8. Profile Picture / File Upload → setInputFiles()

Không dùng fill() cho file upload.

<input type="file" id="profile">

await page.locator("//input[@id='profile']")
    .setInputFiles("tests/lesson-05/avatar.jpg");

<input type="file"> → setInputFiles()

9. Biography / Textarea → fill()

<textarea id="biography"></textarea>

await page.locator("//textarea[@id='biography']")
    .fill("I am learning Playwright.");

textarea → fill()

10. Button → click()

Ví dụ:

<button type="submit">Register</button>

Playwright:

await page.getByRole("button", { name: "Register" }).click();

Hoặc XPath:

await page.locator("//button[text()='Register']").click();

Button → click()

BẢNG PHẢI NHỚ


Text input: fill()

Email: fill()

Radio: check()

Checkbox: check()

Select / Dropdown: selectOption()

Date input: fill()

File upload: setInputFiles()

Textarea: fill()

Button: click()

Công thức tổng quát

await page.locator("XPATH").fill("data");

await page.locator("XPATH").check();

await page.locator("XPATH").selectOption("value");

await page.locator("XPATH").setInputFiles("file");

await page.locator("XPATH").click();

Tư duy khi làm Automation

LOCATE element
      ↓
Xác định loại element
      ↓
Chọn action phù hợp
      ↓
fill()
check()
selectOption()
setInputFiles()
click()

Áp dụng vào bài Register

Username          → fill()
Email             → fill()
Gender            → check()
Hobbies           → check()
Interests         → selectOption()
Country           → selectOption()
Date of Birth     → fill()
Profile Picture   → setInputFiles()
Biography         → fill()
Register          → click()