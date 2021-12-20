CREATE TABLE "exams" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"exam" TEXT NOT NULL,
	"teacher_id" integer NOT NULL,
	"category_id" integer NOT NULL,
	"subject_id" integer NOT NULL,
	CONSTRAINT "exams_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "categories" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "categories_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "teachers" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "teachers_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "subjects" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"period_id" integer NOT NULL,
	CONSTRAINT "subjects_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "periods" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "periods_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "courses" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "courses_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "teachers_courses" (
	"id" serial NOT NULL,
	"teacher_id" integer NOT NULL,
	"course_id" integer NOT NULL,
	CONSTRAINT "teachers_courses_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "subjects_courses" (
	"id" serial NOT NULL,
	"subject_id" integer NOT NULL,
	"course_id" integer NOT NULL,
	CONSTRAINT "subjects_courses_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "teachers_subjects" (
	"id" serial NOT NULL,
	"teacher_id" integer NOT NULL,
	"subject_id" integer NOT NULL,
	CONSTRAINT "teachers_subjects_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "exams" ADD CONSTRAINT "exams_fk0" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id");
ALTER TABLE "exams" ADD CONSTRAINT "exams_fk1" FOREIGN KEY ("category_id") REFERENCES "categories"("id");
ALTER TABLE "exams" ADD CONSTRAINT "exams_fk2" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id");

ALTER TABLE "subjects" ADD CONSTRAINT "subjects_fk0" FOREIGN KEY ("period_id") REFERENCES "periods"("id");

ALTER TABLE "teachers_courses" ADD CONSTRAINT "teachers_courses_fk0" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id");
ALTER TABLE "teachers_courses" ADD CONSTRAINT "teachers_courses_fk1" FOREIGN KEY ("course_id") REFERENCES "courses"("id");

ALTER TABLE "subjects_courses" ADD CONSTRAINT "subjects_courses_fk0" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id");
ALTER TABLE "subjects_courses" ADD CONSTRAINT "subjects_courses_fk1" FOREIGN KEY ("course_id") REFERENCES "courses"("id");

ALTER TABLE "teachers_subjects" ADD CONSTRAINT "teachers_subjects_fk0" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id");
ALTER TABLE "teachers_subjects" ADD CONSTRAINT "teachers_subjects_fk1" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id");


INSERT INTO periods (name) VALUES ('Primeiro');
INSERT INTO periods (name) VALUES ('Segundo');
INSERT INTO periods (name) VALUES ('Terceiro');
INSERT INTO periods (name) VALUES ('Quarto');
INSERT INTO periods (name) VALUES ('Quinto');
INSERT INTO periods (name) VALUES ('Sexto');
INSERT INTO periods (name) VALUES ('Sétimo');
INSERT INTO periods (name) VALUES ('Oitavo');
INSERT INTO periods (name) VALUES ('Nono');
INSERT INTO periods (name) VALUES ('Décimo');

INSERT INTO categories (name) VALUES ('P1');
INSERT INTO categories (name) VALUES ('P2');
INSERT INTO categories (name) VALUES ('P3');
INSERT INTO categories (name) VALUES ('2ch');
INSERT INTO categories (name) VALUES ('Outras');
 
INSERT INTO subjects (name, period_id) VALUES ('Física 3', 4);
INSERT INTO subjects (name, period_id) VALUES ('Cálculo 3', 3);
INSERT INTO subjects (name, period_id) VALUES ('Cálculo 1', 1);
INSERT INTO subjects (name, period_id) VALUES ('Mecânica Dos Solos', 5);
INSERT INTO subjects (name, period_id) VALUES ('Topografia', 2);
INSERT INTO subjects (name, period_id) VALUES ('Mecânica Geral 1', 3);
INSERT INTO subjects (name, period_id) VALUES ('Fundamentos De Programação', 1);
INSERT INTO subjects (name, period_id) VALUES ('Geometria Analítica E Álgebra Linear', 1);
INSERT INTO subjects (name, period_id) VALUES ('Introdução À Engenharia', 3);
INSERT INTO subjects (name, period_id) VALUES ('Mecânica Dos Solos 2', 6);
INSERT INTO subjects (name, period_id) VALUES ('Fundações', 7);
INSERT INTO subjects (name, period_id) VALUES ('Estruturas De Madeira', 8);
INSERT INTO subjects (name, period_id) VALUES ('Estruturas De Aço', 9);

