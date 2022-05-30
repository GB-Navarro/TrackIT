export default function codifyArray(element) {
    if (element === 'Dom') {
        return 0;
    } else if (element === 'Seg') {
        return 1;
    } else if (element === 'Ter') {
        return 2;
    } else if (element === 'Qua') {
        return 3;
    } else if (element === 'Qui') {
        return 4;
    } else if (element === 'Sex') {
        return 5;
    } else if (element === 'Sab') {
        return 6;
    }
}