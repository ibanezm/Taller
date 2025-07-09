const courseData = {
    id: 1,
    title: "Mecánica Cuántica",
    lessons: [
        // Capítulo 1: Postulados de la Mecánica Cuántica
        {
            id: 1,
            title: "Herramientas Matemáticas de la Mecánica Cuántica",
            duration: "30 min",
            videoId: "A1OegIvuTXM",
            description: "Introducción a la matemática necesaria para entender la mecánica cuántica...",
            subtopics: [
                {
                    title: "Notación de Dirac",
                    duration: "10 min",
                    description: `En mecánica cuántica, los estados físicos se representan por vectores en un espacio de Hilbert complejo. 
    La notación de Dirac utiliza los \\( \\mathbf{kets} \\) \\( |v\\rangle \\) para denotar vectores columna, y sus transpuestas
    \\( |v\\rangle^T \\) como vectores fila, mientras que el operador adjunto \\( |v\\rangle^\\dagger \\) corresponde a los \\( \\mathbf{bras} \\) \\( \\langle v| \\), que son los vectores duales.

Estas definiciones permiten manipular estados y operadores con las siguientes propiedades algebraicas fundamentales:

\\[
|v\\rangle = \\begin{bmatrix}
v_1 \\\\
v_2 \\\\
\\vdots \\\\
v_n
\\end{bmatrix}, \\quad
|v\\rangle^T = \\begin{bmatrix}
v_1 & v_2 & \\dots & v_n
\\end{bmatrix}, \\quad
|v\\rangle^\\dagger = \\begin{bmatrix}
v_1^* & v_2^* & \\dots & v_n^*
\\end{bmatrix} = \\langle v|.
\\]

Aquí, el símbolo \\( * \\) indica el conjugado complejo.

Además, la operación adjunta cumple:

\\[
(|v\\rangle^\\dagger)^\\dagger = |v\\rangle, \\quad
(c_1 |v\\rangle + c_2 |w\\rangle)^\\dagger = c_1^* \\langle v| + c_2^* \\langle w|,
\\]

donde \\( c_1, c_2 \\in \\mathbb{C} \\).

Las principales propiedades de los bras y kets son:

\\[
\\begin{aligned}
&1.\\ (|v\\rangle^\\dagger)^\\dagger = |v\\rangle \\\\
&2.\\ (\\alpha|v\\rangle + \\beta|w\\rangle)^\\dagger = \\alpha^*\\langle v| + \\beta^*\\langle w| \\\\
&3.\\ |\\alpha v\\rangle = \\alpha|v\\rangle \\\\
&4.\\ \\langle \\alpha v| = \\alpha^* \\langle v| \\\\
&5.\\ \\alpha^\\dagger = \\alpha^*
\\end{aligned}
\\]`
                },
                {
            title: "Productos internos y ortogonalidad",
            duration: "10 min",
            description: `En mecánica cuántica, el producto interno entre dos vectores \\( |u\\rangle \\) y \\( |v\\rangle \\) se define como:

\\[
\\langle u | v \\rangle = \\sum_{g=1}^N u_g^* v_g
\\]

Este producto satisface las siguientes propiedades fundamentales:

1. Definición positiva:
\\[
\\langle u | u \\rangle = \\sum_{g=1}^N |u_g|^2 \\geq 0
\\]

2. Antilinealidad en el primer argumento:
\\[
\\langle \\alpha u + \\beta v | w \\rangle = \\alpha^* \\langle u | w \\rangle + \\beta^* \\langle v | w \\rangle
\\]

3. Linealidad en el segundo argumento:
\\[
\\langle u | \\alpha v + \\beta w \\rangle = \\alpha \\langle u | v \\rangle + \\beta \\langle u | w \\rangle
\\]

4. Relación de conjugación:
\\[
\\langle u | v \\rangle^* = \\langle v | u \\rangle
\\]

Para garantizar los espacios entre párrafos y fórmulas, usa dobles espacios y saltos de línea como se muestra. Las enumeraciones se mantienen con números simples seguidos de punto.

La ortogonalidad \\( (\\langle u | v \\rangle = 0) \\) indica estados físicamente distinguibles.`
        },
        {
    title: "Operadores en Mecánica Cuántica",
    duration: "15 min",
    description: `En el formalismo de Dirac, los operadores lineales \\( \\hat{A} \\) representan observables físicos y transformaciones entre estados. Estos se expresan como matrices en la base del espacio de Hilbert:

\\[
\\hat{A} = \\begin{pmatrix}
    a_{11} & a_{12} & \\cdots & a_{1N} \\\\
    \\vdots & \\vdots & \\ddots & \\vdots \\\\
    a_{N1} & a_{N2} & \\cdots & a_{NN}
\\end{pmatrix}
\\]

El operador adjunto \\( \\hat{A}^\\dagger \\), crucial en mecánica cuántica, se define mediante:

\\[
(\\hat{A}^\\dagger)_{ij} = A^*_{ji}
\\]

lo que corresponde a transponer y conjugar cada elemento. Equivalentemente:

\\[
\\hat{A}^\\dagger = \\begin{pmatrix}
    a_{11}^* & a_{21}^* & \\cdots & a_{N1}^* \\\\
    a_{12}^* & a_{22}^* & \\cdots & a_{N2}^* \\\\
    \\vdots & \\vdots & \\ddots & \\vdots \\\\
    a_{1N}^* & a_{2N}^* & \\cdots & a_{NN}^*
\\end{pmatrix}
\\]

<strong>Propiedades Fundamentales:</strong>

1. Linealidad en kets y bras:
\\[
\\hat{A}(\\alpha|u\\rangle + \\beta |w\\rangle) = \\alpha \\hat{A}|u\\rangle + \\beta \\hat{A}|w\\rangle
\\]
\\[
(\\alpha \\langle u| + \\beta \\langle w|)\\hat{A} = \\alpha \\langle u|\\hat{A} + \\beta \\langle w|\\hat{A}
\\]

2. Relaciones de adjunción:
\\[
\\langle u|\\hat{A}|w\\rangle^\\dagger = \\langle w|\\hat{A}^\\dagger|u \\rangle
\\]
\\[
(\\hat{A}|u\\rangle)^\\dagger = \\langle u|\\hat{A}^\\dagger
\\]

3. Propiedades algebraicas del operador adjunto:
\\begin{align*}
(\\hat{A}^\\dagger)^\\dagger &= \\hat{A} \\\\
(\\alpha \\hat{A})^\\dagger &= \\alpha^* \\hat{A}^\\dagger \\\\
(\\hat{A}^n)^\\dagger &= (\\hat{A}^\\dagger)^n \\\\
(\\hat{A} + \\hat{B})^\\dagger &= \\hat{A}^\\dagger + \\hat{B}^\\dagger \\\\
(\\hat{A} \\hat{B})^\\dagger &= \\hat{B}^\\dagger \\hat{A}^\\dagger
\\end{align*}

    Estas propiedades garantizan que los valores esperados \\\( \\langle \\psi|\\hat{A}|\\psi \\rangle \\\) sean reales cuando \\\( \\hat{A} \\\) es hermítico (\\\( \\hat{A}^\\dagger = \\hat{A} \\\)).`
},
{
    title: "Operadores y sus operaciones",
    duration: "20 min",
    description: `En el formalismo matemático de la mecánica cuántica, los operadores representan observables físicos y transformaciones entre estados.<br><br>

<strong>1. Traza de un Operador</strong><br>
La traza de un operador cuántico corresponde a la suma de sus elementos diagonales:<br>
\\[
Tr(\\hat{A})= \\sum_{i=1}^N A_{ii}
\\]<br><br>

Esta cantidad es particularmente importante porque:<br>
• Es invariante bajo cambios de base<br>
• Permite calcular valores esperados<br>
• Aparece en definiciones de entropía cuántica<br><br>

Una propiedad fundamental es su comportamiento cíclico:<br>
\\[
Tr(\\hat{A}\\hat{B})= Tr(\\hat{B}\\hat{A})
\\]<br><br>


<strong>2. El Conmutador Cuántico</strong><br>
El conmutador mide el grado de no conmutatividad entre operadores:<br>
\\[
[\\hat{A},\\hat{B}]= \\hat{A}\\hat{B} - \\hat{B}\\hat{A}
\\]<br><br>

Cuando [A,B] = 0, los operadores son compatibles y comparten autofunciones. Sus propiedades algebraicas son:<br><br>

\\begin{align*}
[\\hat{A},\\hat{B} + \\hat{C}] &= [\\hat{A},\\hat{B}] +[\\hat{A}, \\hat{C}] & \text{(Linealidad)}\\\\
[\\hat{A},\\hat{B}]&= -[\\hat{B},\\hat{A}] & \text{(Antisimetría)}\\\\
[\\hat{A},\\alpha \\hat{B}]&= \\alpha[\\hat{A}, \\hat{B}] & \text{(Homogeneidad)}\\\\
[\\hat{A},\\hat{B}\\hat{C}] &= \\hat{B}[\\hat{A},\\hat{C}] + [\\hat{A},\\hat{B}]\\hat{C} & \text{(Regla de Leibniz)}
\\end{align*}<br><br>


<strong>3. Clases Fundamentales de Operadores</strong><br><br>

• <u>Operadores Hermíticos</u>:<br>
\\[ \\hat{A}^\\dagger= \\hat{A} \\]<br>
Representan observables físicos con autovalores reales (energía, momento, etc.)<br><br>

• <u>Operadores Unitarios</u>:<br>
\\[ \\hat{A}^\\dagger= \\hat{A}^{-1} \\]<br>
Describen evoluciones temporales y rotaciones que preservan probabilidades<br><br>

• <u>Operadores Antihermíticos</u>:<br>
\\[ \\hat{A}^\\dagger= -\\hat{A} \\]<br>
Aparecen como generadores de transformaciones unitarias infinitesimales<br><br>


Estas clasificaciones son esenciales para:<br>
- Construir mediciones válidas (hermíticos)<br>
- Modelar dinámicas cuánticas (unitarios)<br>
- Desarrollar teoría de perturbaciones (antihermíticos)<br><br>


<strong>4. Operador de Traslación</strong><br><br>

En mecánica cuántica, el operador de traslación \\( \\hat{T}(\\alpha) \\) desplaza estados en el espacio:<br><br>

\\[
\\hat{T}(\\alpha)\\ket{x} = \\ket{x+\\alpha}
\\]<br><br>

<strong>Relación con el operador momento:</strong><br>
El operador de traslación puede expresarse en términos del operador momento \\( \\hat{p} \\):<br><br>

\\[
\\hat{T}(\\alpha) = \\exp\\left(-\\frac{i\\alpha\\hat{p}}{\\hbar}\\right)
\\]<br><br>

<strong>Representación en la base de posición:</strong><br>
Para un estado \\( \\ket{\\psi} \\), la acción del operador de traslación es:<br><br>

\\[
\\braket{x|\\hat{T}(\\alpha)|\\psi} = \\psi(x-\\alpha)
\\]<br><br>

<strong>Conexión con las bases {|x⟩} y {|k⟩}:</strong><br>
Partiendo de la relación conocida:<br><br>

\\[
\\braket{x|k} = \\frac{e^{ikx}}{\\sqrt{2\\pi}}
\\]<br><br>

Al aplicar una traslación \\( x' = x - \\alpha \\):<br><br>

\\[
\\braket{x-\\alpha|k} = \\frac{e^{ik(x-\\alpha)}}{\\sqrt{2\\pi}} = e^{-ik\\alpha}\\braket{x|k}
\\]<br><br>

<strong>Propiedades clave:</strong><br>
1. Unitariedad:<br>
\\[
\\hat{T}^\\dagger(\\alpha) = \\hat{T}(-\\alpha) = \\hat{T}^{-1}(\\alpha)
\\]<br><br>

2. Relación de conmutación:<br>
\\[
[\\hat{x}, \\hat{T}(\\alpha)] = \\alpha\\hat{T}(\\alpha)
\\]<br><br>

3. Composición de traslaciones:<br>
\\[
\\hat{T}(\\alpha)\\hat{T}(\\beta) = \\hat{T}(\\alpha+\\beta)
\\]<br><br>

<strong>Interpretación física:</strong><br>
• Genera desplazamientos espaciales en sistemas cuánticos<br>
• Fundamental en la descripción de sistemas periódicos<br>
• Relacionado con la invarianza traslacional en sistemas físicos`
},
                {
    title: "Bases Vectoriales ",
    duration: "25 min",
    description: `<strong>4. Bases Vectoriales y su Importancia</strong><br><br>

En mecánica cuántica, las bases vectoriales son fundamentales para representar estados y operadores. Una base ortonormal \\( |u_i\\rangle \\) satisface:<br><br>

\\begin{align*}
\\langle u_i|u_j\\rangle &= \\delta_{ij} \\quad \\text{(Ortogonalidad)} \\\\
\\sum_{i=1}^N |u_i\\rangle \\langle u_i| &= \\hat{I} \\quad \\text{(Completitud)}
\\end{align*}<br><br>

<strong>¿Por qué son cruciales?</strong><br>
• La ortogonalidad (\\( \\delta_{ij} \\)) garantiza que los estados base sean distinguibles<br>
• La relación de completitud permite descomponer cualquier operador o estado<br>
• Proporcionan un sistema de referencia para mediciones cuánticas<br><br>


<strong>5. Descomposición en Bases Arbitrarias</strong><br><br>

Para una base arbitraria \\( \\{|u_i\\rangle\\} \\) y un vector \\( |\\phi\\rangle \\):<br><br>

\\begin{align*}
|\\phi \\rangle &= \\sum_{i=1}^N |u_i \\rangle \\langle u_i|\\phi \\rangle \\\\
&= \\sum_{i=1}^N \\phi_i|u_i \\rangle \\quad \\text{(donde } \\phi_i = \\langle u_i|\\phi \\rangle)
\\end{align*}<br><br>

<strong>Aplicaciones clave:</strong><br>
• Representación de estados en diferentes bases (posición, momento, etc.)<br>
• Cálculo de amplitudes de probabilidad \\( \\langle u_i|\\phi\\rangle \\)<br>
• Cambios de base en problemas de simetría<br><br>


<strong>6. Representación de Operadores</strong><br><br>

Todo operador \\( \\hat{A} \\) puede expandirse en una base como:<br><br>

\\begin{align*}
\\hat{A} &= \\sum_{i,j=1}^N |u_i\\rangle \\langle u_i|\\hat{A}|u_j\\rangle \\langle u_j| \\\\
&= \\sum_{i,j=1}^N A_{ij}|u_i\\rangle \\langle u_j| \\quad \\text{(con } A_{ij} = \\langle u_i|\\hat{A}|u_j\\rangle)
\\end{align*}<br><br>

<strong>Interpretación física:</strong><br>
• Los elementos \\( A_{ij} \\) son "amplitudes de transición" entre estados base<br>
• La matriz \\( A_{ij} \\) representa completamente al operador en esa base<br>
• Fundamental para cálculos numéricos y simulaciones cuánticas<br><br>

<strong>Ejemplo importante:</strong><br>
En la base de posición \\( \\{|x\\rangle\\} \\), el operador Hamiltoniano se escribe:<br>
\\[
\\hat{H} = \\int dx\\, dx' |x\\rangle \\langle x|\\hat{H}|x'\\rangle \\langle x'|
\\]`
},
{
    title: "Problema de Valores Propios ",
    duration: "20 min",
    description: `<strong>7. El Problema de Valores Propios</strong><br><br>

La ecuación fundamental para operadores en mecánica cuántica es:<br><br>

\\[
\\hat{A}\\ket{a_i} = a_i\\ket{a_i}
\\]<br><br>

<strong>Interpretación física:</strong><br>
• \\( \\hat{A} \\): Operador que representa un observable físico<br>
• \\( a_i \\): Posibles resultados de medición (valores propios reales)<br>
• \\( \\ket{a_i} \\): Estados cuánticos asociados a cada resultado<br><br>


<strong>8. Casos Fundamentales</strong><br><br>

<strong>a) Operadores Hermíticos</strong> (\\( \\hat{A}^\\dagger = \\hat{A} \\)):<br>
\\[
\\hat{A}\\ket{a_i} = a_i\\ket{a_i} \\quad \\text{con} \\quad a_i^* = a_i
\\]<br>
• Autovalores reales (esencial para mediciones físicas)<br>
• Autovectores ortogonales: \\( \\langle a_i|a_j\\rangle = \\delta_{ij} \\)<br>
• Forman bases completas para el espacio de Hilbert<br>
• Ejemplos: Hamiltoniano, operadores de posición y momento<br><br>


<strong>b) Operadores Antihermíticos</strong> (\\( \\hat{A}^\\dagger = -\\hat{A} \\)):<br>
\\[
\\hat{A}\\ket{a_i} = a_i\\ket{a_i} \\quad \\text{con} \\quad a_i^* = -a_i
\\]<br>
• Autovalores imaginarios puros<br>
• Autovectores ortogonales forman bases completas<br>
• Relacionados con generadores de simetrías unitarias<br>
• Fundamental en teoría de grupos y álgebras de Lie<br><br>


<strong>c) Operadores Unitarios</strong> (\\( \\hat{U}\\hat{U}^\\dagger = \\hat{I} \\)):<br>
\\[
\\hat{U}\\ket{u_i} = u_i\\ket{u_i} \\quad \\text{con} \\quad |u_i| = 1
\\]<br>
• Autovalores son fases complejas (módulo 1)<br>
• Autovectores ortogonales entre sí<br>
• Describen evoluciones temporales y rotaciones<br>
• Conservan probabilidades: \\( \\langle \\psi|\\psi\\rangle \\) constante<br><br>


<strong>Importancia en mediciones cuánticas:</strong><br>
• Los autovalores \\( a_i \\) son los únicos resultados posibles al medir \\( \\hat{A} \\)<br>
• La probabilidad de obtener \\( a_i \\) es \\( |\\langle a_i|\\psi\\rangle|^2 \\)<br>
• Después de medir, el sistema colapsa al autoestado \\( \\ket{a_i} \\)`
},
{
    title: "Espacios Vectoriales Continuos ",
    duration: "25 min",
    description: `<strong>9. Bases Continuas en Espacios de Hilbert</strong><br><br>

En sistemas cuánticos con espectro continuo (como posición o momento), las bases discretas se generalizan a:<br><br>

\\begin{align}
\\langle a_\\lambda | a_{\\lambda'}\\rangle &= \\delta(\\lambda - \\lambda') \\quad \\text{(Ortogonalidad)} \\\\
\\int |a_\\lambda\\rangle\\langle a_\\lambda| d\\lambda &= \\hat{I} \\quad \\text{(Relación de completitud)}
\\end{align}<br><br>

<strong>Interpretación física:</strong><br>
• La delta de Dirac reemplaza a la delta de Kronecker<br>
• Las integrales sustituyen a las sumatorias discretas<br>
• Fundamental para sistemas con grados de libertad continuos<br><br>


<strong>10. Base de Posición</strong><br><br>

Para el operador posición \\( \\hat{x} \\):<br><br>

\\[
\\hat{x}|x\\rangle = x|x\\rangle \\quad \\text{con} \\quad x \\in \\mathbb{R}
\\]<br>

Propiedades clave:<br>
• Ortogonalidad: \\[ \\langle x|x'\\rangle = \\delta(x-x') \\]<br>
• Completitud: \\[ \\int_{-\\infty}^\\infty |x\\rangle\\langle x| dx = \\hat{I} \\]<br>
• Descomposición de estados: \\[ |\\phi\\rangle = \\int_{-\\infty}^\\infty |x\\rangle\\phi(x) dx \\]<br><br>

<strong>Operadores en base posición:</strong><br>
\\[
\\hat{A} = \\iint_{-\\infty}^\\infty A(x,x') |x\\rangle\\langle x'| dx\\,dx'
\\]<br>
donde \\[ A(x,x') = \\langle x|\\hat{A}|x'\\rangle \\]<br><br>


<strong>11. Base de Momento (k-espacio)</strong><br><br>

Para el operador \\( \\hat{k} \\) (número de onda):<br><br>

\\[
\\hat{k}|k\\rangle = k|k\\rangle \\quad \\text{con} \\quad k \\in \\mathbb{R}
\\]<br>

Propiedades análogas:<br>
• Ortogonalidad: \\[ \\langle k|k'\\rangle = \\delta(k-k') \\]<br>
• Completitud: \\[ \\int_{-\\infty}^\\infty |k\\rangle\\langle k| dk = \\hat{I} \\]<br>
• Descomposición: \\[ |\\phi\\rangle = \\int_{-\\infty}^\\infty \\tilde{\\phi}(k)|k\\rangle dk \\]<br><br>


<strong>12. Relación entre Bases</strong><br><br>

Las transformaciones entre bases se expresan como:<br><br>

1. Transformada posición → momento:<br>
\\[
\\tilde{\\phi}(k) = \\langle k|\\phi\\rangle = \\int_{-\\infty}^\\infty \\langle k|x\\rangle\\phi(x) dx
\\]<br>

2. Transformada momento → posición:<br>
\\[
\\phi(x) = \\langle x|\\phi\\rangle = \\int_{-\\infty}^\\infty \\langle x|k\\rangle\\tilde{\\phi}(k) dk
\\]<br><br>

<strong>Interpretación:</strong><br>
• \\( \\langle x|k\\rangle \\) son las funciones de onda planas \\[ \\frac{1}{\\sqrt{2\\pi}}e^{ikx} \\]<br>
• Estas relaciones son la base matemática de la transformada de Fourier en QM<br>
• Permiten cambiar entre representaciones de posición y momento`
},

                // ... otros subtemas
            ]
        }, // ← Coma añadida
        
        // Capítulo 2: Representaciones y Bases
        {
            id: 2,
            title: "Transformaciones y Teoría de Sturm-Liouville",
            duration: "35 min",
            videoId: "VIDEO_ID_2",
            description: "Estudiamos las distintas transformaciones y su importancia.",
            subtopics: [
                {
    title: "Transformada de Fourier ",
    duration: "30 min",
    description: `<strong>13. Transformada de Fourier </strong><br><br>

La conexión fundamental entre las bases de posición y momento viene dada por:<br><br>

\\[
\\phi(x) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^\\infty e^{ikx} \\tilde{\\phi}(k) dk
\\]
\\[
\\tilde{\\phi}(k) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^\\infty e^{-ikx} \\phi(x) dx
\\]<br><br>

<strong>Origen matemático:</strong><br>
Estas relaciones emergen naturalmente al identificar:<br>
\\[
\\langle x|k\\rangle = \\frac{e^{ikx}}{\\sqrt{2\\pi}} \\quad \\text{y} \\quad \\langle k|x\\rangle = \\frac{e^{-ikx}}{\\sqrt{2\\pi}}
\\]<br>
que son las funciones propias del operador momento en la base de posición.<br><br>


<strong>14. Propiedades de la Delta de Dirac</strong><br><br>

La delta de Dirac juega un papel crucial en bases continuas:<br><br>

\\[
\\delta(x) = \\frac{1}{2\\pi} \\int_{-\\infty}^\\infty e^{ikx} dk
\\]
\\[
\\delta(-x) = \\delta(x) \\quad \\text{(Simetría)}
\\]
\\[
\\delta(ax) = \\frac{1}{|a|}\\delta(x) \\quad \\text{(Escalado)}
\\]<br><br>

<strong>Interpretación física:</strong><br>
• La delta representa estados perfectamente localizados<br>
• Es esencial para la ortogonalidad en bases continuas<br>
• Surge naturalmente en la descomposición espectral<br><br>


<strong>15. Acción de Operadores en Diferentes Bases</strong><br><br>

<strong>En base posición (x):</strong><br>
\\begin{align*}
\\langle x|\\hat{x}|\\phi\\rangle &= x\\phi(x) \\\\
\\langle x|f(\\hat{x})|\\phi\\rangle &= f(x)\\phi(x) \\\\
\\langle x|\\hat{k}|\\phi\\rangle &= -i\\frac{d}{dx}\\phi(x) \\\\
\\langle x|\\hat{k}^n|\\phi\\rangle &= (-i)^n\\frac{d^n}{dx^n}\\phi(x) \\\\
\\langle x|g(\\hat{k})|\\phi\\rangle &= g\\left(-i\\frac{d}{dx}\\right)\\phi(x)
\\end{align*}<br><br>

<strong>En base momento (k):</strong><br>
\\begin{align*}
\\langle k|\\hat{k}|\\phi\\rangle &= k\\tilde{\\phi}(k) \\\\
\\langle k|\\hat{k}^n|\\phi\\rangle &= k^n\\tilde{\\phi}(k) \\\\
\\langle k|\\hat{x}|\\phi\\rangle &= i\\frac{d}{dk}\\tilde{\\phi}(k) \\\\
\\langle k|f(\\hat{x})|\\phi\\rangle &= f\\left(i\\frac{d}{dk}\\right)\\tilde{\\phi}(k)
\\end{align*}<br><br>


<strong>16. Diccionario de Proyecciones</strong><br><br>

<strong>Espacio-x:</strong><br>
\\[
\\hat{x} \\rightarrow x \\quad , \\quad \\hat{k} \\rightarrow -i\\frac{d}{dx}
\\]
\\[
f(\\hat{x}) \\rightarrow f(x) \\quad , \\quad g(\\hat{k}) \\rightarrow g\\left(-i\\frac{d}{dx}\\right)
\\]<br><br>

<strong>Espacio-k:</strong><br>
\\[
\\hat{x} \\rightarrow i\\frac{d}{dk} \\quad , \\quad \\hat{k} \\rightarrow k
\\]
\\[
f(\\hat{x}) \\rightarrow f\\left(i\\frac{d}{dk}\\right) \\quad , \\quad g(\\hat{k}) \\rightarrow g(k)
\\]<br><br>


<strong>17. Ejemplo Resuelto</strong><br><br>

Proyectar la ecuación operatorial:<br>
\\[
(\\hat{x}\\hat{k} + \\hat{k}^2)\\ket{\\phi} = \\ket{\\psi}
\\]<br>

<strong>Solución en espacio-k:</strong><br>
\\[
i \\frac{d}{dk}\\left(k\\tilde{\\phi}(k)\\right) + k^2\\tilde{\\phi}(k) = \\tilde{\\psi}(k)
\\]<br>

<strong>Paso a paso:</strong><br>
1. Aplicar \\[ \\hat{x} \\rightarrow i\\frac{d}{dk} \\]<br>
2. Aplicar \\[ \\hat{k} \\rightarrow k \\]<br>
3. Usar regla del producto para la derivada<br>
4. Simplificar términos<br><br>

<strong>Interpretación:</strong> Muestra cómo operadores diferenciales surgen naturalmente al cambiar entre representaciones.`
},
{
    title: "Transformaciones Unitarias ",
    duration: "18 min",
    description: `<strong>1. Transformaciones Unitarias Infinitesimales</strong><br><br>

Consideremos una transformación unitaria infinitesimal \\( \\hat{U}_\\alpha(\\hat{G}) \\):<br><br>

\\[
\\hat{U}_\\alpha(\\hat{G}) = \\hat{I} + i\\alpha\\hat{G}
\\]<br><br>

donde:<br>
• \\( \\alpha \\in \\mathbb{R} \\) (|\\(\\alpha\\)| ≪ 1)<br>
• \\( \\hat{G}^\\dagger = \\hat{G} \\) (operador hermítico)<br><br>

<strong>Condición de unitariedad:</strong><br>
\\[
\\hat{U}\\hat{U}^\\dagger \\approx \\hat{I} \\implies \\hat{U} \\text{ es unitario}
\\]<br><br>

<strong>Interpretación:</strong><br>
• \\( \\hat{G} \\) = Generador de la transformación<br>
• \\( \\alpha \\) = Parámetro de la transformación<br><br>

<strong>2. Acción sobre estados y operadores</strong><br><br>

Para un estado arbitrario \\( \\ket{\\psi} \\):<br><br>

\\[
\\ket{\\psi'} = \\hat{U}\\ket{\\psi} = \\ket{\\psi} + i\\alpha\\hat{G}\\ket{\\psi}
\\]<br><br>

Para un operador arbitrario \\( \\hat{A} \\):<br><br>

\\[
\\hat{A}' = \\hat{U}\\hat{A}\\hat{U}^\\dagger = \\hat{A} + i\\alpha[\\hat{G}, \\hat{A}]
\\]<br><br>

<strong>Casos especiales:</strong><br>
Si \\( [\\hat{G}, \\hat{A}] = 0 \\), entonces \\( \\hat{A}' = \\hat{A} \\) (operador invariante)<br><br>

<strong>3. Transformaciones Unitarias Finitas</strong><br><br>

Una transformación finita se construye como sucesión de transformaciones infinitesimales:<br><br>

\\[
\\hat{U}_\\alpha(\\hat{G}) = \\lim_{N\\to\\infty} \\prod_{k=1}^N \\left( \\hat{I} + i\\frac{\\alpha}{N}\\hat{G} \\right) = e^{i\\alpha\\hat{G}}
\\]<br><br>

<strong>Propiedades clave:</strong><br>
1. Todas las transformaciones de la forma \\( e^{i\\alpha\\hat{G}} \\) son unitarias<br>
2. Ejemplo fundamental: \\( e^{i\\hat{k}x_0} \\) → Operador de traslación espacial<br><br>

<strong>Interpretación física:</strong><br>
• Describen simetrías en sistemas cuánticos<br>
• Relacionadas con leyes de conservación (teorema de Noether)<br>
• Fundamentales en teoría de grupos en mecánica cuántica`
},
{
    title: "Problema de Sturm-Liouville ",
    duration: "25 min",
    description: `<strong>1. Introducción al Problema de Sturm-Liouville</strong><br><br>

El problema de Sturm-Liouville es fundamental en la física matemática y mecánica cuántica, ya que describe sistemas con operadores diferenciales autoadjuntos que generan bases ortogonales completas.<br><br>

<strong>2. Forma Canónica del Operador</strong><br><br>

En su representación diferencial, el problema general tiene la forma:<br><br>

\\[
\\left[ \\alpha_0(x)\\frac{d^2}{dx^2} + \\alpha_1(x)\\frac{d}{dx} + \\alpha_2(x) \\right]y_\\lambda(x)= \\lambda y_\\lambda(x)
\\]<br><br>

<strong>Paso a paso:</strong><br>
1. Identificamos los componentes:<br>
   - \\(\\alpha_0(x)\\): Coeficiente de la segunda derivada<br>
   - \\(\\alpha_1(x)\\): Coeficiente de la primera derivada<br>
   - \\(\\alpha_2(x)\\): Término potencial<br>
   - \\(\\lambda\\): Valor propio escalar<br><br>

2. En el espacio de Hilbert, usando la correspondencia entre operadores:<br>
   \\[
   \\frac{d}{dx} \\leftrightarrow -i\\hat{k} \\quad \\text{y} \\quad \\frac{d^2}{dx^2} \\leftrightarrow -\\hat{k}^2
   \\]<br><br>

La forma operacional en espacio de Hilbert queda:<br><br>

\\[
\\left[ -\\alpha_0(\\hat{x})\\hat{k}^2  -i\\alpha_1(\\hat{x})\\hat{k} + \\alpha_2(\\hat{x}) \\right]\\ket{y_\\lambda}= \\lambda \\ket{y_\\lambda}
\\]<br><br>

<strong>Interpretación física:</strong><br>
• \\(\\hat{k}\\) representa el operador de momento (generador de traslaciones)<br>
• \\(\\hat{x}\\) es el operador posición<br>
• La ecuación describe autovalores de un operador diferencial general<br><br>

<strong>3. Propiedades Fundamentales</strong><br><br>

Definiendo el operador completo:<br><br>

\\[
\\hat{o} = - \\alpha_0(\\hat{x})\\hat{k}^2  -i\\alpha_1(\\hat{x})\\hat{k} + \\alpha_2(\\hat{x})
\\]<br><br>

<strong>Características clave:</strong><br>
• Los valores propios \\(\\lambda\\) son reales si \\(\\hat{o}\\) es hermítico<br>
• Los vectores propios \\(\\ket{y_\\lambda}\\) forman una base completa<br>
• La ortogonalidad de la base depende de las propiedades de \\(\\hat{o}\\):<br><br>

\\[
\\text{Si } \\hat{o}^\\dagger=\\hat{o} \\text{ (hermítico)} \\implies \\text{base ortogonal}
\\]<br><br>

<strong>4. Forma Autoadjunta</strong><br><br>

La forma estándar autoadjunta introduce funciones de peso:<br><br>

\\[
\\left[ \\frac{d}{dx}P(x)\\frac{d}{dx} + q(x)\\right]Y_\\lambda(x)= \\lambda w(x)y_\\lambda(x)
\\]<br><br>

<strong>Transformación a operadores cuánticos:</strong><br>
1. Aplicamos las correspondencias operacionales:<br>
\\[
\\frac{d}{dx} \\to i\\hat{k}, \\quad \\frac{d}{dx}P(x)\\frac{d}{dx} \\to -\\hat{k}P(\\hat{x})\\hat{k}
\\]<br><br>

2. Obtenemos la versión operacional:<br><br>

\\[
[-\\hat{k}p(\\hat{x})\\hat{k} + q(\\hat{x})]\\ket{y_\\lambda} = \\lambda w(\\hat{x})\\ket{y_\\lambda}
\\]<br><br>

<strong>Análisis de autoadjunción:</strong><br>
• Demostramos que el operador es hermítico:<br><br>

\\[
\\hat{o} = -\\hat{k}p(\\hat{x})\\hat{k} + q(\\hat{x})
\\]
\\[
\\hat{o}^\\dagger = [ -\\hat{k}p(\\hat{x})\\hat{k} + q(\\hat{x}) ]^\\dagger = \\hat{o}
\\]<br><br>

<strong>5. Implicaciones Físicas</strong><br><br>

• Los sistemas de Sturm-Liouville describen:<br>
  - Problemas de vibración en mecánica clásica<br>
  - Estados estacionarios en mecánica cuántica<br>
  - Modos normales en sistemas físicos<br><br>

• La orto,gonalidad de las soluciones permite:<br>
  - Expansiones en series de funciones propias<br>
  - Desarrollo de teorías de perturbación<br>
  - Análisis espectral de operadores<br><br>

<strong>6. Casos Especiales</strong><br><br>

• Cuando \\(w(x)=1\\), recuperamos el problema estándar de autovalores<br>
• Si \\(P(x)=1\\) y \\(q(x)=0\\), obtenemos el operador Laplaciano<br>
• La elección de \\(P(x), q(x), w(x)\\) determina las propiedades de ortogonalidad
<strong>1. La Ecuación de Schrödinger como Problema de Autovalores</strong><br><br>

La ecuación de Schrödinger independiente del tiempo representa un problema de Sturm-Liouville:<br><br>

\\[
-\\frac{\\hbar^2}{2m}\\frac{d^2}{dx^2}\\phi_E(x) + V(x)\\phi_E(x) = E\\phi_E(x)
\\]<br><br>

<strong>Componentes clave:</strong><br>
• \\(E\\): Autovalor de energía (escalar real)<br>
• \\(\\phi_E(x)\\): Autofunción correspondiente<br>
• Dominio: \\(x \\in ]-\\infty, \\infty[\\\) (todo el espacio real)<br><br>

<strong>2. Hermiticidad del Operador Hamiltoniano</strong><br><br>

El operador Hamiltoniano:<br><br>

\\[
\\hat{H} = -\\frac{\\hbar^2}{2m}\\frac{d^2}{dx^2} + V(x)
\\]<br><br>

es hermítico, como puede verificarse:<br><br>

\\[
\\left[-\\frac{\\hbar^2}{2m}(-\\hat{k})^2 + V(\\hat{x})\\right]^\\dagger = -\\frac{\\hbar^2}{2m}\\hat{k}^2 + V(\\hat{x})
\\]<br><br>

<strong>Consecuencias:</strong><br>
• Los autovalores \\(E\\) son reales<br>
• Las autofunciones \\(\\phi_E(x)\\) forman una base ortogonal<br>
• Continuidad: \\(\\phi_E(x)\\) y \\(\\frac{d}{dx}\\phi_E(x)\\) son continuas<br><br>

<strong>3. Caso Discreto: Espectro de Energías Cuantizadas</strong><br><br>

Cuando \\(E\\) toma valores discretos \\(E_n\\):<br><br>

\\[
\\phi_E(x) \\rightarrow \\phi_n(x) \\quad \\text{con} \\quad n \\in \\mathbb{N}
\\]<br><br>

<strong>Propiedades de ortonormalidad:</strong><br>
\\[
\\braket{\\phi_n|\\phi_m} = \\delta_{nm} \\quad \\text{(ortonormalidad discreta)}
\\]<br><br>

\\[
\\sum_n \\ket{\\phi_n}\\bra{\\phi_n} = \\hat{I} \\quad \\text{(relación de completitud)}
\\]<br><br>

<strong>Expansión de estados arbitrarios:</strong><br>
Para cualquier estado \\(\\ket{f}\\):<br><br>

\\[
\\ket{f} = \\sum_n a_n \\ket{\\phi_n} \\quad \\text{con} \\quad a_n = \\braket{\\phi_n|f}
\\]<br><br>

En representación de posición:<br><br>

\\[
f(x) = \\sum_n a_n \\phi_n(x) \\quad \\text{y} \\quad a_n = \\int_{-\\infty}^\\infty \\phi_n^*(x)f(x)dx
\\]<br><br>

<strong>4. Caso Continuo: Espectro de Energías No Acotado</strong><br><br>

Para energías en el continuo:<br><br>

\\[
\\braket{\\phi_E|\\phi_{E'}} = \\delta(E-E') \\quad \\text{(ortogonalidad continua)}
\\]<br><br>

\\[
\\hat{I} = \\int_{-\\infty}^\\infty \\ket{\\phi_E}\\bra{\\phi_E} dE \\quad \\text{(completitud)}
\\]<br><br>

<strong>Expansión para estados arbitrarios:</strong><br>
\\[
\\ket{f} = \\int a_E \\ket{\\phi_E} dE \\quad \\text{con} \\quad a_E = \\braket{\\phi_E|f}
\\]<br><br>

En representación de posición:<br><br>

\\[
f(x) = \\int a_E \\phi_E(x) dE \\quad \\text{y} \\quad a_E = \\int_{-\\infty}^\\infty \\phi_E^*(x)f(x)dx
\\]<br><br>

<strong>5. Interpretación Física y Aplicaciones</strong><br><br>

• <strong>Espectro discreto:</strong> Describe estados ligados (ej: átomo de hidrógeno)<br>
• <strong>Espectro continuo:</strong> Corresponde a estados de dispersión (ej: partícula libre)<br>
• <strong>Ortogonalidad:</strong> Permite descomposiciones espectrales de operadores<br>
• <strong>Completitud:</strong> Fundamenta la expansión de funciones de onda arbitrarias<br><br>

<strong>6. Conexión con la Mecánica Cuántica Moderna</strong><br><br>

Estos resultados muestran cómo:<br>
1. La estructura de Sturm-Liouville emerge naturalmente en sistemas cuánticos<br>
2. Las propiedades de hermeticidad garantizan observables físicos reales<br>
3. Las bases discretas y continuas permiten describir todos los estados posibles<br>
4. La teoría espectral unifica el tratamiento de sistemas ligados y no ligados
`
},

                // ... subtemas
            ]
        }, // ← Coma añadida
        
        // Capítulo 3: Postulados de la Mecánica Cuántica
        {
            id: 3,
            title: "Postulados de la Mecánica Cuántica",
            duration: "40 min",
            videoId: "72SQ6vHpjo8",
            description: "Profundizamos en el análisis matemático de los operadores hermíticos.",
            subtopics: [
            {
    title: "Postulados Fundamentales de la Mecánica Cuántica",
    duration: "35 min",
    description: `<strong>Postulado 1: Descripción del Estado Cuántico</strong><br><br>

El estado de un sistema cuántico en cualquier instante de tiempo \\( t \\) está completamente descrito por un vector de estado \\( \\ket{\\psi(t)} \\) perteneciente a un espacio de Hilbert complejo. Este vector contiene toda la información cinemática accesible sobre la partícula.<br><br>

• Notación: \\( E^o \\) = Estado cuántico<br>
• Interpretación física: El módulo cuadrado \\( |\\braket{\\phi|\\psi(t)}|^2 \\) representa la probabilidad de que el sistema en el estado \\( \\ket{\\psi(t)} \\) sea encontrado en el estado \\( \\ket{\\phi} \\) al realizar una medición.<br><br>

<strong>Postulado 2: Observables y Operadores Hermíticos</strong><br><br>

Toda cantidad física medible (observable) está asociada a un operador hermítico (autoadjunto) que actúa sobre el espacio de Hilbert:<br><br>

• Ejemplos fundamentales:<br>
  - Posición: \\( \\hat{x} \\)<br>
  - Momento: \\( \\hat{p} = -i\\hbar\\nabla \\)<br>
  - Energía: \\( \\hat{H} \\) (Hamiltoniano)<br><br>

• Propiedad clave: Los operadores hermíticos garantizan:<br>
  1. Autovalores reales (valores medibles)<br>
  2. Autovectores ortogonales<br>
  3. Completitud del conjunto de autovectores<br><br>

<strong>Postulado 3: Evolución Temporal</strong><br><br>

La dinámica del estado cuántico está gobernada por la ecuación de Schrödinger dependiente del tiempo:<br><br>

\\[
\\hat{H}\\ket{\\psi(t)} = i\\hbar\\frac{d}{dt}\\ket{\\psi(t)}
\\]<br><br>

Donde el operador Hamiltoniano tiene la forma:<br><br>

\\[
\\hat{H} = \\frac{\\hat{p}^2}{2m} + V(\\hat{x})
\\]<br><br>

<strong>Casos especiales:</strong><br>
• Sistemas conservativos: Cuando \\( \\hat{H} \\) no depende explícitamente del tiempo (<em>Ejemplo clásico</em>: potenciales estáticos)<br>
• Estados estacionarios: Soluciones de la forma \\( \\ket{\\psi(t)} = e^{-iEt/\\hbar}\\ket{\\phi_E} \\), donde \\( \\hat{H}\\ket{\\phi_E} = E\\ket{\\\phi_E} \\)<br><br>

<strong>Interpretación Física:</strong><br>
1. El Hamiltoniano genera la evolución temporal del sistema<br>
2. Para sistemas aislados, la evolución es unitaria (conservación de probabilidad)<br>
3. La ecuación es análoga cuántica a las ecuaciones de Hamilton en mecánica clásica<br><br>

<strong>Consecuencias Fundamentales:</strong><br>
• Principio de superposición: Los estados pueden combinarse linealmente<br>
• Cuantización: Aparece naturalmente de los problemas de autovalores<br>
• Dualidad onda-partícula: Emerge de la naturaleza del espacio de Hilbert<br>
• Relación de incertidumbre: Consecuencia de operadores no conmutativos`
},   
{
    title: "Resolución de la Ecuación de Schrödinger y Estados Estacionarios",
    duration: "45 min",
    description: `<strong>1. Resolución General de la Ecuación de Schrödinger</strong><br><br>

<strong>Paso 1:</strong> Elección de la base de autovectores del Hamiltoniano<br>
Se selecciona la base \\(\\{\\ket{u_i}\\}\\) donde cada \\(\\ket{u_i}\\) es autovector de \\(\\hat{H}\\):<br><br>

\\[
\\hat{H} = \\begin{pmatrix}
H_{11} & 0 & \\cdots & 0 \\\\
0 & H_{22} & \\cdots & 0 \\\\
\\vdots & \\vdots & \\ddots & \\vdots \\\\
0 & 0 & \\cdots & H_{NN}
\\end{pmatrix}
\\]<br><br>

<strong>Paso 2:</strong> Expansión del estado cuántico en esta base<br>
\\[
\\ket{\\psi(t)} = \\begin{pmatrix}
\\psi_1(t) \\\\
\\vdots \\\\
\\psi_N(t)
\\end{pmatrix}
\\]<br><br>

<strong>Paso 3:</strong> Aplicación de la ecuación de Schrödinger<br>
\\[
\\hat{H}\\ket{\\psi(t)} = i\\hbar\\frac{d}{dt}\\ket{\\psi(t)} \\implies
\\begin{pmatrix}
H_{11}\\psi_1(t) \\\\
\\vdots \\\\
H_{NN}\\psi_N(t)
\\end{pmatrix} = 
i\\hbar\\begin{pmatrix}
\\frac{d}{dt}\\psi_1(t) \\\\
\\vdots \\\\
\\frac{d}{dt}\\psi_N(t)
\\end{pmatrix}
\\]<br><br>

<strong>Solución:</strong> Para cada componente \\(j = 1,...,N\\):<br>
\\[
\\psi_j(t) = \\psi_j(0)e^{-i\\frac{H_{jj}t}{\\hbar}}
\\]<br><br>

<strong>Forma matricial:</strong><br>
\\[
\\ket{\\psi(t)} = e^{-i\\frac{\\hat{H}t}{\\hbar}}\\ket{\\psi(0)}
\\]<br><br>
donde \\(e^{-i\\frac{\\hat{H}t}{\\hbar}}\\) es el operador de evolución temporal (unitario).<br><br>

<strong>2. Ecuación de Schrödinger en Representación de Posición</strong><br><br>

Partiendo de:<br>
\\[
\\hat{H}\\ket{\\psi(t)} = i\\hbar\\frac{d}{dt}\\ket{\\psi(t)}
\\]<br><br>

Proyectando sobre \\(\\bra{x}\\):<br>
\\[
\\left(-\\frac{\\hbar^2}{2m}\\partial_x^2 + V(x)\\right)\\psi(x,t) = i\\hbar\\partial_t\\psi(x,t)
\\]<br><br>

<strong>Solución por separación de variables:</strong><br>
\\[
\\psi(x,t) = T(t)\\phi(x) \\implies \\psi(x,t) = e^{-i\\frac{Et}{\\hbar}}\\phi_E(x)
\\]<br><br>

<strong>Ecuación estacionaria resultante:</strong><br>
\\[
-\\frac{\\hbar^2}{2m}\\frac{d^2}{dx^2}\\phi_E(x) + V(x)\\phi_E(x) = E\\phi_E(x)
\\]<br><br>

<strong>3. Estados Estacionarios y Superposición</strong><br><br>

<strong>Estados estacionarios:</strong><br>
\\[
\\ket{\\psi_E(t)} = e^{-i\\frac{Et}{\\hbar}}\\ket{\\phi_E}
\\]<br><br>

<strong>Estados no estacionarios:</strong><br>
Para \\(E\\) discreto:<br>
\\[
\\ket{\\xi(t)} = \\sum_n a_n\\ket{\\psi_n(t)} = e^{-i\\frac{\\hat{H}t}{\\hbar}}\\sum_n a_n\\ket{\\phi_n}
\\]<br><br>
donde \\(a_n = \\braket{\\phi_n|\\xi(0)}\\).<br><br>

<strong>4. Densidad de Probabilidad</strong><br><br>

Para estados estacionarios:<br>
\\[
\\rho(x,t) = |\\psi(x,t)|^2 = |\\phi_n(x)|^2 = \\rho(x,0)
\\]<br><br>
(la densidad de probabilidad no depende del tiempo).<br><br>

<strong>5. Valor Esperado de Operadores</strong><br><br>

El valor esperado de un operador \\(\\hat{A}\\) es:<br>
\\[
\\braket{\\hat{A}} = \\frac{\\braket{\\psi|\\hat{A}|\\psi}}{\\braket{\\psi|\\psi}}
\\]<br><br>

<strong>Interpretaciones Físicas:</strong><br>
• Los estados estacionarios tienen energías bien definidas y densidades de probabilidad constantes<br>
• La evolución temporal de estados no estacionarios muestra interferencia cuántica<br>
• El operador de evolución preserva la norma (unitariedad)<br>
• La ecuación de Schrödinger garantiza la conservación de la probabilidad`
},
 // ... subtemas
            ]
        },
              {
            id: 4,
            title: "Problemas unidimensionales",
            duration: "40 min",
            videoId: "VIDEO_ID_3",
            description: "resolvemos problemas unidimensionales con la ecuación de Schrödinger.",
            subtopics: [
            {
    title: "Problemas Unidimensionales ",
    duration: "60 min",
    description: `<strong>1. Introducción a los Problemas Unidimensionales</strong><br><br>

La ecuación de Schrödinger independiente del tiempo en una dimensión admite soluciones de la forma:<br><br>

\\[
\\psi(x,t) = \\phi(x)e^{-iEt/\\hbar}
\\]<br><br>

donde \\(\\phi(x)\\) satisface la ecuación de valores propios:<br><br>

\\[
\\left[-\\frac{\\hbar^2}{2m}\\frac{d^2}{dx^2} + V(x)\\right]\\phi(x) = E\\phi(x)
\\]<br><br>

<strong>2. Clasificación de los Estados Cuánticos</strong><br><br>

<strong>2.1 Espectro Discreto (Estados Ligados)</strong><br><br>

<strong>Condiciones:</strong><br>
• Potencial con mínimo local (\\(V_{\\text{min}} < V_1\\))<br>
• Energía en el rango \\(V_{\\text{min}} < E < V_1\\)<br>
• Función de onda normalizable: \\(\\int_{-\\infty}^{\\infty} |\\phi(x)|^2 dx < \\infty\\)<br><br>

<strong>Teorema 1:</strong> No degeneración en 1D<br>
\\[
\\text{En sistemas unidimensionales, los estados ligados son no degenerados}
\\]<br><br>

<strong>Teorema 2:</strong> Teorema nodal<br>
\\[
\\phi_n(x) \\text{ tiene exactamente } n \\text{ nodos (ceros no triviales)}
\\]<br><br>

<strong>Ejemplo:</strong> Pozo infinito de potencial<br>
\\[
\\phi_n(x) = \\sqrt{\\frac{2}{a}}\\sin\\left(\\frac{n\\pi x}{a}\\right), \\quad E_n = \\frac{n^2\\pi^2\\hbar^2}{2ma^2}
\\]<br><br>

<strong>2.2 Espectro Continuo (Estados No Ligados)</strong><br><br>

<strong>Caso A: \\(V_1 \\leq E \\leq V_2\\)</strong><br>
• Soluciones físicamente aceptables:<br>
\\[
\\phi(x) \\sim \\begin{cases}
e^{ikx} + Re^{-ikx} & x \\to -\\infty \\\\
Te^{ikx} & x \\to +\\infty
\\end{cases}
\\]<br><br>

<strong>Caso B: \\(E \\geq V_2\\)</strong><br>
• Soluciones completamente oscilatorias:<br>
\\[
\\phi(x) \\sim Ae^{ikx} + Be^{-ikx}
\\]<br><br>

<strong>Normalización:</strong> Se utiliza normalización en delta de Dirac<br>
\\[
\\int_{-\\infty}^{\\infty} \\phi_E^*(x)\\phi_{E'}(x)dx = \\delta(E-E')
\\]<br><br>

<strong>3. Potenciales Especiales y Soluciones Exactas</strong><br><br>

<strong>3.1 Potencial Delta</strong><br>
\\[
V(x) = -\\alpha\\delta(x), \\quad \\alpha > 0
\\]<br>
• Estado ligado:<br>
\\[
\\phi(x) = \\sqrt{\\kappa}e^{-\\kappa|x|}, \\quad \\kappa = \\frac{m\\alpha}{\\hbar^2}
\\]<br>
\\[
E = -\\frac{m\\alpha^2}{2\\hbar^2}
\\]<br><br>

<strong>3.2 Oscilador Armónico</strong><br>
\\[
V(x) = \\frac{1}{2}m\\omega^2x^2
\\]<br>
• Soluciones:<br>
\\[
\\phi_n(x) = \\left(\\frac{m\\omega}{\\pi\\hbar}\\right)^{1/4}\\frac{1}{\\sqrt{2^n n!}}H_n\\left(\\sqrt{\\frac{m\\omega}{\\hbar}}x\\right)e^{-m\\omega x^2/2\\hbar}
\\]<br>
\\[
E_n = \\hbar\\omega\\left(n + \\frac{1}{2}\\right)
\\]<br><br>

`
},
{
    title: "Potenciales Simétricos y Paridad e",
    duration: "45 min",
    description: `<strong>1. Introducción a Potenciales Simétricos</strong><br><br>

En sistemas cuánticos unidimensionales, muchos potenciales microscópicos presentan simetría bajo inversión espacial:<br><br>

\\[
V(-x) = V(x)
\\]<br><br>

<strong>Consecuencias fundamentales:</strong><br>
1. El Hamiltoniano conserva esta simetría:<br><br>

\\[
\\hat{H}(x) = -\\frac{\\hbar^2}{2m}\\frac{d^2}{dx^2} + V(x)
\\]<br><br>

2. El operador Hamiltoniano conmuta con el operador paridad \\(\\hat{P}\\):<br><br>

\\[
[\\hat{H}, \\hat{P}] = 0
\\]<br><br>

<strong>2. Teorema de Paridad en Sistemas Ligados</strong><br><br>

<strong>Teorema 4.1:</strong> Para sistemas unidimensionales ligados:<br>
• El espectro de energía es <em>no degenerado</em><br>
• Los eigenestados tienen paridad definida<br><br>

<strong>Tipos de eigenestados:</strong><br>
• <em>Estados pares:</em> \\(\\psi(x) = \\psi(-x)\\)<br>
• <em>Estados impares:</em> \\(\\psi(x) = -\\psi(-x)\\)<br><br>

<strong>Ejemplo:</strong> Pozo simétrico infinito<br>
\\[
\\phi_n^{\\text{par}}(x) = \\sqrt{\\frac{2}{a}}\\cos\\left(\\frac{n\\pi x}{a}\\right), \\quad n \\ \\text{impar}
\\]
\\[
\\phi_n^{\\text{impar}}(x) = \\sqrt{\\frac{2}{a}}\\sin\\left(\\frac{n\\pi x}{a}\\right), \\quad n \\ \\text{par}
\\]<br><br>

<strong>3. Sistemas con Espectro Degenerado</strong><br><br>

Para potenciales periódicos o multidimensionales:<br><br>

• Los eigenestados pueden ser degenerados<br>
• Los estados degenerados <em>no</em> tienen paridad definida<br>
• Se pueden construir combinaciones lineales con paridad definida:<br><br>

\\[
\\psi_{\\pm}(x) = \\frac{1}{\\sqrt{2}}[\\psi_n(x) \\pm \\psi_n(-x)]
\\]<br><br>

<strong>4. Propiedades de Nodos y Paridad</strong><br><br>

<strong>Relación fundamental:</strong><br>
• Estado fundamental: siempre par (sin nodos)<br>
• Primer excitado: impar (un nodo en x=0)<br>
• Segundo excitado: par (dos nodos)<br><br>

<strong>Teorema nodal generalizado:</strong><br>
\\[
\\text{Número de nodos} = \\begin{cases}
n & \\text{para } n=0,2,4,... \\\\
n+1 & \\text{para } n=1,3,5,...
\\end{cases}
\\]<br><br>

<strong>5. Aplicaciones y Ejemplos</strong><br><br>

<strong>5.1 Oscilador armónico cuántico</strong><br>
\\[
V(x) = \\frac{1}{2}m\\omega^2x^2
\\]<br>
• Todos los estados tienen paridad definida<br>
\\[
\\phi_n(-x) = (-1)^n\\phi_n(x)
\\]<br><br>

<strong>5.2 Pozo doble simétrico</strong><br>
\\[
V(x) = \\begin{cases}
\\infty & |x| > a \\\\
V_0 & b < |x| \\leq a \\\\
0 & |x| \\leq b
\\end{cases}
\\]<br>
• Estados apareados con splitting de energía<br><br>

<strong>6. Problemas Resueltos</strong><br><br>

<strong>Problema 1:</strong> Demostrar que el estado fundamental de un potencial simétrico es siempre par<br><br>

<strong>Solución:</strong><br>
1. Suponer existe estado fundamental impar \\(\\psi_0\\)<br>
2. Debe tener al menos un nodo (en x=0)<br>
3. Construir función prueba par \\(|\\psi_0(x)|\\)<br>
4. Mostrar que tiene menor energía (contradicción)<br><br>

<strong>Problema 2:</strong> Potencial delta doble<br>
\\[
V(x) = -\\alpha[\\delta(x-a) + \\delta(x+a)]
\\]<br>
• Encontrar ecuaciones para estados ligados<br>
• Analizar paridad de soluciones<br><br>

<strong>7. Resumen de Propiedades Clave</strong><br><br>

<table style="width:100%">
  <tr>
    <th>Propiedad</th>
    <th>Sistemas Ligados</th>
    <th>Sistemas Degenerados</th>
  </tr>
  <tr>
    <td>Paridad</td>
    <td>Definida</td>
    <td>No definida</td>
  </tr>
  <tr>
    <td>Nodos</td>
    <td>n o n+1</td>
    <td>Variable</td>
  </tr>
  <tr>
    <td>Espectro</td>
    <td>Discreto</td>
    <td>Continuo/Discreto</td>
  </tr>
</table>`
},
{
    title: "Partícula Libre y Escalón de Potencial ",
    duration: "60 min",
    description: `<strong>1. Partícula Libre: Estados Continuos (4.3)</strong><br><br>

<strong>1.1 Ecuación Básica y Soluciones</strong><br>
Para una partícula libre con \\(V(x) = 0\\), la ecuación de Schrödinger independiente del tiempo es:<br><br>

\\[
-\\frac{\\hbar^2}{2m}\\frac{d^2}{dx^2}\\phi(x) = E\\phi(x) \\implies \\left(\\frac{d^2}{dx^2} + k^2\\right)\\phi(x) = 0
\\]<br><br>
donde \\(k^2 = \\frac{2mE}{\\hbar^2}\\) (número de onda).<br><br>

<strong>1.2 Solución General</strong><br>
La solución más general consiste en ondas planas:<br><br>

\\[
\\psi_k(x) = A_+ e^{ikx} + A_- e^{-ikx}
\\]<br><br>

<strong>1.3 Estado Estacionario Completo</strong><br>
La función de onda dependiente del tiempo:<br><br>

\\[
\\psi_k(x,t) = A_+ e^{i(kx-\\omega t)} + A_- e^{-i(kx+\\omega t)}
\\]<br><br>
con \\(\\omega = \\frac{\\hbar k^2}{2m}\\).<br><br>

<strong>1.4 Interpretación Física</strong><br>
• Primer término: onda viajando hacia \\(+x\\) (momento \\(+\\hbar k\\))<br>
• Segundo término: onda viajando hacia \\(-x\\) (momento \\(-\\hbar k\\))<br><br>

<strong>1.5 Problemas con la Interpretación</strong><br>
• Densidad de probabilidad constante: \\(|\\psi_{\\pm}(x,t)|^2 = |A_{\\pm}|^2\\)<br>
• No normalizable: \\(\\int_{-\\infty}^{\\infty} |\\psi|^2 dx = \\infty\\)<br>
• Consecuencia del principio de incertidumbre: \\(\\Delta p = 0 \\implies \\Delta x \\to \\infty\\)<br><br>

<strong>1.6 Solución Correcta: Paquetes de Onda</strong><br>
La solución físicamente realista es un paquete de ondas:<br><br>

\\[
\\psi(x,t) = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} \\phi(k)e^{i(kx-\\omega t)} dk
\\]<br><br>
con transformada de Fourier:<br><br>

\\[
\\phi(k) = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} \\psi(x,0)e^{-ikx} dx
\\]<br><br>

<strong>2. Escalón de Potencial</strong><br><br>

<strong>2.1 Definición del Problema</strong><br>
Potencial escalón:<br><br>

\\[
V(x) = \\begin{cases} 
0 & x < 0 \\\\
V_0 & x \\geq 0
\\end{cases}
\\]<br><br>

<strong>2.2 Caso \\(E > V_0\\)</strong><br><br>

<strong>Ecuaciones de Schrödinger:</strong><br>
\\[
\\frac{d^2\\psi_1}{dx^2} + k_1^2\\psi_1 = 0, \\quad x < 0 \\quad (k_1^2 = \\frac{2mE}{\\hbar^2})
\\]
\\[
\\frac{d^2\\psi_2}{dx^2} + k_2^2\\psi_2 = 0, \\quad x \\geq 0 \\quad (k_2^2 = \\frac{2m(E-V_0)}{\\hbar^2})
\\]<br><br>

<strong>Soluciones Generales:</strong><br>
\\[
\\psi_1(x) = Ae^{ik_1x} + Be^{-ik_1x}
\\]
\\[
\\psi_2(x) = Ce^{ik_2x}
\\]<br><br>

<strong>Condiciones de Continuidad:</strong><br>
1. \\(\\psi_1(0) = \\psi_2(0)\\) \\(\\implies A + B = C\\)<br>
2. \\(\\psi_1'(0) = \\psi_2'(0)\\) \\(\\implies ik_1(A - B) = ik_2C\\)<br><br>

<strong>Coeficientes:</strong><br>
\\[
B = \\frac{k_1 - k_2}{k_1 + k_2}A, \\quad C = \\frac{2k_1}{k_1 + k_2}A
\\]<br><br>

<strong>2.3 Coeficientes de Reflexión y Transmisión</strong><br><br>

<strong>Densidades de Corriente:</strong><br>
\\[
J_{inc} = \\frac{\\hbar k_1}{m}|A|^2, \\quad J_{ref} = -\\frac{\\hbar k_1}{m}|B|^2, \\quad J_{trans} = \\frac{\\hbar k_2}{m}|C|^2
\\]<br><br>

<strong>Coeficientes:</strong><br>
\\[
R = \\left|\\frac{B}{A}\\right|^2 = \\left(\\frac{k_1 - k_2}{k_1 + k_2}\\right)^2
\\]
\\[
T = \\frac{k_2}{k_1}\\left|\\frac{C}{A}\\right|^2 = \\frac{4k_1k_2}{(k_1 + k_2)^2}
\\]<br><br>

<strong>2.4 Caso \\(E < V_0\\)</strong><br><br>

<strong>Ecuaciones Modificadas:</strong><br>
Para \\(x \\geq 0\\):<br><br>

\\[
\\frac{d^2\\psi_2}{dx^2} - \\kappa^2\\psi_2 = 0, \\quad \\kappa^2 = \\frac{2m(V_0 - E)}{\\hbar^2}
\\]<br><br>

<strong>Solución:</strong><br>
\\[
\\psi_2(x) = Ce^{-\\kappa x} \\quad (\\text{solución físicamente aceptable})
\\]<br><br>

<strong>Coeficientes:</strong><br>
\\[
B = \\frac{k_1 - i\\kappa}{k_1 + i\\kappa}A, \\quad C = \\frac{2k_1}{k_1 + i\\kappa}A
\\]<br><br>

<strong>Coeficiente de Reflexión:</strong><br>
\\[
R = \\left|\\frac{B}{A}\\right|^2 = 1
\\]<br><br>

<strong>Efecto Túnel:</strong><br>
Aunque \\(R = 1\\), existe probabilidad no nula de encontrar la partícula en \\(x > 0\\):<br><br>

\\[
|\\psi_2(x)|^2 = |C|^2 e^{-2\\kappa x}
\\]<br><br>

<strong>3. Resumen de Resultados Clave</strong><br><br>

<table style="width:100%">
  <tr>
    <th>Caso</th>
    <th>Coeficiente de Reflexión (R)</th>
    <th>Coeficiente de Transmisión (T)</th>
    <th>Comportamiento</th>
  </tr>
  <tr>
    <td>\\(E > V_0\\)</td>
    <td>\\(\\left(\\frac{k_1-k_2}{k_1+k_2}\\right)^2\\)</td>
    <td>\\(\\frac{4k_1k_2}{(k_1+k_2)^2}\\)</td>
    <td>Reflexión parcial</td>
  </tr>
  <tr>
    <td>\\(E < V_0\\)</td>
    <td>1</td>
    <td>0 (clásico)<br>Efecto túnel (cuántico)</td>
    <td>Reflexión total con penetración</td>
  </tr>
</table>

<strong> El curso ha finalizado:) </strong><br><br>
`
},

            ]
              },
    ]
};

