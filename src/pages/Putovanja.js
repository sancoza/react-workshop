import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import filter from '../utilities/filter';

const Putovanja = ({
  setLocation,
  putovanja,
  searchDestionation,
  setSearchDestionation,
  sortiranje,
  setSortiranje,
}) => {
  const [prikazPutovanja, setPrikazPutovanja] = useState([]);

  let currentLocation = useLocation();

  useEffect(() => {
    setLocation(currentLocation.pathname);
    let temp = filter(searchDestionation, putovanja, sortiranje);
    setPrikazPutovanja([...temp]);
  }, [searchDestionation, putovanja, sortiranje, currentLocation, setLocation]);

  const pretraga = (event) => {
    event.preventDefault();

    let temp = filter(putovanja, searchDestionation, sortiranje);
    setPrikazPutovanja([...temp]);
  };

  return (
    <div>
      <section className="bg-light py-5 text-dark d-flex flex-column justify-content-center align-items-center">
        <h1 className="fw-bold display-5">Gde zelite da putujete?</h1>
        <p>Pretrazite nasu veliku ponudu premium putovanja</p>
        <form
          onSubmit={(event) => pretraga(event)}
          className="row gx-3 gy-2 align-items-center container"
        >
          <div className="col-sm-3">
            <input
              value={searchDestionation}
              onChange={(e) => setSearchDestionation(e.target.value)}
              type="text"
              className="form-control form-control-lg"
              placeholder="Destinacija"
            />
          </div>

          <div className="col-sm-3">
            <select className="form-select form-select-lg">
              <option defaultValue={'Mesec'}>Mesec...</option>
              <option value="1">Oktobar</option>
              <option value="2">Novembar</option>
              <option value="3">Decembar</option>
            </select>
          </div>

          <div className="col-sm-3">
            <select
              value={sortiranje}
              onChange={(e) => setSortiranje(e.target.value)}
              className="form-select form-select-lg"
            >
              <option defaultValue={'Sortiraj'}>Sortiraj...</option>
              <option value="1">Opadajuce</option>
              <option value="2">Rastuce</option>
            </select>
          </div>

          <div className="col-sm-3">
            <button type="submit" className="btn btn-danger w-100 btn-lg">
              Pretraga
            </button>
          </div>
        </form>
      </section>

      <section className="container pregled-putovanja py-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {prikazPutovanja.map((putovanje, index) => {
            return (
              <div className="col" key={index}>
                <div className="card h-100">
                  <img
                    src={'../img/' + putovanje.img}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-footer">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        Destinacija: {putovanje.destinacija}
                      </li>
                      <li className="list-group-item">
                        Ocena:
                        {putovanje.ocena}
                      </li>
                      <li className="list-group-item">
                        Datum putovanja: {putovanje.datumPolaska}
                      </li>
                      <li className="list-group-item">
                        Cena: {putovanje.cena}{' '}
                      </li>
                    </ul>
                  </div>
                  <Link className="btn btn-danger m-2" to={`/detalji/${index}`}>
                    Detaljnije
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Putovanja;
