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