function renderLessons() {
    const lessonsList = document.querySelector('.lessons-list');
    lessonsList.innerHTML = '';

    courseData.lessons.forEach(lesson => {
        const lessonItem = document.createElement('li');
        lessonItem.className = 'lesson-item';

        const lessonHeader = document.createElement('div');
        lessonHeader.className = 'lesson-header';
        lessonHeader.innerHTML = `
            <span class="lesson-title">${lesson.title}</span>
            <span class="lesson-duration">${lesson.duration}</span>
            <i class="fas fa-chevron-down toggle-icon"></i>
        `;

        const subtopicsList = document.createElement('ul');
        subtopicsList.className = 'subtopics-list';

        lesson.subtopics.forEach(subtopic => {
            const subtopicItem = document.createElement('li');
            subtopicItem.className = 'subtopic-item';
            subtopicItem.innerHTML = `
                <span class="subtopic-title">${subtopic.title}</span>
                <span class="subtopic-duration">${subtopic.duration}</span>
            `;

            subtopicItem.addEventListener('click', (e) => {
                e.stopPropagation();
                document.querySelectorAll('.subtopic-item').forEach(item => item.classList.remove('active'));
                subtopicItem.classList.add('active');
                loadSubtopicContent(lesson, subtopic);
            });

            subtopicsList.appendChild(subtopicItem);
        });

        lessonHeader.addEventListener('click', () => {
            lessonItem.classList.toggle('expanded');
            const icon = lessonHeader.querySelector('.toggle-icon');
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
        });

        lessonItem.appendChild(lessonHeader);
        lessonItem.appendChild(subtopicsList);
        lessonsList.appendChild(lessonItem);
    });
}

