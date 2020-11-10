// 3. Zadeklaruj 3 zmienne: liczba 1, liczba 2 , znak(która przechowuje następnujące znaki: +, -, *, /, %)
// Wprowadź dwie liczby z klawiatury.
// Za pomocą instrukcji switch case przeprowadzać następujące operacje matematyczne: dodawanie, odejmowanie, mnożenie, dzielenie, resztę z dzielenia
// Każdy case to oddzielna operacja matematyczna. 

let a = Number(prompt("Podaj liczbę a:"))
let b = Number(prompt("Podaj liczbę b:"))
let znaki = prompt("Podaj znak:")

switch (znaki) {

    case "+":
        document.write("Suma liczb równa się: ", a + b)
        break;
    case "-":
        document.write("Różnica liczb równa się: ", a - b)
        break;
    case "*":
        document.write("Iloczyn liczb równa się: ", a * b)
        break;
    case "/":
        if (a != 0 || b != 0) {
            document.write("Iloraz liczb równa się: ", a / b)
        }
        else {
            alert("Nie dziel przez 0!")
        }
        break;
    case "%":
        if (b != 0) {
            document.write("Reszta liczb równa się: ", a % b)
        }
        else {
            alert("Podaj liczbę różną od 0")
        }
        break;
    default:
        alert("Podano zły znak!")
}



