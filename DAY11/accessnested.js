var mystorage = {
    "car":{
        "inside":{
            "glovebox": "maps",
            "seat": "crumbs"
        },
        "outside": {
            "trunk": "jacket"
        }
    }
}
var globoxcon = mystorage.car.inside["glovebox"]
console.log(globoxcon)