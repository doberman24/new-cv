import { cross, picProj } from "../../config/AddElements";
import AboutPage from "../AboutPage";

const Modal = ({handleModul, closeModal, pageModal, selectProject}) => {

  return (
    <div className={`fixed ${handleModul ? 'opacity-100 z-[1]' : 'opacity-0 z-0'} duration-300 size-full flex justify-center items-center`}>
      <div className="absolute dark:bg-neutral-800 bg-black size-full opacity-70"></div>
      <div className={`bg-white dark:bg-neutral-900 z-0 m-16 relative ${pageModal === 'home' ? 'w-[1280px] min-w-[800px] h-3/4 rounded-md' : 'w-[700px] h-[600px] rounded-2xl'}`}>
        <div className="absolute size-full box-content pt-10 pr-14 bottom-0">
          <button className="absolute text-neutral-300 border-neutral-300 dark:text-neutral-500 dark:border-neutral-500 top-0 right-0 border-4 rounded-full p-2"
            onClick={closeModal}
          >
            {cross.exit}
          </button>
        </div>
        <div className="size-full overflow-auto">
          <div className={`flex ${pageModal === 'home' ? 'w-full' : 'size-full'} justify-center`}>
            {pageModal === 'home' ? <AboutPage /> : <PortfolioModal selectProject={selectProject} />}
          </div>
        </div>
      </div>
    </div>
  )
}


const PortfolioModal = ({selectProject}) => {
  return (
    <section className="flex justify-center items-center size-full rounded-2xl z-0">
      <article className="flex flex-col items-center justify-between size-11/12 rounded-xl">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl text-[#ffa500] tracking-wider font-Commissioner mt-5 uppercase font-bold">{selectProject.name}</h1>
          <ul className="grid grid-cols-2 font-jura my-5 text-[0.9rem] text-neutral-600 dark:text-neutral-400">
            <li className="mb-1.5 flex items-center">
              <span className="mr-3">{picProj.type}</span>
              <span className="mr-3">Проект: </span>
              <b className="text-neutral-800 dark:text-neutral-300 duration-300">{selectProject.type}</b>
            </li>
            <li className="mb-1.5 flex items-center">
              <span className="mr-3">{picProj.stek}</span>
              <span className="mr-3">Стек: </span>
              <b className="text-neutral-800 dark:text-neutral-300">{selectProject.stek}</b>
            </li>
            <li className="mb-1.5 flex items-center">
              <span className="mr-3">{picProj.preview}</span>
              <span className="mr-3">Перейти: </span>
              <a
                className="text-[#ffa500] flex font-bold" 
                href={`https://${selectProject.preview}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {selectProject.preview}</a>
            </li>
            <li className="mb-1.5 flex items-center">
              <span className="mr-3">{picProj.purpose}</span>
              <span className="mr-3">Назначение: </span>
              <b className=" text-neutral-800 dark:text-neutral-300 duration-300">{selectProject.purpose}</b>
            </li>
            <li className="mt-2 col-start-1 col-end-3">
              <span className="mr-3 font-bold text-neutral-800 dark:text-neutral-300 duration-300">Описание:</span>
              {selectProject.description}
            </li>
          </ul>
        </div>
        <div className={`w-full h-[300px] rounded-xl ${selectProject.picUrl} bg-cover bg-center`}></div>
      </article>
    </section>
  )
}


export default Modal;