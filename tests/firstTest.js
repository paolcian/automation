const { Builder, By } = require("selenium-webdriver");
const { addConsoleHandler } = require("selenium-webdriver/lib/logging");


async function example(){

    //launch the browser
    let driver = await new Builder().forBrowser("chrome").build();
    //navigate to the website
    await driver.get("https://maltapark.com/");
    //Click on the dropdown named All Classifieds
    await driver.findElement(By.xpath("//*[@id='searchselector']")).click();

    //Select Books from the dropdown

    await driver.findElement(By.xpath("//*[contains(text(),'Books')]")).click();

    //Input Computer as text in the search area and click the search btn

    await driver.findElement(By.xpath("//*[@id='search']")).sendKeys("Computer");

    await driver.findElement(By.css("button[type='submit']")).click();

    //Get the description and price of the first item in the list and print it out in the console
    let description = await driver.findElement(By.xpath("//*[@class='content'] //*[@class='header']")).getText();
    let price = await driver.findElement(By.xpath("//*[@class='content'] //*[@class='price']")).getText();

    console.log(description + " " + price);
}

example();