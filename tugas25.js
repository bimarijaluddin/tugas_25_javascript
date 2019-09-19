function myFunction(){
    var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16 ];
    console.log("Sebelumny : " + angka);

    console.log("Ascending : " + angka.sort());
    console.log("Descending : " + angka.reverse());
    console.log("Filter > 10 : " + angka.filter(function(item){
        return item > 10;
    }))
}

myFunction();