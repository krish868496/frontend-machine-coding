import { useEffect, useState } from "react";


function Usedbounce(input, delay):any{
        const [debounce, setDebounce] = useState("");

        useEffect(() => {
                const timer = setTimeout(() => {
                        setDebounce(input);
                }, [delay])
                return () => clearTimeout(timer);
        }, [input, delay])
        return debounce;
}

export default Usedbounce;