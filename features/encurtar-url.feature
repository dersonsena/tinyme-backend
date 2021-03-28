Funcionalidade: Encurtar uma URL

  Regras:
  - URL tem que ser válida
  - URL não pode ter sido usada anteriormente
  - Apelido é opcional, caso informado, dever ser válido
  - Apelido, caso informado, não pode ter sido usado anteriormente

  Cenário: Encurtar uma URL anônima sem apelido
    Dado uma URL grande
    E não informar um apelido para URL
    Quando for um usuário anonimo
    Então deve retornar uma url curta vinculada a URL grande

  Cenário: Encurtar uma URL anônima com apelido
    Dado uma URL grande
    E um apelido para URL
    Quando for um usuário anônimo
    Então deve retornar uma url curta com apelido vinculada a URL grande;