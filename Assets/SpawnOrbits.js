#pragma strict

var orbitPrefab : GameObject;
var orbits : Array; 
var obj : GameObject; 
var pooledAmount : int = 10; // amount of orbits pooled 
var invokeTime : int = 10 ;  // time between invoking spawnOrbit() 
var spawnWait : float = 0.001; // time/distance between each individual orbit 
var timeToPassCam : int = 3; // time before destryoing first orbit  

function Start () {
	// Pooling for optimiziation 
	orbits = new Array();
	var obj : GameObject; 
	for(var i = 0; i < pooledAmount; i++){
		obj = Instantiate(orbitPrefab); 
		obj.SetActive(false); 
		orbits.Add(obj.gameObject);
	} 
	Debug.Log(pooledAmount);
	// InvokeRepeating generates pooledAmount of orbits 
	InvokeRepeating("test", 0 ,invokeTime); 
	InvokeRepeating("destroyOrbits", 7, timeToPassCam); 
	
}


function test(){
	spawnOrbit();
}
//function test2(){
//	destroyOrbits();
//}

function spawnOrbit(){
	for (var i = 0; i < orbits.Count; i++){
		obj = orbits[i];  
		if (obj == null) return; 
 		if (!obj.activeInHierarchy){
			obj.SetActive(true); 
		} 
		yield WaitForSeconds(spawnWait);
	}
	
}


function destroyOrbits(){
	for (var i = 0; i < orbits.Count; i++){
		Debug.Log("DESTROYING ORBITS" + i);
		obj = orbits[i];
		if (obj == null) return; 
		if (obj.activeInHierarchy){
			obj.SetActive(false);
		}
	}	
}
	

