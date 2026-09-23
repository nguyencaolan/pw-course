# Playwright + XPath — Quick Note

> Format: **Công thức → Ví dụ**  
> Gọn, dễ đọc, dễ mở trên VS Code.

---

## 1. Navigate

**Công thức:**

```javascript
await page.goto('URL');
```

**Ví dụ:**

```javascript
await page.goto('https://example.com');
```

---

## 2. Locator

**Công thức:**

```javascript
page.locator('selector');
```

**Ví dụ:**

```javascript
page.locator('#username');
```

---

## 3. XPath — Relative XPath

**Công thức:**

```xpath
//tag[@attribute="value"]
```

**Ví dụ:**

```xpath
//input[@id="username"]
```

Playwright:

```javascript
await page.locator('//input[@id="username"]').fill('Rubby');
```

> `//` = Relative XPath.

---

## 4. XPath — Absolute XPath

**Công thức:**

```xpath
/html/body/div/main/button
```

**Ví dụ:**

```xpath
/html/body/div[2]/button
```

> `/` = Absolute XPath.  
> Thường ưu tiên Relative XPath vì linh hoạt hơn.

---

## 5. XPath `text()`

**Công thức:**

```xpath
//tag[text()="Text"]
```

**Ví dụ:**

```xpath
//button[text()="Login"]
```

Playwright:

```javascript
await page.locator('//button[text()="Login"]').click();
```

> `text()` = tìm text chính xác.

---

## 6. XPath `contains()`

### Contains text

**Công thức:**

```xpath
//tag[contains(text(),"Text")]
```

**Ví dụ:**

```xpath
//button[contains(text(),"Log")]
```

Playwright:

```javascript
await page.locator('//button[contains(text(),"Log")]').click();
```

> `contains()` = giá trị có chứa một phần text.

### Contains attribute

**Công thức:**

```xpath
//tag[contains(@attribute,"value")]
```

**Ví dụ:**

```xpath
//input[contains(@class,"login")]
```

---

## 7. Click

**Công thức:**

```javascript
await locator.click();
```

**Ví dụ:**

```javascript
await page.locator('#login').click();
```

---

## 8. Input

**Công thức:**

```javascript
await locator.fill('value');
```

**Ví dụ:**

```javascript
await page.locator('#email').fill('abc@gmail.com');
```

---

## 9. Checkbox

**Công thức:**

```javascript
await locator.check();
```

**Ví dụ:**

```javascript
await page.locator('#remember').check();
```

### Bỏ chọn

```javascript
await page.locator('#remember').uncheck();
```

---

## 10. Radio

**Công thức:**

```javascript
await locator.check();
```

**Ví dụ:**

```javascript
await page.locator('#male').check();
```

---

## 11. Select

**Công thức:**

```javascript
await locator.selectOption('value');
```

**Ví dụ:**

```javascript
await page.locator('#country').selectOption('vn');
```

---

## 12. Upload File

**Công thức:**

```javascript
await locator.setInputFiles('file-path');
```

**Ví dụ:**

```javascript
await page
    .locator('#profile')
    .setInputFiles('./files/avatar.png');
```

---

## 13. Assertion

**Công thức:**

```javascript
await expect(locator).ASSERTION();
```

**Ví dụ:**

```javascript
await expect(page.locator('#message')).toBeVisible();
```

### Assertion thường dùng

```javascript
await expect(locator).toBeVisible();
await expect(locator).toHaveText('Login');
await expect(locator).toHaveValue('Rubby');
await expect(locator).toBeEnabled();
await expect(locator).toBeDisabled();
```

### Kiểm tra URL

```javascript
await expect(page).toHaveURL('https://example.com/dashboard');
```

### Kiểm tra Title

```javascript
await expect(page).toHaveTitle('Dashboard');
```

---

## 14. `getByRole()`

**Công thức:**

```javascript
page.getByRole('role', { name: 'name' });
```

**Ví dụ:**

```javascript
await page
    .getByRole('button', { name: 'Login' })
    .click();
```

---

## 15. `getByText()`

**Công thức:**

```javascript
page.getByText('text');
```

**Ví dụ:**

```javascript
await page.getByText('Login').click();
```

---

## 16. `getByLabel()`

**Công thức:**

```javascript
page.getByLabel('label');
```

**Ví dụ:**

```javascript
await page.getByLabel('Email').fill('abc@gmail.com');
```

---

## 17. `getByPlaceholder()`

**Công thức:**

```javascript
page.getByPlaceholder('placeholder');
```

**Ví dụ:**

```javascript
await page
    .getByPlaceholder('Enter email')
    .fill('abc@gmail.com');
```

---

## 18. Test cơ bản

### Import

```javascript
import { test, expect } from '@playwright/test';
```

### Test

**Công thức:**

```javascript
test('Test name', async ({ page }) => {
    // test steps
});
```

**Ví dụ:**

```javascript
test('Login successfully', async ({ page }) => {
    await page.goto('https://example.com');
});
```

---

## 19. `test.step()`

**Công thức:**

```javascript
await test.step('Step name', async () => {
    // actions
});
```

**Ví dụ:**

```javascript
await test.step('Login', async () => {
    await page.getByRole('button', { name: 'Login' }).click();
});
```

---

## 20. `beforeEach()`

Chạy trước mỗi test.

**Công thức:**

```javascript
test.beforeEach(async ({ page }) => {
    // setup
});
```

**Ví dụ:**

```javascript
test.beforeEach(async ({ page }) => {
    await page.goto('https://example.com');
});
```

---

## 21. `afterEach()`

Chạy sau mỗi test.

```javascript
test.afterEach(async ({ page }) => {
    // cleanup
});
```

---

# ⭐ Công thức tư duy Playwright

```text
NAVIGATE
   ↓
LOCATOR
   ↓
ACTION
   ↓
ASSERTION
```

### Ví dụ hoàn chỉnh

```javascript
await page.goto('https://example.com');

await page.locator('#email').fill('abc@gmail.com');

await page.getByRole('button', { name: 'Login' }).click();

await expect(page.getByText('Welcome')).toBeVisible();
```

---

# 🔥 Actions phải thuộc

```text
click()
fill()
check()
uncheck()
selectOption()
setInputFiles()
```

# 🔥 XPath phải thuộc

```text
//tag[@attribute="value"]

//tag[text()="Text"]

//tag[contains(text(),"Text")]

//tag[contains(@attribute,"value")]
```
