# Cessao_Fundo

1- download do arquivo
2- "npm install" na raiz do arquivo
3- criar um banco mysql na AWS RDS e configurar o arquivo .env
4- criar um bucket no S3 e colocar o arquivo CSV com o nome que desejar
5- iniciar o projeto com o comando: "node app" (a tabela será criada automaticamente)
6- o endpoint para cadastrar no banco as informações do arquivo CSV: http://localhost/readcsv com 2 dados em json: 
{
 "bucket_name": "",
 "object_key": ""
} 
