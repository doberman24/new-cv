import { moreBtn } from "../config/AddElements";

const HomePage = ({openModalAbout, modal}) => {
    return (
        
            <div className="flex flex-grow items-center h-[600px]">
                <div className="absolute h-full w-[530px] bg-[#ffa500] -z-10 skew-x-[15deg] -ml-36"></div>
                <div className="box-content px-[4%] w-1/3">
                    <div className="w-full aspect-square bg-my-photo bg-cover animate-ringEffect"></div>
                </div>
                <div className={`flex flex-grow justify-center h-full ${modal ? '-z-10' : 'z-0'}`}>
                    <div className="flex flex-col justify-center max-w-[600px] text-gray-600">
                        <ul className="font-philosopher text-[3.5rem] uppercase leading-normal font-bold">
                            <li className=" relative text-[#ffa500] leading-none pl-14 before:content-['—'] before:absolute before:left-0">Я Анатолий Самушенков.</li>
                            <li className="pl-14 text-nowrap">WEB разработчик</li>
                        </ul>
                        <p className="font-jura text-[1.1rem] leading-9 text-gray-500 font-medium my-4 -z-10">Я начинающий front-end разрабочик, и уже начал свой путь в мире web-разработки. Моя цель - стать профессионалом в этой области и создавать удобные и функциональные интерфейсы для web-приложений и сайтов.</p>
                        <div className="fillMoreBtn effectFillMoreBtn relative flex border border-[#ffa500] h-14 w-60 justify-center items-center rounded-full mt-8"
                            onClick={openModalAbout}
                        >
                            <button className="font-Commissioner uppercase font-bold flex flex-grow justify-center items-center h-full text-sm">узнать больше</button>
                            <span className="flex cursor-pointer rounded-full justify-center items-center p-4 bg-[#ffa500]">{moreBtn.arrow}</span>
                        </div>                        
                    </div>
                </div>
            </div>
        
    )
}

export default HomePage;
