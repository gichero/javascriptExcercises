var createThumbnails = require('./thumbnails');

createThumbnails('./images', function(err){
    if(err) {
        console.log(err.message);
    }
    console.log('it worked');
});
