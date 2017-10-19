Array.prototype.reduce = function(callbackFn, initialValue){
    for(var i in this) callbackFn(initialValue, this[i], i, this);
    return initialValue;
}