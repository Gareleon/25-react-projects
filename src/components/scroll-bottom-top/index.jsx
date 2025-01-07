import { useRef } from "react";
import useFetch from "../use-fetch";

export default function ScrollToTopAndBottom() {

    const bottomReference = useRef(null);

    const { data, error, pending } = useFetch(
        'https://dummyjson.com/products?limit=100',
        {}
    );

    function handleScrollToTop() {
        window.scrollTo({
            top: 0, left: 0, behavior: 'smooth'
        })
    }

    function handleScrollToBottom() {
        bottomReference.current.scrollIntoView({
            behavior: 'smooth'
        })
    }

    if (pending) {
        return <h1>Loading data! Please wait.</h1>
    }

    if (error) {
        return <h1>Error occured: {error}</h1>
    }

    return <div>
        <h1>Scroll To Top and Bottom Feature</h1>
        <h3>Top section</h3>
        <button onClick={handleScrollToBottom}>Scroll To Bottom</button>
        <ul style={{ listStyle: 'none' }}>
            {
                data && data.products && data.products.length ?
                    data.products.map(item => <li>{item.title}</li>)
                    : null
            }
        </ul>
        <button onClick={handleScrollToTop}>Scroll To Top</button>
        <div ref={bottomReference}></div>
        <h3>Bottom section</h3>

    </div>



}