INSERT INTO courses (name) VALUES ('Engenharia Civil');
INSERT INTO courses (name) VALUES ('Engenharia Eletrônica');

INSERT INTO teachers (name) VALUES ('Ernesto Pereira');
INSERT INTO teachers (name) VALUES ('Heloisa Antunes');
INSERT INTO teachers (name) VALUES ('Sérgio Da Silva');
INSERT INTO teachers (name) VALUES ('Silvana Alcantra');
INSERT INTO teachers (name) VALUES ('Kalil Abdumansur');
INSERT INTO teachers (name) VALUES ('Wesley Jr.');
INSERT INTO teachers (name) VALUES ('Andréia Oliveira');
INSERT INTO teachers (name) VALUES ('Mauricio Andrade');
INSERT INTO teachers (name) VALUES ('Renathielly Alves');
INSERT INTO teachers (name) VALUES ('Gustavo Silva');

INSERT INTO teachers_subjects (teacher_id, subject_id) VALUES (1, 1);
INSERT INTO teachers_subjects (teacher_id, subject_id) VALUES (2, 2);
INSERT INTO teachers_subjects (teacher_id, subject_id) VALUES (2, 3);
INSERT INTO teachers_subjects (teacher_id, subject_id) VALUES (3, 4);
INSERT INTO teachers_subjects (teacher_id, subject_id) VALUES (4, 5);
INSERT INTO teachers_subjects (teacher_id, subject_id) VALUES (5, 6);
INSERT INTO teachers_subjects (teacher_id, subject_id) VALUES (6, 7);
INSERT INTO teachers_subjects (teacher_id, subject_id) VALUES (7, 8);
INSERT INTO teachers_subjects (teacher_id, subject_id) VALUES (8, 9);
INSERT INTO teachers_subjects (teacher_id, subject_id) VALUES (8, 10);
INSERT INTO teachers_subjects (teacher_id, subject_id) VALUES (9, 11);
INSERT INTO teachers_subjects (teacher_id, subject_id) VALUES (10, 12);
INSERT INTO teachers_subjects (teacher_id, subject_id) VALUES (10, 13);
INSERT INTO teachers_subjects (teacher_id, subject_id) VALUES (7, 2);

INSERT INTO subjects_courses (subject_id, course_id) VALUES (1, 1);
INSERT INTO subjects_courses (subject_id, course_id) VALUES (1, 2);
INSERT INTO subjects_courses (subject_id, course_id) VALUES (2, 1);
INSERT INTO subjects_courses (subject_id, course_id) VALUES (2, 2);
INSERT INTO subjects_courses (subject_id, course_id) VALUES (3, 1);
INSERT INTO subjects_courses (subject_id, course_id) VALUES (3, 2);
INSERT INTO subjects_courses (subject_id, course_id) VALUES (4, 1);
INSERT INTO subjects_courses (subject_id, course_id) VALUES (5, 1);
INSERT INTO subjects_courses (subject_id, course_id) VALUES (6, 1);
INSERT INTO subjects_courses (subject_id, course_id) VALUES (6, 2);
INSERT INTO subjects_courses (subject_id, course_id) VALUES (7, 1);
INSERT INTO subjects_courses (subject_id, course_id) VALUES (7, 2);
INSERT INTO subjects_courses (subject_id, course_id) VALUES (8, 1);
INSERT INTO subjects_courses (subject_id, course_id) VALUES (8, 2);
INSERT INTO subjects_courses (subject_id, course_id) VALUES (9, 1);
INSERT INTO subjects_courses (subject_id, course_id) VALUES (9, 2);
INSERT INTO subjects_courses (subject_id, course_id) VALUES (10, 1);
INSERT INTO subjects_courses (subject_id, course_id) VALUES (11, 1);
INSERT INTO subjects_courses (subject_id, course_id) VALUES (12, 1);
INSERT INTO subjects_courses (subject_id, course_id) VALUES (13, 1);

