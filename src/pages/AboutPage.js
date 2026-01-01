import { addSkills, personalData, skills } from "../data/data";
import { experienceEducationPicture, activeBtn } from "../data/icons";
import cv from '../documents/cv.pdf';

const AboutPage = ({pageModal}) => {

  return (
    <div className={`flex flex-col font-jura text-neutral-600 dark:text-neutral-400 relative w-[1180px] xl-a:mx-10 mx-2 ${pageModal ? 'md-a:ml-10 md-a:mr-28 sm:mx-10' : 'mx-10'} animate-[startPages_0.5s_forwards]`}>
      <section className="flex sm:h-52 h-32 mobile:justify-center items-center uppercase font-Commissioner">
          <h1 className="mobile:text-[4rem] text-4xl font-extrabold">Обо <strong className="text-[#ffa500]">мне</strong></h1>
          <h1 className="absolute text-5xl mobile:text-7xl sm:text-[7rem] text-neutral-200 dark:text-neutral-800 duration-300 -z-10 font-extrabold">Резюме</h1>
      </section>
      <section className="flex flex-col w-full text-sm mobile:text-base md:text-[1.2rem]">
          <article className="font-philosopher uppercase">
              <h2 className="text-2xl font-semibold">Самушенков Анатолий</h2>
              <h4 className="mt-2 mb-5 text-xl font-normal text-neutral-500 dark:text-neutral-600 duration-300">Junior Frontend / Fullstack Developer</h4>
          </article>
          <ul className="flex flex-col gap-5 md:leading-7 font-medium mb-7">
            <li>Работаю инженером технической поддержки хостинговой компании. Занимаюсь переносом и запуском веб-проектов на Linux, взаимодействую с различными CMS и самописными PHP / JS-решениями.</li>
            <li>В рамках работы использую внутренний инструмент, разработанный мной (Vue + REST API + Node.js), который автоматизирует получение технической информации о проектах при переносе и запуске.</li>
            <li>Параллельно разрабатываю собственные веб-приложения с фокусом на frontend и интеграцию с backend. Основной стек: React, JavaScript, REST API, Node.js, MongoDB.</li>
            <li>Ориентирован на позицию junior frontend или junior fullstack разработчика.</li>
          </ul>
          <article>
            <ul className="flex gap-x-80 md:h-15 mb-8 flex-wrap leading-8 sm:leading-10">
              {Object.entries(personalData).map(([key, value]) => 
                <li className="flex md:text-base md:leading-9" key={key}>
                  <span className="w-36 md-a:w-40 font-bold text-neutral-800 dark:text-neutral-300 duration-300">{key}:</span>
                  <span>{value}</span>
                </li>
              )}
            </ul>
          </article>
          <a href={cv} download='CV' 
            className="fillMoreBtn effectFillMoreBtn self-center md-a:self-start relative flex bg-white dark:bg-neutral-900 border border-[#ffa500] h-14 w-60 justify-center items-center rounded-full mt-8"
          >
            <button className="font-Commissioner rounded-full uppercase font-bold flex flex-grow justify-center items-center h-full text-sm z-[0] focus:outline-none">Скачать резюме</button>
            <span className="flex cursor-pointer rounded-full justify-center items-center p-4 bg-[#ffa500] z-[0]">{activeBtn.down}</span>
          </a>                        

      </section>
      <section className="my-16 mobile:my-28">
        <article className="flex flex-col">
          <h1 className="text-center font-Commissioner font-medium text-2xl mobile:text-4xl uppercase mb-10">Технические навыки</h1>
          <ul className="grid grid-cols-1 md:grid-cols-2 xl:gap-10 gap-y-10">
            {Object.entries(skills).map(([key, value], count) => 
              <li key={count} className={`w-full md:w-11/12 ${count % 2 ? 'justify-self-end' : ''}`}>
                <div>
                  <div className="font-bold text-[1.5rem] mobile:text-3xl mb-1 flex justify-between items-end">
                    {key}
                    <div className="text-xl mobile:text-2xl font-normal">{`${value[0]}%`}</div>
                  </div>
                  <div className="h-2 w-full bg-slate-200 dark:bg-neutral-700 duration-300">
                    <div 
                      className={`h-full bg-[#ffa500]`} 
                      style={{width: `${value[0]}%`}}
                    ></div>
                  </div>
                  <ul className="grid grid-cols-2 gap-x-3 gap-y-1 mt-3 text-[15px] mobile:text-base leading-[18px]">
                    {value.map((item, count) => {
                      if (count === 0)
                        return null
                      else
                        return (
                          <li key={count} className="relative pl-4 pt-1">
                            <b className="font-MontsAlt absolute text-[#ffa500] inline-block text-3xl leading-7 top-0 left-0">
                              &bull;
                            </b>
                            {item}
                          </li>
                        )
                    })}
                  </ul>
                </div>
              </li>
            )}
          </ul>
        </article>
        <article className="mt-10 mobile:mt-20 grid sm:grid-cols-2 gap-5 mobile:gap-10">
          {Object.entries(addSkills).map(([key, value], count) => 
            <div key={count} className={`w-full sm:w-11/12 ${count % 2 ? 'justify-self-end' : ''}`}>
              <h3 className="uppercase text-center font-medium text-xl">{key}</h3>
              <ul className="mt-3 text-[15px] mobile:text-base">
                {value.map((item, key) => 
                  <li className="mb-3 relative pl-4 leading-tight"
                    key={key}
                  >
                    <b className="font-MontsAlt absolute inline-block top-0 left-0 leading-6 font-light">
                      &#10003;
                    </b>
                    {item}
                  </li>
                )}
              </ul>
            </div>
          )}
        </article>
      </section>
      <section className="grid grid-cols-1 sm:ml-0 mobile:ml-6 ml-2 md-a:grid-cols-2 gap-4">
        <article>
          <h1 className="text-center font-Commissioner font-medium text-2xl mobile:text-4xl uppercase mb-10">Опыт работы</h1>
          <ul>
            <li className="xl:pl-16 pl-5 mobile:pl-10 border-l-2 border-l-slate-300 dark:border-l-slate-700 duration-300 relative mb-10 mobile:mb-16 pr-0 sm:pr-8">
              <div className="absolute bg-[#ffa500] p-2 mobile:p-3 rounded-full -left-[16px] mobile:-left-[22px]">{experienceEducationPicture.exp}</div>
              <div className="inline-block bg-neutral-200 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300 duration-300 px-2 py-0.5 text-xs mobile:text-sm leading-4 rounded-full mb-1.5">июнь 2021 - наст. время</div>
              <div className="mt-2 text-neutral-800 dark:text-neutral-400 duration-300 font-medium text-[0.925] mobile:text-base sm:text-[1.1rem]">
                <strong className="text-base mobile:[1.1rem] sm:text-xl">Инженер технической поддержки - </strong>
                <span className="uppercase">ООО Beget</span>
              </div> 
              <div className="mt-2">
                <strong className="font-medium text-[0.925rem] underline decoration underline-offset-4 mobile:text-base sm:text-[1.1rem]">
                  <b className="uppercase font-medium">Специализация:</b> перенос и запуск веб-проектов
                </strong>
                <ul className="flex flex-col gap-2 text-sm mobile:text-[0.925rem] sm:text-base mobile:leading-6 mt-2">
                  <li>— Перенос и запуск веб-сайтов на хостинговой платформе под Linux</li>
                  <li>— Работа с популярными CMS (WordPress, Bitrix, Joomla, MODX)</li>
                  <li>— Запуск и перенос проектов на PHP-фреймворках</li>
                  <li>— Разворачивание и сопровождение проектов на Node.js и Python</li>
                  <li>— Работа с кастомными веб-проектами</li>
                </ul>
              </div>
            </li>
            <li className="xl:pl-16 pl-5 mobile:pl-10 border-l-2 border-l-slate-300 dark:border-l-slate-700 duration-300 relative mb-10 mobile:mb-16 pr-0 sm:pr-8">
              <div className="absolute bg-[#ffa500] p-2 mobile:p-3 rounded-full -left-[16px] mobile:-left-[22px]">{experienceEducationPicture.exp}</div>
              <div className="inline-block bg-neutral-200 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300 duration-300 px-2 py-0.5 text-xs mobile:text-sm leading-4 rounded-full mb-1.5">В свободное время</div>
              <div className="mt-2 text-neutral-800 dark:text-neutral-400 duration-300 font-medium text-[0.925] mobile:text-base sm:text-[1.1rem]">
                <strong className="text-base mobile:[1.1rem] sm:text-xl">Работа на фрилансе + pet-проекты</strong>
              </div> 
              <div className="mt-2 mb-3 pb-3 border-b border-b-slate-300 dark:border-b-slate-700">
                <strong className="font-medium text-[0.925rem] mobile:text-base sm:text-[1.1rem]">
                  <b className="uppercase underline decoration underline-offset-4 font-medium">Веб-проект для управления подписками:</b>
                  <a href="https://smart-subscriptions.ru" target="_blank" rel="noopener noreferrer"> https://smart-subscriptions.ru</a>
                </strong>
                <ul className="flex flex-col gap-2 text-sm mobile:text-[0.925rem] sm:text-base mobile:leading-6 mt-2">
                  <li>— Разработка полнофункционального веб-приложения с фокусом на frontend и взаимодействие с backend</li>
                  <li>— Клиентская часть: React, управление состоянием, работа с формами и пользовательскими сценариями</li>
                  <li>— Серверная часть: Node.js, REST API, реализация JWT-авторизации</li>
                  <li>— Работа с базой данных MongoDB</li>
                  <li>— Проект развернут и работает в продакшене, регулярно дорабатывается</li>
                  <li><b className="uppercase font-bold">Стек: </b>React, JavaScript, Node.js, REST API, MongoDB, JWT</li>
                </ul>
              </div>
              <div className="mt-2 mb-7">
                <strong className="font-medium text-[0.925rem] mobile:text-base sm:text-[1.1rem]">
                  <b className="uppercase underline decoration underline-offset-4 font-medium">Внутренний инструмент для рабочих задач:</b> (используется в рамках текущей деятельности, без публичного доступа)
                </strong>
                <ul className="flex flex-col gap-2 text-sm mobile:text-[0.925rem] sm:text-base mobile:leading-6 mt-2">
                  <li>— Разработка web-инструмента для автоматизации получения технической информации о доменах и сайтах при переносе проектов</li>
                  <li>— Фронтенд: Vue.js</li>
                  <li>— Бэкенд: Node.js, REST API</li>
                  <li>— Использование SSH-подключений для сбора данных с серверов</li>
                  <li>— Инструмент применяется в реальной рабочей среде и используется на постоянной основе</li>
                  <li><b className="uppercase font-bold">Стек: </b>Vue.js, Node.js, REST API, SSH</li>
                </ul>
              </div> 
            </li>
          </ul>
        </article>
        <article>
          <h1 className="text-center font-Commissioner font-medium text-2xl mobile:text-4xl uppercase mb-10">Образование</h1>
          <ul>
            <li className="xl:pl-16 pl-5 mobile:pl-10 border-l-2 border-l-slate-300 dark:border-l-slate-700 duration-300 relative mb-10 mobile:mb-16 pr-0 sm:pr-8">
              <div className="absolute bg-[#ffa500] p-2 mobile:p-3 rounded-full -left-[16px] mobile:-left-[22px]">{experienceEducationPicture.edu}</div>
              <div className="inline-block bg-neutral-200 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300 duration-300 px-2 py-0.5 text-xs mobile:text-sm leading-4 rounded-full mb-1.5">2008 - 2014</div>
              <div className="mt-2">
                <strong className="font-medium">
                  <b className="uppercase font-medium">Высшее образование</b>
                </strong>
              </div>
              <div className="mt-2 text-neutral-800 dark:text-neutral-400 duration-300 font-medium text-[1.1rem]">
                <span className="uppercase">Национальный минерально-сырьевой университет «Горный»</span></div>
              <div>Вычислительные машины, комплексы, системы и сети. </div> 
            </li>
            <li className="xl:pl-16 pl-5 mobile:pl-10 border-l-2 border-l-slate-300 dark:border-l-slate-700 duration-300 relative mb-10 mobile:mb-16 pr-0 sm:pr-8">
              <div className="absolute bg-[#ffa500] p-2 mobile:p-3 rounded-full -left-[16px] mobile:-left-[22px]">{experienceEducationPicture.edu}</div>
              <div className="inline-block bg-neutral-200 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300 duration-300 px-2 py-0.5 text-xs mobile:text-sm leading-4 rounded-full mb-1.5">1999 - 2002</div>
              <div className="mt-2">
                <strong className="font-medium">
                  <b className="uppercase font-medium">Среднее образование</b>
                </strong>
              </div>
              <div className="mt-2 text-neutral-800 dark:text-neutral-400 duration-300 font-medium text-[1.1rem]">
                <span className="uppercase">Выборгский авиационный технический колледж гражданской авиации</span></div>
              <div>Тех. обслуживание автотранспорта </div> 
            </li>
          </ul>
        </article>
      </section>
    </div>
  )
}

export default AboutPage;