var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var change = text.replace('Velociraptor', dinosaur.toUpperCase());
console.log(change.substring(0, change.length / 2));
