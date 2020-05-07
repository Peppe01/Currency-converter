exports.EuroDoll= function (euro, dollar){
    var EuroToDoll;
    var DollToEuro;

    if (euro >= 1.00 || euro <= 100000 && dollar >= 1.15 || dollar <= 115338){
        EuroToDoll = Math.round((euro * 1.15) / 1.00); 
        DollToEuro = Math.round((dollar * 1.00) / 1.15);
        return json = {EuroToDoll, DollToEuro};
    }
    else{
        return json = "this currency is not valid, try again!";
    }
}
console.log(this.EuroDoll(1000, 1000));

exports.DollYen = function (dollar, yen){
    var DollToYen;
    var YenToDoll;

    if (dollar >= 1.15 || dollar <= 115338 && yen >= 124.83 || yen <= 12059070.05){
        DollToYen = Math.round((dollar * 124.83) / 1.15);
        YenToDoll = Math.round((yen * 1.15) / 124.83);
        return json = {DollToYen, YenToDoll};
    }
    else{
        return json = "this currency is not valid, try again!";
    }
}
console.log (this.DollYen(2000, 2500));

exports.YenGBP = function (yen, GBP){
    var YenToGBP;
    var GBPtoYen;

    if (yen >= 124.83 || yen <= 12059070.05 && GBP >= 0.89 || GBP <= 863841.87){
        YenToGBP = Math.round((yen * 0.89 ) / 124.83);
        GBPtoYen = Math.round((GBP * 124.83) / 0.89);
        return json = {YenToGBP, GBPtoYen};
    }
    else{
        return json = "this currency is not valid, try again!";
    }
}
console.log (this.YenGBP(100000, 150000));

exports.YenEuro = function (yen, euro){
    var YenToEuro;
    var EuroToYen;

    if (yen >= 124.83 || yen <= 12059070.05 && euro >= 1.00 || euro <= 100000){
        YenToEuro = Math.round ((yen * 1.00) / 124.83);
        EuroToYen = Math.round ((euro * 124.83) / 1.00);
        return json = {YenToEuro, EuroToYen}; 
    }
    else{
        return json = "this currency is not valid, try again!";
    }
}
console.log(this.YenEuro(50000, 15000));

exports.EuroGBP = function (euro, GBP){
    var EuroToGBP;
    var GBPtoEuro;

    if (euro >= 1.00 || euro <= 100000 && GBP >= 0.89 || GBP <= 863841.87){
        EuroToGBP = Math.round ((euro * 0.89) / 1.00);
        GBPtoEuro = Math.round ((GBP * 1.00) / 0.89);
        return json = {EuroToGBP, GBPtoEuro};
    }
    else{
        return json = "this currency is not valid, try again!";
    }
}
console.log(this.EuroGBP(50000, 150000));

exports.DollGBP = function (dollar, GBP){
    var DollToGBP;
    var GBPtoDoll;

    if (dollar >= 1.15 || dollar <= 115338 && GBP >= 0.89 || GBP <= 863841.87){
        DollToGBP = Math.round ((dollar * 0.89) / 1.15);
        GBPtoDoll = Math.round ((GBP * 1.15) / 0.89);
        return json = {DollToGBP, GBPtoDoll};
    }
    else{
        return json = "this currency is not valid, try again!";
    }
}
console.log(this.DollGBP(5000, 15000));



