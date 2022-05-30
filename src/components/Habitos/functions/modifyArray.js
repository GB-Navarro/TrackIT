import codifyArray from "./codifyArray";

export default function modifyArray(array, element, setArray) {
    element = codifyArray(element)
    if(!(array.some((e) => e === element))) {
        setArray(
            [...array, element]
        )
    } else {
        setArray(
            array.filter((e) => e !== element)
        )
    }
}