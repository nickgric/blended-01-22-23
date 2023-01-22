# Занятие 4. План

- Kahoot
- вопрос-ответ
- Практическое занятие

## Задание

### Шаг 1

Выполни рефакторинг кода приложения **"TODO LIST"** на `react-hooks`

### Шаг 2

Выполни рефакторинг кода приложения **"TODO LIST"**, добавив управление
состоянием с помощью библиотеки [Redux Toolkit](https://redux-toolkit.js.org/).

Пусть Redux-state смотрится следующим образом.

```bash
{
   todos: [],
}
```

- Создай хранилище из `configureStore()`
- Создай редюсеры todo. Используй функцию `createSlice()`.
- Свяжи React-компоненты с Redux-логикой с помощью хуков библиотеки

```bash
npm install @reduxjs/toolkit react-redux
```

[react-redux](https://react-redux.js.org/).

- Для хранения всего `state` приложения в `local storage` используй библиотеку
  [redux-persist](https://github.com/rt2zz/redux-persist#basic-usage)

- используй этот
  [конфиг](https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist)
  для `store`
