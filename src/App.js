import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Detalji from './pages/Detalji';
import Home from './pages/Home';
import Putovanja from './pages/Putovanja';
import NotFound from './pages/NotFound';

const App = () => {
  const [location, setLocation] = useState('/');
  const [searchDestionation, setSearchDestionation] = useState('');
  const [sortiranje, setSortiranje] = useState('');
  const [putovanja, setPutovanja] = useState([
    {
      destinacija: 'Dominikana',
      naslov: 'Predivno mesto za odmor sa umirujucim vibracijama...',
      opis: 'Dominikana je ostrvo u Pacifiku poznato po svojim plažama mestima za odmor i cigarama',
      img: 'dominikana.jpg',
      datumPolaska: '2023-10-05',
      cena: 2500,
      ocena: 5,
    },
    {
      destinacija: 'Engleska',
      naslov: 'Predivan spoj istorije i kulture',
      opis: 'London je prestonica Engleske i cele Velike Britanije.Poznata je po crvenim autobusima na sprat, vojnicima,kraljici...',
      img: 'engleska.jpg',
      datumPolaska: '2023-05-25',
      cena: 750,
      ocena: 4,
    },
    {
      destinacija: 'Indonezija',
      naslov: 'Predivno mesto za odmor i avanturistički doživljaj...',
      opis: 'Ova večno intrigantna zemlja pruža pravi avanturistički doživljaj. Neprestano istraživanje beskrajne raznolikosti čak hiljadu i sedam stotina Indonežanskih ostrva čini ovu destinaciju jednom od poslednjih pravih iskustava netaknutog parčeta Zemlje.',
      img: 'indonezija.jpg',
      datumPolaska: '2023-08-10',
      cena: 2000,
      ocena: 5,
    },
    // {
    //   destinacija: 'Italija',
    //   naslov: 'Probaj Italijansku pizzu i testeninu...',
    //   opis: 'Smeštena je na jugu Evrope u samom srcu Mediterana. Obuhvata Apeninsko poluostrvo i tri velika ostrva na Sredozemnom moru: Sardiniju, Elbu i Siciliju.',
    //   img: 'italija.jpg',
    //   datumPolaska: '2023-05-01',
    //   cena: 350,
    //   ocena: 3,
    // },
    // {
    //   destinacija: 'Maldivi',
    //   naslov: 'Maldivi Raj na zemlji...',
    //   opis: 'Majušna ostrvska država u Indijskom okeanu, popularna destinacija za medeci mesec, poznata je po nestvarno lepim plažama sa belim peskom, kućicama na vodi i plivanju sa kit ajkulama. ',
    //   img: 'maldivi.jpg',
    //   datumPolaska: '2023-06-20',
    //   cena: 1500,
    //   ocena: 5,
    // },
    // {
    //   destinacija: 'Dubai',
    //   naslov:
    //     'Ujedinjeni Arapski Emirati, jedna je od najpopularnijih zemalja koje treba posetiti na Bliskom istoku...',
    //   opis: 'Ujedinjeni Arapski Emirati, poznatiji kao UAE. Ako nikada niste bili tamo, sigurno propuštate jedan od najboljih doživljaja koji mogu da vam se dese u životu. UAE su nesumnjivo jedna od najpopularnijih turističkih destinacija na svetu.',
    //   img: 'uae.jpg',
    //   datumPolaska: '2023-12-29',
    //   cena: 600,
    //   ocena: 4,
    // },
  ]);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar location={location} />
        <Routes>
          <Route
            path="/"
            element={<Home setLocation={setLocation} searchDestionation={searchDestionation} setSearchDestionation={setSearchDestionation} sortiranje={sortiranje} setSortiranje={setSortiranje} />}
          />
          <Route
            path="/putovanja"
            element={
              <Putovanja
                
                setLocation={setLocation}
                putovanja={putovanja}
                searchDestionation={searchDestionation}
                setSearchDestionation={setSearchDestionation}
                sortiranje={sortiranje} setSortiranje={setSortiranje} 
              />
            }
          />
          <Route
            path="/detalji"
            element={
              <Detalji
               
                setLocation={setLocation}
                putovanja={putovanja}
                setPutovanja={setPutovanja}
              />
            }
          >
            <Route path=":singleId" element={<Detalji />} />
          </Route>
          <Route
            path="/dashboard"
            element={
              <Dashboard
                
                setLocation={setLocation}
                putovanja={putovanja}
                setPutovanja={setPutovanja}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
