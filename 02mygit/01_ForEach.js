var array = [1,2,3,4,5];
//实现
//添加原型
Array.prototype.myForeach = function (callback,thisArg) {
    if (typeof callback !== 'function'){
        throw new TypeError(callback + 'is not a function');
    }
    for (var i=0;i<this.length;i++){
        //判断数组元素是否有意义 比如arr[1]被删除，则arr[1]不打印
        if (Object.prototype.hasOwnProperty.call(this,i)){
            callback(this[i],i,this);
        }
    }
};
array.myForeach (function (value,index) {
    console.log(value,index);
});