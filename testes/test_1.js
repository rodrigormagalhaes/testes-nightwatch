module.exports = {
  'Demo test Google' : function (client) {
    client
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .assert.title('Google')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', 'rembrandt van rijn')
      .click('#hplogo')
      .click('input[name=btnK]')
      .pause(1000)
      .assert.containsText('#rso > div > div > div:nth-child(1) > div > div > div.r > a > h3', 'Rembrandt – Wikipédia, a enciclopédia livre')
      .end();
  }
};

