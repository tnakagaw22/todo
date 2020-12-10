/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($UserName: String!, $TaskName: String!) {
    getTodo(UserName: $UserName, TaskName: $TaskName) {
      TaskName
      UserName
    }
  }
`;
export const listTodos = /* GraphQL */ `
query listTodos {
  listTodos {
    items {
      TaskName
      UserName
    }
  }
}
`;
