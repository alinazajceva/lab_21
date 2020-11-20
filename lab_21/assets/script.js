function hello(){
    var id;
    id=window.open("", "example", "width=400, height=150")
    id.focus(); id.document.open();
    id.document.write("<h1><form color='oliver' face='Lucida Console' size='5'> Потому что это единственная длинная цитата под постами Даши в ИнСтАгРаМе </form></h1>");
    id.document.write("<input type='button' value='Закрыть окно'onclick='window.close();'> </form>");
    
    id.document.close();
}

window.onload = function(){
 window.setInterval(function(){
      var now = new Date();
       var clock = document.getElementById("clock");
     clock.innerHTML = now.toLocaleTimeString();
 }, 5000);
};