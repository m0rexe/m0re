// 7. Napisz program jak wyżej przeliczające metry na inne jednostki miary (milimetr, centymetr, kilometr)

let metry = prompt("Podaj ile masz metrów:")
let jednostka = prompt("Podaj jednostkę:\n(mm, cm, km)")

switch (jednostka) {

    case "mm":
        document.write("Masz " + metry * 1000 + " " + jednostka)
        break
    case "cm":
        document.write("Masz " + metry * 100 + " " + jednostka)
        break
    case "km":
        document.write("Masz " + metry / 1000 + " " + jednostka)
        break
    default:
        alert("Podano złą jednostkę!")
}