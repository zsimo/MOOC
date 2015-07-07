

// Our image loading code USED to be:
//
// var img = new Image();
// img.onLoad = function(){...}
// img.src = “asdf.png”
//
// Use the provided gCachedAssets cache below to first
// check if the image has already been loaded.
// If it has not been loaded yet, go ahead and load it,
// then add the asset to the cache, adding a new
// dictionary entry in gCachedAssets of
//
// {assetName: assetObject}
//
// In this case, the assetName would be the name of
// the image file, and the assetObject would be the
// Image object you've created.
//
// If the image is already in the cache, then call
// the provided callbackFcn.

var gCachedAssets = {};

function loadAsset(assetName, callbackFcn) {
	// TASK #1
	// Check if the given assetName exists in the cache
	// gCachedAssets. If it doesn't, use the code below
	// to load the new image.
    if (!gCachedAssets.hasOwnProperty(assetName)) {
        var img = new Image();
        img.onload = function () {
            callbackFcn(img);
        };
        img.src = assetName;
        // TASK #2
        // Add the new asset to the cache. Remember, each
        // entry in the cache should be of the form:
        //
        // {assetName: assetObject}
        gCachedAssets[assetName] = img;
    }
    else {
		// TASK #3
		// If assetName already exists in the cache, that
		// means the asset has already been loaded. In this
		// case, just call callbackFcn on the cached Image
		// object.
        callbackFcn(gCachedAssets[assetName]);
    }
}

