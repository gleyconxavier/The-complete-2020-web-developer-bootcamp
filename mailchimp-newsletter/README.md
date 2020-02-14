# MailChimp Newsletter

# Dependências

-dotenv | Váriaveis de ambiente.

-express | Tratamento de rotas.

-request | Cliente http.

# Como usar

"npm install" - Para instalar as dependências necessárias.

"npm start" - Iniciar em modo normal.

"npm install -g nodemon" - Instalar Nodemon em escopo global.

"npm run dev" - Iniciar em modo de desenvolvimento(Necessário Nodemon).

Configurar o arquivo .env com as seguintes variáveis:

-MAILCHIMP_KEY | Sua chave da API do MailChimp.

-AUDIENCE_ID | ID do audience que conterá as inscrições.

-SV_NUMBER | Número do seu servidor, este número se encontra no final da chave da API (us-xx).

# Opcionais e demais configurações

Os campos que são capturados se encontram em app.js, entre as linhas 25~28, é possível utilizar outras condições e capturar um número maior de campos personalizados, basta que configure os campos corretamente no MailChimp e posteriormente adicione a aplicação, recomendo fortemente a leitura no MailChimp para um melhor manuseio:

https://mailchimp.com/developer/reference/lists/list-merges/