import { activeBtn } from "../data/icons";

const HomePage = ({openModalAbout, modal}) => {

    const clickEvent = () => {
        openModalAbout('home');
    }

    return (
        <div className="flex flex-grow h-screen items-center relative">
            <div className="absolute h-full w-[530px] bg-[#ffa500] -z-10 skew-x-[15deg] -ml-36 animate-[backEffect_0.5s_forwards]"></div>
            <div className="flex relative w-full items-center h-[600px] animate-[startPages_0.5s_forwards]">
                <div className={`box-content px-[4%] w-1/3 ${modal ? '-z-10' : 'z-0'}`}>
                    <div className="w-full aspect-square bg-my-photo bg-cover animate-ringEffect"></div>
                </div>
                <div className={`flex flex-grow justify-center h-full ${modal ? '-z-10' : 'z-0'}`}>
                    <div className="flex flex-col justify-center max-w-[600px] text-neutral-600 dark:text-neutral-400">
                        <ul className="font-philosopher text-[3.5rem] uppercase leading-normal font-bold">
                            <li className=" relative text-[#ffa500] leading-none pl-14 before:content-['—'] before:absolute before:left-0">Я Анатолий Самушенков.</li>
                            <li className="pl-14 text-nowrap dark:text-neutral-300 duration-300">WEB разработчик</li>
                        </ul>
                        <p className="font-jura text-[1.1rem] leading-9 text-neutral-500 dark:text-neutral-400 font-medium my-4 -z-10">Я начинающий front-end разрабочик, и уже начал свой путь в мире web-разработки. Моя цель - стать профессионалом в этой области и создавать удобные и функциональные интерфейсы для web-приложений и сайтов.</p>
                        <div className="fillMoreBtn effectFillMoreBtn relative flex bg-white dark:bg-neutral-900 border border-[#ffa500] h-14 w-60 justify-center items-center rounded-full mt-8"
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
