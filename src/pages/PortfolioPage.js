import { useState } from "react";
import { projects, sortProjectMenu } from "../data/data";

const PortfolioPage = ({openModalAbout, modal}) => {

    const [onNameProject, setOnNameProject] = useState(-1);
    const [sortValue, setSortValue] = useState(''.toLowerCase());
    const [reload, setReload] = useState(false);

    return (
        <div className={`${modal ? '-z-10' : 'z-0'} flex flex-col text-neutral-600 dark:text-neutral-400 duration-300 relative w-[1180px] min-h-screen sm:mx-10 md-a:ml-10 md-a:mr-28 mx-2 animate-[startPages_0.5s_forwards]`}>
            <section className="flex sm:h-52 h-32 mobile:justify-center items-center uppercase font-Commissioner">
                <h1 className="mobile:text-5xl sm:text-[4rem] text-4xl font-extrabold">Мои <strong className="text-[#ffa500]">проекты</strong></h1>
                <h1 className="absolute text-5xl mobile:text-7xl sm:text-8xl md:text-[7rem] text-neutral-200 dark:text-neutral-800 duration-300 -z-10 font-extrabold">Портфолио</h1>
            </section>
            <section className="flex flex-col w-full">
                <div className="flex w-full justify-center">
                    <ul className="flex uppercase font-Commissioner justify-center text-base flex-wrap mobile:text-lg mobile:gap-6 gap-4 font-semibold">
                        {Object.entries(sortProjectMenu).map(([key,value], count) => 
                            <li key={count} className={`${sortValue === key ? 'text-[#ffa500]' : 'text-neutral-600 dark:text-neutral-400'} duration-300 cursor-pointer`}
                                onClick={() => {
                                    setReload(true);
                                    setSortValue(key);
                                    setTimeout(() => {setReload(false);}, 50);
                                }}
                            >
                                {value}
                            </li>
                        )}
                    </ul>
                </div>
                <article className={`w-full mt-8 ${reload ? 'opacity-0' : 'opacity-100 duration-300'}`}>
                    <ul className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 justify-items-center gap-x-5 gap-y-10 md:gap-x-10 xl-a:gap-x-10 lg:gap-x-5">
                        {projects.map((project, key) => {
                            if ((sortValue && (project.sort.indexOf(sortValue) >= 0)) || !sortValue)
                                return (
                                    <li key={key} 
                                        className={`w-full h-52 mobile:h-72 sm:h-52 rounded-md ${project.picUrl} bg-cover bg-center`}
                                    >
                                        <button className="flex justify-center items-center size-full rounded-md hover:bg-[#ffa500] duration-300"
                                            onMouseEnter={() => setOnNameProject(key)}
                                            onMouseLeave={() => setOnNameProject(-1)}
                                            onClick={() => openModalAbout('portfolio', project)}
                                        >
                                            <span className={`opacity-0 uppercase font-philosopher text-xl text-white relative -top-5 ${onNameProject === key ? 'opacity-100 top-0' : ''} duration-300`}>{project.name}</span>
                                        </button>
                                    </li>
                                )
                            else
                                return null
                        })}
                    </ul>
                </article>
            </section>
        </div>
    )
}

export default PortfolioPage;