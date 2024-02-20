import { cross } from "../../config/AddElements";
import AboutPage from "../AboutPage";

const ModalAbout = ({handleModul, closeModal}) => {
  return (
    <div className={`absolute ${handleModul ? 'opacity-100 z-[1]' : 'opacity-0 z-0'} duration-300 h-screen w-screen flex justify-center items-center`}>
      <div className="fixed bg-black w-full h-full opacity-70"></div>
      <div className="bg-white z-0 w-2/3 h-3/4 relative rounded-md">
        <div className="absolute size-full box-content pt-10 pr-14 bottom-0 ">
          <button className="absolute top-0 right-0 border-4 rounded-full p-2"
            onClick={closeModal}
          >
            {cross.exit}
          </button>
        </div>
        <div className="flex justify-center">
          <AboutPage />
        </div>
      </div>
    </div>
  )
}

export default ModalAbout;