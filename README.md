# web-animation | Stella Niewenhuis


## Het gekozen kunstwerk 

![bookcover](https://user-images.githubusercontent.com/45544342/82782591-f4d4fb80-9e5c-11ea-9146-38f52ce1e404.jpg)

De link naar mijn kunstwerk: 
https://designarchives.aiga.org/#/entries/%2Bcollections%3A%2250%20Books%20%7C%2050%20Covers%20of%202017%22/_/detail/relevance/asc/50/7/21900/4321/1

Het kunstwerk dat ik gekozen heb, is een book cover van het boek 1234, geschreven door Paul Auster. Zijn boek gaat over het verhaal van Archie Ferguson waarvan 4 verschillende verhalen uit 4 verschillende periodes van zijn leven worden verteld.
Het verhaal volgt zowel zijn thuisleven als universiteitsjaren, zijn liefdesleven en politieke ideeën. Afhankelijk van de versie van zijn leven, ervaart Ferguson verschillende identiteitsproblemen. Het verhaal speelt zich af in Newark, New Jersey, New York City, Parijs en Londen in de jaren vijftig en zestig (bron Wikipedia). 

De cover is in 2017 gemaakt door het onafhandelijke design bureau Lom Creative. Op deze site zie je wat voor projecten ze doen: http://lom.com.tr/. Ook zie je dat ze al veel prijzen hebben gewonnen met het maken van book covers. 

### Waarom dit kustwerk?
Ik koos dit kunstwerk omdat ik in eerste instantie op zoek was naar iets dat niet te ingewikkeld was om na te maken in Illustrator. Ook vond ik het abstracte aan deze cover gaaf en zag ik veel mogelijkheden om wat te doen met de bolletjes en de streepjes. Denk aan: bolletjes groter en kleiner maken en de componenten van kleur veranderen etc. 

## Het proces
### Week 1
De eerste week maakte ik het kunstwerk na in Illustrator, waarin ik alle bolletjes en streepjes in aparte lagen zette. De kromme streepjes deed ik met de pen tool. Ik ben aardig lang bezig geweest met het uitvogelen van: 
1. Hoe ik de svg goed kon exporteren naar code (dat kon overigens op meerdere manieren). 
2. Hoe ik elementen uit mijn svg kon stijlen door middel van CSS (het probleem bleek dat er CSS in de HTML code van Illustrator zat. Dit had ik eerst niet door dus ik dacht dat mijn SVG verkeerd was. Ook bleek mijn CSS code niet gelinkt te zijn aan mijn HTML). 

### Week 2 
In week twee kon ik echt aan de slag gaan en had ik meer controle over mijn code omdat alles nu werkte. 
De eerste ideeën die ik had waren echter wel ingewikkeld en daarvoor gebruikte ik Javascript en wat hulp van mijn broertje.  We hebben het samen uitgevogeld. Vervolgens ben ik CSS transities gaan toevoegen en de pagina meer gaan stijlen. 

### Afronding 
In de laatste week ben ik bezig geweest met het responive maken van mijn inetractief design. Dit heb ik gedaan met behulp van media queries. Ook heb ik de verschillen tussen de desktop en mobiele versie uitgewerkt.  


## Het resultaat 

### Desktop versie 
<img width="1040" alt="Schermafbeelding 2020-05-25 om 08 34 25" src="https://user-images.githubusercontent.com/45544342/82785586-2f419700-9e63-11ea-9664-d12fb275c966.png">

Interacties: 
- Rotatie van de svg door op de rotatie button te klikken
- Het shake animatie van de svg door op de shake button te klikken.
- Zweven van de svg door op de float button te klikken. 
- Het highlighten van nummer 1, 2, 3 en 4 in de svg door op toets 1,2, 3 en 4 te klikken.  
- Bij elke druk op toets 5, 1 random bolletje hightlighten (of op de 1 in het kunstwerk klikken)
- Bij elke druk op toets 6, 2 random bolletje hightlighten (of op de 2 in het kunstwerk klikken)
- Bij elke druk op toets 7, 3 random bolletje hightlighten (of op de 3 in het kunstwerk klikken)
- Bij elke druk op toets 8, 4 random bolletje hightlighten (of op de 4 in het kunstwerk klikken)
- Achtergrond donker maken door op de dark mode button te klikken. 
- Hover over de tekst in het kunstwerk
- Hover met regenboogkleuren animatie op de tekst onder de buttons. 
- Hover over de bolletjes (kleur verandert). 
- Hover over de streepjes en de kromme streepjes (kleur verandert). 
- Klikken op de bolletjes (kleur verabdert). 


### Mobiele versie 
<img width="423" alt="Schermafbeelding 2020-05-25 om 09 09 29" src="https://user-images.githubusercontent.com/45544342/82787777-77fb4f00-9e67-11ea-8a8b-3fca39671e7b.png">

Interacties: 
Er zijn 2 verschillen ten opzichte van de desktop versie. 
- De rotatie is vervangen door flip. 
- Het hightlighten van nummer 1,2, 3 en 4 gebeurt door op de buttons te klikken. 
- Het hightlighten van de random bolletjes gaat door middel van het tappen op de cijfer 1,2 3 en 4 in het kunstwerk.
- Door op de bolletjes te tappen, worden ze zwart.


## Wat heb ik geleerd? 

Sowieso heb ik alles weer goed ophaald wat betreft HTML CSS en Javascript. Het was een tijdje geleden! 
Verder heb ik geleerd hoe je een svg in Illustrator kunt omzetten naar een svg code. In het begin vond ik de svg heel lastig om te begrijpen omdat de code zo lang is. Maar nu weet ik inmiddels hoe je lagen uit de svg kunt stijlen en aanspreken. Qua animaties ging er vooral een hele nieuwe wereld voor me open met de CSS keyframes. Die heb ik gebruikt in combinatie met de eventlisteners en toggles in Javascript. De keyevents waren ook helemaal nieuw voor mij. Dat elke toets een eigen soort code heeft wist ik helemaal niet! 
 










