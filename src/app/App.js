import { useState } from "react";
import { currentPage, icons, moon, sun,  } from "../config/AddElements";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";
import ModalAbout from "../pages/components/ModalAbout";

function App() {

  const [effectSideMenu, setEffectSideMenu] = useState(-1);
  const [page, setPage] = useState(currentPage.homePage)
  const [modal, setModal] = useState(false);
  const [mainTheme, setMainTheme] = useState('');

  function getPage(page) {
    switch (page) {
      case currentPage.homePage:
        return <HomePage openModalAbout={openModalAbout} modal={modal}/>
      case currentPage.aboutPage:
        return <AboutPage />
      case currentPage.portfolioPage:
        return <PortfolioPage />
      case currentPage.contactPage:
        return <ContactPage />
      default:
        return null;
    }
  }

  function openModalAbout() {
    setModal(true);
  }
  function closeModalAbout() {
    setModal(false);
  }

  return (
    <div className={mainTheme}>
      <div className="relative flex w-full overflow-hidden justify-between bg-white duration-300 dark:bg-neutral-900 z-0">
        <div className="absolute flex justify-between w-screen h-screen">
          <div className="h-full w-1/2 bg-black z-[2] animate-[switchOnDisplay_0.5s_1.3s_forwards]"></div>
          <div className="h-full w-1/2 bg-black z-[2] animate-[switchOnDisplay_0.5s_1.3s_forwards]"></div>
          <div className="absolute self-center w-0.5 h-0.5 right-0 left-0 m-auto bg-white z-[3] animate-[screenScan_1s_0.3s_forwards]"></div>
        </div>
        <ModalAbout handleModul={modal} closeModal={closeModalAbout}/>
        <div className="flex w-full h-full mr-28 justify-center">
          {getPage(page)}
        </div>
        <div className={`fixed h-screen right-0 flex flex-col w-28 justify-between items-center ${modal ? '-z-10' : '-z-[0]'} duration-300`}>
          <div className="relative">
            <button className="bg-neutral-200 dark:bg-neutral-800 p-4 rounded-full mt-5 hover:bg-neutral-300 duration-300 dark:hover:bg-neutral-700 outline-none"
              onClick={() => mainTheme ? setMainTheme('') : setMainTheme('dark')}
            >
              {mainTheme ? sun.theme : moon.theme}
            </button>
          </div>
          <ul className="flex flex-col flex-grow justify-center gap-5 pb-20">
            {Object.entries(icons).map(([key, value], count) => 
              <li className="flex relative items-center"
                key={count} 
                onMouseEnter={() => setEffectSideMenu(count)} 
                onMouseLeave={() => setEffectSideMenu(-1)} 
                onClick={() => { 
                  setPage(key);
                }}
              >
                <div className={`${effectSideMenu === count ? 'sideMenuEffect' : ''} absolute font-Commissioner text-sm font-bold uppercase text-white bg-[#ffa500] whitespace-nowrap cursor-pointer right-8 p-[18px] rounded-l-full opacity-0 duration-300`}>
                    {value.text}
                </div>
                <button className={`${effectSideMenu === count ? 'bg-[#ffa500]' : page === key ? 'bg-[#ffa500]' : 'bg-neutral-200 dark:bg-neutral-800'} rounded-full duration-300 hover:duration-300 outline-none z-0`}
                >
                  <svg className={`${effectSideMenu === count ? 'fill-white' : page === key ? 'fill-white' : ''} dark:text-white w-6 h-6 p-4 box-content duration-300 hover:duration-300`}
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                  > 
                    {value.icon} 
                  </svg>
                </button>
              </li>  
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
