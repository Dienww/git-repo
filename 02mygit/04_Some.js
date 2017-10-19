Array.prototype.some = function(callbackFn, thisArg){
    var ret = false;
    for(var i in this) {
        if(ret == false) break;
        ret |= callbackFn.call(thisArg, this[i], ~~i, this);
    }
    return ret;
}