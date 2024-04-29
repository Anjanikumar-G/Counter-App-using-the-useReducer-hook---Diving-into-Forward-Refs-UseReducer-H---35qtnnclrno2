export default function reducer (state, action){
    switch(action.type){

        case 'add' : return {...state, count: state.count+1}
        case 'delete' : return {...state, count: state.count-1}
        case 'deleteAll' : return {...state, count: 0}
        default : return{...state};
    }
}
