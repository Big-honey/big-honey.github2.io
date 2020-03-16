

var afurl = "https://www.google.com/";

function goto(){
    PreventExitPop = false;
    location.href = afurl;
}




function spinnerAction(){
	var spinWin = document.getElementById("spin")
    
	var c = alert("************************************************\n\n Bem-vindo à roda da fortuna. Gire e ganhe prêmios exclusivos!\n\n Clique em OK para começar a jogar!************************************************");
    if (c == true) {
		
    } 
    else {
		spinWin.className = spinWin.className + "spinAround"; 
		
		setTimeout(function(){
			alert("\n \n Ganhou 1xtra rodadas grátis!\n\n");
			spinWin.className = spinWin.className + " spinAround2"; 
		},6500);
		
		setTimeout(function(){
			spinWin.className = spinWin.className + " Op";
		},12600);
		
		setTimeout(function(){
			prize.style.display = "block";
		},12800);
		
		setTimeout(function(){
			var r = alert("************************************************\n\nO seu Samsung Galaxy S20 está reservado! \n\n Para solicitar seu preço, verifique seu número de telefone na próxima página!\n\n************************************************\n\n");
			if (r == true){	

			} 
			else {
				window.location.href = afurl
			}
		
		},14800);
	}
	
}