function renderMath() {
    if (window.MathJax && MathJax.typesetPromise) {
        MathJax.typesetPromise().catch(err => console.error("Error renderizando MathJax:", err));
    }
}

function loadSubtopicContent(lesson, subtopic) {
    const videoContainer = document.querySelector('.video-container iframe');
    const lessonTitle = document.getElementById('current-lesson-title');
    const lessonDesc = document.getElementById('current-lesson-desc');

    videoContainer.src = `https://www.youtube.com/embed/${lesson.videoId}?autoplay=1`;
    lessonTitle.innerHTML = `${lesson.title} - ${subtopic.title}`;
    lessonDesc.innerHTML = subtopic.description || `Contenido sobre: ${subtopic.title}`;
    renderMath();

    document.querySelector('.video-container').scrollIntoView({ behavior: 'smooth' });
}

function loadLesson(lesson) {
    const videoContainer = document.querySelector('.video-container iframe');
    const lessonTitle = document.getElementById('current-lesson-title');
    const lessonDesc = document.getElementById('current-lesson-desc');

    videoContainer.src = `https://www.youtube.com/embed/${lesson.videoId}?autoplay=1`;
    lessonTitle.innerHTML = lesson.title;
    lessonDesc.innerHTML = lesson.description;
    renderMath();
}

document.addEventListener('DOMContentLoaded', () => {
    renderLessons();
    if (courseData.lessons.length > 0) {
        document.querySelector('.lessons-list li').classList.add('active');
        loadLesson(courseData.lessons[0]);
    }
});
