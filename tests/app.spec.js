import { test, expect } from '@playwright/test'
import fs from 'fs'
import path from 'path'

test.afterEach(async ({ page }) => {
    const coverage = await page.evaluate(() => window.__coverage__)
    if (coverage) {
        const dir = path.resolve('.nyc_output')
        fs.mkdirSync(dir, { recursive: true })
        fs.writeFileSync(
            path.join(dir, `coverage-${Date.now()}.json`),
            JSON.stringify(coverage)
        )
    }
})

test('renders should not have any result text', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByTestId('result')).toBeHidden()
})


test('renders should have Even result', async ({ page }) => {
    await page.goto('/')
    await page.getByTestId('myinput').fill('4')
    await expect(page.getByTestId('result')).toHaveText('Even')
})


test('renders should have Odd result', async ({ page }) => {
    await page.goto('/')
    await page.getByTestId('myinput').fill('3')
    await expect(page.getByTestId('result')).toHaveText('Odd')
})