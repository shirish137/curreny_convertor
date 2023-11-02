//alert("Hello from js");

function convert(){
	
	//alert("In covert function!!!");
	//create object or references of HTML elements 
	var frm,to,amount;
	frm=document.getElementById('from');
	to=document.getElementById('to');
	amount=document.getElementById('amt');
	res=document.getElementById('result');
	cu=document.getElementById('curr');
	var url='https://v6.exchangerate-api.com/v6/5a3552eb67dc2a6e8f1f48be/latest/'+frm.value;
	//document.write(url);
	fetch(url)
	.then(function(res){
         //document.write(res.json());
		 return res.json();
	}).then(function(data){
		//document.write(data+"<br>");
		//document.write(data['result']+"<br>");
		//document.write(data['base_code']+"<br>");
		var cr=data['conversion_rates'];
		//document.write(cr[to.value]);
		cf=cr[to.value];
		
		var famt=cf*amount.value;
		//document.write("Final AMOUNT:"+famt);
		res.innerHTML=famt;
		cu.innerHTML=to.value;
		
		
	});
	
	
	
}
