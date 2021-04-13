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

  switch (rodzaj) {
    case 'serowa':
      if (adres != 'nieWażne') {
        if (uro != 'tak') {
          let koszt = cenaserowa * iloscpizz + dostawa;
          document.getElementById('wynik').innerHTML =
            'Koszt całkowity: ' + koszt + ' zł!';
        } else {
          let koszt = cenaserowa * iloscpizz;
          document.getElementById('wynik').innerHTML =
            'Masz dziś urodziny!!! <br> Koszt całkowity (bez dostawy): ' +
            koszt +
            ' zł!';
        }
      } else {
        dostawa = 20;
        if (uro != 'tak') {
          let koszt = cenaserowa * iloscpizz + dostawa;
          document.getElementById('wynik').innerHTML =
            'Koszt całkowity: ' + koszt + ' zł!';
        } else {
          let koszt = cenaserowa * iloscpizz;
          document.getElementById('wynik').innerHTML =
            'Masz dziś urodziny!!! <br> Koszt całkowity (bez dostawy): ' +
            koszt +
            ' zł!';
        }
      }
      break;
    case 'peperoni':
      if (adres != 'nieWażne') {
        if (uro != 'tak') {
          let koszt = (cenaserowa + skladnik) * iloscpizz + dostawa;
          document.getElementById('wynik').innerHTML =
            'Koszt całkowity: ' + koszt + ' zł!';
        } else {
          let koszt = (cenaserowa + skladnik) * iloscpizz;
          document.getElementById('wynik').innerHTML =
            'Masz dziś urodziny!!! <br> Koszt całkowity (bez dostawy): ' +
            koszt +
            ' zł!';
        }
      } else {
        dostawa = 20;
        if (uro != 'tak') {
          let koszt = (cenaserowa + skladnik) * iloscpizz + dostawa;
          document.getElementById('wynik').innerHTML =
            'Koszt całkowity: ' + koszt + ' zł!';
        } else {
          let koszt = (cenaserowa + skladnik) * iloscpizz;
          document.getElementById('wynik').innerHTML =
            'Masz dziś urodziny!!! <br> Koszt całkowity (bez dostawy): ' +
            koszt +
            ' zł!';
        }
      }
      break;
    case 'havai':
      if (adres != 'nieWażne') {
        if (uro != 'tak') {
          let koszt = (cenaserowa + skladnik * 2) * iloscpizz + dostawa;
          document.getElementById('wynik').innerHTML =
            'Koszt całkowity: ' + koszt + ' zł!';
        } else {
          let koszt = (cenaserowa + skladnik * 2) * iloscpizz;
          document.getElementById('wynik').innerHTML =
            'Masz dziś urodziny!!! <br> Koszt całkowity (bez dostawy): ' +
            koszt +
            ' zł!';
        }
      } else {
        if (uro != 'tak') {
          dostawa = 20;
          let koszt = (cenaserowa + skladnik * 2) * iloscpizz + dostawa;
          document.getElementById('wynik').innerHTML =
            'Koszt całkowity: ' + koszt + ' zł!';
        } else {
          let koszt = (cenaserowa + skladnik * 2) * iloscpizz;
          document.getElementById('wynik').innerHTML =
            'Masz dziś urodziny!!! <br> Koszt całkowity (bez dostawy): ' +
            koszt +
            ' zł!';
        }
      }
      break;
    case 'kurczak':
      if (adres != 'nieWażne') {
        if (uro != 'tak') {
          let koszt = (cenaserowa + skladnik * 3) * iloscpizz + dostawa;
          document.getElementById('wynik').innerHTML =
            'Koszt całkowity: ' + koszt + ' zł!';
        } else {
          let koszt = (cenaserowa + skladnik * 3) * iloscpizz;
          document.getElementById('wynik').innerHTML =
            'Masz dziś urodziny!!! <br> Koszt całkowity (bez dostawy): ' +
            koszt +
            ' zł!';
        }
      } else {
        dostawa = 20;

        if (uro != 'tak') {
          let koszt = (cenaserowa + skladnik * 3) * iloscpizz + dostawa;
          document.getElementById('wynik').innerHTML =
            'Koszt całkowity: ' + koszt + ' zł!';
        } else {
          let koszt = (cenaserowa + skladnik * 3) * iloscpizz;
          document.getElementById('wynik').innerHTML =
            'Masz dziś urodziny!!! <br> Koszt całkowity (bez dostawy): ' +
            koszt +
            ' zł!';
        }
      }
      break;
    default:
      console.log('Something Went Wrong! O_o');
  }
};
