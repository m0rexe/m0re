// 1.Napisz w JavaScript program pt.Przedmioty, w którym po wprowadzeniu nazwy przedmiotu nauczanego 
// w ZSTK wypiszesz odpowiedni komunikat/informację na temat tego przedmiotu, np.
// Po wprowadzeniu nazwy przedmiotu PAI pojawi się komunikat "PAI uczy logicznego myślenia". Uwzględnij default.
// Rozważ tyle przypadków ile przedmiotów uczysz się w ZSTK

let przedmiot = prompt("Podaj przedmiot")

switch (przedmiot) {
    case "matematyka":
        document.write(przedmiot + " jest któlową nauk")
        break;
    case "język angielski":
        document.write(przedmiot + " Provident beatae natus.")
        break;
    case "fizyka":
        document.write(przedmiot + " Error cum et saepe dolorum sit.")
        break;
    case "PAI":
        document.write(przedmiot + " Ad et eveniet vel recusandae itaque distinctio explicabo sit.")
        break;
    case "PIMLSK":
        document.write(przedmiot + " Culpa deleniti aut sed sint.")
        break;
    case "chemia":
        document.write(przedmiot + " Nulla corrupti est quia assumenda et vitae.")
        break;
    case "biologia":
        document.write(przedmiot + " Pariatur aut molestias sed mollitia eum corporis corrupti excepturi labore.")
        break;
    case "język niemiecki":
        document.write(przedmiot + " Earum vel dolor omnis.")
        break;
    case "wf":
        document.write(przedmiot + " Reiciendis esse nostrum aut et molestiae voluptatem inventore vel consectetur.")
        break;
    case "abd":
        document.write(przedmiot + " Aut velit ut placeat eligendi recusandae eum alias eum enim.")
        break;
    case "sbd":
        document.write(przedmiot + " Facilis atque voluptas fuga voluptates dolorem tenetur.")
        break;
    case "wak":
        document.write(przedmiot + " Impedit eligendi maxime minima quasi quia ipsam nihil consequuntur.")
        break;
    case "asso":
        document.write(przedmiot + " Labore tempore modi ut corporis et eos.")
        break;
    case "religia":
        document.write(przedmiot + " Sed ut qui molestias unde eius.")
        break;
    case "his":
        document.write(przedmiot + " Quod assumenda autem eligendi hic.")
        break;
    case "dzgbi":
        document.write(przedmiot + " Corporis fugit excepturi.")
        break;
    case "godzina wychowawcza":
        document.write(przedmiot + " Quae fugiat et debitis numquam.")
        break;
    case "język angielski informatyczny":
        document.write(przedmiot + " Excepturi temporibus saepe corrupti iste sed et voluptatem iste optio.")
        break;
    default:
        document.write("Nie mam takiego przedmiotu!")
        break;
}
