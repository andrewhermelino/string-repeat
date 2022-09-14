# String Repeat

Link para download: <https://andrewhermelino.github.io/StringRepeat/>

## Como usar o programa:

O programa posssui quatro parâmetros:

- String
- Replaces
- Format
- Lines

### String
Recebe um texto com várias linhas como o exemplo a seguir
```
codUsuario
codEmpresa
codTipoUsuario
codProduto
```
Cada linha será formatada de forma individual nos campos a seguir

### Replace
Esse campo executa substituições de um ou mais caracteres em cada linha do campo **String**, onde o campo *Search* é o valor que será procurado e o campo *Replace* é o valor pelo qual será substituído. Seguindo como exemplo os parâmetros a cima
```
codUsuario
codEmpresa
codTipoUsuario
codProduto
```
> Search: cod

> Replace: format

Nessas confições, o resultado seria:
```
formatUsuario
formatEmpresa
formatTipoUsuario
formatProduto
```

### Format
Para cada uma das linhas depois de passarem pelo campo **Replace**, sofrerão uma formatação dependendo da opção marcada:

**none:** Opção padrão, nenhuma formatação é feita.
**Capitalize:** A primeira letra passa para maiúsculo e os demais caracteres permanecem a mesma coisa.
**UPPERCASE:** Todas as letras passam para maiúsculo.
**lowercase:** Tpdas as letras passam para minúsculo.

### Lines
Esse seria o resultado final. Cada linha do parâmetro formatado até agora representa uma linha que será mostrada no resultado final. o caractere "$" se refere ao valor de cada linha. Nesse campo pode ser inserido informação adicional para acompanhar o resultado final:
```
FormatUsuario
FormatEmpresa
FormatTipoUsuario
FormatProduto
```
> Lines: get$();

Resultado final:
```
getFormatUsuario();
getFormatEmpresa();
getFormatTipoUsuario();
getFormatProduto();
```

## Informações para desenvolvimento:
Depois de ter clonado o projeto:
- Use o comando ```npm install``` para instalar todas as dependências
- Use o comando ```npm start``` para rodar o programa
- Use o comando ```npm run build``` para gerar o arquivo executável. Esse "executável" é uma pasta que deve ser gerada dentro da pasta ```packages``` no root do projeto. A pasta inteira deve ser compartilhada para rodar o programa, dentro dela terá o arquivo executável.
