# Documentacion oficial de Amaia

Amaia es un sistema de templates de estilos CSS para ahorrar la creacion de estilos en los componentes.

Creacion de elementos

## COLOR

### Color text

Cuando queramos utilizar como color de texto debemos de poner en la clase el nombre de la clase

    En este ejemplo se visualiza el texto Hola mundo en color rojo
    <p class="red"> ¡Hola mundo!</p>

[light, dark, lightwhite, white, black, red, green, yellow, gold, pink, purple, violet, lightgrey, lightblue, lightgreen]

### Background color

Para establecer un color de fondo en un elemento hay que poner antes del color las letras bg

    En este ejemplo el texto hola mundo estaria con un fondo rojo y con color blanco
    <p class="bgred white">¡Hola mundo! </p>

Si deseamos crear una composicion de colores para que cambie de modo oscuro a modo claro, debemos de utilizar las

## PADDING AND MARGIN

hay varias maneras de establecer el padding y el margin de una etiqueta, podemos hacerlo en general igual para todas las partes (arriba, derecha, abajo e izquierda), solo arriba y abajo (vertical) o solo izquierda y derecha (horizontal), o ya independientemente cada una de las partes.

Para establecer los genelares utilizamos las letras para abreviar pd (para el padding) o mg (margin), guion bajo y el numero del espacio que queremos esblecer, los numeros seran multiplos de 5, hasta llegar a 10. Si pones pd_1 sera un paddin de 5 pixeles y si pones pd_10 sera un madding de 50pixeles.

### Todas las caras

    Para poner un padding de 5 pixels por todas las caras pondriamos
    <p class="pd_1">¡Hola mundo!</p>

    Para poner un padding de 20 pixels por todas las caras pondriamos
    <p class="pd_4">¡Hola mundo!</p>

    Para poner un margin de 30 pixels por todas las caras pondriamos
    <p class="mg_6">¡Hola mundo!</p>

### Vertical o Horizontal

    Para poner un padding de 10 pixels arriba y abajo lo haremos poniendo pdv_2, se debe de poner la V despues de pd o mg para decir que queremos que sea solo en vertical y si solo queremos que sea en horizontal lo haremos poniendo la letra H mgv_2

    <p class="pdv_4">¡Hola mundo!</p>

    <p class="mgh_2">¡Hola mundo!</p>

### Cada cara por separdo

    Para establecer el padding o margin solo de una cara solo hay que poner pd o mg, guion bajo, lado donde establecer la separacion, otro guión bajo y el numero por el que se multiplicara por 5.

    <p class="mg_bottom_2">¡Hola mundo!</p>

    <p class="pd_left_5">¡Hola mundo!</p>

<hr>

## BORDES

El sistema de bordes puede ser complejo pero a su vez muy facil de integrar, solo es cuestion de uitizar un ordena a la hora de poner los bordes, para ello la estructura debe ser la siguiente teniendo en cuenta las diferentes opciones, el maximo grosor del borde preestablecido es de 10px.

Caras: top, right, bottom, left;
Tipos de border: dotted, dashed, solid, double, groove, ridge, inset, outset;

    border + _ + cara + _ + tipoborde + _ + numeropx

    Con este ejemplo lo que hacemos es establecer un border de 2 pixels en la parte inferior del tipo solido
    <h3 class="border_bottom_solid_2">¡Hola mundo!</h3>

    <h3 class="border_left_solid_5">¡Hola mundo!</h3>

<hr>

## Columns

Hay multitud de maneras de ordenar el contenido a traves de columnas, ya sea a traves de tablas, sistema de grid, flex o con un simple float.
A continuación mostraremos los diferentes sistemas utilizando el display flex

## Flex

Dentro de flex hay 3 sistemas creados, uno clasico divido en 12 columnas y utilizando un sistema parecido al de boostrap en el que pondremos que tipo de dispositivo queremos mostrarlo y el numero de columnas debe de ocupar.

### Columns simple flex

Si utilizamos la clase flex, los elementos se pondran unos al lado del otro

    <div class="flex">
        <p>Elemento 1</p>
        <p>Elemento 2</p>
        <p>Elemento 3</p>
    </div>

<div class="flex-default">
    <span>Element 1</span>
    <span>Element 2</span>
    <span>Element 3</span>
</div>
<hr>
Las letras de los dispositivos y sus relaciones en pixeles, a excepcion del desktop, todos son hasta

### Columns flex fixed

