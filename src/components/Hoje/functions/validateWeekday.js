export default function validateWeekday(num){
    if(num === 0){
        return "Domingo";
    }else if(num === 1){
        return "Segunda";
    }else if(num === 2){
        return "Terça";
    }else if(num === 3){
        return "Quarta";
    }else if(num === 4){
        return "Quinta";
    }else if(num === 5){
        return "Sexta";
    }else if(num === 6){
        return "Sabado";
    }
}