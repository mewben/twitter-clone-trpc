<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  
<h1 align="center">Twitter Clone made with NextJS using T3 Stack</h1>

  <p align="center">
    A simple twitter clone made with NextJS using Typescript, TRPC, and Tailwindcss.
    <br />
    <br />
    <a href="https://twit-clone-trpc.vercel.app">View Demo</a>
    <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://twit-clone-trpc.vercel.app)
This project has a working social-login authentication using next-auth. The database is mysql hosted on planetscale through prisma. It utilizes data fetching and mutation through react-query included in trpc.io

The project includes:

1. public stream of tweets as well as only those you follow using react-query useInfiniteQuery
2. Follow/Unfollow profiles
3. Heart tweets
4. Clear cache through revalidation of server side generated react components whenever a follow/unfollow event happens

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Next][Next.js]][Next-url]
- [![React][React.js]][React-url]
- [![Typescript][Typescript]][Typescript-url]
- [![Tailwindcss][Tailwindcss]][Tailwindcss-url]
- [![Mysql][Mysql]][Mysql-url]
- [![Prisma][Prisma]][Prisma-url]
- [![Vercel][Vercel]][Vercel-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/mewben/twitter-clone-trpc.git
   ```
2. Install packages
   ```sh
   pnpm i
   ```
3. Setup environment variables in .env file
   ```sh
   cp .env.example .env
   ```
4. Run locally and go to http://localhost:3000 in a browser
   ```sh
   pnpm dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Melvin - [@melsoldia](https://twitter.com/melsoldia)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/melvin-soldia
[product-screenshot]: https://media.licdn.com/dms/image/D562DAQFfYgFHXSiLAA/profile-treasury-image-shrink_1280_1280/0/1687334806739?e=1688094000&v=beta&t=K-YdupS4PXESUByYWH9W_Rheq3ji2ii7ici9TV9jY4A
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Tailwindcss]: https://img.shields.io/badge/tailwindcss-%2338b2ac.svg?logo=tailwind-css&logoColor=white&style=for-the-badge
[Tailwindcss-url]: https://tailwindcss.com/
[Mysql]: https://img.shields.io/badge/mysql-%234479a1.svg?logo=mysql&logoColor=white&style=for-the-badge
[Mysql-url]: https://www.mysql.com/
[Vercel]: https://img.shields.io/badge/vercel-%23000000.svg?logo=vercel&logoColor=white&style=for-the-badge
[Vercel-url]: https://vercel.com/
[Typescript]: https://img.shields.io/badge/typescript-%23007acc.svg?logo=typescript&logoColor=white&style=for-the-badge
[Typescript-url]: https://www.typescriptlang.org/
[Prisma]: https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white
[Prisma-url]: https://prisma.io/
