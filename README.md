# Chega Aí - Cumbuca
Tipo a
[terra cumbuca](https://twitter.com/chorandissima/status/1118177525195259905),
 mas pra monorepo vs polirepo


## Clonando
- `git clone git@gitlab.com:chega.ai/cumbuca.git chega.ai`
- `cd chega.ai`
- `git submodule update --init`

## Adicionando um repositório novo
Toda vez que um novo microservice for criado, precisamos adicioná-lo a este 
repositório, como um submodule, e ao docker-compose.yml, como um service

Siga as intruções abaixo substituindo `ms-something` pelo nome
**do repositório** a ser adicionado

### Como submodule
- `./addmodule ms-something`

### Como service no docker-compose.yml
Edite o [arquivo do docker-compose](docker-compose.yml) para adicionar um novo
item ao array `services`, seguindo o template abaixo.

Na chave `environment`, *adicione* (sem remover `VIRTUAL_HOST`) todas as 
variáveis **que precisam ser modificadas** para o correto funcionamento do ms.
Caso o valor padrão da variável na config do microservice seja um valor válido, 
não é necessário informar um novo valor aqui.

Na chave `depends_on`, *adicione* todos os serviçs dos quais o novo microserviço
depende. Todos os services definidos no arquivo de compose devem depender do `vhost`.

```yaml
  ms-something:
    build: ./ms-something
    environment:
      VIRTUAL_HOST: ms-something.127.0.0.1.nip.io
      VARIABLE_NAME: value
    command: ["npm", "run", "start:debug"]
    depends_on:
      - vhost
```

## Utilizando o docker-compose
- Siga os passos detalhados em [Clonando](#clonando)
- Define all variables listed on [.envrc.sample](.envrc.sample)
- `docker-compose up`