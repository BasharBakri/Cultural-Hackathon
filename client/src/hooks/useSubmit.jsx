import { useState } from "react";

const useSubmit = (initialState) => {
    const [data, setData] = useState(initialState);

    const handleSubmit = (values) => {
        setData(values);
    };

    return [data, handleSubmit];
};

export default useSubmit;
