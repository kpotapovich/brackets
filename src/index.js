module.exports = function check(str, bracketsConfig) {
    let buff = [];
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];

        let brackets = bracketsConfig.find(v => v.indexOf(item) >= 0);
        if (brackets) {
            let idx = brackets.lastIndexOf(item);
            if (idx === 1) {
                if (buff.length > 0 &&
                    buff[buff.length - 1] !== brackets[1] &&
                    brackets[0] === brackets[1]) {

                    buff.push(item);
                } else {
                    let k = buff.pop();
                    if (k !== item) {
                        return false;
                    }
                }

            }
            if (idx === 0) {
                buff.push(item);
            }

        }
    }
    return buff.length === 0;
}
