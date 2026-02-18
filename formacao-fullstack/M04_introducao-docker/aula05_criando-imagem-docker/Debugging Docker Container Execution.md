# Chat Conversation

Note: _This is purely the output of the chat conversation and does not contain any raw data, codebase snippets, etc. used to generate the output._

### User Input

@[Dockerfile]  Eu criei a imagem com docker build, porem quando vai executar um docker run, o container não é exibido com docker ps. Veja o que está acontecendo e em ajude como saber executar com passo a passo

### Planner Response

Vou analisar o seu Dockerfile para entender o problema!

*Viewed [Dockerfile](file://wsl.localhost/Ubuntu-22.04/home/lucas/estudos-fsc/formacao-fullstack/M04_introducao-docker/aula05_criando-imagem-docker/Dockerfile) *

### Planner Response

Agora vejo o problema! Vou também verificar a estrutura do projeto para entender melhor:

*Listed directory [aula05_criando-imagem-docker](file://wsl.localhost/Ubuntu-22.04/home/lucas/estudos-fsc/formacao-fullstack/M04_introducao-docker/aula05_criando-imagem-docker) *

*Listed directory [src](file://wsl.localhost/Ubuntu-22.04/home/lucas/estudos-fsc/formacao-fullstack/M04_introducao-docker/aula05_criando-imagem-docker/src) *

*Viewed [server.js](file://wsl.localhost/Ubuntu-22.04/home/lucas/estudos-fsc/formacao-fullstack/M04_introducao-docker/aula05_criando-imagem-docker/src/server.js) *

### Planner Response

Identifiquei o problema! Encontrei **dois problemas** no seu Dockerfile. Vou explicar tudo detalhadamente:

---

## 🔍 Problemas Encontrados

### Problema 1: `COPY src /app/` copia o **conteúdo** da pasta, não a pasta em si

Na linha 5 do Dockerfile:
```dockerfile
COPY src /app/
```
Isso copia os **arquivos dentro de `src/`** diretamente para `/app/`, então o [server.js](cci:7://file://wsl.localhost/Ubuntu-22.04/home/lucas/estudos-fsc/formacao-fullstack/M04_introducao-docker/aula05_criando-imagem-docker/src/server.js:0:0-0:0) vai parar em `/app/server.js`. Mas o `CMD` tenta executar `node src/server.js`, que procura em `/app/src/server.js` — **arquivo que não existe!**

O container inicia, falha imediatamente e encerra. Por isso ele não aparece no `docker ps` (que só mostra containers **em execução**).

### Problema 2: `WORKDIR` deveria vir **antes** dos `COPY`s

O `WORKDIR /app` está na linha 7, **depois** dos COPYs. Embora o Docker crie o diretório automaticamente, é boa prática definir o `WORKDIR` primeiro.

---

## ✅ Solução: Dockerfile Corrigido

Você tem duas opções:

### Opção A — Manter a estrutura `src/` dentro do container (recomendado)
```dockerfile
FROM node:24-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY src ./src

EXPOSE 3000

CMD ["node", "src/server.js"]
```

### Opção B — Colocar tudo direto em `/app`
```dockerfile
FROM node:24-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY src/ ./

EXPOSE 3000

CMD ["node", "server.js"]
```

Vou aplicar a **Opção A** (mais organizada):

*Edited relevant file*

### Planner Response

---

## 📋 Passo a Passo para Executar

Abra o terminal WSL Ubuntu e siga estes passos:

### 1️⃣ Navegar até o diretório do projeto
```bash
cd ~/estudos-fsc/formacao-fullstack/M04_introducao-docker/aula05_criando-imagem-docker
```

### 2️⃣ Construir a imagem Docker
```bash
docker build -t meu-servidor-node .
```
> O `-t meu-servidor-node` dá um nome (tag) para a imagem. O `.` indica que o Dockerfile está no diretório atual.

### 3️⃣ Executar o container
```bash
docker run -d -p 3000:3000 --name meu-container meu-servidor-node
```
| Flag | Significado |
|------|-------------|
| `-d` | **Detached** — roda em segundo plano (por isso aparece no `docker ps`) |
| `-p 3000:3000` | Mapeia a porta 3000 do host para a porta 3000 do container |
| `--name meu-container` | Dá um nome ao container |

### 4️⃣ Verificar se está rodando
```bash
docker ps
```
Agora você deve ver o container listado! ✅

### 5️⃣ Testar a aplicação
```bash
curl http://localhost:3000
# ou abra no navegador: http://localhost:3000
```
Deve retornar: `Hello, World!`

### 6️⃣ Ver os logs do container (opcional)
```bash
docker logs meu-container
```

### 7️⃣ Parar e remover o container (quando quiser)
```bash
docker stop meu-container
docker rm meu-container
```

---

## 🧠 Por que o container não aparecia no `docker ps`?

O `docker ps` só mostra containers **em execução**. Quando o `CMD` falha (arquivo não encontrado), o container encerra imediatamente. Para ver containers que falharam, use:

```bash
docker ps -a
# O -a mostra TODOS os containers, incluindo os parados/com erro
```

Você provavelmente veria seu container anterior com status `Exited (1)` — o código `1` indica erro.