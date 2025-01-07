import { useRef } from "react"




export default function ScrollToSection(){

    const ref = useRef();

    const data = [
        {
            label: 'First Card',
            style: {
                width: '100%',
                height: '100vh',
                background : 'red'
            }
        },{
            label: 'Second Card',
            style: {
                width: '100%',
                height: '100vh',
                background : 'green'
            }
        },{
            label: 'Third Card',
            style: {
                width: '100%',
                height: '100vh',
                background : 'blue'
            }
        },{
            label: 'Fourth Card',
            style: {
                width: '100%',
                height: '100vh',
                background : 'gray'
            }
        },

    ]

    function handleScrollToSecton(){
        let position = ref.current.getBoundingClientRect().top

        window.scrollTo({
            top: position,
            behavior: "smooth"
        })
    }


    return <div>
        <h1>Scroll to particular section</h1>
        <button onClick={handleScrollToSecton}>ClickToScroll</button>
        {
            data.map((item, index)=><div 
            key={item.label} 
            style={item.style}
            ref = {index === 1 ? ref :null}
            ><h2>{item.label}</h2></div>)
        }
    </div>
}