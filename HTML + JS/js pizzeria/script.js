oblicz = () => {
  let i = document.getElementById('iloscpizz');
  let iloscpizz = i.value;
  let r = document.getElementById('rodzajpizzy');
  let rodzaj = r.value;
  let a = document.getElementById('adres');
  let adres = a.value;
  let u = document.getElementById('uro');
  let uro = u.value;

  //   console.log(iloscpizz, rodzaj, adres, uro);

  let cenaserowa = 25;
  let skladnik = 4;
  let dostawa = 7;


  serowa = () => {
    let koszt = cenaserowa * iloscpizz + dostawa;
    document.getElementById('wynik').innerHTML =
      'Koszt całkowity: ' + koszt + ' zł!';
  }

  serowa_uro = () => {
    let koszt = cenaserowa * iloscpizz;
    document.getElementById('wynik').innerHTML =
      'Masz dziś urodziny!!! <br> Koszt całkowity (bez dostawy): ' +
      koszt +
      ' zł!';
  }

  peperoni = () => {
    let koszt = (cenaserowa + skladnik) * iloscpizz + dostawa;
    document.getElementById('wynik').innerHTML =
      'Koszt całkowity: ' + koszt + ' zł!';
  }

  peperoni_uro = () => {
    let koszt = (cenaserowa + skladnik) * iloscpizz;
    document.getElementById('wynik').innerHTML =
      'Masz dziś urodziny!!! <br> Koszt całkowity (bez dostawy): ' +
      koszt +
      ' zł!';
  }

  havai = () => {
    let koszt = (cenaserowa + skladnik * 2) * iloscpizz + dostawa;
    document.getElementById('wynik').innerHTML =
      'Koszt całkowity: ' + koszt + ' zł!';
  }

  havai_uro = () => {
    let koszt = (cenaserowa + skladnik * 2) * iloscpizz;
    document.getElementById('wynik').innerHTML =
      'Masz dziś urodziny!!! <br> Koszt całkowity (bez dostawy): ' +
      koszt +
      ' zł!';
  }

  kurczak = () => {
    let koszt = (cenaserowa + skladnik * 3) * iloscpizz + dostawa;
    document.getElementById('wynik').innerHTML =
      'Koszt całkowity: ' + koszt + ' zł!';
  }

  kurczak_uro = () => {
    let koszt = (cenaserowa + skladnik * 3) * iloscpizz;
    document.getElementById('wynik').innerHTML =
      'Masz dziś urodziny!!! <br> Koszt całkowity (bez dostawy): ' +
      koszt +
      ' zł!';
  }

  switch (rodzaj) {
    case 'serowa':
      if (adres != 'nieWażne') {
        if (uro != 'tak') {
          serowa()
        } else {
          serowa_uro()
        }
      } else {
        if (uro != 'tak') {
          dostawa = 20;
          serowa()
        } else {
          serowa_uro()
        }
      }
      break;

    case 'peperoni':
      if (adres != 'nieWażne') {
        if (uro != 'tak') {
          peperoni()
        } else {
          peperoni_uro()
        }
      } else {
        if (uro != 'tak') {
          dostawa = 20;
          peperoni()
        } else {
          peperoni_uro()
        }
      }
      break;

    case 'havai':
      if (adres != 'nieWażne') {
        if (uro != 'tak') {
          havai()
        } else {
          havai_uro()
        }
      } else {
        if (uro != 'tak') {
          dostawa = 20;
          havai()
        } else {
          havai_uro()
        }
      }
      break;

    case 'kurczak':
      if (adres != 'nieWażne') {
        if (uro != 'tak') {
          kurczak()
        } else {
          kurczak_uro()
        }
      } else {
        if (uro != 'tak') {
          dostawa = 20;
          kurczak()
        } else {
          kurczak_uro()
        }
      }
      break;

    default:
      console.log('Something Went Wrong! O_o');
  }
};
