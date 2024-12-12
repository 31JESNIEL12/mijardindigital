---
{"dg-publish":true,"permalink":"/10-algebra/teoria/division-algebraica/","tags":["Álgebra","Teoría","Incompleto"]}
---

# TEORÍA
---
**DIVISIÓN ALGEBRAICA** 

>[!sidenote]- **LINKS EXTERNOS DE CLASES** 
>[DIVISIÓN ALGEBRAICA PARTE 01 - GRUPO CIENCIAS](https://www.youtube.com/watch?v=aFbgnC4H-0o) 
>[DIVISIÓN ALGEBRAICA PARTE 02 - GRUPO CIENCIAS](https://www.youtube.com/watch?v=CIxwXkNE7zk) 
>[DIVISIÓN ALGEBRAICA PARTE 03 - GRUPO CIENCIAS](https://www.youtube.com/watch?v=FDf5MFpi-A0) 
>[DIVISIÓN DE POLINOMIOS - ÁLGEBRA CON LALO](https://www.youtube.com/watch?v=63y_SGwAoV4) 
>[DIVISIÓN DE POLINOMIOS - VON NEUMANN](https://youtu.be/y2c5KXUBA2g?si=qvWTNsnn6mHeS_z3) 
>[DIVISIÓN DE POLINOMIOS II RUFFINI - VON NEUMANN](https://youtu.be/9PlodDa1eeg?si=5NZI9U9fWH_N3uvT) 
>[TÉCNICA DE LOS DIVISORES BINOMIOS - VON NEUMANN](https://youtu.be/XSqgu6VmmHQ?si=6McuSdmNASFBy34B) 

✔ **MÉTODO DE PAOLO RUFFINI**
- Se emplea para dividir polinomios enteros en una variable dada por divisores de la forma o cualquier otra expresión 
- Se usa para dividir P(x) por binomios de la forma x+b, b ∈ R

![Esquema de Ruffini.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Esquema%20de%20Ruffini.png)

✔ **RUFFINI PARA DIVISOR (ax + b), a ≠ 0**
- El divisor (ax + b) lo dividimos por a, obtenemos x + b/a pero el cociente queda multiplicado por a, hacemos la división y el cociente obtenido se divide por a, el residuo no cambia

![División por ax + b.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Divisi%C3%B3n%20por%20ax%20+%20b.png)

**EJEMPLO**:

![Ejemplo de Ruffini I.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Ejemplo%20de%20Ruffini%20I.png)

✔ **RUFFINI PARA DIVISOR Xⁿ + b**
- Solo se puede hacer la división, si los exponentes del dividendo son múltiplos del exponente del divisor, esto permite el problema a dividir P(y) por (y+b)

**EJEMPLO**:
![Ejemplo de Ruffini II.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Ejemplo%20de%20Ruffini%20II.png)

---
**MÉTODO DE WILLIAM HORNER**
Se emplea para dividir por lo general dos polinomios enteros en una variable dad. Los divisores serán de grado dos o más

![Esquema de Horner.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Esquema%20de%20Horner.png)

**EJEMPLO**

![Ejemplo de división por Horner.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Ejemplo%20de%20divisi%C3%B3n%20por%20Horner.png)

---
**MÉTODO CLÁSICO DE DIVISIÓN DE POLINOMIO O DE EUCLIDES**
Para desarrollar el algoritmo, se ordenan los polinomios según los exponentes decrecientes consecutivos de la letra ordenatriz:

1. Se completan y ordenan los polinomios con respecto a una sola letra en forma descendente
2. Se divide el primer término del dividendo entre el divisor, obteniéndose el cociente, luego se multiplica por cada uno de los términos del divisor y el resultado se resta del dividendo
3. Se baja el siguiente término del dividendo y se repite el paso anterior tantas veces hasta que el grado del residuo sea menor que el grado del divisor

**EJEMPLO**:

![Ejemplo de método clásico de  división.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Ejemplo%20de%20m%C3%A9todo%20cl%C3%A1sico%20de%20%20divisi%C3%B3n.png)

---
**TEOREMA DEL RESIDUO O DE R. DESCARTES**
Sea P(x) un polinomio que representa el dividendo, y ax ± b el divisor, para calcular el resto de dicha división en forma directa, se iguala el divisor a cero; se despeja la variable y esta se reemplaza en el dividendo obteniéndose el valor numérico del polinomio, y este resultado representa el residuo de dicha división. Sirve para aquellas divisiones a las que se puede aplicar el método de Ruffini, por lo general.

![Teorema del residuo.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Teorema%20del%20residuo.png)

**EJEMPLO**:

![Ejemplo del teorema del residuo.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Ejemplo%20del%20teorema%20del%20residuo.png)

---
**TEOREMA DEL FACTOR O ETIENNE BEZOUT**

**ENUNCIADO:** 

![Teorema del factor.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Teorema%20del%20factor.png)

**EJEMPLO**:

![Ejemplo del teorema del factor.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Ejemplo%20del%20teorema%20del%20factor.png)

---
**DIVISIBILIDAD DE POLINOMIOS**

✔ **DEFINICIÓN**
- Sean los polinomios P(x), A(x) ∈ K(x): Se dice que el polinomio P(x) es divisible por A(x) ≠ 0, si existe otro polinomio Q(x) ∈ K(x), tal que: **P(x) = A(x) . Q(x)**

✔ **TEOREMAS**

![Teorema de divisibilidad de polinomios I.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Teorema%20de%20divisibilidad%20de%20polinomios%20I.png)
![Teorema de divisibilidad de polinomios II.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Teorema%20de%20divisibilidad%20de%20polinomios%20II.png)
![Teorema de divisibilidad de polinomios III.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Teorema%20de%20divisibilidad%20de%20polinomios%20III.png)

>[!sidenote]- **EJEMPLO:** 
![Ejemplo de divisibilidad de polinomios.png](/img/user/1.%20ELEMENTOS%20GR%C3%81FICOS/Ejemplo%20de%20divisibilidad%20de%20polinomios.png)

---
**PRÁCTICA** 
>[[10. ÁLGEBRA/PRÁCTICA/División Algebraica\|PRESIONA AQUÍ]]

---
**SIGUIENTE TEMA:**
>[[10. ÁLGEBRA/TEORÍA/Cocientes notables\|COCIENTES NOTABLES]]

---
**ANTERIOR TEMA:** 
>[[10. ÁLGEBRA/TEORÍA/Productos notables\|PRODUCTOS NOTABLES]]

