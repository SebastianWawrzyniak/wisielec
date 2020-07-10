/*ZMIENNE globalne*/
var plansza1 = document.getElementById('plansza');
var alfabet1 = document.getElementById('alfabet');
var szubienica1 = document.getElementById('szubienica');

var hasla = [
	'Nie ma dymu',
	'Są dymy',
	'Twoja mama',
	'Ziemniak w Galarecie',
'lekkoatletyka',
'interpunkcja',
'telekomunikacja',
'metamorfoza',
 'zwierzchnictwo',
'prześladowanie',
'antyterrorysta',
 'dźwiękonaśladownictwo',
'antykoncepcja',
'kolorowanka',
'konstantynopolitański',
'lumpenproletariat',
'luminescencja',
'magnetoelektryczny',
'malkontenctwo',
'primaaprilisowy',
'pięćdziesięciogroszówka',
'anatomopatologiczny',
'deoksyrybonukleinowy'
]
 
  /* var categories = [
        ["everton", "liverpool", "swansea", "chelsea", "hull", "manchester-city", "newcastle-united"],
        ["alien", "dirty-harry", "gladiator", "finding-nemo", "jaws"],
        ["manchester", "milan", "madrid", "amsterdam", "prague"]
    ];

document.getElementById('button-przyslowia').addEventListener('click', elo());

function elo() {
  var i = Math.floor(Math.random() * 7);
  szubienica1.innerHTML = categories[0][i];
}
*/
var haslo = hasla[Math.floor(Math.random() * hasla.length)];




haslo = haslo.toUpperCase();

var ile_skuch = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

var haslo1 = "";

function jeden_gracz()
{
	alfabet1.innerHTML = '<span class="reset" onclick="start()">JEDEN GRACZ</span><br><br>';
}

function dwoch_graczy()
{
	alfabet1.innerHTML += '<span class="reset" onclick="start2()">DWÓCH GRACZY</span>';
}


function newGame(){
	plansza1.innerHTML = "WISIELEC";	
	//document.getElementById("button-przyslowia").style.display = "block";
	jeden_gracz();
	dwoch_graczy();
	
	szubienica.innerHTML = '<img src="img/s9.jpg" alt="" />';


}

//document.getElementById("button-przyslowia").addEventListener('click', start2);

function wypisz_haslo()
{
	plansza1.innerHTML = haslo1;
}

window.onload = newGame;

var litery = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŹŻ";

function reset()
{
	haslo = hasla[Math.floor(Math.random() * hasla.length)];
	haslo = haslo.toUpperCase();
	haslo1 = "";
	ile_skuch = 0;

	start();

}

function reset2()
{
	haslo = haslo.toUpperCase();
	haslo1 = "";
	ile_skuch = 0;

	start2();

}

function start()
{

	for (i=0; i<haslo.length; i++)
{
	if (haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
	else haslo1 = haslo1 + "_";
}
	szubienica.innerHTML = '<img src="img/s0.jpg" alt="" />';
	var tresc_diva ="";
	
	for (i=0; i<litery.length; i++)
	{
		var element = "lit" + i;
		tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';
		if ((i+1) % 7 ==0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
	}
	
	document.getElementById("alfabet").innerHTML = tresc_diva;
	
	
	wypisz_haslo();
}

function start2()
{
	
	haslo = window.prompt("Podaj hasło");
	//haslo1 = "";
	haslo = haslo.toUpperCase();
	start();
}

String.prototype.ustawZnak = function(miejsce, znak)
{
	if (miejsce > this.length - 1) return this.toString();
	else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}


function sprawdz(nr)
{
	
	var trafiona = false;
	
	for(i=0; i<haslo.length; i++)
	{
		if (haslo.charAt(i) == litery[nr]) 
		{
			haslo1 = haslo1.ustawZnak(i,litery[nr]);
			trafiona = true;
		}
	}
	
	if(trafiona == true)
	{
		yes.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00C000";
		document.getElementById(element).style.border = "3px solid #00C000";
		document.getElementById(element).style.cursor = "default";
		
		wypisz_haslo();
	}
	else
	{
		no.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#C00000";
		document.getElementById(element).style.border = "3px solid #C00000";
		document.getElementById(element).style.cursor = "default";	
		document.getElementById(element).setAttribute("onclick",";");		
		
		//skucha
		ile_skuch++;
		var obraz = "img/s"+ ile_skuch + ".jpg";
		document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" alt="" />';
	}
	
	function jeden()
	{
			//wygrana
	if (jeden_gracz && haslo == haslo1)
	document.getElementById("alfabet").innerHTML  = "Tak jest! Podano prawidłowe hasło: "+haslo+'<br /><br /><span class="reset" onclick="reset()">JESZCZE RAZ?</span> <br><br> <span class="reset" onclick="location.reload()">WYJDŹ DO MENU</span>';
	else if (jeden_gracz && ile_skuch>=9)
	document.getElementById("alfabet").innerHTML  = "Przegrana! Prawidłowe hasło: "+haslo+'<br /><br /><span class="reset" onclick="reset()">JESZCZE RAZ?</span> <br><br> <span class="reset" onclick="location.reload()">WYJDŹ DO MENU</span>';
	
}

	
function dwa()
{
		//przegrana
	if (dwoch_graczy && haslo == haslo1)
	document.getElementById("alfabet").innerHTML  = "Tak jest! Podano prawidłowe hasło: "+haslo+'<br /><br /><span class="reset" onclick="reset2()">JESZCZE RAZ?</span> <br><br> <span class="reset" onclick="location.reload()">WYJDŹ DO MENU</span>';
	
	else if (dwoch_graczy && ile_skuch>=9)
	document.getElementById("alfabet").innerHTML  = "Przegrana! Prawidłowe hasło: "+haslo+'<br /><br /><span class="reset" onclick="reset2()">JESZCZE RAZ?</span> <br><br> <span class="reset" onclick="location.reload()">WYJDŹ DO MENU</span>';
}
if(start2)
dwa();

else if(start)
jeden();

}
