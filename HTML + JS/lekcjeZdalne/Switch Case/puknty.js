// 5. Napisz instrukcję switch, która wyznaczy i zwróci jako wartość ocenę na podstawie punktów
// zdobytych za kolokwium według następujących reguł:
//  0-10 pkt – 2,
//  11-13 pkt - 3,
//  14-16 pkt - 4,
//  17-18 pkt - 5. 

let punkty = prompt("Podaj ilość pukntów:")

switch (punkty) {

    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "10":
        document.write("Twoja ocena to - 2")
        break
    case "11":
    case "12":
    case "13":
        document.write("Twoja ocena to - 3")
        break
    case "14":
    case "15":
    case "16":
        document.write("Twoja ocena to - 4")
        break
    case "17":
    case "18":
        document.write("Twoja ocena to - 5")
        break
    default:
        alert("Podano złą liczbę pukntów!")
        break


}