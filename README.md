<h1>jquery.text-crop.js</h1>

<p>Небольшой jquery плагин для обрезки текста если его длина больше заданной</p>

<h3>Параметры</h3>

<table>
    <tr>
        <th>Parameter</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>size</td>
        <td>number</td>
        <td>50</td>
        <td>Max lenght of string</td>
    </tr>
    <tr>
        <td>symbol</td>
        <td>string</td>
        <td>'...'</td>
        <td>Text after cropped text</td>
    </tr>
</table>

<h3>Пример использования</h3>
<code>
    $('.news-one__text').each(function(){
        $(this).textCrop({
            'size' : 150,
            'symbol' : '...'
        })
    });
</code>