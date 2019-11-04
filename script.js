"use strict";

/*
/*     Доброго времени суток. Прошу обратить внимание, что функция будет работать 
/*     только при условии, что JS-файл валидный, как и указано в задании.
*/

function deleteComments(str) {

    if (typeof str !== 'string') {
        throw new TypeError('Input code must be a string.');
    }

    if (!str.length) {
        return str;
    }

    str = ('-' + str + '-').split('');

    let mode = {
        quoteSingle: false,
        quoteDouble: false,
        quoteBacktick: false,
        regExp: false,
        commentBlock: false,
        commentLine: false
    };

    for (let i = 0; i < str.length; i++) {

        if (mode.regExp) {
            if (str[i] === '/' && str[i - 1] !== '\\') {
                mode.regExp = false;
            }
            continue;
        }

        if (mode.quoteSingle) {
            if (str[i] === "'" && str[i - 1] !== '\\') {
                mode.quoteSingle = false;
            }
            continue;
        }

        if (mode.quoteDouble) {
            if (str[i] === '"' && str[i - 1] !== '\\') {
                mode.quoteDouble = false;
            }
            continue;
        }

        if (mode.quoteBacktick) {
            if (str[i] === "`" && str[i - 1] !== '\\') {
                mode.quoteBacktick = false;
            }
            continue;
        }

        if (mode.commentBlock) {
            if (str[i] === '*' && str[i + 1] === '/') {
                str[i + 1] = '';
                mode.commentBlock = false;
            }
            str[i] = '';
            continue;
        }

        if (mode.commentLine) {
            if (str[i + 1] === '\n' || str[i + 1] === '\r') {
                mode.commentLine = false;
            }
            str[i] = '';
            continue;
        }

        mode.quoteDouble = str[i] === '"';
        mode.quoteSingle = str[i] === "'";
        mode.quoteBacktick = str[i] === "`";

        if (str[i] === '/') {

            if (str[i + 1] === '*') {
                str[i] = '';
                mode.commentBlock = true;
                continue;
            }

            if (str[i + 1] === '/') {
                str[i] = '';
                mode.commentLine = true;
                continue;
            }

            mode.regExp = true;

        }
    }
    return str.join('').slice(1, -1);
}
