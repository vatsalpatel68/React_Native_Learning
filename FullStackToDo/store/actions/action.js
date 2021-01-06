import axios from 'axios';

export const addToDo = (data) => {
    return async dispatch => {
        //Here you can perform async task.
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => console.log(res))
        .catch(err => console.error(err));
        dispatch({
            type : "Add",
            id : Math.random(),
            data : data
        })
    }
}



export const deleteToDo = (data) => {
    return{
        type : 'Delete',
        id : data.id,
    }    
}


