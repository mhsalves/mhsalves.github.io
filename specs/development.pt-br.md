# Desenvolvimento

Como rodar o projeto e o que cada script faz.

*Leia em outras línguas: [English](development.md), [Português Brasileiro](development.pt-br.md)*

## Pré-requisitos

- [Node.js](https://nodejs.org/) 20.x
- [Yarn](https://yarnpkg.com/) 4.18.0 — fixado pelo campo `packageManager` e versionado em `.yarn/releases`

Você não precisa instalar exatamente essa versão: o release está versionado no
repositório e o `.yarnrc.yml` aponta para ele, então qualquer Yarn que você já
tenha delega para essa versão. Se não tiver nenhum, habilite o que vem junto com
o Node:

```bash
corepack enable
```

## Rodando localmente

Clone o repositório e instale as dependências:

```bash
git clone git@github.com:mhsalves/mhsalves.github.io.git
cd mhsalves.github.io
yarn install
```

> Prefira o Yarn, que é o que corresponde ao `yarn.lock` versionado. Se preferir
> instalar com npm, use `npm install --legacy-peer-deps`: o projeto usa React 17
> enquanto o `enzyme-adapter-react-16` ainda declara peer dependency de React 16,
> então um `npm install` normal falha com erro `ERESOLVE`.

Suba o servidor de desenvolvimento:

```bash
npm run dev
```

O site fica disponível em [http://localhost:3000](http://localhost:3000) com hot
reload.

Para conferir a saída de produção localmente, gere o build e suba o servidor de
produção:

```bash
npm run build
npm start
```

## Scripts

| Script | O que faz |
| --- | --- |
| `npm run dev` | Sobe o servidor de desenvolvimento do NextJS na porta 3000. |
| `npm run build` | Gera o bundle de produção em `dist/.next`. |
| `npm start` | Serve o build de produção localmente. |
| `npm run export` | Exporta o build como site estático em `docs/`. |
| `npm run eslint` | Roda o lint em todos os arquivos `.js` e `.jsx` de `src/`. |
| `npm test` | Roda a suíte do Jest com cobertura. |
| `npm run release:gp` | Gera o build e abre o pull request de deploy. Veja [deploy.pt-br.md](deploy.pt-br.md). |
| `npm run release:gp:setup` | Recria o `docs/.nojekyll` e o `docs/CNAME`. |
| `npm run release:gp:publish` | Roda o `scripts/deploy.sh` isoladamente. |
| `npm run release:netlify` | Faz build e export do site, sem as etapas do GitHub Pages. |

## Testes

```bash
npm test
```

A cobertura mínima está em 100% para branches, funções, linhas e statements no
arquivo `.jest/config.js`, então qualquer queda de cobertura quebra a suíte.

As specs ficam ao lado do código que cobrem, em pastas `__tests__/`. Onde cada
arquivo novo deve ficar está no [architecture.md](architecture.md).

## Lint

```bash
npm run eslint
```

A configuração é o `eslint-config-next`, preset do próprio framework. Ele reporta
avisos de `import/no-anonymous-default-export` nos arquivos `data.js` e
`styles.js`, que seguem esse padrão de propósito; avisos não quebram o comando.
