// Zmienne---------------------------------------------------------------

var magia = 0;
var bust = 0;
var plus = 1;
var cena1 = 20;
var cena2 = 30;
var cena3 = 200;
var cena4 = 350;
var cena5 = 600;
var cena6 = 1200;
var cena7 = 250;
var cena8 = 1000;
var cena9 = 10000;
var cena10 = 10500;
var cena11 = 20000;
var cena12 = 50000;
var ilosc1 = 0;

// Klikanie-------------------------------------------------------------

function absorbuj(){
	magia = magia + plus;
	mana.innerHTML = magia;
};

setInterval(() => {
    magia = magia + bust;
    mana.innerHTML = magia;
}, 1000);

// Bust 1 --------------------------------------------------------------

function magiczna_rekawica(){
	if (magia > cena1 && ilosc1 < 10) 
	{
	bust = bust + 1;
	magia = magia - cena1;
	cena1 = cena1 + 10;
	ilosc1 = ilosc1 + 1;

	const el1 = document.createElement("img");
	el1.classList.add("element");
	el1.setAttribute("src", "./rekawica.png");
	el1.setAttribute("class", "rekawica");

	const div = document.querySelector(".rekawiczki");
	div.appendChild(el1);
	}
	else if (ilosc1 = 10) {
		cena1 = "maks";
	}
    else if (magia < cena1)
    console.log("nie stać cię")
};

setInterval(() => {
    c1.innerHTML = cena1; 
}, 1000);

// Bust 2 --------------------------------------------------------------

function rozdzka(){
	if (magia > cena2) 
	{
	plus = plus + 1;
	magia = magia - cena2;
	cena2 = cena2 + 15;

	const el2 = document.createElement("img");
	el2.classList.add("element");
	el2.setAttribute("src", "./wand.gif");
	el2.setAttribute("class", "wand");

	const div = document.querySelector(".wands");
	div.appendChild(el2);
}
    else (magia < cena1)
    console.log("nie stać cię")
};

setInterval(() => {
    c2.innerHTML = cena2; 
}, 1000);

// Bust 3 ----------------------------------------------------------------

function zaklecie(){
	if (magia > cena3) 
	{
	bust = bust + 10;
	magia = magia - cena3;
	cena3 = cena3 + 100;

	const el3 = document.createElement("img");
	el3.classList.add("element");
	el3.setAttribute("src", "./wand.gif");
	el3.setAttribute("class", "wand");

	const div = document.querySelector(".wands");
	div.appendChild(el3);
}
    else (magia < cena3)
    console.log("nie stać cię")
};

setInterval(() => {
    c3.innerHTML = cena3; 
}, 1000);

// Bust 4 ----------------------------------------------------------------

function magiczna_kula(){
	if (magia > cena4) 
	{
	bust = bust + 25;
	magia = magia - cena4;
	cena4 = cena4 + 175;

	const el4 = document.createElement("img");
	el4.classList.add("element");
	el4.setAttribute("src", "./wand.gif");
	el4.setAttribute("class", "wand");

	const div = document.querySelector(".wands");
	div.appendChild(el4);
}
    else (magia < cena4)
    console.log("nie stać cię")
};

setInterval(() => {
    c4.innerHTML = cena4; 
}, 1000);

// Bust 5 ----------------------------------------------------------------

function runa_przyplywu(){
	if (magia > cena5) 
	{
	bust = bust + 50;
	magia = magia - cena5;
	cena4 = cena4 + 300;

	const el5 = document.createElement("img");
	el5.classList.add("element");
	el5.setAttribute("src", "./wand.gif");
	el5.setAttribute("class", "wand");

	const div = document.querySelector(".wands");
	div.appendChild(el5);
}
    else (magia < cena5)
    console.log("nie stać cię")
};

setInterval(() => {
    c5.innerHTML = cena5; 
}, 1000);

// Bust 6 ----------------------------------------------------------------

