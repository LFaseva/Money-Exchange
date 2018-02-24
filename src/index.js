// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    const arr = {};
    let H = 50;
    let Q = 25;
    let D = 10;
    let N = 5;

    if(currency === 0){
        return arr;
    }else if(currency >= 10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    let h = Math.floor(currency / H);
    if(h > 0){
        arr['H'] = h;
    }
    let temph = currency % H;
    if(temph === 0){
        return arr;
    }else{
        let q = Math.floor(temph/ Q);
        if(q > 0){
            arr['Q'] = q;
        }
        let tempq = temph % Q;
        if(tempq === 0){
            return arr;
        }else{
            let d = Math.floor(tempq / D);
            if(d > 0){
                arr['D'] = d;
            }
            let tempd = tempq % D;
            if(tempd === 0){
                return arr;
            }else{
                let n = Math.floor(tempd / N);
                if(n > 0){
                    arr['N'] = n;
                }
                let tempn = tempd % N;
                if(tempn === 0){
                    return arr;
                }else{
                    temp =  tempd % N;
                    arr['P'] = temp;
                    return arr;
                }
            }
        }
    }
};

