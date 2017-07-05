var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops ';
var big= dinosaur .toUpperCase();
var change =  text.replace('Velociraptor ' , big);
console.log(change.substring(0,change.length / 2));