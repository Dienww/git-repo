var array = [1,2,3,4,5];
//实现
//添加原型
Array.prototype.myMap = function (callback) {
    if (typeof callback !== 'function'){
        throw new TypeError(callback + 'is not a function');
    }
    var res = [];
    for(var i=0;i<this.length;i++){
        res.push(this[i],i,this);
    }
    console.log(res)
    callback(res);
};
// array.myMap (function (value) {
//     console.log(value*2);
// });
