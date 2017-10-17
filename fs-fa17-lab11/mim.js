var myModule = require('./mim_module.js'),
    dir = process.argv[2],
    ext = process.argv[3];

myModule(dir, ext, function (err, list){
    if (err) {
        return console.error('Error:', err)
    }
    list.forEach(function(file){
        console.log(file);
    })
})