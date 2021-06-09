var Str="";

Str+="<div class='SExampleHeader'>";
Str+="Стилевое свойство <b>cursor</b> &mdash; форма курсора мыши.";
Str+="</div>";
Str+="<div class='SExampleDescription'>";
Str+="Задаёт форму, которую принимает курсор мыши при поднесении к данному элементу.<br>Может применяться практически к любому элементу.";
Str+="</div>";

var CursorsA=
[
  {fn:'',val:'cursor: auto',txt:'форма курсора определяется браузером в зависимости от типа элемента, автоматически'},
  {fn:'css_cursor_default.png',val:'cursor: default',txt:'курсор операционной системы по умолчанию; в Windows &mdash; стрелка'},
  {fn:'css_cursor_crosshair.png',val:'cursor: crosshair',txt:'ожидается точное попадание мышью внутри элемента'},
  {fn:'css_cursor_help.png',val:'cursor: help',txt:'для данного элемента можно получить справку'},
  {fn:'css_cursor_move.png',val:'cursor: move',txt:'элемент можно перемещать либо элемент уже перемещается'},
  {fn:'css_cursor_pointer.png',val:'cursor: pointer',txt:'на элемент можно нажимать/щёлкать'},
  {fn:'css_cursor_progress.png',val:'cursor: progress',txt:'элемент выполняет некоторую работу, но, возможно, будет реагировать на нажатие'},
  {fn:'css_cursor_text.png',val:'cursor: text',txt:'элемент содержит текст, который можно выделять и/или изменять'},
  {fn:'css_cursor_wait.png',val:'cursor: wait',txt:'элемент очень занят и не может реагировать на нажатие'},
  {fn:'css_cursor_nsresize2.png',val:'cursor: n-resize',txt:'верхнюю границу элемента можно перетягивать или она уже перетягивается'},
  {fn:'css_cursor_nsresize2.png',val:'cursor: s-resize',txt:'нижнюю границу элемента можно перетягивать или она уже перетягивается'},
  {fn:'css_cursor_ewresize2.png',val:'cursor: e-resize',txt:'правую границу элемента можно перетягивать или она уже перетягивается'},
  {fn:'css_cursor_ewresize2.png',val:'cursor: w-resize',txt:'левую границу элемента можно перетягивать или она уже перетягивается'},
  {fn:'css_cursor_neswresize.png',val:'cursor: ne-resize',txt:'правый верхний угол элемента можно перетягивать или он уже перетягивается'},
  {fn:'css_cursor_neswresize.png',val:'cursor: sw-resize',txt:'левый нижний угол элемента можно перетягивать или он уже перетягивается'},
  {fn:'css_cursor_nwseresize.png',val:'cursor: se-resize',txt:'правый нижний угол элемента можно перетягивать или он уже перетягивается'},
  {fn:'css_cursor_nwseresize.png',val:'cursor: nw-resize',txt:'левый верхний угол элемента можно перетягивать или он уже перетягивается'},
  {fn:'',val:"cursor: url(<i>URL</i>)<br>cursor: url(<i>URL</i>) X Y",txt:'вместо курсора отображается указанное изображение;<br>можно также через пробелы добавить два числа &mdash; координаты &laquo;горячей точки&raquo; &mdash; той точки, которая является &laquo;остриём&raquo; курсора.'}
];

Str+="<div class='SExampleHeader'>";
Str+="Возможные значения:";
Str+="<table class='SFont13'>";
Str+="<tr><th>Запись</th><th>Вид</th><th>Описание вида курсора, традиционное назначение курсора</th>";
for ( var C=0; C<CursorsA.length; C++ )
{
  var CursorH=CursorsA[C];
  var Img="";
  if ( CursorH.fn!="" )
    Img="<img src='images/cursor/"+CursorH.fn+"'>";
  Str+="<tr>";
  Str+="<td style='white-space: nowrap'><b>"+CursorH.val+"</b></td>";
  Str+="<td style='text-align: center; padding: 0mm'>"+Img+"</td>";
  Str+="<td>"+CursorH.txt+"</td>";
  Str+="</tr>";
}
Str+="</table>";
Str+="</div>";

Str+="<br><div class='SExampleDescription'>";
Str+="Можно перечислять несколько видов курсора через запятую; тогда, если браузер не&nbsp;сможет воспользоваться первым курсором, он воспользуется вторым, и т.д.";
Str+="</div>";

Str+="<br><div class='SExampleDescription'>";
Str+="Для курсора-изображения Internet Explorer поддерживает форматы CUR и ANI;<br>Firefox, Chrome и Safari поддерживают форматы CUR, PNG, GIF, JPG;<br>Opera не поддерживает курсоры-изображения вообще.";
Str+="<br>После курсора-изображения обязательно через запятую указать какой-либо из базовых курсоров; он будет использован, если изображение курсора почему-либо использовать нельзя.";
Str+="</div>";

document.write(Str);
