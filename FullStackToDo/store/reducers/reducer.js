const initialState = {
    datas : []
}

 const ToDoReducer = (state = initialState , action) =>
{
    switch(action.type)
    {
        case "Add" : return {
            datas : [...state.datas , { id : action.id , data : action.data}]
        }

        case "Delete" : return {
            datas : state.datas.filter(once => once.id != action.id)
        }

        default : return state;
    }

    
}

export default ToDoReducer;