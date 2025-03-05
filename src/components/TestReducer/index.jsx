import { useReducer } from "react"


const reducer = (state, action) => {
    switch (action) {
        case 'ADD':
            return state +1;
        case 'SUB':
            return state -1;
        default:
            return 0;
    }

}
function TestReducer() {
    const [state, dispatch] = useReducer(reducer, 0);

    const handleAdd =  () =>{
        dispatch('ADD');
    }
    const handleSub =  () =>{
        dispatch('SUB');
    }

    const handleReset = () =>{
        dispatch('RESET');
    }
    return (
        <div>
                    <h2>{state}</h2>
                    <button onClick={handleAdd}>+</button>
                    <button onClick={handleSub}>-</button>
                    <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default TestReducer