INSERT INTO teachers_courses (teacher_id, course_id) VALUES (1, 1);
INSERT INTO teachers_courses (teacher_id, course_id) VALUES (1, 2);
INSERT INTO teachers_courses (teacher_id, course_id) VALUES (2, 1);
INSERT INTO teachers_courses (teacher_id, course_id) VALUES (2, 2);
INSERT INTO teachers_courses (teacher_id, course_id) VALUES (3, 1);
INSERT INTO teachers_courses (teacher_id, course_id) VALUES (3, 2);
INSERT INTO teachers_courses (teacher_id, course_id) VALUES (4, 1);
INSERT INTO teachers_courses (teacher_id, course_id) VALUES (5, 1);
INSERT INTO teachers_courses (teacher_id, course_id) VALUES (5, 2);
INSERT INTO teachers_courses (teacher_id, course_id) VALUES (6, 1);
INSERT INTO teachers_courses (teacher_id, course_id) VALUES (6, 2);
INSERT INTO teachers_courses (teacher_id, course_id) VALUES (7, 1);
INSERT INTO teachers_courses (teacher_id, course_id) VALUES (7, 2);
INSERT INTO teachers_courses (teacher_id, course_id) VALUES (8, 1);
INSERT INTO teachers_courses (teacher_id, course_id) VALUES (9, 1);
INSERT INTO teachers_courses (teacher_id, course_id) VALUES (10, 1);

INSERT INTO exams (name, exam, teacher_id, category_id, subject_id) VALUES ('2020.1', 'https://cdn2.hubspot.net/hubfs/360031/PrepScholar-sat-practice-test-1-answers.pdf', 1, 1, 1);
INSERT INTO exams (name, exam, teacher_id, category_id, subject_id) VALUES ('2020.2', 'https://cdn2.hubspot.net/hubfs/360031/PrepScholar-sat-practice-test-3.pdf', 2, 2, 2);
INSERT INTO exams (name, exam, teacher_id, category_id, subject_id) VALUES ('2013.4', 'https://cdn2.hubspot.net/hubfs/360031/SAT_5.pdf?t=1475721017786', 2, 3, 3);
INSERT INTO exams (name, exam, teacher_id, category_id, subject_id) VALUES ('2015.3', 'https://cdn2.hubspot.net/hubfs/360031/SAT_5.pdf?t=1475721017786', 2, 3, 3);
INSERT INTO exams (name, exam, teacher_id, category_id, subject_id) VALUES ('2020.2', 'https://cdn2.hubspot.net/hubfs/360031/PrepScholar-sat-practice-test-3.pdf', 2, 3, 3);
INSERT INTO exams (name, exam, teacher_id, category_id, subject_id) VALUES ('2015.4', 'https://cdn2.hubspot.net/hubfs/360031/PrepScholar-sat-practice-test-1-answers.pdf', 10, 2, 13);
INSERT INTO exams (name, exam, teacher_id, category_id, subject_id) VALUES ('2016.3', 'https://cdn2.hubspot.net/hubfs/360031/PrepScholar-sat-practice-test-1-answers.pdf', 7, 1, 8);
INSERT INTO exams (name, exam, teacher_id, category_id, subject_id) VALUES ('2017.1', 'https://cdn2.hubspot.net/hubfs/360031/PrepScholar-sat-practice-test-1-answers.pdf', 2, 1, 3);
INSERT INTO exams (name, exam, teacher_id, category_id, subject_id) VALUES ('2021.1', 'https://cdn2.hubspot.net/hubfs/360031/PrepScholar-sat-practice-test-1-answers.pdf', 3, 1, 4);
INSERT INTO exams (name, exam, teacher_id, category_id, subject_id) VALUES ('2020.3', 'https://cdn2.hubspot.net/hubfs/360031/PrepScholar-sat-practice-test-1-answers.pdf', 4, 4, 5);