|                     | Smartphone | Tablet | Laptop | Desktop | Xtra Large |
| ------------------- | ---------- | ------ | ------ | ------- | ---------- |
| Max container width | 576px      | 768px  | 992px  | 1200px  | 1600px     |
| Letter              | s          | t      | l      | d       | xl         |
| Class prefix        | .col-s     | .col-t | .col-l | .col-d  | .col-xl    |
| Columns             | 12         | 12     | 12     | 12      | 12         |

    <div class="col-d-12">
        <div class="col-s-12 col-d-6">
            <p class="mg_bottom_2">¡Hola mundo!</p>
        </div>
        <div class="col-s-12 col-d-6">
            <p class="mg_bottom_2">¡Hola mundo!</p>
        </div>
    </div>

### Columns flexible

Otra manera de organizar los contenidos es que se distribuyan automaticamente en base a la cantidad de elementos, dependiendo de las necesidades podemos hacer que los elementos se distribujan de un manera u otra,

| Class                | Description                                                                     |
| -------------------- | ------------------------------------------------------------------------------- |
| .flex-default        | Un uso normal de flex, se ponen un al lado de otro empezando por la izquierda   |
| .flex-wrap           | Ahora no me acuerdo, lo tengo que poner                                         |
| .flex-right          | Los elementos se ordenan uno al lado del otro pero de la derecha a la izquierda |
| .flex-center         | Los elementos se ordenan desde el mismo centro                                  |
| .flex-justify        | Los elementos se ordenan desde ocupando todo desde una lado hasta el otro       |
| .flex-justify-center | Los elementos se ordenan desde el centro ocupando dando separación              |

    <ul class="flex-center">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>

<div class="flex-default">
    <span>Element 1</span>
    <span>Element 2</span>
    <span>Element 3</span>
</div>

<hr>

## Columns grid

Otra de las formas para crear las columnas son con el sistema de display grid, en este tenemos dos tipos, fijos por cantidad de columnas o por espacio minimo que tiene que tener cada columna, haciendo asi que se reordenen solos.

### Grid fixed

Al igual que con flex tenemos un sitema de 12 columnas y podemos escoger la cantidad de columnas que queremos que tenga. Cabe decir que todas las columnas en la version movil pasan a una sola columna.
Para crear el sistema con grid primero hay que poner la clase .grid un espacio y el tipo de columna

#### Columnas iguales

1 Columna
.col1

| 100% |
| ---- |


2 Columnas
.col2

| 50% | 50% |
| --- | --- |


3 Columnas
.col4

| 33% | 33% | 33% |
| --- | --- | --- |


4 Columnas
.col4

| 25% | 25% | 25% | 25% |
| --- | --- | --- | --- |


5 Columna
.col5

| 20% | 20% | 20% | 20% | 20% |
| --- | --- | --- | --- | --- |


6 Columna
.col5

| 16,6% | 16,6% | 16,6% | 16,6% | 16,6% | 16,6% |
| ----- | ----- | ----- | ----- | ----- | ----- |


#### Columnas diferentes tamaños

Es muy facil crear las columnas si tienes en cuenta que la cantidad de columnas siempre tiene que dar 12

2 Columnas

**.col39**
Una bloque de 3 columnas y otro de 9 columnas

| 3   | 9         |
| --- | --------- |
| --- | --------- |

**.col93**
Una bloque de 9 columnas y otro de 3 columnas

| 9         | 3   |
| --------- | --- |
| --------- | --- |

**.col48**
Una bloque de 3 columnas y otro de 9 columnas

| 4    | 8        |
| ---- | -------- |
| ---- | -------- |

**.col84**
Una bloque de 9 columnas y otro de 3 columnas

| 8        | 4    |
| -------- | ---- |
| -------- | ---- |

**.col363**
Una bloque de 3 columnas, otro de 6 columnas y finalmente otro de 3 columnas

| 3   | 6      | 3   |
| --- | ------ | --- |
| --- | ------ | --- |

**.col336**
Una bloque de 3 columnas, otro de 3 columnas y finalmente otro de 6 columnas

| 3   | 3   | 6      |
| --- | --- | ------ |
| --- | --- | ------ |

**.col633**
Una bloque de 3 columnas, otro de 3 columnas y finalmente otro de 6 columnas

| 6      | 3   | 3   |
| ------ | --- | --- |
| ------ | --- | --- |

### Grid autofill

