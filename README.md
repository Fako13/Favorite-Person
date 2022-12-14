# HarryPotter

Поиск персонажа, создание персонажа. Данные должны подгружаться с базы данных, хранится в стор.

## Используемые технологии

- [React](https://ru.reactjs.org/)
- [Redux-Toolkit](https://redux-toolkit.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Netlify](https://www.netlify.com/)
- [Styled-components](https://styled-components.com/)

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
