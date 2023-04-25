# FunLe

**Также огромная просьба соблюдать конвенцию коммитов**
подробнее можно узнать по этой [ссылке](https://www.conventionalcommits.org/en/v1.0.0/)

### Инструкция для Сони
**Важно!** Перед началом работы необходимо установить Docker, Node.js и Yarn и Rust и Ngrok.

1. Склонировать репозитории с GitHub
    * [Frontend](https://github.com/FunLe-Math-learning-app/funle_frontend.git)
    * [Backend](https://github.com/FunLe-Math-learning-app/funle_backend.git)

```bash
> git clone <repo_url>
```

2. Установить MongoDB с помощью Docker
Для установки Docker необходимо перейти по [ссылке](https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe) и скачать Docker Desktop для Windows

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
> cargo test && cargo run --release
```

>**В случае ошибки**
>```bash
>error: failed to run custom build command for `pear_codegen v0.1.5`
>
>Caused by:
>  process didn't exit successfully: `/home/hikionori/Documents/Projects/Diplom/funle_backend/target/release  build/pear_codegen-69fc57a4fbc6be48/build-script-build` (exit status: 101)
>  --- stderr
>  Error: Pear requires a 'dev' or 'nightly' version of rustc.
>  Installed version: 1.68.0 (2023-03-06)
>  Minimum required:  1.31.0-nightly (2018-10-05)
>  thread 'main' panicked at 'Aborting compilation due to incompatible compiler.', /home/hikionori/.cargo/registry/src/github.com-1ecc6299db9ec823/pear_codegen-0.1.5/build.rs:24:13
>  note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
>```
>
>Выполнить следующую команду
>```bash
>> rustup override set nightly
>```

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

auto\index.ts (true - если не надо сильно тестить и это означает, что мы сразу залогигины).