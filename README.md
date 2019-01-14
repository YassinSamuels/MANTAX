# MANTAX

Een app om documenten te creëren in een WebApp en deze vervolgens te exporteren naar PDFs zonder watermarks of reclame.

## Introductie

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Vereisten

Wat heb je nodig om MANTAX te gebruiken?

```
Computer / Laptop,
Browser,
Internet verbinding.
```

### Waarom deze app

Applicaties die komen zonder een doel zullen nauwelijks gebruikt worden. Ik maak voor mijn broer al een jaar of 4 handmatig facturen voor zijn bedrijf. Al deze jaren heb ik er zelf vsoor gekozen om dit handmatig te doen. De reden hiervoor was dat ik macht had over de design van de factuur, offertes, etc. 

Jaarlijks heb ik de stijl van de factuur aangepast aan de trend van die tijd, zo ook in 2018. Ik vond het belangrijk dat een factuur professionaliteit moest uitstralen en een mooi strak design hebben, want dat straalt wat uit. Dat laat klanten prettiger kijken en gemakkelijker onthouden. 

Standaard concept van een factuur
![Invoice Standaard](/supportingfiles/images/githubSC/basicUglyInvoice.jpg "Invoice Standaard")
```
Zoals hierboven te zien is, is het dood simpel. 
Design hiervan past niet in deze tijd en het komt te druk over.
```

Persoonlijke touch concept van een factuur
![Invoice Standaard](/supportingfiles/images/githubSC/Mantaxafb.jpg "Invoice Mantax")
```
Ik heb voor een rustige toch vanzelfsprekende stijl gekozen.
Het is mooi wit met kleur accenten en benadrukt alleen wat belangrijk is.
```

### Wat is het doel ervan

Wanneer je start als een freelancer of MKB-ondernemer kan het zijn dat het een part-time iets is. Voor jongeren is het misschien dat ze zelfs nog erbij studeren.
Focus moet ten alle tijden blijven bij de service of werk dat je verkoopt en niet dat er lang wordt gerommeld om een factuur te maken.

Wanneer zaken gaan groot genoeg groeien, zal er vast en zeker een financieel proffesional gehuurd worden. Maar tot die tijd is het verstandig om het gewoon alleen te doen, of in dit geval het te automatiseren voor jezelf.

Allerlei documenten maken, voorlopig alleen facturen, in een mooi omgeving waarbij alles duidelijk is. Dat is MANTAX. 

### Hoe ben ik hierop gekomen

Ik doe al sinds 2011, sinds ik interesse toonde aan de technologie, de facturen van mijn broer zijn bedrijf. Het begon vrij rustig van maandelijkse facturen naar drukke weken met wekelijkse facturen. Natuurlijk is dit minuten werk voor mij, maar hier kwam behoorlijk veel tijd in zitten. Ik wou het al jaren lang automatiseren voor hem, maar hoe..
Voor dit miniscule probleem heb ik een oplossing geprobeerd te vinden tijdens mijn vrije projectsweken. 

In het begin wou ik een telefoon- of MacOS app maken in Swift. Dit is de programmeer taal van Apple. Na +5/6 weken dagelijks een premium videotutorial gevolgd te hebben, kwam ik er achter dat ik in tijdnood zat en nog steeds geen product kon opleveren. Hierdoor was ik geneigd om het te versimpelen. Ik koos voor een website met eventueel een Progressive Web App shell als er tijd over was. 

Na een brainstorm met verschillende aanwezige mensen bij de ISAAC, ben ik mijn ideeën gaan vernauwen tot ik maar een paar concepten overhield. Hierdoor is MANTAX tot stand gekomen. 

## Gebruik van de website

Zeer simpel. Het heeft niet eens uitleg nodig en dat is waar ik naar streef.
Open de website, selecteer bovenaan welke document je wilt maken en maak het!

### The User Experience

Vlak nadat ik mijn idee had, was ik direct gaan kijken naar hoe het dan zat met User Experience. Ik heb veel UX docenten erover gesproken en gepraat met anderen die UX gedeelte van hun voorlopige cijfers hoog hadden. Met dit in achterhoofd ben ik op de site van [CMDMethods](www.cmdmethods.com) gaan kijken welke testen ook echt passen bij mijn project. 
Het zou dom geweest zijn om willekeurige testen uit te werken die geen toegevoegde waarden bieden aan mijn onderzoeken. Ik heb alle testen good door gelezen en daaruit een aantal uitgekozen en verwerkt. Dit is te lezen in mijn documentatie over UX via de link hieronder.

* [User Experience document](supportingfiles/documenten/documentatie-ux.pdf) - Document met al mijn UX testen en beschrijvingen

### Strategie & Concept

Design staat erg hoog aan mijn prioriteitenlijst. Ik heb van mijzelf gemerkt dat ik zeer gedreven en gemotiveerd wordt/ben als het project/document er naar mijn smaak goed uit ziet. 
De motivatie ervan stort ik vervolgens in mijn documentatie en zo kan ik uren lang achter elkaar doorwerken met een goed gevoel. Dit zal dan ook terug te zien zijn, hopelijk, in mijn documentatie van SCO.

* [Strategie & Concept document](supportingfiles/documenten/documentatie-sco.pdf) - Document met al mijn SCO concepten en documentatie



## Gemaakt met

* [Visual Studio Code](https://code.visualstudio.com) - Broncode editor dat gebruikt is om de progressive web app te maken
* [Bootstrap4](http://getbootstrap.com/docs/4.1/getting-started/introduction/) - Framework dat gebruikt is voor responsiveness
* [jsPDF](https://parall.ax/products/jspdf) - Framework dat PDFs genereert

## Versiebeheer

Ik heb de regels van [SemVer](http://semver.org/) aangehouden met het nummeren van versie nummers. Om deze versie iteraties te zien, bekijk de [tags van mijn repository](https://github.com/YassinSamuels/MANTAX/tags). Versiebeheer zal starten vanaf versie 1.0.0 zodra het ingeleverd wordt.

## Auteur

* **Yassin Samuels** - *Vanaf de eerste werkzaamheden* - [YassinSamuels](https://github.com/YassinSamuels/)

## licentie

Dit project heeft geen licentie. Ik heb er expres niet voor gekozen om de MIT license van GitHub te kiezen, want ik was er niet zeker van wat het concreet inhield.

## Met dank aan

* Codepen - Voor kleine bruikbare snippets
* Youtube - Voor uitleg over PWA
* W3-Schools - Voor documentatie over HTML5, CSS3 en JS
* Bram - Voor inzicht en goede tips
* Geert-Jan - Voor conceptueel denken, tips, uitleg over PWA/Native en JS
* Frank - Voor conceptueel denken, brainstorm sessie