import {ref} from 'vue'

const globalCount = ref(200);

const incrementGlobalCount = () => {
    globalCount.value += 10;
}

export function useCount() {
    const localCount = ref(50);

    const increentLocalCount = () =>{
        localCount.value += 80
    }

    return {
        incrementGlobalCount,
        increentLocalCount,
        globalCount,
        localCount
    }
}
