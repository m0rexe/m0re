let a = prompt("Podaj liczbę od 1 do 7:");

switch (a) {

    case "1": document.write("Dziś jest poniedziałek!");
        break;
    case "2": document.write("Dziś jest wtorek!");
        break;
    case "3": document.write("Dziś jest środa!");
        break;
    case "4": document.write("Dziś jest czwartek!");
        break;
    case "5": document.write("Dziś jest piątek!");
        break;
    case "6": document.write("Dziś jest sobota!");
        break;
    case "7": document.write("Dziś jest niedziela!");
        break;
    default: document.write("Wybrałeś złą liczbę :(");
        break;
}