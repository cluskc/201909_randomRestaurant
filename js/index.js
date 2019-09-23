var shopList = ["daiei","familyMart","mcdonalds","sevenEleven"];


function randamPage(){
	var shop = shopList[Math.floor(Math.random() * shopList.length)];
	window.location.href="pages/" + shop + ".html";
}

function nextPage(){
	var shop = shopList[Math.floor(Math.random() * shopList.length)];
	window.location.href="../pages/" + shop + ".html";
}
function homePage(){
	window.location.href="../index.html";
}