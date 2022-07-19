
import React from "react";

function CapitalizeFirstLetter(str) {

    // converting first letter to uppercase
    const capitalized = str?.charAt(0).toUpperCase() + str?.slice(1);

    return capitalized;
}
export default CapitalizeFirstLetter