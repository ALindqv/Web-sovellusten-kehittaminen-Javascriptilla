targetDiv = document.querySelector('#jsondata');

nameBtn = document.querySelector('#names');
allBtn = document.querySelector('#all');

var data = { employees : [ +
			{ firstName:"John" , lastName:"Doe" }, +
			{ firstName:"Anna" , lastName:"Smith" }, +
			{ firstName:"Peter" , lastName:"Jones" } ]};


nameBtn.addEventListener('click', () => {
	for (let i = 0; i < data.length; i++) {
		let tyontekijat = data[i].employees;
		for (let j = 0; j < tyontekijat.length; j++) {
			targetDiv.innerHTML = `First name: ${tyontekijat[j].firstName}<br>Last Name: ${tyontekijat[j].lastName}`
		}
	}
})

const harjoitus2 = () => {
	let jsonData = new XMLHttpRequest();
	jsonData.open('GET', 'http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750', true);

	
}