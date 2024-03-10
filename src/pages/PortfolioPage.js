import { projects } from "../config/AddElements";

const PortfolioPage = () => {
    return (
        <div className="flex flex-col text-neutral-600 dark:text-neutral-400 duration-300 relative w-[1180px] mx-12 animate-[startPages_0.5s_forwards]">
            <section className="flex h-52 justify-center items-center uppercase font-Commissioner">
                <h1 className="text-[4rem] font-extrabold">Мои <strong className="text-[#ffa500]">проекты</strong></h1>
                <h1 className="absolute text-[7rem] text-neutral-200 dark:text-neutral-800 duration-300 -z-10 font-extrabold">Портфолио</h1>
            </section>
            <section>
                <div className="flex w-full justify-center">
                    <ul className="flex">
                        <li>Все</li>
                        <li>ReactJS</li>
                        <li>JS</li>
                        <li>Лендинги</li>
                        <li>Фулстек</li>
                    </ul>
                </div>
                <article className="w-full">
                    <ul className="grid grid-cols-3 justify-items-center gap-8">
                        {projects.map((project, key) => 
                            <li key={key} 
                                className="w-full h-52 rounded-md"
                                style={{
                                    background: `url(${project.picUrl}) center center no-repeat`,
                                    backgroundSize: 'cover'
                                }}

                            >
                                <button className="flex justify-center items-center size-full rounded-md hover:bg-[#ffa500] duration-300"
                                >
                                    <span className="flex opacity-0 text-white justify-center items-center size-full relative -top-5 hover:opacity-100 hover:top-0 duration-300">{project.name}</span>
                                </button>
                            </li>    
                        )}
                    </ul>
                </article>
            </section>
        </div>
    )
}

export default PortfolioPage;