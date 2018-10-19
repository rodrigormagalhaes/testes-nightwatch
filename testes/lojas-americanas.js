module.exports = {
    'Busca produto no site' : function (client) {
      client
        .url('https://www.americanas.com.br/')
        .waitForElementVisible('body', 1000)
        .assert.visible('input[id=h_search-input]')
        .setValue('input[id=h_search-input]', 'iphone')
        .click('button[id=h_search-btn]') 
        .click('#sidebar-middle > div:nth-child(2) > div > div > div > div > section:nth-child(2) > div > ul > li:nth-child(1) > a > svg')
        .pause(1000)
        .assert.containsText('#content-middle > div:nth-child(2) > div > div > div > a.btn.btn-xs.btn-input.btn-thin.btn-dismissible.btn-list-item > span',
         'preto')
        .end();
    }
  };
  
  