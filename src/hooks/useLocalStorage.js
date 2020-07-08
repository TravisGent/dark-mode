import React, { useState } from "react";

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState("");

    return [storedValue, setStoredValue];
};

export default useLocalStorage;