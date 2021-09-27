##O que é?

Fiz este plugin em 2013 e estou subindo no meu github

Alterei o atributo placeholder para placehold e retirei a validação de IE só para mostrar o funcionamento (pois hoje qualquer navegador suporta o placeholder)

placeholderoldie.js é um plugin que simula o atributo placeholder nas versões antigas do Internet Explorer, 9, 8...


##Uso
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="utf-8" />
    <title></title>
</head>
<body>
    <input type="text" id="nome" placeholder="Nome" /><br />
    <input type="text" id="telefone" /><br />
    <input type="email" id="email" placeholder="Email" />
    <script type="text/javascript" src="jquery.min.js"></script>
    <script type="text/javascript" src="jquery.placeholderoldie-1.0.0.js"></script>
    <script type="text/javascript">
        $(function () {
            $(this).placeholderoldie();
        });
    </script>
</body>
</html>
});
```

##Licença
**The MIT License (MIT)**
<p>Copyright (c) Murilo Siqueira</p>

<p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>

<p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>

<p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>