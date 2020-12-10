/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($TaskName: String, $UserName: String) {
    onCreateTodo(TaskName: $TaskName, UserName: $UserName) {
      TaskName
      UserName
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($TaskName: String, $UserName: String) {
    onUpdateTodo(TaskName: $TaskName, UserName: $UserName) {
      TaskName
      UserName
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($TaskName: String, $UserName: String) {
    onDeleteTodo(TaskName: $TaskName, UserName: $UserName) {
      TaskName
      UserName
    }
  }
`;
