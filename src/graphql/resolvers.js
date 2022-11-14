import { v1 as uuid } from "uuid";
import { courses } from "../data/courses.js";
import { students } from "../data/students.js";

export const resolvers = {
  Query: {
    studentsQuantity: () => students.length,
    getStudents: () => students,
    getStudent: (root, args) => {
      const { dni } = args;
      return students.find((s) => s.dni === dni);
    },
    coursesQuantity: () => courses.length,
    getCourses: () => courses,
    getCourse: (root, args) => {
      const { code } = args;
      return courses.find((c) => c.code === code);
    },
  },
  Course: {
    students(root) {
      return students.filter((student) => student.courses.includes(root.code));
    },
  },
  Student: {
    courses(root) {
      return courses.filter((course) => course.students.includes(root.dni));
    },
  },
  Mutation: {
    createStudent: (root, args) => {
      const student = { ...args, uid: uuid(), active: true };
      students.push(student);
      return student;
    },
    createCourse: (root, args) => {
      const course = { ...args, uid: uuid(), active: true, students: [] };
      console.log("Course: " + JSON.stringify(course));
      courses.push(course);
      return course;
    },
  },
};
