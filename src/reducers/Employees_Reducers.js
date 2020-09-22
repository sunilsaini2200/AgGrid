import{ACTION_TYPES} from "../actions/Action_Employees";
const initialState = {
    list: [],
    DepartmentList:[]
}

export const Employees_Reducers = (state = initialState, action) => {
 
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list: [...action.payload]
            }
            
            case ACTION_TYPES.DELETE:
                return {
                    ...state,
                    list: state.list.filter(x => x.emp_Id !== action.payload)
                }
            
            

                case ACTION_TYPES.UPDATE:
                    return {
                        ...state,
                        list: state.list.map(x => x.emp_Id === action.payload.emp_Id ? action.payload : x)
                    }

                    case ACTION_TYPES.FETCH_Department:
                        return {
                            ...state,
                            DepartmentList: action.payload
                        }


            default:
                return state
    }
    
}