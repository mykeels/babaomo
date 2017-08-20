Array.prototype.paginate = function (length) {
    var arr = this;
    length = (length || 1);
    return arr.reduce(function (a, b) {
        if (!a[a.length - 1] || a[a.length - 1].length == length) a.push([]);
        a[a.length - 1].push(b);
        return a;
    }, []);
}

Array.prototype.flatten = function () {
    var arr = this;
    return arr.reduce(function (a, b) {
        return a.concat(b);
    }, []);
}

Array.prototype.distinct = function (fn) {
    fn = fn || function (a) { return a; }
    var arr = this;
    return arr.reduce(function (a, b) {
        return a.indexOf(fn(b)) < 0 ? a.concat(b) : a;
    }, []);
}

if (!Array.prototype.find) {
    Array.prototype.find = function (fn) {
        fn = fn || function (a) { return a; }
        var arr = this;
        for (var i = 0; i < arr.length; i++) {
            if (fn(arr[i])) return arr[i];
        }
        return null;
    }
}

if (!Array.prototype.findIndex) {
    Array.prototype.findIndex = function (fn) {
        fn = fn || function (a) { return a; }
        var arr = this;
        for (var i = 0; i < arr.length; i++) {
            if (fn(arr[i])) return i;
        }
        return -1;
    }
}

Array.prototype.count = function (fn) {
    var arr = this;
    fn = fn || function (a) { return a; }
    return arr.filter(fn).length;
}