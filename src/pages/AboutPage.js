import { addSkills, expEdu, moreBtn, personalData, skills } from "../config/AddElements";

const AboutPage = () => {
  return (
    <div className="flex flex-col font-jura text-neutral-600 dark:text-neutral-400 relative w-[1180px] animate-[startPages_0.5s_forwards]">
      <section className="flex h-52 justify-center items-center uppercase font-Commissioner">
          <h1 className="text-[4rem] font-extrabold">Обо <strong className="text-[#ffa500]">мне</strong></h1>
          <h1 className="absolute text-[7rem] text-neutral-200 dark:text-neutral-800 duration-300 -z-10 font-extrabold">Резюме</h1>
      </section>
      <section className="w-full text-[1.1rem]">
          <article className="font-philosopher uppercase">
              <h2 className="text-2xl font-semibold">Самушенков Анатолий Игоревич</h2>
              <h4 className="mt-2 mb-5 text-xl font-normal text-neutral-400 dark:text-neutral-600 duration-300">WEB разработчик</h4>
          </article>
          <article className="leading-7 font-medium mb-5">
              Привет! Меня зовут Анатолий, и я являюсь инженером технической поддержки в хостинговой компании. В рамках своей текущей должности я занимаюсь переносом сайтов внутри нашей площадки, а также помощью в переносе и запуске проектов со сторонних ресурсов. Я обладаю опытом работы с различными платформами и инструментами, что позволяет эффективно решать поставленные задачи.  Но помимо этого, я изучаю и развиваюсь в сфере фронтенд-разработки и ищу возможности для реализации своих навыков в данной области. Моя цель — стать профессиональным фронтенд-разработчиком и создавать удобные и функциональные интерфейсы для веб-приложений и сайтов. 
          </article>
          <article>
            <ul className="flex flex-col h-32 flex-wrap leading-10">
              {Object.entries(personalData).map(([key, value]) => 
                <li className="flex" key={key}>
                  <span className="w-40 font-bold text-neutral-800 dark:text-neutral-300 duration-300">{key}:</span>
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
      <section className="my-28">
        <article className="flex flex-col">
          <h1 className="text-center font-Commissioner font-medium text-4xl uppercase mb-10">Технические навыки</h1>
          <ul className="grid grid-cols-2 gap-10">
            {Object.entries(skills).map(([key, value], count) => 
              <li key={count} className={`w-11/12 ${count % 2 ? 'justify-self-end' : ''}`}>
                <div>
                  <div className="font-bold text-3xl mb-1 flex justify-between items-end">
                    {key}
                    <div className="text-2xl font-normal">{`${value[0]}%`}</div>
                  </div>
                  <div className="h-2 bg-slate-200 dark:bg-neutral-700 duration-300">
                    <div className={`h-full bg-[#ffa500] w-[${value[0]}%]`}></div>
                  </div>
                  <ul className="grid grid-cols-2 gap-x-3 mt-3">
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
        <article className="mt-20 grid grid-cols-2 gap-10">
          {Object.entries(addSkills).map(([key, value], count) => 
            <div key={count} className={`w-11/12 ${count % 2 ? 'justify-self-end' : ''}`}>
              <h3 className="uppercase text-center font-medium text-xl">{key}</h3>
              <ul className="mt-3">
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
      <section className="grid grid-cols-2 gap-4">
        <article>
          <h1 className="text-center font-Commissioner font-medium text-4xl uppercase mb-10">Опыт работы</h1>
          <ul>
            <li className="pl-16 border-l-2 border-l-slate-300 dark:border-l-slate-700 duration-300 relative mb-16 pr-8">
              <div className="absolute bg-[#ffa500] p-3 rounded-full -left-[22px]">{expEdu.exp}</div>
              <div className="inline-block bg-neutral-200 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300 duration-300 px-2 py-0.5 text-sm leading-4 rounded-full mb-1.5">июнь 2021 - наст. время</div>
              <div className="mt-2 text-neutral-800 dark:text-neutral-400 duration-300 font-medium text-[1.1rem]">
                <strong className="text-xl">Инженер технической поддержки - </strong>
                <span className="uppercase">ООО Beget</span>
              </div> 
              <div className="mt-2">
                <strong className="font-medium text-[1.1rem]">
                  <b className="uppercase font-medium">Специализация:</b> перенос сайтов
                </strong>
                <p className="leading-6 mt-2">Выполнение переносов сайтов, которые поддерживают наш стек технологий, по запросу клиентов. Начиная от самых распространенных CMS, таких как Wordpress, Bitrix, Joomla, ModX и т.д., и заканчивая различными проектами с использованием php-фреймворков. А также разворачивание/перенос проектов на NodeJS, python-фреймворков и любых кастомных проектов </p>
              </div>
            </li>
            <li className="pl-16 border-l-2 border-l-slate-300 dark:border-l-slate-700 duration-300 relative mb-16 pr-8">
              <div className="absolute bg-[#ffa500] p-3 rounded-full -left-[22px]">{expEdu.exp}</div>
              <div className="inline-block bg-neutral-200 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300 duration-300 px-2 py-0.5 text-sm leading-4 rounded-full mb-1.5">2014 - 2021</div>
              <div className="mt-2 text-neutral-800 dark:text-neutral-400 duration-300 font-medium text-[1.1rem] mb-5 leading-7">
                <strong className="text-xl">Строитель кораблей - </strong>
                <span className="uppercase">ПАО Выборгский судостроительный завод</span>
              </div>
              <div className="mt-2 inline-block bg-neutral-200 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300 duration-300 px-2 py-0.5 text-sm leading-4 rounded-full mb-1.5">2008 - 2014</div>
              <div className="mt-2 text-neutral-800 dark:text-neutral-400 duration-300 font-medium text-[1.1rem]">
                <strong className="text-xl">Кабельщик - </strong>
                <span className="uppercase">ОАО РЖД</span>
              </div> 
            </li>
          </ul>
        </article>
        <article>
          <h1 className="text-center font-Commissioner font-medium text-4xl uppercase mb-10">Образование</h1>
          <ul>
            <li className="pl-16 border-l-2 border-l-slate-300 dark:border-l-slate-700 duration-300 relative mb-16 pr-8">
              <div className="absolute bg-[#ffa500] p-3 rounded-full -left-[22px]">{expEdu.edu}</div>
              <div className="inline-block bg-neutral-200 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300 duration-300 px-2 py-0.5 text-sm leading-4 rounded-full mb-1.5">2008 - 2014</div>
              <div className="mt-2">
                <strong className="font-medium">
                  <b className="uppercase font-medium">Высшее образование</b>
                </strong>
              </div>
              <div className="mt-2 text-neutral-800 dark:text-neutral-400 duration-300 font-medium text-[1.1rem]">
                <span className="uppercase">Национальный минерально-сырьевой университет «Горный»</span></div>
              <div>Вычислительные машины, комплексы, системы и сети. </div> 
            </li>
            <li className="pl-16 border-l-2 border-l-slate-300 dark:border-l-slate-700 duration-300 relative mb-16 pr-8">
              <div className="absolute bg-[#ffa500] p-3 rounded-full -left-[22px]">{expEdu.edu}</div>
              <div className="inline-block bg-neutral-200 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300 duration-300 px-2 py-0.5 text-sm leading-4 rounded-full mb-1.5">1999 - 2002</div>
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