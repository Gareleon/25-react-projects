import { useState } from "react"




export default function Tabs({ tabsContent, onChange }) {

    const [currentTabIndex, setCurrentTabIndex] = useState(0);


    function handleOnClick(getCurrentTabIndex) {
        setCurrentTabIndex(getCurrentTabIndex);
        onChange(getCurrentTabIndex)

    }


    return <div className="wrapper">
        <div className="heading">
            {
                tabsContent.map((item, index) =>
                    <div 
                    className={`tab-item ${currentTabIndex === index? "active" : ""}`}
                    onClick={() => { handleOnClick(index) }} 
                    key={item.label}>
                        <span className="label">{item.label}</span>
                    </div>)
            }
        </div>
        <div className="content">
            {
                tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content

            }
        </div>
    </div>
}