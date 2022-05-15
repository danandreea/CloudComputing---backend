# CloudComputing---backend

**Proiect - Cloud Computing
Aplicație pentru rezervări terenuri de tenis**

**Dan Andreea
Grupa 1117**

- Link video: https://youtu.be/Vp-YKBmRPms
- Link publicare: https://cc-proj-front.herokuapp.com/
- Link git: 
  - Frontend - https://github.com/danandreea/CloudComputing-Front
  - Backend - https://github.com/danandreea/CloudComputing-backend
     
     
**1.	Introducere**

- Sportul joacă un rol important în viața oamenilor, aducându-le numeroase beneficii ce contribuie atât la menținerea sănătății fizice, cât și a celei mentale. Acesta este prezent încă din cele mai vehi timpuri și a evoluat de-a lungul anilor, sub forma diferitelor ramuri și categorii.
Astazi, din ce in ce mai multi oameni inteleg importanta practicarii sportului in mod constant si, astfel, isi indreapta atentia catre activitatile sportive care li se potrivesc cel mai bine. Tenisul este un sport iubit, pe care persoanele de toate varstele aleg sa il practice in timpul liber. 

**2.	Descriere problema**

- In cadrul acestui proiect, am ales sa dezvolt o aplicatie web pentru gestiunea rezervarilor terenurilor de tenis de la diferite cluburi sportive din Bucuresti, folosind servicii in Cloud. Consider ca, o astfel de aplicatie vine in ajutorul iubitorilor de tenis, care vor sa isi rezerve rapid si eficient un teren de tenis, vizualizand baza de date cu terenurile si locatiile acestora pe harta.

**3.	Descriere API**

-API-ul JavaScript Maps oferă posibilitatea personalizării hărților cu propriul conținut și imagini pentru afișarea pe pagini web și dispozitive mobile. API-ul JavaScript Maps oferă patru tipuri de hărți de bază (roadmap, satellite, hybrid, and terrain) pe care le putem modifica folosind straturi și stiluri, controale și evenimente și diverse servicii și biblioteci.

  **Tehnologii folosite:**
  
- Sistemul informatic prezentat implementează interfața cu utilizatorul cu ajutorul unei biblioteci populare JavaScript open-source, denumită React. React oferă posibilitatea creării de aplicații web complexe, de tipul Single Page Application, ce permit transferul de date de la și către server, fără necesitatea reîncărcării pagini. Principalele avantaje pe care această tehnologie le are sunt rapiditatea, scalabilitatea și simplitatea. Abordarea bazată pe componente, ciclul de viață bine definit și posibilitatea utilizării de cod JavaScript de bază fac ca React să fie simplu de învățat și ușor de gestionat.
Pentru a accesa și manipula date în aplicația React am folosit servicii de tip Web RESTful API.
- REST (Representational state transfer) reprezintă un stil arhitectural software ce definește un ansamblu de reguli ce ajută la realizarea legăturii dintre client și server. Accesarea datelor dintr-un API, reprezintă accsarea punctelor finale specifice API-ului respectiv. Cu alte cuvinte, se poate spune că un API este un acord contractual între două servicii cu privire la forma cererii și cea răspunsului, codul fiind un produs secundar.
- Pentru a prelua date din API-uri externe, astfel încat acestea să poată fi afișate în paginile web, am folosit biblioteca Axios. Aceasta este concepută pentru a gestiona asincron solicitările HTTP și răspunsurile acestora, reprezentând o alternativă mai nouă pentru Fetch, care vine și cu o serie de avantaje, printre care timpul de răspuns mai rapid, posibilitatea anulării cererilor și tratarea eficientă a erorilor. Formatul specific în care datele vor fi returnate printr-un Promise este JSON.

