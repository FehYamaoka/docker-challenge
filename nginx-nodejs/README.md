# docker-challenge-nginx-nodejs
Desafio imposto pelo curso FullCycle de Docker, no qual está incluso no módulo de DevOps.

### Requisitos do Desafio
> Utilização do nginx como proxy reverso -> onde o usuário acessa o nginx, no qual irá fazer uma chamada na aplicação node.js, onde essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people

> O retorno da aplicação deve exibir <'h1'>Full Cycle Rocks!<'h1'/> e listar os nomes cadastrados abaixo

> Gerar o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080

> Subir o repositório

### Para executar o projeto :whale:
```
 docker-compose up -d --build
```
<!-- ```
 docker exec -it app bash
```
```
 Dentro do bash execute
 node index.js
``` -->
```
 docker logs app
```

Executamos o docker logs app para poder ver as mensagens de conexão e informações de que a aplicação está rodando na porta 3000. 
Acessível também pela porta 8080 do Nginx
<br/>