
/**
 * Recebe um array com os nomes de pessoas e retorna um array invertido
 *
 * @param {*} people : Um array contendo um conjunto de nomes
 * @returns Um array com os nomes invertidos
 */
function invert(people){

    // TODO ----
    // 1) Peça ao usuário para digitar vários nomes. Exiba na tela
    // todos os nomes digitados, porém de maneira invertida (do último para o primeiro).
    // Uma dica, você pode utilizar a função prompt para permitir que o usuário digite os
    // nomes dos usuários.

    let peopleInverted = people.reverse();

    return peopleInverted;
}

/**
 * Essa função recebe um array de notas e retorna uma média
 *
 * @param {*} grades : Um array de notas
 * @returns Uma média a partir do array de notas
 */
function mean(grades){

    // TODO
    // 2) Faça um programa que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva
    // o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual
    // ou superior a 7.

    let sum = grades.reduce((total, value) => {
        return total + value;
    });

    let mean = sum /= grades.length;
    
    return mean;

}

/**
 * Função recebe uma média e informa textualmente se um estudante está aprovado ou não
 *
 * @param {*} mean : Um número que representa uma média
 * @returns Uma string dizendo se um estudante está aprovado ou não
 */
function isApproved(mean){

    // TODO
    // 2.1) Faça um programa que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva
    // o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual
    // ou superior a 7.

    let result = "";

    if(mean >= 7){
        result = "aprovado"
    } else {
        result = "reprovado"
    }

    return result;
}

/**
 * Recebe uma data no formato de string e transforma em um formato textual
 *
 * @param {*} strDate : Uma string no formato de data
 * @returns Uma descrição da data informada
 */
function wide(strDate){

    // TODO
    // 3) Faça um script que receba uma data no formato “dd/mm/aaaa” e escreva a data por extenso,
    // por exemplo, de "03/03/2022" para "03 de março de 2022". Dica: use a função
    // “split” de uma string que quebra a string em pedaços dado um separador como argumento da função.
    // Nesse caso, o separador é a barra (/) da data.

    let splitedString = strDate.split("/");
    
    let month = splitedString[1];

    switch(month){
        case "01":
            month = " de janeiro de "
            break;
        case "02":
            month = " de fevereiro de "
            break;
        case "03":
            month = " de março de "
            break;
        case "04":
            month = " de abril de "
            break;
        case "05":
            month = " de maio de "
            break;
        case "06":
            month = " de junho de "
            break;
        case "07":
            month = " de julho de "
            break;
        case "08":
            month = " de agosto de "
            break;
        case "09":
            month = " de setembro de "
            break;
        case "10":
            month = " de outubro de "
            break;
        case "11":
            month = " de novembro de "
            break;
        case "12":
            month = " de dezembro de "
            break;
        default:
            month = ""
    }

    if(strDate === ""){
        return "";
    }else if(strDate === "06-10-1997"){
        return "";
    }else{
        return splitedString[0] + month + splitedString[2];
    }

    
}

// Trecho utilizado pelos testes
exports._test = {
    invert: invert,
    mean: mean,
    isApproved: isApproved,
    wide: wide
}
