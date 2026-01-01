import { activeBtn } from "../data/icons";

const HomePage = ({openModalAbout, modal}) => {

    const clickEvent = () => {
        openModalAbout('home');
    }

    return (
        <div className="flex flex-grow h-screen items-center relative">
            <div className="absolute h-full w-80 mobile:w-96 sm:w-[700px] md-a:w-[630px] md:w-[800px] md:-top-[700px] bg-[#ffa500] -z-10 skew-x-[130deg] mobile:skew-x-[130deg] sm:skew-x-[120deg] md-a:skew-x-[15deg] md:skew-x-[115deg] md-a:-ml-64 mini:-top-[550px] -top-[380px] mobile:-top-[400px] sm:-top-[500px] md-a:top-0 animate-[backEffect_0.5s_forwards]"></div>
            <div className="flex relative w-full justify-center items-center h-full flex-col mb-20 gap-7 mini:gap-10 md-a:gap-0 md-a:mb-0 md-a:flex-row md-a:h-[600px] animate-[startPages_0.5s_forwards]">
                <div className={`box-content px-[4%] mini:w-72 md-a:w-1/3 ${modal ? '-z-10' : 'z-0'} md-a:min-w-[400px] w-48`}>
                    <div className="w-full aspect-square bg-my-photo bg-cover bg-center animate-ringEffectMobil md-a:animate-ringEffect"></div>
                </div>
                <div className={`flex justify-center max-w-[680px] min-w-[300px] mx-auto ${modal ? '-z-10' : 'z-0'}`}>
                    <div className="flex flex-col justify-center items-center md-a:items-start min-w-[300px] text-neutral-600 dark:text-neutral-400">
                        <ul className="font-philosopher text-center text-2xl leading-relaxed md-a:text-left xl-a:text-[3.2rem] lg-a:text-5xl sm:text-4xl uppercase sm:leading-normal font-bold lg-a:mb-3">
                            <li className="relative text-[#ffa500] leading-none xl-a:pl-14 xl-a:before:content-['—'] before:absolute before:left-0 lg-a:mb-3">Анатолий Самушенков.</li>
                            <li className="xl-a:pl-14 text-nowrap dark:text-neutral-300 duration-300">Junior Frontend</li>
                            <li className="xl-a:pl-14 text-nowrap dark:text-neutral-300 duration-300">Fullstack Developer</li>
                        </ul>
                        <p className="font-jura text-sm leading-5 mini:text-[1.2rem] mini:leading-7 sm:text-[1.3rem] text-center md-a:text-left sm:leading-9 text-neutral-500 dark:text-neutral-400 font-medium my-2 mini:my-4 sm:mx-0 mx-4 mini:mx-10 -z-10">
                            Разрабатываю веб-приложения с фокусом на frontend.
                            Работаю с React и JavaScript. Интегрирую клиентскую часть с backend через REST API (Node.js).
                            <br /><br />
                            Участвую в полном цикле разработки —
                            от реализации интерфейса до запуска проекта в продакшене.
</p>
                        <div className="fillMoreBtn effectFillMoreBtn relative flex bg-white dark:bg-neutral-900 border border-[#ffa500] h-14 w-60 justify-center items-center rounded-full mt-3 mini:mt-8"
                            onClick={clickEvent}
                        >
                            <button className="font-Commissioner rounded-full uppercase font-bold flex flex-grow justify-center items-center h-full text-sm z-[1] focus:outline-none">узнать больше</button>
                            <span className="flex cursor-pointer rounded-full justify-center items-center p-4 bg-[#ffa500] z-[1]">{activeBtn.arrow}</span>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
