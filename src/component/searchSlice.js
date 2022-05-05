const initState = [

  ];
  
  const searchReducer = (state = initState, action) => {
    switch (action.type) {
      case 'search/add':
        return [...action.payload];
  
    //   case 'todoList/toggleTodoStatus':
    //     return state.map((todo) =>
    //       todo.id === action.payload
    //         ? { ...todo, completed: !todo.completed }
    //         : todo
    //     );

      default:
        return state;
    }
  };
  
  export default searchReducer;
  