// AMD 模块的写法，需要按照该写法好了后，才能使用require加载
define([],
    function () {
        var add = function (x, y) {
            console.log(x,y);
            return x + y;
        };

        function showTxt(review) {
            console.log("begin showTxt");
            console.log(review);
        };

        return {
            add: add,
            showTxt: showTxt
        };
    })