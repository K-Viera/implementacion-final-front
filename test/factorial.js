// Generated by Selenium IDE
require('chromedriver')
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Factorial', function() {
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
  it('FactorialPost', async function() {
    await driver.get("https://qa-final-front.herokuapp.com/factorial")
    await driver.manage().window().setRect({ width: 1346, height: 708 })
    await driver.findElement(By.id("input")).sendKeys("1")
    await driver.findElement(By.id("submit")).click()
    const result=await driver.findElement(By.id("resultado"))
    result==="1";
  }).timeout(1000000)
})