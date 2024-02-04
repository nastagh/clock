import Footer from 'components/Footer';
import './App.scss';
import { useState } from 'react';
import WorldClockPage from 'pages/WorldClockPage';
import StopwatchPage from 'pages/StopwatchPage';
import { Pages } from 'utils/info';

const App = () => {
  const [currentPage, setCurrentPage] = useState(Pages.Stopwatch);

  const getPageByName = (page: Pages) => {
    let component;
    switch (page) {
      case Pages.WorldClock:
        component = <WorldClockPage />
        break;
      case Pages.Stopwatch:
        component = <StopwatchPage />
        break;
      default:
        component = <WorldClockPage />
    }
    return component;
  }

  return (
    <>
      <div className='wrapper'>
        <div className='info-container'>
          {getPageByName(currentPage)}
        </div>
        <Footer onChange={setCurrentPage} />
      </div>
    </>
  );
}

export default App;
