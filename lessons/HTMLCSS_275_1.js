var Str="";


// стилевые свойства text-decoration, text-transform, list-style-type, cursor

Str+="<div class='SExampleHeader'>";
Str+="Стилевое свойство <b>text-decoration</b> &mdash; украшение текста.";
Str+="</div>";

Str+="<div class='SExampleDescription'>";
Str+="Может применяться практически к любому элементу, в котором содержится текст.";
Str+="</div>";

Str+="<div class='SExampleHeader'>";
Str+="Возможные значения:";
Str+="<br><b>text-decoration: none</b> &mdash; обычный текст.";
Str+="<br><b>text-decoration: underline</b> &mdash; подчёркнутый текст.";
Str+="<br><b>text-decoration: overline</b> &mdash; надчёркнутый текст.";
Str+="<br><b>text-decoration: line-through</b> &mdash; перечёркнутый текст.";
Str+="</div>";

var Example='<p>На собеседовании$$$свои <span style="text-decoration: none">достоинства</span>$$$можно <span style="text-decoration: underline">подчеркнуть</span>,$$$а можно <span style="text-decoration: line-through">перечеркнуть</span>.$$$</p>';
Str+=ComposeExamples([{code:Example}],{leftcolperc:73,leftfontsize:13});


Str+="<br><hr><br>";


Str+="<div class='SExampleHeader'>";
Str+="Стилевое свойство <b>text-transform</b> &mdash; преобразование текста.";
Str+="</div>";

Str+="<div class='SExampleDescription'>";
Str+="Может применяться практически к любому элементу, в котором содержится текст.";
Str+="</div>";

Str+="<div class='SExampleHeader' style='margin-top: 5px; margin-bottom: -5px'>";
Str+="Возможные значения:";
Str+="<br><b>text-transform: none</b> &mdash; обычный текст.";
Str+="<br><b>text-transform: capitalize</b> &mdash; делает первую букву каждого слова прописной.";
Str+="<br><b>text-transform: uppercase</b> &mdash; делает все буквы прописными.";
Str+="<br><b>text-transform: lowercase</b> &mdash; делает все буквы строчными.";
Str+="</div>";

var Example='<p>'
  +'$$$Вот <span style="text-transform: none">ПЕРВЫЙ пример</span>,<br>'
  +'$$$<span style="text-transform: capitalize">ВТОРОЙ пример</span>,<br>'
  +'$$$<span style="text-transform: lowercase">ТРЕТИЙ пример</span><br>'
  +'$$$и <span style="text-transform: uppercase">ЧЕТВЁРТЫЙ размер</span>!'
  +'$$$</p>';
Str+=ComposeExamples([{code:Example}],{leftcolperc:70,leftfontsize:12});

document.write(Str);
