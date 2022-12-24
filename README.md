# HarryPotter

Поиск персонажа, создание персонажа. Данные должны подгружаться с базы данных, хранится в стор.

## Используемые технологии

- [React](https://ru.reactjs.org/)
- [Redux-Toolkit](https://redux-toolkit.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Netlify](https://www.netlify.com/)

## Структура папок

"+" - помечены файлы и папки доступные для использования

"-" - помечены файлы и папки НЕ доступные для использования

```
|+ dist/                           - папка с prod-файлами
|- node_modules/                    - папка с node-модулями
|+ public/                          - папка для PWA и скелета приложения
|+ src/                             - папка с исходниками
    |+ assets/                      - папка со статическими ресурсами
        |+ fonts/                   - папка с шрифтами
        |+ styles/                  - папка с глобальными стилями
    |+ components/                  - папка с компонентами
        |+ui                        - папка с компонентами дизайна (select, button, spinner...)
        |*                          - папки с компонентами и их логикой (sign-in, cart-item...)
    |+ routes/                      - папка настройки маршрутизации
        |+router.ts                 - файл настройки маршрутизации
    |+ layout/                      - папка настройки общих оберток для страниц
    |+ store/                       - папка для store
    |+ services/                    - папка для работы с services (базы данных)
    |+ hooks/                       - папка для работы с hooks (функции хелперы)
|+ README.md                        - файл readme
|- package.json                     - файл конфигурации проекта npm
|- package-lock.json                - файл конфигурации проекта npm
|+ .gitignore                       - файл с исключениями git
|+ tsconfig.ts                      - файл конфигурации TypeScript
|+ webpack.config.ts                - файл конфигурации Webpack
|+ .env                             - файл констант
|+ .babelrc                         - файл конфигурации Babel
|+ .eslintrc.json                   - файл конфигурации Eslint
|+ .prettierrc                      - файл конфигурации Prettier
```

### Scripts

- `yarn dev` — Starts the application in development mode at `http://localhost:7777`.
- `yarn build` — Creates an optimized production build of your application.
- `yarn start` — Starts the application in production mode.
- `yarn typecheck` — Validates code using TypeScript compiler.
- `yarn eslint` — Runs ESLint.
- `yarn stylelint` — Runs Stylelint.
- `yarn format` — Runs Prettier.

### Learn More about Next.js

This is a [Next.js](https://nextjs.org/) project.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:7777/api/hello](http://localhost:7777/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
