import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import  '/Styles/StylesSidebar.css'

const Sidebar = (FontAwesomeIcon) => {

  return(
    <div class="sidebar">
        <i class="left-menu-icon fa-solid fa-magnifying-glass"></i>
        <i class="left-menu-icon fa-solid fa-bookmark"></i>
        <i class="left-menu-icon fa-solid fa-gear"></i>
        <i class="left-menu-icon fa-regular fa-copyright"></i>
    </div>

)
}

export default Sidebar;