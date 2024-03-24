// Write your solution here!

const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat (){
    cats.push ('Ralph');
    return cats;
}


    cats.length =0;

    cats.push('Milo', "Otis", "Garfield");


function destructivelyPrependCat (){
    cats.unshift ("Bob");
    return cats;

}
    cats.length =0;

    cats.push('Milo', "Otis", "Garfield");

function destructivelyRemoveLastCat (){
    cats.pop();
    return cats;
}    

    cats.length =0;

    cats.push('Milo', "Otis", "Garfield");

function destructivelyRemoveFirstCat (){
    cats.shift ();
    return cats;
}

    cats.length =0;

    cats.push('Milo', "Otis", "Garfield");

function appendCat (name = 'Broom'){
    let newArray = [...cats, name];
    return newArray;
}

    cats.length =0;

    cats.push('Milo', "Otis", "Garfield");

function prependCat (name = 'Arnold'){
    let newCats = [name, ...cats];
    return newCats;

}

    cats.length =0;

    cats.push('Milo', "Otis", "Garfield");

function removeLastCat (){
    let kaats = cats.slice (0, cats.length - 1);
    return kaats;
}

    cats.length =0;

    cats.push('Milo', "Otis", "Garfield");

function removeFirstCat (){
    const caaats = cats.slice (1);
    return caaats;
}