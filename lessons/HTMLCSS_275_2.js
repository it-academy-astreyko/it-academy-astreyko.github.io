var Str="";


Str+="<div class='SExampleHeader'>";
Str+="Стилевое свойство <b>list-style-type</b> &mdash; вид маркера списка.";
Str+="</div>";

Str+="<div class='SExampleDescription'>";
Str+="Может применяться к элементам <b>ul</b> и <b>ol</b>, а также к <b>li</b>.";
Str+="</div>";

Str+="<div class='SExampleHeader'>";
Str+="Некоторые возможные значения:";
Str+="<br><b>none</b> &mdash; нет маркера";
Str+="<br><b>disc</b> &mdash; чёрный кружок";
Str+="<br><b>circle</b> &mdash; светлый кружок";
Str+="<br><b>square</b> &mdash; чёрный квадратик";
Str+="<br><b>decimal</b> &mdash; десятичные числа (1, 2, 3, ...)";
Str+="<br><b>decimal-leading-zero</b> &mdash; десятичные числа с ведущим нулем (01, 02, 03, ... 98, 99)";
Str+="<br><b>lower-roman</b> &mdash; строчные римские числа (i, ii, iii, iv, v, ...)";
Str+="<br><b>upper-roman</b> &mdash; прописные римские числа (I, II, III, IV, V, ...)";
Str+="<br><b>lower-greek</b> &mdash; строчные греческие буквы";
Str+="<br><b>lower-latin</b> &mdash; строчные латинские буквы (a, b, c, ..., z)";
Str+="<br><b>upper-latin</b> &mdash; прописные латинские буквы (A, B, C, ..., Z)";
Str+="</div>";

var Example1='<ol style="list-style-type: square">$$$ <li>учиться,</li>$$$ <li>учиться,</li>$$$ <li>и ещё раз учиться!</li>$$$</ol>';
var Example2='<ol style="list-style-type: circle">$$$ <li>учиться,</li>$$$ <li style="list-style-type: disc">учиться,</li>$$$ <li>и ещё раз учиться!</li>$$$</ol>';
Str+=ComposeExamples([{code:Example1},{code:Example2}],{leftcolperc:70});

Str+="<br><div class='SExampleHeader'>";
Str+="Стилевое свойство <b>list-style-image</b> &mdash; изображение вместо маркера списка.";
Str+="</div>";

Str+="<div class='SExampleDescription'>";
Str+="Может применяться к элементам <b>ul</b> и <b>ol</b>.";
Str+="</div>";

var Example='<ol style="list-style-image: url(\'images/smile2.gif\')">$$$ <li>учиться,</li>$$$ <li>учиться,</li>$$$ <li>и ещё раз учиться!</li>$$$</ol>';
Str+=ComposeExamples([{code:Example}],{leftcolperc:70});

//Str+="<div class='SExampleDescription'>";
//Str+="Стилевое свойство list-style-image Internet Explorer до версии 8.0 не поддерживает.";
//Str+="</div>";

document.write(Str);
