<br>
<h1 align="center" style="font-size: 48px">
Cartastic
</h1>
<h3 align="center">Advertising platform with motorization offers</h3>

<p align="center">
  <a href="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
      <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
  </a>
  <a href="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">
  </a>
  <a href="https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white">
    <img src="https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white">
  </a>
</p>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-install">How To Install</a> •
  <a href="#license">License</a>
</p>

## Key Features

-   ⚡ Blazingly fast Fastify backend
-   🖼️ Staticly generated NextJS frontend
-   🧪 Huge test coverage thanks to Jest, React Testing Library and Cypress
-   ✨ Shared types by OpenAPI

## How To Install

- Clone this repository

```bash
  gh repo clone Wojtazzzz/cartastic
```

- Go to the project directory

```bash
  cd cartastic
```

- Install dependencies

```bash
  pnpm install
```

- copy *.env.example* as *.env* and fill with own data (this should be done in both workspaces)

- Generate prisma schemas

```bash
  cd ./apps/api && npx prisma generate && cd ../../
```

- Start dev server

```bash
  pnpm run dev
```


> **Note:**
> Before installation you should have mysql database

## License

MIT
