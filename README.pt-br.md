# next-ghpages-template
Um template para clients que precisem usar o Github Pages, React e SSR usando [NextJS](https://nextjs.org/).

*Leia em outras línguas: [English](README.md), [Português Brasileiro](README.pt-br.md)*

## Este projeto utiliza as seguintes dependências principais

- [NextJS](https://nextjs.org/) como Framework de React para SSR. (Detalhes em [#2](https://github.com/mhsalves/next-ghpages-template/pull/2))


## Documentação

- [Como configurar Github Pages](#configurando-github-pages)
- [Como executar um deploy](#deploy)
  - [Configurando minha página pessoal](#configurando-minha-página-pessoal)

### Configurando Github Pages

Veja este [artigo](https://help.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

### Deploy

Este projeto contém um simples sistema de deploy para o github pages.
```
npm run deploy
```
Por padrão, nós usamos a branch `master` para armazenar o código fonte do projeto e a branch `gh-pages` para os arquivos compilados pelo NextJS e servido como página.

O script principal executa outros scripts de deploy nos quais especificam cada passo do deploy. Os mesmos são:
- `deploy:export` gera os arquivos de build e de exportação feitos pelos scripts de build e export do [NextJS](https://nextjs.org/).
- `deploy:setup` adiciona os arquivos de configuração do github pages ou qualquer outro que necessite, como `.nojekyll` or `CNAME`.
- `deploy:commit` cria um commit com os arquivos de deploy, em outras palavras, cria um commit com os arquivos da pasta `out` gerados pelo `npm run deploy:export`.
- `deploy:stage` cria uma branch auxiliar para apontar pro commit criado anteriormente e adicioná-lo em uma subtree.
- `deploy:push` executa um push forçado da branch auxiliar para a branch configurada para a página (gh-pages).

#### Configurando minha página pessoal

Quando nós estamos criando nossa página pessoal (por exemplo, mhsalves.github.io) o github nos força a usar a branch `master` como branch da página. Então nós somos obrigados a usar a branch `master` como nossa branch de arquivos compilados pelo NextJS.

Nesse caso, nós mantemos o método de deploy atual, porém precisamos fazer algumas adaptações. Primeiro, nós precisamos criar uma nova branch de projeto, por exemplo, `my-source` (você pode usar qualquer nome, mas eu aconselho utilizar algum que faça sentido como `source/master`, `main` e etc).

Segundo, configurar o projeto para usar `my-source` como a branch padrão.

<img width="768" alt="Settings Panel to set default branch" src="https://user-images.githubusercontent.com/30807170/67357750-49617280-f52c-11e9-9669-724006a33521.png">

Terceiro, atualizar o script de `deploy:push` no arquivo `package.json` mudando `gh-pages` para `master`.

Como resultado, sua branch do projeto será `my-source` então todos os _pull requests_ serão mergiados nele e toda vez que for executado um comando de deploy todos os novos arquivos serão adicionados na branch `master`.

Qualquer problema, por favor reporte uma [issue](https://github.com/mhsalves/next-ghpages-template/issues/new).
 