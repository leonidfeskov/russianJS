const DICT = {
    'break': 'закончить',
    'boolean': 'логический',
    'case': 'случай',
    'catch': 'поймать',
    'class': 'класс',
    'console.log': 'вывестиВЖурнал',
    'const': 'константа',
    'continue': 'продолжить',
    'debugger': 'отладчик',
    'default': 'поУмолчанию',
    'define': 'определить',
    'delete': 'удалить',
    'do': 'делать',
    'else': 'иначе',
    'export': 'экспорт',
    'extends': 'наследовать',
    'false': 'ложь',
    'final': 'конечный',
    'finally': 'вКонце',
    'for': 'для',
    'function': 'функция',
    'if': 'если',
    'in': 'в',
    'instanceof': 'экземпляр',
    'int': 'целый',
    'import': 'импорт',
    'let': 'перем',
    'new': 'новый',
    'null': 'ничего',
    'private': 'частный',
    'protected': 'защищенный',
    'prototype': 'прототип',
    'public': 'публичный',
    'return': 'вернуть',
    'require': 'требовать',
    'static': 'статичный',
    'super': 'супер',
    'switch': 'переключить',
    'this': 'это',
    'throw': 'бросить',
    'true': 'истина',
    'try': 'пытаться',
    'typeof': 'тип',
    'use strict': 'строгий режим',
    'var': 'перем',
    'void': 'пустота',
    'while': 'пока',
    'with': 'с'
}

const TRANSLIT = {
    'a': 'а',
    'A': 'А',
    'b': 'б',
    'B': 'Б',
    'c': 'к',
    'C': 'К',
    'd': 'д',
    'D': 'Д',
    'e': 'е',
    'E': 'Е',
    'f': 'ф',
    'F': 'Ф',
    'g': 'г',
    'G': 'Г',
    'h': 'х',
    'H': 'Х',
    'i': 'и',
    'I': 'И',
    'j': 'ж',
    'J': 'Ж',
    'k': 'к',
    'K': 'К',
    'l': 'л',
    'L': 'Л',
    'm': 'м',
    'M': 'М',
    'n': 'н',
    'N': 'Н',
    'o': 'о',
    'O': 'О',
    'p': 'п',
    'P': 'П',
    'q': 'кв',
    'Q': 'Кв',
    'r': 'р',
    'R': 'Р',
    's': 'с',
    'S': 'С',
    't': 'т',
    'T': 'Т',
    'u': 'у',
    'U': 'У',
    'v': 'в',
    'V': 'В',
    'w': 'в',
    'W': 'В',
    'x': 'кс',
    'X': 'Кс',
    'y': 'ай',
    'Y': 'Ай',
    'z': 'з',
    'Z': 'З'
}

var js = document.getElementById('js');
var jsCode;
var russianJS = document.getElementById('js-russian');


function converToRussianJS() {
    console.time();
    jsCode = js.innerHTML;
    var russianJSCode = jsCode;

    for (var word in DICT) {
        regExp = new RegExp('\\b'+word+'\\b', 'g');
        russianJSCode = russianJSCode.replace(regExp, DICT[word]);
    }

    for (var symbol in TRANSLIT) {
        regExp = new RegExp(symbol, 'g');
        russianJSCode = russianJSCode.replace(regExp, TRANSLIT[symbol]);
    }

    russianJS.innerHTML = russianJSCode;
    console.timeEnd();
}

window.onload = function() {

    converToRussianJS();

    js.addEventListener('blur', function() {
        if (jsCode !== js.value) {
            converToRussianJS();
        }
    });
};








