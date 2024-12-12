---
{"dg-publish":true,"permalink":"/10-algebra/teoria/determinantes/","tags":["Álgebra","Teoría","Completo"]}
---

# TEORÍA
---
**DETERMINANTES** 

>[!sidenote]- **LINKS EXTERNOS DE CLASES** 
>[DETERMINANTES I - GRUPO CIENCIAS UNI](https://www.youtube.com/watch?v=RoAf7tm0QNM) 
>[DETERMINANTES II - GRUPO CIENCIAS UNI](https://www.youtube.com/watch?v=qX4Rc_Fy08Y) 
>[DETERMINANTES III - GRUPO CIENCIAS UNI](https://www.youtube.com/watch?v=W9XnANO_AWM) 
>[DETERMINANTES - VON NEUMANN](https://www.youtube.com/watch?v=QEc8-lcA45M&t=11s)

✔ **DEFINICIÓN**:
- La función determinante es una función de variable matricial (De orden n) de valor real, de variable matricial, cuyo dominio es el conjunto: 

![Notación de determinantes.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Notaci%C3%B3n%20de%20determinantes.png)

✔ **DEFINCIÓN RECURSIVA**
- La idea que aplicaremos definir el valor de la función determinante para matrices de orden 1, 2 y 3, luego veremos las propiedades y por último definir su valor, desarrollando por menores y cofactores, usando el desarrollo de Laplace

---
**DETERMINANTE DE ORDEN 1**

![Determinante de orden 1.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Determinante%20de%20orden%201.png)

---
**DETERMINANTE DE ORDEN 2**

![Determinante de orden 2.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Determinante%20de%20orden%202.png)

---
**DETERMINANTE DE ORDEN 3 (REGLA DE SARRUS)**

![Determinante de orden 3.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Determinante%20de%20orden%203.png)
![Regla de Sarrus.jpg](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Regla%20de%20Sarrus.jpg)

---
**PROPIEDADES**

✔ **PROPIEDAD 1**
- Si en una matriz, se tiene una fila o columna de ceros, el valor de su determinantes es cero

![Determinantes Propiedad I.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Determinantes%20Propiedad%20I.png)

✔ **PROPIEDAD 2** 
- Si en una matriz se tiene dos filas o dos columnas proporcionales, el valor de la determinante es cero 

![Determinantes Propiedad II.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Determinantes%20Propiedad%20II.png)

✔ **PROPIEDAD 3** 
- Si un determinante se intercambian dos filas o dos columnas, su valor cambia de signo

![Determinantes Propiedad III.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Determinantes%20Propiedad%20III.png)

✔ **PROPIEDAD 4** 
- Si en un determinante se intercambia un número par de filas o de columnas, el valor de la determinante es el mismo

![Determinantes Propiedad IV.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Determinantes%20Propiedad%20IV.png)

✔ **PROPIEDAD 5** 
- Si en un determinante a una de sus filas o columnas, se le suma cualquier otra fila o columna por una constante, el valor de la determinante no varía

![Determinantes Propiedad V.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Determinantes%20Propiedad%20V.png)

✔ **PROPIEDAD 6** 
- Si un determinante tiene una fila o columna la cual es la suma de dos filas o columnas, su valor es la suma de los 2 determinantes que la suma determina 

![Determinantes Propiedad VI.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Determinantes%20Propiedad%20VI.png)

✔ **PROPIEDAD 7** 
- El determinante de la matriz A del orden m x n, coincide con el determinante de la transpuesta de A

![Determinantes Propiedad VII.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Determinantes%20Propiedad%20VII.png)

✔ **PROPIEDAD 8** 
- Si A y B son matrices del mismo orden n x n, se cumple: |AB| = |A| |B|

![Determinantes Propiedad VIII.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Determinantes%20Propiedad%20VIII.png)

✔ **PROPIEDAD 9** 
- El valor de un determinante de una matriz A anti simétrica de orden impar, es cero 

![Determinantes Propiedad IX.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Determinantes%20Propiedad%20IX.png)

✔ **PROPIEDAD 10** 
- El determinante de una matriz nilpotente es cero. 
- Sea A una matriz cuadrada por orden n, la cual es nilpotente. ∃k ∈ N / A<sup>k</sup> = 0
- Tomando determinante a ambos miembros tendremos:

![Determinantes Propiedad X.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Determinantes%20Propiedad%20X.png)

✔ **PROPIEDAD 11** 
- Si en un determinante se tiene una fila o columna, multiplicada por una constante, el determinante quedara multiplicada por dicha constante

![Determinantes Propiedad XI.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Determinantes%20Propiedad%20XI.png)

✔ **PROPIEDAD 12** 
- Para cualquier matriz A de orden n, para se cumple: rA, |rA| = r<sup>n</sup> |A|, r ∈ R.

![Determinantes Propiedad XII.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Determinantes%20Propiedad%20XII.png)

✔ **PROPIEDAD 13** 
- Para cualquier matriz idempotente, su determinante es 0 o 1

![Determinantes Propiedad XIII.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Determinantes%20Propiedad%20XIII.png)

✔ **PROPIEDAD 14** 
- El determinante de una matriz triangular, es igual al producto de los elementos de su diagonal. Bastara desarrollar según Laplace con respecto a la primera fila, y así sucesivamente hasta llegar la última fila

![Determinantes Propiedad XIV.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Determinantes%20Propiedad%20XIV.png)

✔ **PROPIEDAD 15**
- | I<sub>n</sub> | = 1, I<sub>n</sub> matriz unidad de orden n.

![Determinantes Propiedad XV.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Determinantes%20Propiedad%20XV.png)

✔ **PROPIEDAD 16** 
- El determinante de una matriz diagonal, tomando la primera fila por el desarrollo de Laplace

![Determinantes Propiedad XVI.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Determinantes%20Propiedad%20XVI.png)

---
**DETERMINANTE DE VANDERMONDE**

![Determinante Vandermonde.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Determinante%20Vandermonde.png)

>[!sidenote]- **EJEMPLO:** 
>![Ejemplo de determinante Vandermonde.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Ejemplo%20de%20determinante%20Vandermonde.png)

---
**MENORES DE UN ELEMENTO**

✔ **DEFINICIÓN** 
- El menor M<sub>ij</sub> del elemento a<sub>ij</sub> de la matriz A = [a<sub>ij</sub>]<sub>nxm</sub> es el determinante de la matriz en la cual se ha omitido la fila i, y la columna j. 
- El determinante M<sub>ij</sub> es el determinante de orden uno menos del orden del determinante |A|

>[!sidenote]- **EJEMPLO:** 
>![Menores de un determinante.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Menores%20de%20un%20determinante.png)

---
**COFACTOR DE UN ELEMENTO**

✔ **DEFINICIÓN** 
- El cofactor a<sub>ij</sub> de un elemento a<sub>ij</sub> de la matriz A = [a<sub>ij</sub>]<sub>nxm</sub> se define como: C<sub>ij</sub> = (-1)<sup>i+j</sup> M<sub>ij</sub> 
- Así definimos la matriz de los cofactores de A denotada Cofac(A) = [C<sub>ij</sub>]<sub>nxm</sub> como la siguiente matriz: Cofac(A) = [C<sub>ij</sub>]<sub>nxm</sub>

>[!sidenote]- **EJEMPLO:** 
>![Ejemplo de un cofactor de un elemento.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Ejemplo%20de%20un%20cofactor%20de%20un%20elemento.png)

---
**DETERMINANTE SEGÚN EL DESARROLLO DE LAPLACE**

✔ **DEFINICIÓN** 
- Dada una matriz A = [a<sub>ij</sub>]<sub>nxm</sub> definimos el valor del determinante de la matriz como:

![Determinante según el desarrollo de Laplace I.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Determinante%20seg%C3%BAn%20el%20desarrollo%20de%20Laplace%20I.png)
![Determinante según el desarrollo de Laplace II.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Determinante%20seg%C3%BAn%20el%20desarrollo%20de%20Laplace%20II.png)

>[!sidenote]- **EJEMPLO:** 
>![Ejemplo de Determinante según el desarrollo de Laplace.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Ejemplo%20de%20Determinante%20seg%C3%BAn%20el%20desarrollo%20de%20Laplace.png)

---
**MÉTODO PRÁCTICO (PIVOT)**

✔ **DEFINICIÓN**
- Por el desarrollo de Laplace, es conveniente tener en alguna fila o columna el mayor número de ceros, para evitar calcular sus cofactores. Por la aplicación de las propiedades de los determinantes podemos obtener uno conocido como Pivot, con el cual hacemos ceros los demás elementos de la fila o columna elegida 

>[!sidenote]- **EJEMPLO:** 
>![Ejemplo del método práctico Pivot.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Ejemplo%20del%20m%C3%A9todo%20pr%C3%A1ctico%20Pivot.png)

---
**MATRIZ SINGULAR Y NO SINGULAR**

✔ **DEFINICIÓN** 
- Si una matriz A = [a<sub>ij</sub>]<sub>nxm</sub> cumple que se dice |A| ≠ 0 que es una matriz no singular. En caso |A| = 0 se dirá que es una matriz singular 

✔ **PROPIEDAD** 

![Determinante singular Propiedad I.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Determinante%20singular%20Propiedad%20I.png)

---
**MATRIZ ADJUNTA**

✔ **DEFINICIÓN**
- Definimos la matriz adjunta A = [a<sub>ij</sub>]<sub>nxm</sub> de como la matriz transpuesta de la matriz
- adj(A) = (Cofac(A))<sup>t</sup> 

>[!sidenote]- **EJEMPLO:** 
>Hallar el Cofac(A), donde: 
>![Ejemplo de matriz adjunta I.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Ejemplo%20de%20matriz%20adjunta%20I.png)
>![Ejemplo de matriz adjunta II.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Ejemplo%20de%20matriz%20adjunta%20II.png)

✔ **PROPIEDADES** 
- Sean A, B dos matrices del mismo orden n, se cumple:

![Propiedades de la matriz adjunta.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Propiedades%20de%20la%20matriz%20adjunta.png)

---
**MATRIZ INVERSA**

✔ **DEFINICIÓN** 
- Sea A una matriz no singular, existe una matriz B del mismo orden de A, tal que cumple: A.B = B.A = I

✔ **TEOREMA**
- Sea A una matriz no singular de orden 2

![Teorema de la matriz inversa I.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Teorema%20de%20la%20matriz%20inversa%20I.png)

>[!sidenote]- **DEMOSTRACIÓN:** 
>![Demostración del Teorema de la matriz inversa I.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Demostraci%C3%B3n%20del%20Teorema%20de%20la%20matriz%20inversa%20I.png)

✔ **PROPIEDADES** 
- Sea A y B dos matrices no singulares, se cumple:

![Propiedades de la matriz inversa.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Propiedades%20de%20la%20matriz%20inversa.png)

✔ **CÁLCULO DE LA INVERSA DE UNA MATRIZ USANDO LA ADJUNTA** 

![Cálculo de la matriz inversa usando la adjunta.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/C%C3%A1lculo%20de%20la%20matriz%20inversa%20usando%20la%20adjunta.png)

>[!sidenote]- **EJEMPLO:** 
>![Ejemplo del cálculo de la matriz inversa usando la adjunta.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Ejemplo%20del%20c%C3%A1lculo%20de%20la%20matriz%20inversa%20usando%20la%20adjunta.png)

---
**MATRICES SEMEJANTES** 

✔ **DEFINICIÓN** 
- Se dice que dos matrices A y B de orden n sobre K, son semejantes si existe una matriz invertible P, tal que AP = PB 

✔ **SIMBÓLICAMENTE**

![Matrices semejantes.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Matrices%20semejantes.png)

✔ **TEOREMAS** 
- Sean A y B dos matrices semejantes, se cumple:

![Teoremas de las matrices semejantes.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Teoremas%20de%20las%20matrices%20semejantes.png)

>[!sidenote]- **NOTA:** 
![Nota sobre las matrices semejantes.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Nota%20sobre%20las%20matrices%20semejantes.png)

✔ **PROPIEDAD**
- Toda matriz A de orden 2, cumple:

![Propiedad de las matrices semejantes.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Propiedad%20de%20las%20matrices%20semejantes.png)

>[!sidenote]- **DEMOSTRACIÓN** 
>![Demostración de la propieda de las matrices semejantes.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Demostraci%C3%B3n%20de%20la%20propieda%20de%20las%20matrices%20semejantes.png)

✔ **TEOREMA**
- Sean A y B dos matrices cuadradas del mismo orden, se cumple:

![Teoremas de las matrices semejantes II.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Teoremas%20de%20las%20matrices%20semejantes%20II.png)

---
**PRÁCTICA**
>[[10. ÁLGEBRA/PRÁCTICA/Determinantes\|PRESIONA AQUÍ]]

---
**SIGUIENTE TEMA:** 
>[[10. ÁLGEBRA/TEORÍA/Programación lineal\|PROGRAMACIÓN LINEAL]]

---
**ANTERIOR TEMA:** 
>[[10. ÁLGEBRA/TEORÍA/Matrices\|MATRICES]]

