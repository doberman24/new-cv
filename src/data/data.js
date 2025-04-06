export const personalData = {
  'Дата рождения': '11.12.1981',
  'Возраст': '42',
  'Адрес': 'РФ, г. Санкт-Петербург',
  'Email': <a href="mailto:doberman24@yandex.ru">doberman24@yandex.ru</a>,
  'Телефон': <a href="tel:+7-921-331-2439">+7(921)-331-24-39</a>,
  'Telegram': <a href="tg://resolve?domain=@it_to_move">@it_to_move</a>,
};


export const skills = {
  'HTML': [80, 'Структура HTML документа', 'Формы', 'Теги и атрибуты', 'Симантика и валидация'],
  'CSS': [70, 'Понятие потока документа', 'Flexbox и Grid', 'Медиа запросы', 'Селекторы, псевдоэлементы и псевдоклассы'],
  'JavaScript': [65, 'Async/await, promise', 'DOM-структура, события', 'Базовые конструкции и типы данных', 'Использование возможностей ES6'],
  'ReactJS': [60, 'Обработка событий', 'Глобальное хранилище Redux', 'Работа с Routes', 'Создание компонентов', 'Управление состоянием через React Hooks'],
  'VueJS': [60, 'Создание компонентов', 'Обработчики событий', 'Шаблоны и использование директив v-if, v-for и т.д.', 'Vuex-хранилище', 'Работа с маршрутами',],
  'Tailwind': [70, 'Применение стилей', 'Flexbox и Grid', 'Установка окружения', 'Адаптивность', 'Кастмные настройки'],
  'GIT': [75, 'Основные команды', 'Работа с репозиториями', 'Ветки, merge и rebase']
};


export const addSkills = {
  'Дополнительные навыки': ['Internet, Web и HTTP', 'Опыт работы с ОС Linux', 'Базовые знания ЯП Python и оболочки Bash (создание инструментов для работы)', 'Знания общей структуры популярных CMS - Wordpress, Bitrix и т.д.'],
  'В процессе/в планах изучить': ['Vue.js', 'Nuxt.js', 'React.js', 'Next.js', 'TypeScript', 'Совершенствование текущих навыков']
};


export const projects = [
  {
    'name': 'Простой калькулятор',
    'preview': 'calc.lixit.ru',
    'picUrl': 'bg-calc',
    'purpose': 'Учебный проект',
    'type': 'Веб-приложение',
    'stek': 'HTML, CSS, JavaScript',
    'sort': 'js',
    'description': 'Калькулятор с простым функционалом обычного калькулятора. Логика написана на JavaScript. Небольшой проект для практики с DOM-структурой и событиями.',
  },
  {
    'name': 'Прогноз погоды',
    'preview': 'weather.lixit.ru' ,
    'picUrl': 'bg-weather',
    'purpose': 'Учебный проект',
    'type': 'Веб-приложение',
    'stek': 'HTML, CSS, JavaScript',
    'sort': 'js',
    'description': 'Приложение прогноза погоды на текущее время и ближайщие 4 дня. Логика на Javascript. Практика использования асинхронных функции async/await и простых сетевых запросов с помощью fetch. А также, практика с адаптивностью.',
  },
  {
    'name': 'База автомобилей',
    'preview': 'cars.lixit.ru' ,
    'picUrl': 'bg-cars',
    'purpose': 'Учебный проект',
    'type': 'Веб-приложение',
    'stek': 'React, Node.js',
    'sort': 'react, full',
    'description': 'Поиск автомобилей в базе данных, добавление, удаление, изменение данных. Приложение написано на ReactJS в качестве фронтенда, а для бекенда используется node.js. Практика работы с React, Node, MySQL и создание полноценного приложения.',
  },
  {
    'name': 'Мессенджер',
    'preview': 'messenger.lixit.ru' ,
    'picUrl': 'bg-messenger',
    'purpose': 'Учебный проект',
    'type': 'Веб-приложение',
    'stek': 'HTML, CSS, JavaScript, Node.js',
    'sort': 'js, full',
    'description': 'Простенький мессенджер на JavaScript. Запросы отправляются на сервер, который возвращет ответ. Елементарный сервер на node.js и express, который возвращает 1 из 3-х ответов. Цель - попрактиковаться с JS, с node.js, и использовать сетевые заросы. В планах на сервер добавить нейросеть для ответов на вопросы',
  },
  {
    'name': 'Лавка',
    'preview': 'lavka.lixit.ru' ,
    'picUrl': 'bg-lavka',
    'purpose': 'Собственный проект',
    'type': 'Веб-сайт',
    'stek': 'HTML, CSS',
    'sort': 'landing',
    'description': 'Разработка статичного лендинга на HTML и CSS для магазиана-лавки.',
  },
  {
    'name': 'Игра Memory',
    'preview': 'memory.lixit.ru' ,
    'picUrl': 'bg-memory',
    'purpose': 'Учебный проект',
    'type': 'Веб-приложение',
    'stek': 'React',
    'sort': 'react',
    'description': 'Проект взят из курсов HTML Academy. Пиложение на ReactJS. Практика работы с React Hooks, обработкой событий и разворачивания приложения на React. В планах переделать приложение - добавить большье функционала и разнообразия.',
  },
  {
    'name': 'Калькулятор на React',
    'preview': 'calculator.lixit.ru' ,
    'picUrl': 'bg-calc_react',
    'purpose': 'Учебный проект',
    'type': 'Веб-приложение',
    'stek': 'React',
    'sort': ['react'],
    'description': 'Еще один калькулятор, но на ReactJS. Практика работы с размещение компонентов, React Hooks, обработкой событий.',
  },
  {
    'name': 'Мой сайт-портфолио',
    'preview': 'cv.lixit.ru' ,
    'picUrl': 'bg-cv',
    'purpose': 'Собственный проект',
    'type': 'Веб-сайт',
    'stek': 'React, Tailwind',
    'sort': 'react',
    'description': 'Проект-портфолио. Написан на React, для стилей используется Tailwind. Практика работы с данными библиотеками и создание полноценного сайта-резюме.',
  },
  {
    'name': 'Простой шаблон',
    'preview': 'newstart.lixit.ru' ,
    'picUrl': 'bg-newbegin',
    'purpose': 'Обучающая верстка',
    'type': 'Веб-сайт',
    'stek': 'HTML, CSS',
    'sort': 'landing',
    'description': 'Один из первых шаблонов, написанных с использованием HTML и CSS. Практика верстки сайта.',
  },
  {
    'name': 'Шаблон лендинга',
    'preview': 'architect.lixit.ru' ,
    'picUrl': 'bg-architect',
    'purpose': 'Обучающая верстка',
    'type': 'Веб-сайт',
    'stek': 'HTML, CSS, Javascript',
    'sort': 'js, landing',
    'description': 'Еще один шаблон. Практика верстки, а также работа с отзывчивостью элементов при помощи JavaScript',
  },
];


export const sortProjectMenu = {
  '': 'все', 
  'react': 'react', 
  'js': 'js',
  'landing': 'лендинги',
  'full': 'фулстек'
};