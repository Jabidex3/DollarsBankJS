function red(x){
    var temp ="\u001B[31m"+x+"\u001B[0m";
    return temp;
}

function green(x){
    var temp ="\u001B[32m"+x+"\u001B[0m";
    return temp;
}

function cyan(x){
    var temp ="\u001b[36m"+x+"\u001B[0m";
    return temp;
}

function blue(x){
    var temp ="\u001B[34m"+x+"\u001B[0m";
    return temp;
}
exports.red = red;
exports.green=green;
exports.cyan=cyan;
exports.blue=blue;