/*jshint esversion: 6*/
const oReq = new XMLHttpRequest();


oReq.addEventListener('load', reqPerson);
oReq.open('GET', 'http://swapi.co/api/people/4/');
oReq.send();

function reqPerson() {
	const requestData = JSON.parse(this.responseText);
	const name = requestData.name;
	const personName = document.querySelector('#person4Name');
	personName.innerHTML = 'I am ' + name;
}

const aReq = new XMLHttpRequest();


aReq.addEventListener('load', reqWorld);
aReq.open('GET', 'http://swapi.co/api/planets/1/');
aReq.send();


function reqWorld() {
	const requestData = JSON.parse(this.responseText);
	const world = requestData.name;
	const personWorld = document.querySelector('#person4HomeWorld');
	personWorld.innerHTML = 'I herald from the world of ' + world;
}





const pReq = new XMLHttpRequest();


pReq.addEventListener('load', reqPerson1);
pReq.open('GET', 'http://swapi.co/api/people/14/');
pReq.send();

function reqPerson1() {
	const requestData = JSON.parse(this.responseText);
	const name = requestData.name;
	const personName = document.querySelector('#person14Name');
	personName.innerHTML = 'I am ' + name;
}

const bReq = new XMLHttpRequest();


bReq.addEventListener('load', reqWorld1);
bReq.open('GET', 'http://swapi.co/api/species/1/');
bReq.send();


function reqWorld1() {
	const requestData = JSON.parse(this.responseText);
	const species = requestData.name;
	const personSpecies = document.querySelector('#person14Species');
	personSpecies.innerHTML = 'I am proud to be a ' + species;
}