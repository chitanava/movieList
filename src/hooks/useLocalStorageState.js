import {useState} from "react";

export default function useLocalStorageState(key, initialValue) {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);

        return storedValue ? JSON.parse(storedValue) : initialValue;
    });

    return [value, setValue];
}