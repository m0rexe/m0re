-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 03 Lis 2020, 10:14
-- Wersja serwera: 10.4.14-MariaDB
-- Wersja PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `ksiegarnia_internetowa`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `klienci`
--

CREATE TABLE `klienci` (
  `klient_id` int(10) UNSIGNED NOT NULL,
  `nazwisko` char(50) COLLATE utf8_polish_ci NOT NULL,
  `adres` char(100) COLLATE utf8_polish_ci NOT NULL,
  `miejscowosc` char(30) COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `klienci`
--

INSERT INTO `klienci` (`klient_id`, `nazwisko`, `adres`, `miejscowosc`) VALUES
(1, 'Anna Kowalska', 'Piłsudskiego 24/5', 'Krasnystaw'),
(2, 'Mirosław Mróz', 'Lwowska 10/22', 'Lublin'),
(3, 'Jan Prędki', 'Kwiatowa 8', 'Zabrze'),
(4, 'Józef Koń', 'Zatybrze 23', 'Rzym'),
(5, 'Ferdynand Kiepski', 'Piwna 13/13', 'Wrocław'),
(6, 'Jan Mądry', 'Różana 10', 'Zaklików'),
(7, 'Józef Nauczyciel', 'Mełgiewska 22', 'Żdżanne'),
(8, 'Ferdynand Wspaniały', 'Browarna 18/7', 'Wrocław'),
(9, 'Jan Powolny', 'Akacjowa 12', 'Baraki');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `ksiazki`
--

CREATE TABLE `ksiazki` (
  `isbn` char(13) COLLATE utf8_polish_ci NOT NULL,
  `autor` char(50) COLLATE utf8_polish_ci DEFAULT NULL,
  `tytul` char(100) COLLATE utf8_polish_ci DEFAULT NULL,
  `cena` float(4,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `ksiazki`
--

INSERT INTO `ksiazki` (`isbn`, `autor`, `tytul`, `cena`) VALUES
('83-246-0375-1', 'Rafał Pawlak', 'Okablowanie strukturalne sieci', 22.10),
('83-7197-034-X', 'Kent Reisdorph', 'Delphi 4 dla każdego', 99.99),
('83-7197-709-3', 'Bruce Eckel', 'Thinking in C++', 90.20),
('83-7311-984-1', 'Dan Verton', 'Pamiętniki hakerów', 36.00),
('83-7361-391-1', 'Rob Flickenger', '100 sposobów na sieci bezprzewodowe', 25.30),
('83-86969-49-0', 'Andrzej Marciniak', 'Object Pascal', 99.99),
('87-7361-784-1', 'Luke Welling, Laura Thomson', 'PHP i MySQL. Tworzenie stron WWW.Vademecum profesjonalisty', 99.90),
('978-83-246-12', 'Piotr Czarny', 'Mandriva Linux', 30.20),
('978-83-246-37', 'Bartosz Danowski', 'Ćwiczenia praktyczne HTML5', 26.60),
('978-83-246-38', 'Alex MacCaw', 'JavaScript. Aplikacje WWW', 48.25);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `ksiazki_zamowione`
--

CREATE TABLE `ksiazki_zamowione` (
  `zamowienie_id` int(10) UNSIGNED NOT NULL,
  `isbn` char(13) COLLATE utf8_polish_ci NOT NULL,
  `ilosc` tinyint(3) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `ksiazki_zamowione`
--

INSERT INTO `ksiazki_zamowione` (`zamowienie_id`, `isbn`, `ilosc`) VALUES
(1, '87-7361-784-1', 2),
(2, '83-86969-49-0', 1),
(2, '87-7361-784-1', 1),
(3, '83-246-0375-1', 1),
(4, '83-7197-034-X', 1),
(5, '83-7197-709-3', 2),
(6, '83-86969-49-0', 2),
(6, '978-83-246-37', 1),
(7, '83-246-0375-1', 3),
(8, '83-7361-391-1', 3),
(9, '87-7361-784-1', 1),
(10, '83-7197-709-3', 1);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `recenzje_ksiazek`
--

CREATE TABLE `recenzje_ksiazek` (
  `isbn` char(13) COLLATE utf8_polish_ci NOT NULL,
  `recenzja` text COLLATE utf8_polish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `recenzje_ksiazek`
--

INSERT INTO `recenzje_ksiazek` (`isbn`, `recenzja`) VALUES
('83-246-0375-1', 'Ciekawa książka dla interesujących się budową i działaniem sieci'),
('83-86969-49-0', 'Książka zawiera kompendium wiedzy na temat programowania obiektowego w języku Pascal w środowisku Delphi 5. Przeznaczona jest zarówno dla początkujących programistów,  jak równiez profesjonalistów'),
('87-7361-784-1', 'Bardzo profesjonalna książka opisująca jak tworzyć dynamiczne strony WWW, stosując PHP oraz MySQL');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `zamowienia`
--

CREATE TABLE `zamowienia` (
  `zamowienie_id` int(10) UNSIGNED NOT NULL,
  `klient_id` int(10) UNSIGNED NOT NULL,
  `wartosc` float(6,2) DEFAULT NULL,
  `data` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `zamowienia`
--

INSERT INTO `zamowienia` (`zamowienie_id`, `klient_id`, `wartosc`, `data`) VALUES
(1, 5, 199.80, '2014-10-11'),
(2, 1, 210.05, '2014-10-12'),
(3, 2, 22.10, '2014-10-12'),
(4, 5, 120.34, '2014-10-14'),
(5, 6, 180.40, '2014-10-19'),
(6, 7, 246.90, '2014-10-21'),
(7, 8, 66.30, '2014-11-01'),
(8, 9, 79.80, '2014-11-10'),
(9, 7, 99.90, '2014-11-10'),
(10, 10, 90.20, '2014-11-15');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `klienci`
--
ALTER TABLE `klienci`
  ADD PRIMARY KEY (`klient_id`);

--
-- Indeksy dla tabeli `ksiazki`
--
ALTER TABLE `ksiazki`
  ADD PRIMARY KEY (`isbn`);

--
-- Indeksy dla tabeli `ksiazki_zamowione`
--
ALTER TABLE `ksiazki_zamowione`
  ADD PRIMARY KEY (`zamowienie_id`,`isbn`);

--
-- Indeksy dla tabeli `recenzje_ksiazek`
--
ALTER TABLE `recenzje_ksiazek`
  ADD PRIMARY KEY (`isbn`);

--
-- Indeksy dla tabeli `zamowienia`
--
ALTER TABLE `zamowienia`
  ADD PRIMARY KEY (`zamowienie_id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `klienci`
--
ALTER TABLE `klienci`
  MODIFY `klient_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT dla tabeli `zamowienia`
--
ALTER TABLE `zamowienia`
  MODIFY `zamowienie_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
