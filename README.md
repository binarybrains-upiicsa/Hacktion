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
- [🛠️ Stack](#️-stack)

</details>



## Para empezar

### Prerrequisitos
Para que puedas trabajar, aportar, corregir o visualizar el proyecto en condiciones optimas te recomendamos tener instalado lo siguiente:

- **Deno** (versión 2.3.3 o superior)
- **Git**
- **Editor de código** (este es a tu preferencia :D)

### Instalación
1. Clona el repositorio

   ```sh
   git clone https://github.com/binarybrains-upiicsa/Hacktion.git
   ```

2. Instalar todas las dependencias del proyecto
    ```sh
    deno install
    ```

3. Ejecuta el proyecto en local
    ```sh
    deno task dev
    ```
    - Para ejecución en modo producción (preview):
    ```sh
    deno task preview
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

Te recomendamos consultar la [guía de contribución](https://opensource.guide) para que conozcas la mejor forma de empezar y siguiendo [buenas prácticas](https://github.com/binarybrains-upiicsa/).

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>



**¡Gracias a todos los que colaboraron a hacer este proyecto posible!**

[![Contribuidores](https://contrib.rocks/image?repo=binarybrains-upiicsa/Hacktion)](https://github.com/binarybrains-upiicsa/Hacktion/graphs/contributors)



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