function uczen_czarnoksieznika(){
		if (magia > cena6) {
		bust = bust + 100;
		magia = magia - cena6;
		cena6 = cena6 + 600;

		const el6 = document.createElement("img");
		el6.classList.add("element");
		el6.setAttribute("src", "./wand.gif");
		el6.setAttribute("class", "wand");

		const div = document.querySelector(".wands");
		div.appendChild(el6);
	}
    else (magia < cena6)
    	console.log("nie stać cię")
};

setInterval(() => {
    c6.innerHTML = cena6; 
}, 1000);

// Bust 7 ----------------------------------------------------------------

function krysztalowa_czaszka(){
	if (magia > cena7) {
		plus = plus + 10;
		magia = magia - cena7;
		cena7 = cena7 + 125;
		
		const el7 = document.createElement("img");
		el7.classList.add("element");
		el7.setAttribute("src", "./wand.gif");
		el7.setAttribute("class", "wand");

		const div = document.querySelector(".wands");
		div.appendChild(el7);
	}
    else (magia < cena7)
    console.log("nie stać cię")
};

setInterval(() => {
    c7.innerHTML = cena7; 
}, 1000);

// Bust 8 ----------------------------------------------------------------

function adept_magii(){
	if (magia > cena8) 
	{
	plus = plus + 25;
	magia = magia - cena8;
	cena8 = cena8 + 175;

	const el8 = document.createElement("img");
	el8.classList.add("element");
	el8.setAttribute("src", "./wand.gif");
	el8.setAttribute("class", "wand");

	const div = document.querySelector(".wands");
	div.appendChild(el8);
}
    else (magia < cena8)
    console.log("nie stać cię")
};

setInterval(() => {
    c8.innerHTML = cena8; 
}, 1000);

// Bust 9 ----------------------------------------------------------------

function mana_potion(){
	if (magia > cena9) 
	{
	plus = plus + 100;
	magia = magia - cena9;
	cena9 = cena9 + 500;

	const el9 = document.createElement("img");
	el9.classList.add("element");
	el9.setAttribute("src", "./wand.gif");
	el9.setAttribute("class", "wand");

	const div = document.querySelector(".wands");
	div.appendChild(el9);
}
    else (magia < cena9)
    console.log("nie stać cię")
};

setInterval(() => {
    c9.innerHTML = cena9; 
}, 1000);

// Bust 10 ----------------------------------------------------------------

function wyzszy_mag(){
	if (magia > cena10) 
	{
	bust = bust + 150;
	magia = magia - cena10;
	cena10 = cena10 + 550;

	const el10 = document.createElement("img");
	el10.classList.add("element");
	el10.setAttribute("src", "./wand.gif");
	el10.setAttribute("class", "wand");

	const div = document.querySelector(".wands");
	div.appendChild(el10);
}
    else (magia < cena10)
    console.log("nie stać cię")
};

setInterval(() => {
    c10.innerHTML = cena10; 
}, 1000);

// Bust 11 ----------------------------------------------------------------

function kokaina(){
	if (magia > cena11) 
	{
	bust = bust + 200;
	magia = magia - cena11;
	cena11 = cena11 + 10000;

	const el12 = document.createElement("img");
	el12.classList.add("element");
	el12.setAttribute("src", "./wand.gif");
	el12.setAttribute("class", "wand");

	const div = document.querySelector(".wands");
	div.appendChild(el12);
}
    else (magia < cena11)
    console.log("nie stać cię")
};

setInterval(() => {
    c11.innerHTML = cena11; 
}, 1000);

// Bust 12 ----------------------------------------------------------------

function ksiega_zakazanej_wiedzy(){
	if (magia > cena12) 
	{
	bust = bust + 500;
	magia = magia - cena12;
	cena12 = cena12 + 25000;
}
    else (magia < cena12)
    console.log("nie stać cię")

	const el12 = document.createElement("img");
	el12.classList.add("element");
	el12.setAttribute("src", "./book.gif");
	el12.setAttribute("class", "ksiega");

	const div = document.querySelector(".ksiegi");
	div.appendChild(el12);
};

setInterval(() => {
    c12.innerHTML = cena12; 
}, 1000);