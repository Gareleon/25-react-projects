import { useEffect, useState } from "react"
import './scroll.css'


export default function ScrollingProgressBar({ url }) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [scrollingProgress, setScrollingProgress] = useState(0);

    async function fetchData(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(getUrl);
            const data = await response.json()
            if (data && data.products && data.products.length) {
                setData(data.products);
                setLoading(false);
            }

        } catch (error) {
            setLoading(false);
            setErrorMsg(error.message);


        }
    }

    useEffect(() => {
        fetchData(url);
    }, [url]);


    function handleScrollingProgress() {
        console.log(document.body.scrollTop,
            document.documentElement.scrollTop,
            document.documentElement.scrollHeight,
            document.documentElement.clientHeight);

        const scrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollingProgress((scrolled / height) * 100)

    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollingProgress)

        return () => {
            window.removeEventListener('scroll', () => { })
        }
    });


    //console.log(scrollingProgress);

    if(errorMsg){
        return <div>{errorMsg}</div>
    }

    if(loading){
        return <div>Loading data! Please wait.</div>
    }

    return <div>
        <div className="top-container">
            <div className="scrolling-progress-container">
                <div className="progress-bar" style={{ width: `${scrollingProgress}%` }}></div>
            </div>
        </div>

        <h1>Scrolling Progress Bar</h1>
        <div className="data-container"></div>
        {
            data && data.length > 0 ?
                data.map(dataItem => <p key={dataItem.id}>{dataItem.title}</p>)
                : null
        }
    </div>

}