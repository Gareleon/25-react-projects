import './styles.css'
import './data.js'
import MenuList from "./menu-list.jsx"


export default function TreeMenu({ menus = [] }) {


    return <div className="tree-view-container">
        <MenuList list={menus} />

    </div>


}