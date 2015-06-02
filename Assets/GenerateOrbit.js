#pragma strict
 
 var particleCount : int = 4000;
 var myParticleSystem : ParticleSystem; 
 var myParticles: ParticleSystem.Particle[];
 
var x : float;
var y : float;
var prevPos : Vector3;
var x_abs : float;
var d : float; 
        
     
  
 
 function Start ()
 {
	GenerateOrbit();   
    	 
 }

 function GenerateOrbit(){
 
  	 // Figure out which range is best for BIG fractals  
     var a : int = Random.Range(-1,5);
     var b : int = Random.Range(-11,2);
 	 var c : int = Random.Range(-10,20);
	
 
     
     myParticleSystem = GetComponent(ParticleSystem);
     myParticleSystem.startColor = new Color32(Mathf.Round(Random.Range(0,255)),Mathf.Round(Random.Range(0,255)),Mathf.Round(Random.Range(0,255)),255);
     myParticleSystem.Emit(particleCount);
     
     myParticles = new ParticleSystem.Particle[particleCount + 1];
     myParticleSystem.GetParticles(myParticles);
     

     for (var i = 0; i < particleCount; i++)
     {
         // Get previous particle position
         prevPos = (i < 1) ? new Vector3(Random.Range(-5,10), Random.Range(-5,10)) : myParticles[i - 1].position; // Perhaps Random.value isn't the best option here? 
         
         x = prevPos.x;
         y = prevPos.y;
         
         // For the sake of optimizing by not using Mathf.sqrt & Mathf.abs
         
         x_abs = (x > 0 ? x : -x);
         var d : float;
         d = (b * x + c) > 0 ? (b * x + c) : -(b * x + c);
         d = Mathf.Pow(d,0.5); 
           
         var x1 = y - x / x_abs * d; //var x1 = y - x / Mathf.Abs(x) * Mathf.Sqrt(Mathf.Abs(b * x + c));
         var y1 = a - x;
         
         var newPosition = new Vector3(x1, y1, 0);
         
         myParticles[i].position = newPosition;
         myParticleSystem.SetParticles(myParticles, particleCount);
     }
     
    yield WaitForSeconds(5);
	myParticleSystem.Clear();
 }
 
 
 function differentiate(){
 
 }
 
 

 

 
 