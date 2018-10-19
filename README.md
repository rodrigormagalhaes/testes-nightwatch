### Testes Nightwatch

- Instalar: 
```sh
npm install -g nightwatch
```

- Download selenium server: https://www.seleniumhq.org/download/
    - Informar o caminho do jar na tag "server_path" do arquivo nightwatch.json

- Download chromedriver: http://chromedriver.chromium.org/downloads
    - Informar o caminho do chromedriver na tag "webdriver.chrome.driver" do arquivo nightwatch.json

- Executar testes:
```sh
nightwatch -t testes/test_1.js
```

- Executar todos os testes:
```sh
nightwatch testes
```

#### Referências
- [Nightwatch](http://nightwatchjs.org/) 
