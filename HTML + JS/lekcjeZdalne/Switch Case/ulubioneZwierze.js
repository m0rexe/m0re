// 2. Napisz w JavaSCript program pt. UlubioneZwierzę, w którym po wprowadzeniu nazwy zwierzątka pojawi się odpowiedni komunikat, 
// np.po wprowadzeniu nazwy PIES pojawi się komunikat "Wierny przyjaciel człowieka". Uwzględnij default.
// Rozważ 10 przypadków (case1,case2.....case10)

let zwierze = prompt("Wpisz zwierzę:")

switch (zwierze) {

    case "pies":
        document.write(zwierze + " Harum qui vel laboriosam perferendis.")
        break;
    case "kot":
        document.write(zwierze + " Quasi voluptas id.")
        break;
    case "chomik":
        document.write(zwierze + " Et iusto dolorum delectus reiciendis consectetur.")
        break;
    case "delfin":
        document.write(zwierze + " Tempora sed qui facere sed aut ipsum quia.")
        break;
    default:
        alert("Nie mam takiego zwierzęcia!")
        break;
}