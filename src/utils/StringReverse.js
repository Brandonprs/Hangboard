const StringReverse = (text) => {
    if(text.includes(" ")){
        return text
        .split(" ")
        .reverse()
        .join(" ");
    } else {
        return text
        .split("")
        .reverse()
        .join("");
    }
    
};
export default StringReverse;
    
