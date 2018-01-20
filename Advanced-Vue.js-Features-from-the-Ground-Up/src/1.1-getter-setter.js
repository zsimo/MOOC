/**
 * Created by Simone.Sacchi on 1/20/2018.
 */
function convert (obj) {
    Object.keys(obj).forEach(key => {
        let internalValue = obj[key]
        Object.defineProperty(obj, key, {
            get () {
                console.log(`getting key "${key}": ${internalValue}`)
                return internalValue
            },
            set (newValue) {
                console.log(`setting key "${key}" to: ${newValue}`)
                internalValue = newValue
            }
        })
    })
}



var inner = {
    "tre" : 3
};

var obj = {
    "uno": 1,
    "due": inner
};

convert(inner);
convert(obj);


//obj.uno = 2;
obj.due.tre = 4;