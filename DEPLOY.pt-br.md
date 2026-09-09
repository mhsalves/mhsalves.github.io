# Deploy no GitHub Pages

Como o [matheusalves.dev](https://matheusalves.dev/) é publicado.

*Leia em outras línguas: [English](DEPLOY.md), [Português Brasileiro](DEPLOY.pt-br.md)*

## Como funciona

Este repositório é um **site de usuário** (`mhsalves.github.io`), então o GitHub Pages o serve direto daqui, em vez de usar uma branch `gh-pages` separada. A origem da publicação é:

- **Branch:** `main`
- **Pasta:** `/docs`

Ou seja, o site estático exportado é versionado dentro de `docs/`. O que estiver em `docs/` na `main` é exatamente o que as pessoas veem. Não existe build rodando do lado do GitHub — o build acontece localmente e o resultado é enviado no push.

```
src/  ──(next build)──>  dist/.next  ──(next export)──>  docs/  ──(git push)──>  GitHub Pages ──> matheusalves.dev
```

Dois arquivos em `docs/` existem apenas para o Pages se comportar corretamente:

- **`docs/CNAME`** — contém `matheusalves.dev`, que é o que liga o domínio customizado ao site. Sem ele, o Pages volta para `mhsalves.github.io`.
- **`docs/.nojekyll`** — desativa o processamento do Jekyll. Isso é obrigatório: o NextJS coloca os assets em `_next/`, e o Jekyll ignora diretórios que começam com underscore, o que quebraria todos os scripts e estilos do site.

Os dois arquivos são recriados a cada release, porque a etapa de export limpa a pasta `docs/` antes de escrever nela.

## Publicando

Com a branch `main` atualizada e a árvore de trabalho limpa:

```bash
npm run release:gp
git push origin main
```

O push é uma etapa separada de propósito, para você conseguir revisar o diff gerado antes de torná-lo público.

## O que o `release:gp` faz

O `release:gp` é uma sequência de quatro scripts menores, definidos no `package.json`:

| Etapa | Script | O que acontece |
| --- | --- | --- |
| 1 | `npm run build` | `next build src` compila o bundle de produção em `dist/.next` (ignorado pelo git). |
| 2 | `npm run export` | `next export -o docs/ src` gera o HTML/CSS/JS estático em `docs/`, limpando a pasta antes. |
| 3 | `npm run release:gp:setup` | Recria `docs/.nojekyll` e escreve `matheusalves.dev` em `docs/CNAME`. |
| 4 | `npm run release:gp:commit` | Executa `git add docs/` e cria o commit com a mensagem `release: new features`. |

Cada etapa pode ser executada isoladamente, o que ajuda a depurar um release quebrado.

## Conferindo antes do push

Depois de rodar o release, teste o export localmente em vez de confiar apenas no diff:

```bash
npx serve docs
```

Abra [http://localhost:3000](http://localhost:3000) (ou a porta exibida no terminal) e confirme que a página carrega com estilos e imagens. Também vale conferir:

```bash
cat docs/CNAME        # deve conter exatamente: matheusalves.dev
ls -a docs/.nojekyll  # deve existir
git show --stat       # revise o que o commit de release alterou
```

Depois do push, o GitHub Pages costuma publicar em menos de um minuto. O status do deploy aparece em **Settings → Pages** e na aba **Deployments** do repositório.

## Configurando o Pages do zero

Se a configuração do Pages for perdida ou for necessário refazê-la em outro repositório:

1. Vá em **Settings → Pages**.
2. Em **Build and deployment**, defina **Source** como `Deploy from a branch`.
3. Escolha a branch `main` e a pasta `/docs`, e salve.
4. Em **Custom domain**, informe `matheusalves.dev` e salve — isso cria o `docs/CNAME` automaticamente.
5. Ative **Enforce HTTPS** assim que o certificado for emitido.

O DNS do domínio precisa apontar para o GitHub Pages: um registro `ALIAS`/`ANAME` do domínio apex para `mhsalves.github.io`, ou registros `A` para os IPs do Pages. Veja [Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Resolvendo problemas

**O site carrega sem nenhum estilo.** O `docs/.nojekyll` está faltando, então o Jekyll está descartando a pasta `_next/`. Rode `npm run release:gp:setup` de novo e faça o push.

**O domínio customizado parou de funcionar.** O `docs/CNAME` se perdeu no export, ou tem mais de uma linha. Ele precisa conter exatamente `matheusalves.dev`. Repare que o `release:gp:setup` usa append, então se um `CNAME` antigo sobreviver ao export o domínio pode acabar duplicado — apague o arquivo e rode a etapa novamente.

**Nada mudou depois do push.** Verifique se o commit de release realmente contém arquivos dentro de `docs/` (`git show --stat`) e se o Pages continua apontando para `main` / `/docs` em **Settings → Pages**.

**Uma pasta `dist/` apareceu no diff.** Não deveria — `dist/` é ignorada pelo git. Se aparecer, confira o `.gitignore` antes de commitar.
