import { useState } from "react";
import { currentPage } from "../config/settings";
import { buttonsRightMenu, themeButtons, } from "../data/icons";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";
import Modal from "../pages/components/Modal";

function App() {

  const [effectSideMenu, setEffectSideMenu] = useState(-1);
  const [page, setPage] = useState(currentPage.homePage)
  const [modal, setModal] = useState(false);
  const [pageModal, setPageModal] = useState('home')
  const [mainTheme, setMainTheme] = useState('');
  const [selectProject, setSelectProject] = useState({});

  function getPage(page) {
    switch (page) {
      case currentPage.homePage:
        return <HomePage 
                openModalAbout={openModalAbout} 
                modal={modal}
              />
      case currentPage.aboutPage:
        return <AboutPage pageModal={pageModal}/>
      case currentPage.portfolioPage:
        return <PortfolioPage 
                openModalAbout={openModalAbout} 
                modal={modal}
              />
      case currentPage.contactPage:
        return <ContactPage
                openModalAbout={openModalAbout} 
                modal={modal}
              />

      default:
        return null;
    }
  }

  function openModalAbout(modalPage, project, status) {
    setModal(true);
    setPageModal(modalPage);
    project ? setSelectProject(project) : setSelectProject(status);
  }
  function closeModalAbout() {
    setModal(false);
  }

  return (
    <div className={mainTheme}>
      <div className={`${page === 'home' ? 'fixed' : 'relative'} flex w-full overflow-hidden justify-between bg-white duration-300 dark:bg-neutral-900 z-0`}>
        <div className="absolute flex justify-between w-screen h-screen">
          <div className="h-full w-1/2 bg-black z-[2] animate-[switchOnDisplay_0.5s_1.3s_forwards]"></div>
          <div className="h-full w-1/2 bg-black z-[2] animate-[switchOnDisplay_0.5s_1.3s_forwards]"></div>
          <div className="absolute self-center w-0.5 h-0.5 right-0 left-0 m-auto bg-white z-[3] animate-[screenScan_1s_0.3s_forwards]"></div>
        </div>
        <Modal handleModul={modal} closeModal={closeModalAbout} pageModal={pageModal} selectProject={selectProject}/>
        <div className={`fixed right-0 ${modal ? '-z-[9]' : 'z-[1]'} duration-300`}>
            <button className="bg-neutral-200 dark:bg-neutral-800 p-2 mini:p-4 rounded-full md:m-7 mobile:my-7 mobile:mx-3 mini:m-3 m-2 hover:bg-neutral-300 duration-300 dark:hover:bg-neutral-700 outline-none"
              onClick={() => mainTheme ? setMainTheme('') : setMainTheme('dark')}
            >
              {mainTheme ? themeButtons.sun : themeButtons.moon}
            </button>
          </div>
        <div className="flex w-full h-full mb-16 md-a:mr-28 justify-center">
          {getPage(page)}
        </div>
        <div className={`fixed w-screen bottom-0 h-16 dark:bg-neutral-900 bg-white md-a:bg-transparent md-a:dark:bg-transparent mini:h-20 flex-row md-a:h-screen md-a:right-0 flex md-a:flex-col md-a:w-28 justify-between items-center ${modal ? '-z-10' : 'z-[0]'} duration-300`}>
          <ul className="flex md-a:flex-col flex-grow justify-around md-a:justify-center gap-5">
            {Object.entries(buttonsRightMenu).map(([key, value], count) => 
              <li className="flex relative items-center"
                key={count} 
                onMouseEnter={() => setEffectSideMenu(count)} 
                onMouseLeave={() => setEffectSideMenu(-1)} 
                onClick={() => { 
                  setPage(key);
                }}
              >
                <div className={`hidden md-a:block ${effectSideMenu === count ? 'sideMenuEffect' : ''} absolute font-Commissioner text-sm font-bold uppercase text-white bg-[#ffa500] whitespace-nowrap cursor-pointer right-8 p-[18px] rounded-l-full opacity-0 duration-300`}>
                    {value.text}
                </div>
                <button className={`${effectSideMenu === count ? 'bg-[#ffa500]' : page === key ? 'bg-[#ffa500]' : 'bg-neutral-200 dark:bg-neutral-800'} rounded-full duration-300 hover:duration-300 outline-none z-0`}
                >
                  <svg className={`${effectSideMenu === count ? 'fill-white' : page === key ? 'fill-white' : ''} dark:text-white w-6 h-6 p-3 mini:p-4 box-content duration-300 hover:duration-300`}
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
