// Generated by Selenium IDE
require('chromedriver')
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('rectangulo', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
//   afterEach(async function() {
//     await driver.quit();
//   })
  it('rectanguloPost', async function() {
    await driver.get("https://qa-final-front.herokuapp.com/aprectangulo")
    await driver.manage().window().setRect({ width: 1346, height: 708 })
    await driver.findElement(By.id("lado1")).click()
    await driver.findElement(By.id("lado1")).sendKeys("1")
    await driver.findElement(By.id("lado2")).click()
    await driver.findElement(By.id("lado2")).sendKeys("1")
    await driver.findElement(By.id("submit")).click()
    const result = await driver.findElement(By.id("area"))
    result === 1
  }).timeout(100000)
})