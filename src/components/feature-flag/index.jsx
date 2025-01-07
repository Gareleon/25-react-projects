import { Component, useContext } from "react";
import ScrollingProgressBar from "../scrolling-progress";
import LightDarkMode from "../light-dark-mode";
import TicTacToe from "../tic-tac-toe";
import ColorGenerator from "../color-generator";
import Accordian from "../accordian";
import { FeatureFlagsContext } from "./context";


export default function FeatureFlags(){

    const {loading, enabledFlags} = useContext(FeatureFlagsContext);

    const componentsToRender = [
        {
            key: 'showScrollingProgression',
            component: <ScrollingProgressBar url={'https://dummyjson.com/products?limit=100'} />
        },
        {
            key: 'showLightAndDarkMode',
            component: <LightDarkMode/>
        },
        {
            key: 'showTicTacToe',
            component: <TicTacToe/>
        },
        {
            key: 'showRandomColorGenerator',
            component: <ColorGenerator/>
        },
        {
            key: 'showAccordian',
            component: <Accordian/>
        },
    ]


    function checkEnabledFlags(getCurrentKey) {
        return enabledFlags[getCurrentKey];
    }

    if (loading) {
        return <h1>Loading data! Please wait.</h1>
    }

    return (<div>
        <h1>Feature Flags</h1>
        {
            componentsToRender.map(item=> checkEnabledFlags(item.key)? item.component :null)
        }
    </div>);
}