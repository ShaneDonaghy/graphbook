const Page = require('./page');

class HomePage extends Page {
    get postTextBox () {
        return browser.$('textarea');
    }
    get postSubmitBtn(){
        return browser.$('input[type=submit]');
    }
    get posts(){
        return browser.$$('div.post');
    }
    get openChats(){
        return browser.$('div.chats').$$('div.chat');
    }
    get myChatMessages(){
        return browser.$$('div.right');
    }
    get closeChatButtons(){
        return browser.$('button.close');
    }
    get chatWindow(){
        return browser.$$('div.chatWindow');
    }
}

module.exports = new HomePage();
