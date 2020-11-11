// 4. Napisz instrukcje switch case, która na podstawie zmiennej całkowitej ocena wyświetla informację: 
// 1 - brak promocji do następnej klasy, 
// 2 - promocja do następnej klasy, 
// 3  - 
// 4  - 
// 5  -
// 6  - promocja z ocena celująca
// Rozważ wszytskie przypadki i możliwosć błędu.

let ocena = prompt("Podaj swoją ocenę:")

switch (ocena) {
    case "1":
        document.write("Brak promocji do następnej klasy")
        break;
    case "2":
    case "3":
    case "4":
    case "5":
        document.write("Promocja do następnej klasy")
        break;
    case "6":
        document.write("Promocja z oceną celującą!")
        break;
    default:
        alert("Podano złą ocenę!")
        break;
}