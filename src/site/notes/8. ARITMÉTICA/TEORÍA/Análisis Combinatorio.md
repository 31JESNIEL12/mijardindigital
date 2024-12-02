---
{"tags":["Aritmética","Álgebra","Teoría"],"dg-publish":true,"permalink":"/8-aritmetica/teoria/analisis-combinatorio/","dgPassFrontmatter":true}
---

# TEORÍA
---
**ANÁLISIS COMBINATORIO** 

>[!sidenote]- **LINKS EXTERNOS DE CLASES** 
>[ANÁLISIS COMBINATORIO - GRUPO CIENCIAS UNI](https://www.youtube.com/watch?v=XpwPA0v0gXQ)  
>[ANÁLISIS COMBINATORIO PARTE 1 - CEPRE UNI 2022-2](https://www.youtube.com/watch?v=3o7TxMQ9ZwI) 
>[ANÁLISIS COMBINATORIO PARTE 2 - CEPRE UNI 2022-2](https://www.youtube.com/watch?v=AUUSZYxfcmQ) 
>[ANÁLISIS COMBINATORIO - VONEX](https://www.youtube.com/watch?v=G5ETW8bbAXI)

✔ **DEFINICIÓN**
- Parte de las matemáticas que estudia las diversas manera de realizar ordenamientos o agrupaciones con todos o parte de los elementos de un conjunto dado; los cuales se diferencian entre sí, por el orden de ubicación de los elementos  

✔ **IMPORTANCIA**
- En el estudio de moléculas orgánicas
- En el estudio de las epidemias y diseños de experimentos
- En los problemas de transporte, asignación de tareas, almacenamiento y distribución

---
**PRINCIPIOS FUNDAMENTALES** 

✔ **PRINCIPIO DE LA MULTIPLICACIÓN** 
- Si el evento A se realiza de p formas diferentes y para cada una de estas formas existe un segundo evento B que puede realizar de q formas diferentes, entonces la realización del evento A y B esto es, ocurren simultáneamente o uno a continuación de otro, se podrá hacer de: "(p).(q)" formas

✔ **PRINCIPIO DE ADICIÓN** 
- Si un evento A se puede realizar de p formas diferentes y un segundo evento B se puede realizar de q formas diferentes, además no es posible realizar los dos eventos a la vez (A), entonces la realización del evento A o B (ocurre solo uno de los eventos) se podrá hacer de: p + q formas 

---
**FACTORIAL DE UN NÚMERO** 

✔ **DEFINICIÓN** 
- Sea "n" un número entero positivo, se define el factorial de "n", como el producto de todos los números enteros consecutivos desde 1 hasta n, este producto se denota por n! 
- n! = 1 x 2 x 3 x ... x n, n 

>[!sidenote]- **OBSERVACIONES:** 
>n! = (n - 1)! x n
>1! = 1
>0! = 1

✔ **METODOS DE AGRUPACIÓN**
- PERMUTACIÓN: Forma grupos donde ==**INTERESA EL ORDEN**== de los elementos
	- Permutación lineal con elementos diferentes 
	- Permutación lineal con elementos repetidos 
	- Permutación circular (ELEMENTOS DIFERENTES)
- COMBINACIÓN: Forma grupos donde ==**NO INTERESA EL ORDEN**== de los elementos
	- Combinación lineal con repetición de elementos 
	- Combinación lineal con elementos diferentes 

---
**PERMUTACIÓN LINEAL CON ELEMENTOS DIFERENTES (P)** 

✔ **DEFINICIÓN**
- También conocido como ==**VARIACIÓN**==. El número de permutaciones de "n" objetos diferentes tomados en grupos de "k" elementos, donde: k , está dado por:

![Permutación lineal con elementos diferentes.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Permutaci%C3%B3n%20lineal%20con%20elementos%20diferentes.png)

>[!sidenote]- **TENER EN CUENTA:** 
>Se lee: permutación de n elementos tomados de k en k donde: n; k ∈ N

>[!sidenote]- **OBSERVACIÓN:** 
>Si consideramos k = n, es decir, la permutación de los n elementos, (tomados todos a la vez) es:
>![Observación sobre la permutación lineal con elementos diferentes.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Observaci%C3%B3n%20sobre%20la%20permutaci%C3%B3n%20lineal%20con%20elementos%20diferentes.png)
>Estas agrupaciones se diferentes entre sí, solo por el orden de los elementos

---
**PERMUTACIÓN LINEAL CON ELEMENTOS REPETIDOS (PR)** 

✔ **DEFINICIÓN** 
- El número de permutaciones distintas de n elementos (tomando todos) en donde hay n<sub>1</sub> objetos iguales entre si de un tipo; otros n<sub>2</sub> objetos iguales entre sí de un segundo tipo y así sucesivamente; está dado por la siguiente relación:

![Permutación lineal con elementos repetidos.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Permutaci%C3%B3n%20lineal%20con%20elementos%20repetidos.png)

>[!sidenote]- **TENER EN CUENTA:** 
>n<sub>1</sub> + n<sub>2</sub> + n<sub>3</sub> + ... + n<sub>k</sub> = n

---
**PERMUTACIÓN CIRCULAR**

✔ **DEFINICIÓN** 
- Son agrupaciones o arreglos formando una línea cerrada, donde no hay primer ni último elemento. Dos permutaciones son diferentes entre sí cuando uno de ellos no resulta de una rotación del otro

![Permutación circular 1.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Permutaci%C3%B3n%20circular%201.png)

---
**COMBINACIÓN** 

✔ **DEFINICIÓN** 
- Son los diferentes arreglos de k elementos que se pueden formar con los n elementos de un conjunto determinado, se debe tener en cuenta que al formar los arreglos no interesa el orden de la ubicación de los elementos

![Notación de un combinatorio.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Notaci%C3%B3n%20de%20un%20combinatorio.png)

![Combinatorio.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Combinatorio.png)

>[!sidenote]- **TENER EN CUENTA:** 
>k ≤ n
>Se lee: Combinación de n elementos tomados de k en k

---
**COMBINACIÓN CON REPETICIÓN DE ELEMENTOS (CR)** 

✔ **DEFINICIÓN**
- Se consideran "n" elementos diferentes, se formará grupos de "k" elementos donde no interesa el orden de ellos, en el grupo se puede repetir un mismo elementos, en dichas condiciones, el número de combinaciones está dada por:

![Combinación con elementos repetidos.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Combinaci%C3%B3n%20con%20elementos%20repetidos.png)

---
**PROPIEDADES DE LOS NÚMEROS COMBINATORIOS** 

✔ **IGUALDAD DE NÚMEROS COMBINATORIOS** 

![Igualdad de números combinatorios.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Igualdad%20de%20n%C3%BAmeros%20combinatorios.png)

✔ **COMBINATORIOS COMPLEMENTARIOS** 
![Combinatorios complementarios.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Combinatorios%20complementarios.png)

✔ **SUMA DE COMBINATORIOS** 

![Suma de combinatorios.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Suma%20de%20combinatorios.png)

✔ **DISMINUCIÓN DE AMBOS ÍNDICES** 

![Disminución de ambos índices.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Disminuci%C3%B3n%20de%20ambos%20%C3%ADndices.png)

✔ **DISMINUCIÓN DE ÍNDICE INFERIOR**

![Disminución de índice inferior.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Disminuci%C3%B3n%20de%20%C3%ADndice%20inferior.png)

✔ **DISMINUCIÓN DE ÍNDICE SUPERIOR** 

![Disminución de índice superior.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Disminuci%C3%B3n%20de%20%C3%ADndice%20superior.png)

✔ **RESULTADOS NOTABLES** 

![Resultados notables del número combinatorio.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Resultados%20notables%20del%20n%C3%BAmero%20combinatorio.png)

---
**[[10. ÁLGEBRA/TEORÍA/Binomio de Newton\|BINOMIO DE NEWTON]]** 

![Binomio de Newton.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Binomio%20de%20Newton.png)

✔ **PROPIEDADES** 

![Propiedades de Binomio de Newton.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Propiedades%20de%20Binomio%20de%20Newton.png)

---
**PRÁCTICA:** 
>[[8. ARITMÉTICA/PRÁCTICA/Análisis Combinatorio\|PRESIONA AQUÍ]]

---
**SIGUIENTE TEMA:** 
>[[8. ARITMÉTICA/TEORÍA/Estadística y Probabilidad\|ESTADÍSTICA Y PROBABILIDAD]]

---
**ANTERIOR TEMA:** 
>[[8. ARITMÉTICA/TEORÍA/Tanto por cuanto\|TANTO POR CUANTO]]


