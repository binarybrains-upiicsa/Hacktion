<a name="readme-top"></a>

<div align="center">

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<a href="">
  <img width="300px" src="" alt="Logo" width="800" />
</a>

## Hacktion UPIICSA

El hacktion es un evento del tipo hackaton donde se resolverán problemas con las herramientas de *[Notion](https://www.notion.com/es)* . Este evento se llevará a cabo en la [Unidad Profesional Interdisciplinaria de Ingeniería y Ciencias Sociales y Administrativas](https://www.upiicsa.ipn.mx) —_[UPIICSA](https://maps.app.goo.gl/8HaKtrA9TEtNp1j68)_ por sus siglas— del [Instituto Politécnico Nacional](https://www.ipn.mx), el cual se realizará el día ***10 de julio de 2025*** ·[Reportar error](https://github.com/binarybrains-upiicsa/Hacktion/issues) ·[Sugerir algo](https://github.com/binarybrains-upiicsa/Hacktion/issues)

</div>


<details>
<summary>Tabla de contenidos</summary>

- [Descripción del evento](#hacktion-upiicsa)
- [Para empezar](#para-empezar)
  - [Prerequisitos](#prerequisitos)
  - [Instalación](#instalación)
  - [Arranque de servidor de desarrollo](#arranque-de-servidor-de-desarrollo)
- [Contribuir al proyecto](#contribuir-al-proyecto)
- [Principantes](#principantes)
  - [Repositorios](#repositorio)
    - [Básico](#básicos)
    - [Bifurcación](#bifurcación)
    - [Descarga](#descarga-local)
    - [Actualizaciones](#actualizaciones)
  - [Contribuciones](#contribuciones)
- [🛠️ Stack](#️-stack)

</details>



## Para empezar

### Prerrequisitos
Para que puedas trabajar, aportar, corregir o visualizar el proyecto en condiciones optimas te recomendamos tener instalado lo siguiente:

- **Deno** (versión 1.36 o superior)
- **Git**
- **Editor de código** (este es a tu preferencia :D)

### Instalación
1. Clona el repositorio

   ```sh
   git clone https://github.com/binarybrains-upiicsa/Hacktion.git
   ```

2. No es necesario instalar dependencias ya que Deno se encargará de el manejo de estas de manera automática durante la ejecución por nosotros :D

3. Ejecuta el proyecto
    ```sh
    deno task dev
    ```
    - Para ejecución en modo producción:
    ```sh
    deno task start
    ```

### Arranque de servidor de desarrollo

Una vez que hayas ejecutado el comando `deno task dev`, el servidor de desarrollo ya estará disponible en la dirección web ***`http://localhost:3000`*** o el puerto que configure tu IDE. Puedes abrir el enlace en tu navegador para poder observar al sitio web en funcionamiento.

> [!Warning]
> El sitio solo se ejecutará de manera remota, no se encontrará en ninguna dirección web del internet por lo que solo tu tendrás acceso a esa página... a menos de que lo pongas ya en un servidor público y tu configures todo para que funcione 👀.

La estructura del proyecto sigue el patrón estándar de Astro con Deno:

<ul>
  <li><code>/src/pages</code> → Contiene las páginas principales del sitio, como index.astro.</li>
  <li><code>public</code> → Activos estáticos como imágenes y favicon.svg.</li>
  <li><code>.github/workflows</code> → Configuración de CI/CD para GitHub Actions</li>
</ul>

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>



## Contribuir al proyecto

Las contribuciones ayudan a que los programadores puedan practicar su codificación, aprender de los demás, llegar a inspirar a otros a programar y crear. ¡Apreciaremos cualquier contribución!

Si tienes alguna sugerencia o mejora para el proyecto, por favor realiza un [_fork_](https://github.com/binarybrains-upiicsa/Hacktion/fork) de nuestro repositorio para poder realizar un cambio, refactorización o actualización del código para después crear una [_pull request_](https://github.com/binarybrains-upiicsa/Hacktion/pulls). También puedes solamente abrir un [_issue_](https://github.com/binarybrains-upiicsa/Hacktion/issues) con la etiqueta "_enhancement_".


Aquí te dejamos una guía rápida:

1. Haz un [_fork_](https://github.com/binarybrains-upiicsa/fork).
2. Clona tu [_fork_](https://github.com/binarybrains-upiicsa/fork) (`git clone <URL del fork>`)
3. Añade el repositorio original como remoto (`git remote add upstream <URL del repositorio original>`)
4. Crea tu Rama de Funcionalidad (`git switch -c feature/CambioComún`)
5. Realiza tus Cambios (`git commit -m 'Add: otro CambioComún'`)
6. Haz Push a la Rama (`git push origin feature/CambioComún`)
7. Abre una [_pull request_](https://github.com/binarybrains-upiicsa/Hacktion/pulls).

Te recomendamos consultar nuestra [guía de contribución](https://github.com/binarybrains-upiicsa) para que conozcas la mejor forma de empezar y siguiendo [buenas prácticas](https://github.com/binarybrains-upiicsa/).

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>



**¡Gracias a todos los que colaboraron a hacer este proyecto posible!**

[![Contribuidores](https://contrib.rocks/image?repo=binarybrains-upiicsa/Hacktion)](https://github.com/binarybrains-upiicsa/Hacktion/graphs/contributors)



## Principiantes

> [!Note]
> Este apartado está destinado para mayor explicación a los programadores junior sin experiencia.

>¡Hola! Soy Kai Yazumorito, el developer junior encargado de hacer este **README** y vengo a darte unas recomendaciones porque sé que tan difícil de entender y hacerlo (lo digo por experiencia, me enquivoque demasiadas veces :D)


Para aquellos _beginners_, _juniors_ o personas que apenas empiezan a poner a prueba sus conocimientos, este es tu lugar para poder entender mejor como realizar lo básico que es descargar el repositorio, qué es un "_fork_" y cómo hacerlo, los comandos necesarios o básicos -según mi parecer-, realizar las contribuciones y que no se vean tantos problemas.

### Repositorio
---
#### Básicos

Para lo inicial es tener en cuenta que el repositorio es este lugar desde donde lees este documento, por lo que te felicito ya que lograste llegar al repositorio, puedes ver varios botones y secciones pero, como una guía rápida, solo tocaremos unas cuantas secciones y botones para poder realizar los movimientos necesarios.

Los elemntos que tocaremos son:
- **Code** → Para lo que va a ser descarga del repositorio en los dispositivos (o trabajo en línea -usalo como ultimo recuerso-)
- **Switch branches/tags** → Apartado donde podremos modificar las distintas ramas o variaciones de versión para nuestras actualizaciones
- **Fork** → Nos permitirá poder hacer bifurcaciones -copias, para los amigos :D-, será igual un seguro extra para las contribuciones
- **Star** → Sirve para poder marcar como "favorito" y guardar el repositorio (no lo usaremos como tal pero es bueno saberlo :D)
- **Issues** → Esta es la sección del repositorio para poder ver las tareas a realizar.
- **Pull request** → Aquí podriamos ver quienes ya han realizado cambios y de que tipo.
- **Actions** → Apartado para ver ***TODAS LAS ACCIONES*** que se han hecho en el repositorio por todos los contribuyentes.

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>


#### Bifurcación

Una *bifurcación* -o *fork*- es algo no tan complejo pero te lo explicaré de manera simple :D
Digamos que tienes un arbol, en ese arbol puedes ver varias ramas (*branch*) y cada una es una variante del repositorio pero le pertenece a distintas personas. Cuando uno quiera tener una copia del repositorio, o realizar una colaboración, va a crear una nueva copia de este arbol inmenso para poder tener sus propios cambios y ramas en un lugar seguro para que el propietario del tronco del arbol verifique si añadir o no una rama sin que el propietario de la ramita pierda su avance o lo que propone, si se lo rechazan el propietario de la ramita se quedará con lo que hizo sin el riesgo de perderlo.

Para hacer esto vamos a colocarnos en la sección de "*Code*".

<a href="">
  <img width="300px" src="" alt="code-section" width="800" />
</a>

1. Vamos a generar nuestra propia variante de este arbol presionando el ***Fork***.

<a href="">
  <img width="300px" src="" alt="fork-button-1" width="800" />
</a>

2. Se desplegará un mini menú y seleccionaremos "*Create a new fork*" para hacer la nueva ramita :D

<a href="">
  <img width="300px" src="" alt="fork-button-2" width="800" />
</a>

3. Se abrira un nuevo menú, en este menú vamos a establecer el nombre que le designaremos al repositorio -te recomiendo dejarlo igual para evitar problemas y confusiones-, la copia de la descripción -que es opcional-, y el apartado donde nos marca por default el copiar solo el branch '*main*'. Yo recomiendo que dejes esta opción habilitada con tan de evitar problemas y solo edites lo que piensas cambiar dado que podría suceder que tenga tantas ramas este arbol que estas copiando que temrines perdiendote en cual es la tuya y que versión es.

<a href="">
  <img width="300px" src="" alt="fork-menu-1" width="800" />
</a>

4. Una vez tenemos todo configurado, vamos a presionar el botón verde que dice "*Create fork*" y esperaremos a que genere nuestra copia del arbo. Deja que GitHub lo plante, crezca y se asegure de que todo queda tal y como lo que quisiste copiar.

<a href="">
  <img width="300px" src="" alt="fork-generate-1" width="800" />
</a>

<a href="">
  <img width="300px" src="" alt="fork-generate-2" width="800" />
</a>

5. ¡Listo, ya tienes la copia del repositorio! Ahora que lo tienes ya podemos pasar a copiar y descargar este repositorio de lo que es GitHub a lo que sería el dispositivo donde estarías rompiendo cositas.

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>


#### Descarga Local
La descarga local nos va a permitir poder hacer los cambios y actualizaciones de programas, archivos y carpetas con el fin de poder inclusive per la estrutura interna de aplicaciones y modificarla para poderla probar de manera local, asegurandonos de que funcionará como deseamos y no va a romper todo -no queremo un CrowdSrtike 2, ¿o si? 👀-

1. Localiza el botón verde "*<> Code*", este botón va a ser nuestro inicio para toda la descarga.
<a href="">
  <img width="300px" src="" alt="general-menu-1" width="800" />
</a>

2. Vas a ver un menú con dos apartados, "*Local*" y "Codespaces". El que nos interesa es "*Local*" ya que el segundo sería en línea y, pues no buscamos eso. Estando en el apartado que nos interesa veremos lo que es *HTTPS*, *SSH* y *GitHub CLI*; aquí seleccionaremos la opción *HTTPS* y copiaremos ese link para poder aplicar el paso *1* de [Instalación](#instalación) en nuestro IDE.
<a href="">
  <img width="300px" src="" alt="vsc-screen" width="800" />
</a>

3. Como se puede ver, yo estoy usando VSC. Si están usando VSC se recomiendan ciertas extensiones para el IDE y que pueda verse más estilizado o sea compatible con lenguajes. En lo que nos enfocaremos es el apartado del ***Explorador*** donde buscaremos el botón *Clonar repositorio*, le daremos click y este nos pedirá el link de GitHub -el cual copiamos anteriormente-.
<a href="">
  <img width="300px" src="" alt="vsc-clone-1" width="800" />
</a>

4. Abrirá una ventana para seleccionar donde guardará todo lo que va a descargar el repositorio. Aquí ya depende de ti, yo recomiendo que tengas tu carpeta destinada para proyectos y así facilitar su uso :D
<a href="">
  <img width="300px" src="" alt="vsc-clone-2" width="800" />
</a>

5. Una vez hayas guardado ya estarás list@ para poder ver todo tu proyecto en el IDE y así ya poder editar lo que requieras :D

<p align="right">(<a href="#readme-top">volver arriba</<a>)</p>


#### Actualizaciones

Ok, ahora vamos a ver como actualizar los cambios que haces en todo el proyecto para subirlos a tu repositorio :D

1. Abre la terminal en la carpeta donde se guardo tu proyecto, debe ser toda la dirección de carpetas hasta llegar al proyecto vas a iniciar de forma incorrecta el proceso.
<a>
  <img width="300px" src="" alt="vsc-terminal-1" width="800" />
</a>

2. Escribiras el comando `git initi` para que el sistemaingrese la carpeta *`.git`*.

3. Escribe el comando `git status`, esto es con el fin de solamente saber que cambios detecta que tienes con diferencia al repositorio.

4. Escribe el comando `git add --all`, esto es para que agregue todos los cambios y no tengas que ir uno por uno -solo que no estarán aun en el repositorio-.

5. Escribe el comando `git commit -m " "`, es para hacer el commit de tus cambios en el repositorio.

> [!Note]
> En la parte interior de las comillas debes agregar la razón del cambio.

6. Escribe el comando `git branch`, esto con el fin de ver las ramas que se tienen.

> [!Warning]
> No se tendrán las mismas ramas en tu dispositivo que en la plataforma de GitHub por lo que no te asustes si aparecen distintas ramas.

7. Escribe el comando `git push origin ...`, esto es para generar la nueva rama donde estarás subiendo los cambios que estás editando.

<a>
  <img width="300px" src="" alt="git-comands" width="800" />
</a>

> [!Note]
> Sustituye los tres puntos (...) del comando por el nombre de tu "*branch*"

8. Comprueba que los cambios esten realizados yendo a la página de GitHub, tu repositorio y en el menú selector que dice "*main*" dar un click para que despligue los nombres de las ramas que están en plataforma, solo busca la rama donde estabas editando todo.

<a>
  <img width="300px" src="" alt="github-branches" width="800" />
</a>

9. ¡Listo! Ya tienes tus cambios en GitHub y están registrados para que podamos pasar a hacer las contribuciones.

### Contribuciones
---
#### Pull Request (*PR*)

Ahora lo bueno, vamos a ver como puedes hacer tu pull para que le brindes tus mejoras a los propietarios del arbol original 👀

1. En tu repositorio, verás un recuadro amarillo con un botón que dice "***Compare & pull request***". Le darás a ese botón.
<a>
  <img width="300px" src="" alt="github-pul-repo" width="800" />
</a>

2. Te va a mostrar una nueva interfaz donde te solicitará poner un titulo y la descripción. En el titulo tienes que seguir las [recomendaciones de GitHub](https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) para subir con el lint adecuado, tambien puedes buscarlos en internet.

3. Podrás ver un botón verde que dice "***Create pull request***", este botón va a generar el *pull request* por lo que ya quedaría lista tu contribución para revisión, ya los administradores verificarán us cambios y decidirán si agregarlo o no además de poder agregar comentarios para algún cambio extra.



## 🛠️ Stack
- [![Astro][astro-badge]][astro-url] - The web framework for content-driven websites.
- [![Typescript][typescript-badge]][typescript-url] - JavaScript with syntax for types.
- [![CSS][css-badge]][css-url] - For the style of the web.
- [![Javascript][javascript-badge]][javascript-url] - JavaScript.
- [![Deno][deno-badge]][deno-url] - The platform for the back-end.

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

[astro-url]: https://astro.build/
[astro-badge]: https://img.shields.io/badge/Astro-fff?style=for-the-badge&logoColor=bd303a&color=352563
[typescript-url]: https://www.typescriptland.org/
[typescript-badge]: https://img.shields.io/badge/Typescript-007ACC?style=for-the-badge&logo=typescript&logoColor=white&color=blue
[css-url]: https://developer.mozilla.org/es/docs/Web/CSS
[css-badge]: https://img.shields.io/badge/CSS-239120?style=for-the-badge&logo=css3&logoColor=white&color=blue
[javascript-url]: https://developer.mozilla.org/es/docs/Web/JavaScript
[javascript-badge]: https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
[deno-url]: https://deno.com
[deno-badge]: https://img.shields.io/badge/Deno-000?style=for-the-badge&logo=deno&logoColor=fff

[contributors-shield]: https://img.shields.io/github/contributors/binarybrains-upiicsa/Hacktion.svg?style=for-the-badge
[contributors-url]: https://github.com/binarybrains-upiicsa/Hacktion/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/binarybrains-upiicsa/Hacktion.svg?style=for-the-badge
[forks-url]: https://github.com/binarybrains-upiicsa/Hacktion/network/members
[stars-shield]: https://img.shields.io/github/stars/binarybrains-upiicsa/Hacktion.svg?style=for-the-badge
[stars-url]: https://github.com/binarybrains-upiicsa/Hacktion/stargazers
[issues-shield]: https://img.shields.io/github/issues/binarybrains-upiicsa/Hacktion.svg?style=for-the-badge
[issues-url]: https://github.com/binarybrains-upiicsa/Hacktion/issues