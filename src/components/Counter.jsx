import { useState } from "preact/hooks";

export function Counter() {
    const [counter, setCounter] = useState(0);

    return (
        <div class="mb-2" >
            <span class="text-yellow-500 text-xl m-2">{counter}</span>
            <button class="px-3 border" onClick={() => setCounter(counter => counter+1)}>+</button>
            <button class="px-3 border" onClick={() => setCounter(counter => counter-1)}>-</button>
        </div>
    )
}
