const Scene = require('Scene');
const Patches = require('Patches');

Promise.all([
    Scene.root.findFirst('scorenum'),
]).then(function (results) {
    
    const theText = results[0];

    // Get the output from the 'PatchValue' created in the To Script bridge and updated in the Patch Editor.
    Patches.outputs.getScalar('number').then(patchValue => {

        // assign the .text property of 'theText' to the patchValue. 
        // convert the patchValue scalar signal to a string using the .toString() method.
        theText.text = patchValue.toString();

    });

});