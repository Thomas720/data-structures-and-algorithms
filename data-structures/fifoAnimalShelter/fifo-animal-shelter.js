'use strict';

class AnimalShelter {
    
    constructor(){
        this.front = null;
        this.rear = null;
    }

enqueue(animal) {

    // Return null if there is no animal in front
    if(!animal) return null;

    //Assign the dog and cat lowerCase 
    animal = animal.toLowerCase();

    //Accept only dog or cat animals.
    if (animal !== 'cat' && animal !== 'dog') return `Can only enqueue 'cat' or 'dog'.`;
    
    //animal object with value and next
    animal = {animal, next: null};

    //Check if the AnimalSchelter is empty
    if(!this.front) {
        this.front = animal;
        this.rear = animal;
        return this.front;
    }

    //Check if the AnimalSchelter is not empty
    //We always Add new value from the rear or back side
    if(this.front) {
        this.rear.next = animal;
        this.rear = animal;
        return this.front;
    }
}

dequeue(pref) {
    //if there is no pref return FIFO animal
    if(!pref) {
        let adopted = this.front;
        this.front = this.front.next;
        return adopted.animal;
    }

    pref = pref.toLowerCase();
    if (pref !== 'cat' && pref !== 'dog') return null;

    if(pref === this.front.animal) {
        let adopted = this.front.next;
        return adopted.animal
    }

    let current = this.front;
    while (current.next && current.next.animal !== pref) {
      current.animal; //?
      current = current.next;
    }
    if (!current.next) return `No ${pref}s in the shelter`;
    let adopted = current.next;
    current.next = adopted.next;
    return adopted.animal;

}
}

module.exports = AnimalShelter;