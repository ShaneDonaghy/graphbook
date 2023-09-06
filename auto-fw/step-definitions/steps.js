const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, browser } = require('@wdio/globals');
const HomePage = require('../pageobjects/home.page');

Given(/^I am on the (\w+) page$/, async (page) => {
    switch (page) {
        case 'home':
            await HomePage.open();
            await HomePage.postTextBox.waitForDisplayed();
            break;
    }
});

When(/^I type (.*) in the (.*) text field$/, async (message, field) => {
    let elem;
    switch (field) {
        case 'post':
            elem = await HomePage.postTextBox;
            break;
        case 'chat':
            elem = await HomePage.chatWindowTextField;
            break;
        default:
            console.error('FIELD NOT FOUND');
    }
    await elem.setValue(message);
});
When(/^I click submit$/, async () => {
    await HomePage.postSubmitBtn.click();
});
Then(/^the top post will contain (.*)$/, async (message) => {
    await browser.pause(500);
    console.log(`Number of Post Divs: ${await HomePage.posts.length}`);
    let topPostText = await HomePage.posts[0].getText();
    await expect(topPostText).toContain(message);
});
When(/^I open the (.*) chat window$/, async (ord) => {
    let elem;
    switch (ord) {
        case 'top':
            elem = await HomePage.openChats[0];
            break;
        case 'bottom':
            elem = await HomePage.openChats[await HomePage.openChats.length - 1];
            break;
        default:
            console.error(`Cant Find Chat Window: ${ord}`)
    }
    await elem.click();
    await HomePage.chatWindow[0].waitForDisplayed();
});
When(/^I press (.*) key$/, async (key) => {
    switch (key) {
        case 'enter':
            await browser.keys('\uE007');
            break;
    }
});
Then(/^the bottom chat message will contain (.*)$/, async (msg) => {
    await browser.pause(500);
    let numMessages = await HomePage.myChatMessages.length;
    let myLastMessage = await HomePage.myChatMessages[numMessages - 1].getText();
    console.log('My Last Message: ' + myLastMessage);
    await expect(myLastMessage).toEqual(msg);
});
