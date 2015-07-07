

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

function loadAsset(assetList, callbackFcn) {
	// TASK #1
	// Check if the given assetName exists in the cache
	// gCachedAssets. If it doesn't, use the code below
	// to load the new image.

	var loadBatch = {
		count: 0,
		total: assetList.count,
		cb: callbackFcn
	};

	for (var i = 0; i < assetList.length; i ++) {
	    if (!gCachedAssets.hasOwnProperty(assetName)) {
	        var img = new Image();
	        img.onload = function () {
	            callbackFcn(img);
	        };
	        img.src = assetName;

	        gCachedAssets[assetName] = img;
	    }
	    else {

        	callbackFcn(gCachedAssets[assetName]);
    	}
    }
}

