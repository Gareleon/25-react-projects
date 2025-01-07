import { useRef, useState } from "react";
import UseOutisdeClick from ".";

export default function UseOnClickOutsideTest() {
    
    const [showContent, setShowContent] = useState(false);
    const ref = useRef();
    UseOutisdeClick(ref, ()=>setShowContent(false));

    return (
        <div>
            {showContent ? (
                <div ref={ref}>
                    <h1>This is some random content.</h1>
                    <p>Click outside of this box to close this modal.</p>
                </div>
            ) : (
                <button onClick={() => setShowContent(true)}>Show Content</button>
            )}
        </div>
    );
}