El auto relleno permite que los elementos que hay dentro de la etiqueta se ajusten en base a la cantidad minima y maxima de tamaño
Esto permite que si un elemento tendra un tamaño minimo de 300px este se ajustara para que hayan tantos elementos posibles en el grid con 300px dentro del tamaño de la pantalla, si exede, el siguiente elemento se pasara a la siguiente linea y los de la linea anterior se ajustaran dinamicamente para llenar los elementos hasta el final de pantalla, con una pantalla de 1200, tendriamos 4 elementos de 300px por linea, con 960 tendriamos 3 elementos por linea de 320px.

Para crear el grid hay que utilziar la clase .grid_items esta por defecto tiene un minimo de 300px, para aumentar el tamaño tenemos una segunda clase

| 1ª Clase   | 2ª Clase | Tamaño |
| ---------- | -------- | ------ |
| grid_items | col100   | 100px  |
| grid_items | col200   | 200px  |
| grid_items | col250   | 250px  |
| grid_items | col300   | 300px  |
| grid_items | col400   | 400px  |
| grid_items | col500   | 500px  |

    <ul class="grid_items col250">
        <li>Hola Mundo</li>
        <li>Hola Mundo</li>
        <li>Hola Mundo</li>
    <ul>

# Display

A veces necesitamos forzar como se van a mostrar unos elementos o simplemente queremos hacer que se muestren y se oculten, por defecto hemos creado unas clases muy obvias de display

Todas las etiquetas div vienen con la propiedad box-sizing: border-box;

| Nombre     | Clase    | Acción                                                                     |
| ---------- | -------- | -------------------------------------------------------------------------- |
| block      | block    | Display tipo block                                                         |
| flex       | flex     | Display tipo flex                                                          |
| inline     | inline   | Display inline                                                             |
| toggle     | toogle   | Se utiliza para mostrar u ocultar contenidos, por defecto es display: none |
| show       | show     | fuerza a mostrar un contenido con un display: block !important             |
| hide       | hide     | fuerza a ocultar un contenido con un display: none !important              |
| flex       | showFlex | fuerza a mostrar un contenido con un display: flex !important              |
| hide       | hideFlex | fuerza a ocultar un contenido con un display: none !important              |
| grid       | showGrid | fuerza a mostrar un contenido con un display: grid !important              |
| grid_items | col500   | 500px                                                                      |

# Clear

En ocasiones necesitamos hacer un clear: both para hacer un salto de linea y un flex superior no afecte, para ello se puede utilizar la clase clear. La clase row tambien tiene esa propiedad

    <div class="col-t-6"></div>
    <div class="col-t-6"></div>
    <div class="col-t-6"></div>
    <div class="clear"></div>

# Tamaño maximo

Algo que podemos querer hacer es que un elemento ocupe el 100% de altura o de anchura, para ello tenemos las clases h100 para la altura y w100 para la anchura

| Clase | Css            | Accion                        |
| ----- | -------------- | ----------------------------- |
| h100  | height: 100%;  | Altura maxima de relleno      |
| w100  | width: 100%;   | Anchura maxima de relleno     |
| vh100 | height: 100vh; | Altura maxima de la pantalla  |
| vw100 | width: 100vw;  | Anchura maxima de la pantalla |

# Center Content

En ocasiones necesitamos centrar el contenido tanto en altura como en anchura, para ello podemos utilizar la clase .center-content

En este ejemplo el div ocuparia toda la pantalla y el texto de hola mundo lo pondria en el centro de la pantalla.

    <div class="vh100 vw100 center-content">
        <p>Hola Mundo!</p>
    </div>

# Position

Podemos establecer que tipo de posicion tiene que tener una etiqueta, para ponerla podemos utilizar una abrevitura

| Clase  | Css                 |
| ------ | ------------------- |
| rel    | position: relative; |
| abs    | position: absolute; |
| sticky | position: sticky;   |
| static | position: static;   |
| fixed  | position: fixed;    |

# Hide content

Existe la posibilidad de ocultar contenidos en smartphones pero que si se muestran en tamaños superiores y contenidos que se ven en el movil pero no en dispositivos con un tamaño superior.
para ocultar en smartphone pondremos la abreviatura de Hide Smartphone, osea hs y para dispositivos de mayor tamaño Hide Laptop, hl

Si queremos que la palabra Nombre no se muestre en un smartphone pondremos hs

| Clase | Tamaño           |
| ----- | ---------------- |
| hs    | max-width: 600px |
| hl    | min-width: 600px |

<div class="flex">
    <b class="hs">Nombre:</b>
    <span>Pepe</span>
</div>
