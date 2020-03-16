$ (function(){
    let mydate = new Date,

    hours = mydate.getHours(),
    minutes = mydate.getMinutes(), 

    year = mydate.getFullYear(), 
    month = mydate.getMonth(), 
    day = mydate.getDate(), 
    weekday = mydate.getDay(), 
    montharray = new Array("de Janeiro", "de Fevereiro", "de Março", "de Abril", "de Maio", "de Junho","de Julho", "de Augustus", "de Setembro", "de Outubro", "de Novembro", "de Dezembro"), 
    weekdayarray = new Array("Todos os Domingos", "Todas as Segundas-feiras", "Todas as Terças-feiras","Toda Quarta-feira", "Todas as Quintas-feiras", "Toda Sexta-feira", "Todos os Sábados"), 

    currentTime = $("#time");
     if ( minutes < 10 ? "0" + minutes : minutes); 
    currentTime.text(hours + ":" + minutes);
    date1 = $("#date1");
    date1.text("" + day + " " + montharray[month] + "");
    date2 = $("#date2");
    date2.text("" + (day - 1) + " " + montharray[month] + "");
    date3 = $("#date3");
    date3.text("" + (day - 2) + " " + montharray[month] + "");  
    date4 = $("#date4");
    date4.text("" + (day - 2) + " " + montharray[month] + "");  
    date5 = $("#date5");
    date5.text("" + (day - 2) + " " + montharray[month] + "");
    date6 = $("#date6");
    date6.text("" + (day - 2) + " " + montharray[month] + ""); 
    date7 = $("#date7");
    date7.text("" + (day - 2) + " " + montharray[month] + "");
    date8 = $("#date8");
    date8.text("" + (day - 3) + " " + montharray[month] + "");
    date9 = $("#date9");
    date9.text("" + (day - 4) + " " + montharray[month] + "");

});