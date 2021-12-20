# API - Repo Provas

Trying to search for those old exams your teacher applied to previous classes? Then this API must just be what you've been looking for!

## Technologies

The following tools and frameworks were used in the construction of the project:
<p>
  <img style='margin: 5px;' src='https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white'>
  <img style='margin: 5px;' src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white"/>
  <img style='margin: 5px;' src='https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white'>
</p>


## About

This API was made to help students study for upcoming tests. In it, you can contribute by adding an old exam you have from a specific teacher of a specific subject making it public to others. In addition to sending tests, one can also look for them in our database, searching by teacher or subject.

## Routes
<details>
    <summary><strong>POST</strong> /exams</summary>

* This route can be used to upload any old exam that you may have, it expects a body like below, and will return a status `201` for a successful insertion.

```json
{
    "name": "2020.1",
    "exam": "https://yourpdfhost.pdf",
    "teacherId": 1,
    "categoryId": 2,
    "subjectId": 1,
}
```
</details>

<details>
    <summary><strong>GET</strong> /categories</summary>

* This route can be used to get all the registered test categories, currently, it returns the following array:

```json
[
  {
    "id": 1,
    "name": "P1"
  },
  {
    "id": 2,
    "name": "P2"
  },
  {
    "id": 3,
    "name": "P3"
  },
  {
    "id": 4,
    "name": "2ch"
  },
  {
    "id": 5,
    "name": "Outras"
  }
]
```
</details>

<details>
    <summary><strong>GET</strong> /courses</summary>

* This route can be used to get all the registered courses, currently, it returns the following array:

```json
[
  {
    "id": 1,
    "name": "Engenharia Civil"
  },
  {
    "id": 2,
    "name": "Engenharia Eletrônica"
  }
]
```
</details>

<details>
    <summary><strong>GET</strong> /teachers/:courseId</summary>

* This route can be used to get all the teachers (and the amout of tests each one has uploaded to our database) from a specific course, the course is informed via the parameter courseId, it will return an array like the one below:

```json
[
  {
    "id": 1,
    "name": "Ernesto Pereira",
    "examCount": 2
  },
  {
    "id": 2,
    "name": "Heloisa Antunes",
    "examCount": 7
  }
]
```
</details>

<details>
    <summary><strong>GET</strong> /subjects/:courseId</summary>

* This route can be used to get all the subjects (and the amout of tests each one has uploaded to our database) from a specific course, the course is informed via the parameter courseId, it will return an array like the one below:

```json
[
  {
    "id": 1,
    "name": "Física 3",
    "period": {
      "id": 4,
      "name": "Quarto"
    },
    "examCount": 2
  },
  {
    "id": 2,
    "name": "Cálculo 3",
    "period": {
      "id": 3,
      "name": "Terceiro"
    },
    "examCount": 2
  }
]
```
</details>

<details>
    <summary><strong>GET</strong> /subjects/:subjectId/teachers</summary>

* This route can be used to get all the teachers from a specific subject, the subject is informed via the parameter subjectId, it will return an array like the one below:

```json
[
  {
    "id": 2,
    "name": "Heloisa Antunes"
  },
  {
    "id": 7,
    "name": "Andréia Oliveira"
  }
]
```
</details>

<details>
    <summary><strong>GET</strong> /exams/teacher/:teacherId</summary>

* This route can be used to get all the exams from a specific teacher, the teacher is informed via the parameter teacherId, it will return an array like the one below:

```json
[
  {
    "id": 2,
    "name": "2020.2",
    "exam": "https://yourpdfhost.pdf",
    "teacherId": 2,
    "categoryId": 2,
    "subjectId": 2,
    "teacher": {
      "id": 2,
      "name": "Heloisa Antunes"
    },
    "subject": {
      "id": 2,
      "name": "Cálculo 3",
      "period": {
        "id": 3,
        "name": "Terceiro"
      }
    },
    "category": {
      "id": 2,
      "name": "P2"
    }
  },
  {
    "id": 3,
    "name": "2020.4",
    "exam": "https://yourpdfhost.pdf",
    "teacherId": 2,
    "categoryId": 3,
    "subjectId": 3,
    "teacher": {
      "id": 2,
      "name": "Heloisa Antunes"
    },
    "subject": {
      "id": 3,
      "name": "Cálculo 1",
      "period": {
        "id": 1,
        "name": "Primeiro"
      }
    },
    "category": {
      "id": 3,
      "name": "P3"
    }
  }
]
```
</details>

<details>
    <summary><strong>GET</strong> /exams/subject/:subjectId</summary>

* This route can be used to get all the exams from a specific subject, the subject is informed via the parameter subjectId, it will return an array like the one below:

```json
[
  {
    "id": 2,
    "name": "2020.2",
    "exam": "https://yourpdfhost.pdf",
    "teacherId": 2,
    "categoryId": 2,
    "subjectId": 2,
    "teacher": {
      "id": 2,
      "name": "Heloisa Antunes"
    },
    "subject": {
      "id": 2,
      "name": "Cálculo 3",
      "period": {
        "id": 3,
        "name": "Terceiro"
      }
    },
    "category": {
      "id": 2,
      "name": "P2"
    }
  },
  {
    "id": 3,
    "name": "2020.4",
    "exam": "https://yourpdfhost.pdf",
    "teacherId": 2,
    "categoryId": 3,
    "subjectId": 3,
    "teacher": {
      "id": 2,
      "name": "Heloisa Antunes"
    },
    "subject": {
      "id": 3,
      "name": "Cálculo 1",
      "period": {
        "id": 1,
        "name": "Primeiro"
      }
    },
    "category": {
      "id": 3,
      "name": "P3"
    }
  }
]
```
</details>

## Installation

1. Clone this repo
```sh
git clone https://github.com/leandrodcs/stack-overflow-back.git
```
2. Install NPM packages
```sh
npm install
```
6. Create a database using the command below via postgres
```sh
CREATE DATABASE repoprovas
```
7. Inside the created database, create tables using the dump included in this repo <a href="https://github.com/leandrodcs/repo-provas-back/blob/main/dump.sql">here</a>.

8. Connect to the created database using the .env.example included in the back-end repo <a href="https://github.com/leandrodcs/repo-provas-back/blob/main/.env.example">here</a>, to make it easy, name your .env file like so ".env.dev".

## Running

1. On the repo run the server connected to the database you just created using the following command.
```sh
npm run dev
```

## Developer

* [Leandro D. C. Schmidt ](https://github.com/leandrodcs)