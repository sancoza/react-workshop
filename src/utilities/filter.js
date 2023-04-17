const filter = (searchDestionation, putovanja, sortiranje) => {
  let tempPrikazPutovanja = [];

  if (searchDestionation === '') {
    tempPrikazPutovanja = [...putovanja];
  } else {
    tempPrikazPutovanja = putovanja.filter((putovanje, index) => {
      if (
        putovanje.destinacija
          .toLowerCase()
          .startsWith(searchDestionation.toLowerCase())
      ) {
        return true;
      }
      return false;
    });
  }

  switch (sortiranje) {
    case '1':
      tempPrikazPutovanja.sort((a, b) => {
        const destinacijaA = a.destinacija.toLowerCase();
        const destinacijaB = b.destinacija.toLowerCase();

        if (destinacijaA < destinacijaB) {
          return -1;
        }
        if (destinacijaA > destinacijaB) {
          return 1;
        }
        return 0;
      });
      break;
    case '2':
      tempPrikazPutovanja.sort((a, b) => {
        const destinacijaA = a.destinacija.toLowerCase();
        const destinacijaB = b.destinacija.toLowerCase();

        if (destinacijaA > destinacijaB) {
          return -1;
        }
        if (destinacijaA < destinacijaB) {
          return 1;
        }
        return 0;
      });
      break;
    default:
      break;
  }

  return tempPrikazPutovanja;
};
export default filter;
