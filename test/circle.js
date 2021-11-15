require('chromedriver')
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Circle', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('postiveRadio', async function() {
    await driver.get("https://qa-final-front.herokuapp.com/apcirculo")
    await driver.manage().window().setRect({ width: 1346, height: 708 })
    await driver.findElement(By.id("radio")).sendKeys("1")
    await driver.findElement(By.id("submit")).click()
    const result = await driver.findElement(By.id("area"))

    result === Math.PI

    //await driver.close()
  }).timeout(1200000)
})