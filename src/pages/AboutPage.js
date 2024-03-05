import { moreBtn, personalData } from "../config/AddElements";

const AboutPage = () => {
    return (
        <div className="flex flex-col font-jura text-neutral-600 dark:text-neutral-200 duration-300 relative w-[1180px] animate-[startPages_0.5s_forwards]">
            <section className="flex h-52 justify-center items-center uppercase font-Commissioner">
                <h1 className="text-[4rem] font-extrabold">Обо <strong className="text-[#ffa500]">мне</strong></h1>
                <h1 className="absolute text-[7rem] text-neutral-200 -z-10 font-extrabold">Резюме</h1>
            </section>
            <section className="w-full text-[1.1rem]">
                <article className="font-philosopher uppercase">
                    <h2 className="text-2xl font-semibold">Самушенков Анатолий Игоревич</h2>
                    <h4 className="mt-2 mb-5 text-xl font-normal text-neutral-400">WEB разработчик</h4>
                </article>
                <article className="leading-7 font-medium mb-5">
                    Привет! Меня зовут Анатолий, и я являюсь инженером технической поддержки в хостинговой компании. В рамках своей текущей должности я занимаюсь переносом сайтов внутри нашей площадки, а также помощью в переносе и запуске проектов со сторонних ресурсов. Я обладаю опытом работы с различными платформами и инструментами, что позволяет эффективно решать поставленные задачи.  Но помимо этого, я изучаю и развиваюсь в сфере фронтенд-разработки и ищу возможности для реализации своих навыков в данной области. Моя цель — стать профессиональным фронтенд-разработчиком и создавать удобные и функциональные интерфейсы для веб-приложений и сайтов. 
                </article>
                <article>
                    <ul className="flex flex-col h-32 flex-wrap leading-10">
                        {Object.entries(personalData).map(([key, value]) => 
                        <li className="flex" key={key}>
                            <span className="w-40 font-bold text-neutral-800">{key}:</span>
                            <span>{value}</span>
                        </li>
                        )}
                    </ul>
                </article>
                <div className="fillMoreBtn effectFillMoreBtn relative flex bg-white dark:bg-neutral-900 border border-[#ffa500] h-14 w-60 justify-center items-center rounded-full mt-8">
                    <button className="font-Commissioner rounded-full uppercase font-bold flex flex-grow justify-center items-center h-full text-sm z-[1] focus:outline-none">Скачать резюме</button>
                    <span className="flex cursor-pointer rounded-full justify-center items-center p-4 bg-[#ffa500] z-[1]">{moreBtn.down}</span>
                </div>
            </section>
            {/* <section className="my-28">
                <article class="flex flex-col">
                    <h1 className="text-center font-Commissioner font-medium text-4xl uppercase mb-10">Технические навыки</h1>
                    <ul className="num-skill">
                        <li>
                            <div className="html-skill">
                                <div className="name-skill">HTML
                                    <div className="persent">80%</div>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress"></div>
                                </div>
                                <ul className="detail-skill">
                                    <li><b>&bull;</b>Структура HTML документа</li>
                                    <li><b>&bull;</b>Формы</li>
                                    <li><b>&bull;</b>Теги и атрибуты</li>
                                    <li><b>&bull;</b>Симантика и валидация</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="css-skill">
                                <div className="name-skill">CSS
                                    <div className="persent">70%</div>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress"></div>
                                </div>
                                <ul className="detail-skill">
                                    <li><b>&bull;</b>Понятие потока документа</li> 
                                    <li><b>&bull;</b>Flexbox и Grid</li> 
                                    <li><b>&bull;</b>Медиа запросы</li>
                                    <li><b>&bull;</b>Селекторы, псевдоэлементы и псевдоклассы</li> 
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="js-skill">
                                <div className="name-skill">JavaScript
                                    <div class="persent">55%</div>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress"></div>
                                </div>
                                <ul className="detail-skill">
                                    <li><b>&bull;</b>Async/await, promise</li>
                                    <li><b>&bull;</b>DOM-структура, события</li>
                                    <li><b>&bull;</b>Базовые конструкции и типы данных</li>
                                    <li><b>&bull;</b>Использование возможностей ES6</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="react-skill">
                                <div className="name-skill">ReactJS
                                    <div className="persent">50%</div>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress"></div>
                                </div>
                                <ul class="detail-skill">
                                    <li><b>&bull;</b>Обработка событий</li>
                                    <li><b>&bull;</b>Создание компонентов</li>
                                    <li><b>&bull;</b>Управление состоянием через React Hooks</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="tailwind-skill">
                                <div className="name-skill">Tailwind
                                    <div className="persent">70%</div>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress"></div>
                                </div>
                                <ul className="detail-skill">
                                    <li><b>&bull;</b>Применение стилей</li>
                                    <li><b>&bull;</b>Flexbox и Grid</li>
                                    <li><b>&bull;</b>Устновка окружения</li>
                                    <li><b>&bull;</b>Адаптивность</li>
                                    <li><b>&bull;</b>Кастмные настройки</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="git-skill">
                                <div className="name-skill">GIT
                                    <div className="persent">75%</div>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress"></div>
                                </div>
                                <ul className="detail-skill">
                                    <li><b>&bull;</b>Основные команды</li>
                                    <li><b>&bull;</b>Работа с репозиториями</li>
                                    <li><b>&bull;</b>Ветки, merge и rebase</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </article>
            </section> */}
        </div>
    )
}

export default AboutPage;