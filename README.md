# FunLe
### Инструкция для Сони
**Важно!** Перед началом работы необходимо установить Docker, Node.js и Yarn и Rust и Ngrok.

1. Склонировать репозитории с GitHub
    * [Frontend](https://github.com/FunLe-Math-learning-app/funle_frontend.git)
    * [Backend](https://github.com/FunLe-Math-learning-app/funle_backend.git)

```bash
> git clone <repo_url>
```

2. Установить MongoDB с помощью Docker
```bash
> docker pull mongo
```
```bash
> docker run -d --name mongodb_test_db -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=root mongo
```

3. Установить RUST и Ngrok
```bash
> npm install -g ngrok
```
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

4. Далее будем работать с бекендом
```bash
> cd funle_backend
```
```bash
> cargo run --release
```
В одельном терминале запустить ngrok
```bash
> ngrok http 8080
```
Скопировать адрес из терминала и вставить в файл `funle_frontend/src/repository/constants.ts` в переменную `baseUrl`
5. Далее будем работать с фронтендом
```bash
> cd funle_frontend
```
```bash
> yarn install
```
Для запуска локального сервера
```bash
> npx expo start
```

Для запуска дев сервера *для тебя не рекомендуется*
```bash
> yarn start
```

#### Обьяснение необходимости каждого пункта
1. Описывать необходимость клонирования не буду
2. Установка MongoDB с помощью Docker
    * Первая команда скачивает образ MongoDB
    * Вторая команда запускает контейнер с MongoDB
3. Установка RUST и Ngrok
    * Первая команда устанавливает RUST
    Раст необходим для запуска бекенда для тестирования
    * Вторая команда устанавливает Ngrok
    Ngrok необходим для того чтобы сделать бекенд доступным из интернета так как фронтенд работает только с бекендом через интернет
4. Далее будем работать с бекендом
    * Первая команда переходит в папку с бекендом
    * Вторая команда запускает бекенд с которым будет взаимодействовать фронтенд
    * Третья команда запускает ngrok
5. Далее будем работать с фронтендом
    * Первая команда переходит в папку с фронтендом
    * Вторая команда устанавливает все необходимые зависимости
    * Третья команда запускает локальный сервер для фронтенда
    * Четвертая команда запускает дев сервер для фронтенда