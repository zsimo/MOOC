console.log("================================");
console.log("ITERATORS and OBSERVER");
console.log("");

// Events and Arrays are both COLLECTIONS

// ITERATORS:
// - producer
// - consumer pull the values one item at the time
// fino a quando:
// 	- il producer ha ancora valori
//  - il producer lancia un eccezione
// il **consumer** ha il controllo 
if (hasNext()) {
	// do something
}

// OBSERVERS:
// - producer push the values one item at the time
// - consumer
// il **producer** ha il controllo, fa scattare l'evento


// l'unica **differenza** tra ITERATORS e OBSERVERS è chi
// ha il controllo
// sono simmetrici