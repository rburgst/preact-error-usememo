import { FunctionComponent } from "preact";
import React, { useMemo, useRef, useState } from "preact/compat";

export const TestComponent: FunctionComponent = () => {
    const ref = useRef(null)
    const [currentBreakpoints, setCurrentBreakpoints] = useState<number[]>([]);    

    const result = useMemo(
        () => currentBreakpoints.map((breakpoint: number) => `cq-${breakpoint}`).join(' '),
        [currentBreakpoints]
    );
    if (result === undefined) {
        throw new Error('hooks are broken!');
    }
    
    return <div class={result} ref={ref}></div>
}