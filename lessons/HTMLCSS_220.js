var Str="";

// Тег img, атрибуты src, width, height, alt, title

Str+="<div class='SExampleHeader'>";
Str+="Одиночный тег <b>img</b> &mdash; изображение.<br>Атрибут <b>src</b> тега <b>img</b> &mdash; URL изображения.";
Str+="</div>";

Str+="<div class='SExampleDescription'>";
Str+="Служит для вставки изображения, URL которого указан в атрибуте src.";
Str+="</div>";

var ExampleA='<p>Это зубака:<br>$$$<img src="http://fe.it-academy.by/Examples/Hilu200.jpg">$$$</p>';
var ExampleR='<p>А это &mdash; воробей:<br>$$$<img src="images/vorobey.jpg">$$$</p>';
Str+=ComposeExamples([{code:ExampleA},{code:ExampleR}],{leftcolperc:66});

Str+="<div class='SExampleHeader'>";
Str+="Атрибуты <b>width</b> и <b>height</b> тега <b>img</b> &mdash; размер изображения.";
Str+="</div>";

Str+="<div class='SExampleDescription' style='margin-bottom: -10px'>";
Str+="Устанавливают размер изображения на странице браузера. Необходимы, если мы хотим, чтобы изображение на странице имело размер, отличающийся от оригинального.";
Str+="</div>";

var ExampleR='<p>Это &mdash; воробей:<br>$$$<img src="images/vorobey.jpg" width=\"80\">$$$</p>';
var ExampleR2='<p>Это &mdash; воробей:<br>$$$<img src="images/vorobey.jpg" width=\"170\" height=\"80\">$$$</p>';
Str+=ComposeExamples([{code:ExampleR},{code:ExampleR2}],{leftcolperc:65});


Str+="<div class='SExampleHeader'>";
Str+="Атрибут <b>alt</b> тега <b>img</b> &mdash; альтернативный текст.";
Str+="</div>";

Str+="<div class='SExampleDescription'>";
Str+="Задаёт текст, который появляется вместо изображения, если изображение почему-либо не может быть отображено.";
Str+="</div>";


Str+="<div class='SExampleHeader'>";
Str+="Атрибут <b>title</b> тега <b>img</b> &mdash; всплывающая подсказка.";
Str+="</div>";

Str+="<div class='SExampleDescription'>";
Str+="Задаёт текст, который всплывает при поднесении курсора мыши к изображению.<br>";
Str+="</div>";


document.write(Str);
