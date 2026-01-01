import { modalClose, modalDescriptionProject } from "../../data/icons";
import AboutPage from "../AboutPage";
import moveImage from "../../img/projects/move.png"

const Modal = ({handleModul, closeModal, pageModal, selectProject}) => {
  return (
    <div className={`fixed ${handleModul ? 'opacity-100 z-[1]' : 'opacity-0 z-0'} duration-300 size-full flex justify-center items-center`}>
      <div className="absolute dark:bg-neutral-800 bg-black size-full opacity-70"></div>
      <div className={`bg-white dark:bg-neutral-900 z-0 my-16 mx-3 mobile:mx-5 md-a:m-16 relative ${pageModal === 'home' ? 'w-[1280px] min-w-[200px] 2xl-a:h-3/4 h-5/6 rounded-md' : pageModal === 'portfolio' ? 'w-[750px] h-[480px] mobile:h-[600px] rounded-2xl' : ' h-48 w-96 rounded-2xl'}`}>
        <div className="absolute size-full box-content pt-14 md-a:pt-10 md-a:pr-14 bottom-0">
          <button className="absolute text-neutral-300 border-neutral-300 dark:text-neutral-500 dark:border-neutral-500 top-0 right-0 border-4 rounded-full p-2"
            onClick={closeModal}
          >
            {modalClose.exit}
          </button>
        </div>
        <div className="size-full overflow-auto">
          <div className={`flex ${pageModal === 'home' ? 'w-full' : 'size-full'} justify-center`}>
            {pageModal === 'home' ? <AboutPage /> : 
              pageModal === 'portfolio' ? <PortfolioModal selectProject={selectProject} /> : 
              <SendMessageOk closeModal={closeModal} selectProject={selectProject}/>}
          </div>
        </div>
      </div>
    </div>
  )
}


const PortfolioModal = ({selectProject}) => {
  return (
    <section className="flex justify-center items-center size-full rounded-2xl z-0">
      <article className="flex flex-col items-center gap-2 size-11/12 rounded-xl">
        <div className="flex flex-col items-center">
          <h1 className="text-xl mobile:text-2xl sm:text-4xl text-[#ffa500] tracking-wider font-Commissioner mobile:mt-5 uppercase font-bold">{selectProject.name}</h1>
          <ul className="grid grid-cols-1 sm:grid-cols-2 font-jura my-2 mobile:my-5 text-[0.7rem] mobile:text-[0.9rem] text-neutral-600 dark:text-neutral-400">
            <li className="mobile:mb-1.5 flex ">
              <span className="mr-3">{modalDescriptionProject.type}</span>
              <span className="mr-3">Проект: </span>
              <b className="text-neutral-800 dark:text-neutral-300 duration-300">{selectProject.type}</b>
            </li>
            <li className="mobile:mb-1.5 flex ">
              <span className="mr-3">{modalDescriptionProject.stek}</span>
              <span className="mr-3">Стек: </span>
              <b className="text-neutral-800 dark:text-neutral-300">{selectProject.stek}</b>
            </li>
            <li className="mobile:mb-1.5 flex ">
              <span className="mr-3">{modalDescriptionProject.preview}</span>
              <span className="mr-3">Перейти: </span>
              <a
                className="text-[#ffa500] flex font-bold" 
                href={selectProject.preview.includes('Без') ? moveImage : selectProject.preview}
                target="_blank"
                rel="noopener noreferrer"
              >
                {selectProject.preview}</a>
            </li>
            <li className="mobile:mb-1.5 flex">
              <span className="mr-3">{modalDescriptionProject.purpose}</span>
              <span className="mr-3">Назначение: </span>
              <b className=" text-neutral-800 dark:text-neutral-300 duration-300">{selectProject.purpose}</b>
            </li>
            <li className="mt-2 sm:col-start-1 sm:col-end-3">
              <span className="mr-3 font-bold text-neutral-800 dark:text-neutral-300 duration-300">Описание:</span>
              {selectProject.description}
            </li>
          </ul>
        </div>
        {
          selectProject.preview.includes('Без') ?
          <a className={`w-full h-full rounded-xl ${selectProject.picUrl} bg-cover bg-center`}
            href={moveImage}
            target="_blank"
            rel="noopener noreferrer"
          ></a> :
          <div className={`w-full h-full rounded-xl ${selectProject.picUrl} bg-cover bg-center`}></div>
        }
      </article>
    </section>
  )
}


const SendMessageOk = ({closeModal, selectProject}) => {
  return (
    <section className="flex justify-center items-center size-full rounded-2xl z-0">
      <article className="flex flex-col items-center justify-center mx-7 rounded-xl dark:text-neutral-400 text-neutral-600">
        <div className={`font-jura text-lg font-bold mb-4 py-1 text-center rounded-lg ${selectProject === 'error' ? 'dark:bg-red-950 bg-red-300' : ''}`}>{`${selectProject === 'success' ? 'Сообщение успешно отправлено' : 'Произошла ошибка! Попробуйте позже.'}`}</div>
        <button className="font-Commissioner font-semibold text-2xl bg-transparent w-44 h-12 border rounded-full border-[#ffa500] hover:bg-[#ffa500] hover:text-white duration-300"
           onClick={closeModal} 
        >OK</button>
      </article>
    </section>
  )
}


export default Modal;