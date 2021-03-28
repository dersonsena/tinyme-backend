Funcionalidade:  Contabilizar Clique/view

  Regras:
  - A URL tem que combinar com um determinado padrão
  - A URL tem que ter sido cadastrado anteriormente

  Cenário: Contabilizar um clique/view de uma URL
    Dado um URL curta
    Quando for um usuário anônimo
    Então deve contabilizar um clique/view da URL informada
    E retornar o número de cliques/views da URL