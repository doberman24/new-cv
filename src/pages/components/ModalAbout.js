import { cross } from "../../config/AddElements";
import AboutPage from "../AboutPage";

const ModalAbout = ({handleModul, closeModal}) => {
  return (
    <div className={`absolute ${handleModul ? 'opacity-100 z-[1]' : 'opacity-0 z-0'} duration-300 size-full flex justify-center items-center`}>
      <div className="fixed dark:bg-neutral-800 bg-black size-full opacity-70"></div>
      <div className="bg-white dark:bg-neutral-900 z-0 w-[1280px] min-w-[800px] m-16 h-3/4 relative rounded-md">
        <div className="absolute size-full box-content pt-10 pr-14 bottom-0">
          <button className="absolute text-neutral-300 border-neutral-300 dark:text-neutral-500 dark:border-neutral-500 top-0 right-0 border-4 rounded-full p-2"
            onClick={closeModal}
          >
            {cross.exit}
          </button>
        </div>
        <div className="px-6 size-full overflow-auto">
          <div className="flex w-full justify-center">
            <AboutPage />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalAbout;