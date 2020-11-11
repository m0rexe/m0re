// 6. Napisz program, który wczytuje kwotę w złotych, a następnie przelicza ją na taka walutę jaką wybierze
// użytkownik: funty, dolary, euro. Rozważ wszystkie 3 przypadki

let kwota = prompt("Podaj kwotę w zł:")
let waluta = prompt("Wybierz walutę:\n(funty, dolary, euro)")

switch (waluta) {

    case "funty":
        document.write("Masz " + kwota / 5.03 + " funta")
        break
    case "dolary":
        document.write("Masz " + kwota / 3.81 + " dolara")
        break
    case "euro":
        document.write("Masz " + kwota / 4.48 + " euro")
        break
    default:
        alert("Podano złą walutę!")
}