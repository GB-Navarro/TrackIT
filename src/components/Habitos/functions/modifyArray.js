import codifyArray from "./codifyArray";

export default function modifyArray(array, element, setArray) {
    element = codifyArray(element)
    if (array.find((s) => s === element) === undefined) {
        setArray(
            [...array, element]
        )
    } else {
        setArray(
            array.filter((e) => e !== element)
        )
    }
}