- Pentru implementarea părții de server, am folosit un mediu de rulare Javascript de tip open source, Node.js și o bibliotecă cunoscută al acestuia, Express.js. Node.js se remarcă prin modul de funcționare, acela în care se permite comunicarea și schimbul de date liber între client și server. Mecanismul fundamental al Node este ciclul de evenimente, acesta funcționează pe un singur fir și utilizează Intrări/Ieșiri non-blocante. O mare parte dintre aceste avantaje sunt realizate cu ajutorul managerului de pachete, NPM (Node Package Manager), ce conține pachete sau module necesare în implementarea soluțiilor software JavaScript.
- Cloud SQL este un serviciu de baze de date complet gestionat care ajută la configurea, gestionarea și administrarea bazelor de date relaționale pe Google Cloud Platform. Cloud SQL permite crearea si ștergerea bazelor de date și utilizatori de baze de date, dar nu este un instrument de administrare a bazei de date. Ca instrument de gesiune a bazei de date am folosit MySQL Workbench.
- Heroku este o platforma de tip PAAS, ce permite dezvoltatorilor sa investeasca in aplicatii si mai putin in partea de operations. Heroku se ocupa de patch-uri si actualizari, securitate si sisteme dedicate construirii, in cazul esecurilor. Pentru fiecare aplicatie se creeaza o masina virtuala, care se reface de la 0 atunci cand se creeaza un nou build. Aceasta ofera statistici, log-uri cu erori si multe alte plugin-uri, totul pentru a face mai usoara publicarea aplicatiilor programatorilor.

**4.	Flux de date**

•	Request / response pentru afișarea tuturor terenurilor de tenis din cadrul bazei de date:

![image](https://user-images.githubusercontent.com/70439606/168487714-756e5aea-af6c-4291-8399-6677f89447be.png)

•	 Request / response pentru afișarea unui anumit teren de tenis din cadrul bazei de date:

![image](https://user-images.githubusercontent.com/70439606/168487723-a5adf5c0-458b-469b-bf88-35ee2c4c5fe5.png)
 
•	Request / response pentru afișarea rezervarilor de pe un teren/baza sportiva din cadrul bazei de date:

![image](https://user-images.githubusercontent.com/70439606/168487730-366143ba-5ea6-4b69-9947-cc0ae57eb09a.png)

•	Request / response pentru adaugarea unei rezervari a unui teren de tenis in bazei de date:

![image](https://user-images.githubusercontent.com/70439606/168487738-7438b3da-6564-4d7c-8bb5-78cc97979cf8.png)


**Metode HTTP**
-	GET pentru returnarea tuturor terenurilor de tenis din cadrul bazei de date;
-	GET pentru returnarea unui teren dupa id-ul acestuia 
-	GET pentru returnarea tuturor rezervarilor terenurilor de tenis din cadrul bazei de date
-	POST pentru adaugarea unei noi rezervari pe un anumit teren
-	GET pentru returnarea rezervarilor de pe un anumit teren

**Autorizarea serviciilor utilizate**
- API JavaScript Maps: Accesul către acest API a fost realizat prin intermediul unui apiKey furnizat de către Google.



5.	Capturi ecran aplicatie

- Pagina principala – Utilizatorii pot vizualiza terenurile de tenis ce pot fi rezervate, impreuna cu locatia acestora, cu ajutorul Google Maps.

![image](https://user-images.githubusercontent.com/70439606/168487802-26d3344d-a716-4564-8bf2-48a7dce050fe.png)

- La apasarea butonului “Rezerva teren”, se deschide o fereastra modala pentru completarea datelor rezervarii. 

![image](https://user-images.githubusercontent.com/70439606/168487806-41b395fe-2b57-402f-9f22-50eb1898bba9.png)

- La salvarea programarii, datele introduse de utilizator sunt validate.

![image](https://user-images.githubusercontent.com/70439606/168487813-3138e0a8-f507-4ede-8231-2744641a84d9.png)

![image](https://user-images.githubusercontent.com/70439606/168487818-3ba4ca81-34f8-48a4-8d21-f6dbc81d7f9c.png)

- Daca datele introduse sunt corecte si exista disponibilitate la ora selectata, rezervarea se realizeaza cu success.
 
![image](https://user-images.githubusercontent.com/70439606/168487834-7d291134-056f-4050-827a-b96dff6a289f.png)


6.	Referinte 
- https://developers.google.com/maps/documentation/javascript/overview
- https://reactjs.org/
- https://nodejs.org/en/
- https://expressjs.com/
- https://react-bootstrap.github.io/


