import { gql } from "apollo-server";

export const typeDefinitions = gql`
  type Student {
    uid: ID!
    dni: String!
    first_name: String!
    last_name: String!
    active: Boolean
    courses: [Course!]!
  }

  type Course {
    uid: ID!
    code: String!
    title: String!
    description: String
    active: Boolean
    students: [Student!]!
  }

  type Query {
    studentsQuantity: Int!
    getStudents: [Student]!
    getStudent(dni: String!): Student

    coursesQuantity: Int!
    getCourses: [Course]!
    getCourse(code: String!): Course
  }

  type Mutation {
    createStudent(
      dni: String!
      first_name: String!
      last_name: String!
      active: Boolean
    ): Student

    createCourse(
      code: String!
      title: String!
      description: String
      active: Boolean
    ): Course
  }
`;
