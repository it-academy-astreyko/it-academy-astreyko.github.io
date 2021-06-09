var Str="";

var FormatsA=
[
  {name:'PNG'},
  {name:'GIF'},
  {name:'JPEG q=70'},
  {name:'JPEG q=10'}
];

var ImagesA=
[
  {name:'дельфиниум',formats:
    [
      {size:52687,fn:'delphinium_p.png'},
      {size:20910,fn:'delphinium_g.gif'},
      {size:11829,fn:'delphinium_j70.jpg'},
      {size:3088,fn:'delphinium_j10.jpg'}
    ]
  },
  {name:'Синатра',formats:
    [
      {size:29670,fn:'sinatra_p.png'},
      {size:25075,fn:'sinatra_g.gif'},
      {size:7936,fn:'sinatra_j70.jpg'},
      {size:2793,fn:'sinatra_j10.jpg'}
    ]
  },
  {name:'герб',formats:
    [
      {size:34315,fn:'gerb_p.png'},
      {size:16144,fn:'gerb_g.gif'},
      {size:19121,fn:'gerb_j70.jpg'},
      {size:5406,fn:'gerb_j10.jpg'}
    ]
  },
  {name:'двухцветный<br>градиент',formats:
    [
      {size:17344,fn:'gradient2_p.png'},
      {size:13612,fn:'gradient2_g.gif'},
      {size:2364,fn:'gradient2_j70.jpg'},
      {size:726,fn:'gradient2_j10.jpg'}
    ]
  },
  {name:'трёхцветный<br>градиент',formats:
    [
      {size:22546,fn:'gradient3_p.png'},
      {size:9572,fn:'gradient3_g.gif'},
      {size:2638,fn:'gradient3_j70.jpg'},
      {size:867,fn:'gradient3_j10.jpg'}
    ]
  }
];

Str+="<table>";
Str+="<tr>";
  Str+="<th style='width: 30px'></th>";
  for ( var C=0; C<ImagesA.length; C++ )
    Str+="<th style='font-size: 11px; font-weight: normal'>"+ImagesA[C].name+"</th>";
Str+="</tr>";
for ( var R=0; R<FormatsA.length; R++ )
{
  Str+="<tr>";
  Str+="<th style='font-size: 11px; font-weight: normal'>"+FormatsA[R].name+"</th>";

  for ( var C=0; C<ImagesA.length; C++ )
  {
    var ImageH=ImagesA[C];
    var ImageFormatH=ImageH.formats[R];
    Str+="<td style='padding: 1mm'>";
    //Str+="<img src='images/formats/"+ImageFormatH.fn+"' width=105 height=126>";
    Str+="<img src='images/formats/"+ImageFormatH.fn+"' width=108 >";
    Str+="<div style='font-size: 10px'>Размер: "+ImageFormatH.size+" байт</div>";
    Str+="</td>";
  }
  Str+="</tr>";
}
Str+="</table>";

document.write(Str);
