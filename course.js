const courseData = {
    id: 1,
    title: "Mecánica Cuántica",
    lessons: [
        // Capítulo 1: Postulados de la Mecánica Cuántica
        {
            id: 1,
            title: "Herramientas Matemáticas de la Mecánica Cuántica",
            duration: "30 min",
            videoId: "VIDEO_ID_1",
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
    title: "Operaciones con Operadores en Mecánica Cuántica",
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
- Desarrollar teoría de perturbaciones (antihermíticos)`
},
                {
    title: "Bases Vectoriales en Mecánica Cuántica",
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
    title: "Problema de Valores Propios en Mecánica Cuántica",
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
    title: "Espacios Vectoriales Continuos en Mecánica Cuántica",
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
            title: "Transformada de Fourier en Mecánica Cuántica",
            duration: "35 min",
            videoId: "VIDEO_ID_2",
            description: "Estudiamos las distintas transformaciones y su importancia.",
            subtopics: [
                {
    title: "Transformada de Fourier ",
    duration: "30 min",
    description: `<strong>13. Transformada de Fourier Cuántica</strong><br><br>

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
                // ... subtemas
            ]
        }, // ← Coma añadida
        
        // Capítulo 3: Operadores Hermíticos
        {
            id: 3,
            title: "Operadores y Propiedades",
            duration: "40 min",
            videoId: "VIDEO_ID_3",
            description: "Profundizamos en el análisis matemático de los operadores hermíticos.",
            subtopics: [
                // ... subtemas
            ]
        }
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
