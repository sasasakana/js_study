$(function(){

 var suuji = 2;
 var suuji2 = 3;
 //console.log(keisan(suuji,suuji2));
 
 function keisan(suuji,suuji2){
	  var kekka = suuji * suuji2;
	  if (kekka >= 10){
		  console.log('2桁です')
	  }
	  return kekka;
	  
 }
 
 function keisan2(s1,s2){
	 console.log(s1, s2);
	 var kekka = s1 % s2;
	 console.log(kekka);
	 if (kekka == 0){
		console.log('割り切れました'); 
	 }else{
		console.log('割り切れませんでした') 
	 }
 }
 
for(i=1; i < 10; i++){
	keisan2(i, 2);
}
	
	
	
});