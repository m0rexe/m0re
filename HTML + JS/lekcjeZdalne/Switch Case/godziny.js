// 8. Program dnia konferencji wygląda następująco:
//  godz. 8-11 wykłady,
//  godz. 12-13 dyskusje,
//  godz. 14 obiad,
//  godz. 15-18 prelekcje,
//  godz. 19 kolacja.
// Program ma za zadanie pobrać godzinę i wyświetlić informacje o wszystkich punktach dnia, które jeszcze
// będą począwszy od danej godziny. 

let h = prompt("Podaj godzinę:")

switch (h) {

    case "8":
    case "9":
    case "10":
    case "11":
        document.write("Zostało jeszcze:<br>godz. 8-11 wykłady,<br>godz. 12-13 dyskusje,<br>godz. 14 obiad,<br>godz. 15-18 prelekcje,<br>godz. 19 kolacja.")
        break
    case "12":
    case "13":
        document.write("Zostało jeszcze:<br>godz. 12-13 dyskusje,<br>godz. 14 obiad,<br>godz. 15-18 prelekcje,<br>godz. 19 kolacja.")
        break
    case "14":
        document.write("Zostało jeszcze:<br>godz. 14 obiad,<br>godz. 15-18 prelekcje,<br>godz. 19 kolacja.")
        break
    case "15":
    case "16":
    case "17":
    case "18":
        document.write("Zostało jeszcze:<br>godz. 15-18 prelekcje,<br>godz. 19 kolacja.")
        break
    case "19":
        document.write("Zostało jeszcze:<br>godz. 19 kolacja.")
        break
    default:
        alert("Podano złą godzinę!")

}