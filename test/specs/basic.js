const assert = require("assert");

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io');
        const title = browser.getTitle();
        //console.log(title);
        assert.strictEqual(title, 'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js')
        //assertEqual(title, 'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js');
        //assert(title, 'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js');
        //expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js');
    })
})