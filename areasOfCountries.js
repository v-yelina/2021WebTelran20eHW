function countAreasCorrelation(firstArea, secondArea) {
    return firstArea / secondArea;
}

console.log("Соотношение площади Беларуси к площади Украины:", countAreasCorrelation(207_600, 603_628));

console.log("Площадь Москвы больше площади Берлина в " + countAreasCorrelation(2511, 891,8) + " раз.");