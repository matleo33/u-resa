export function dateEtDuree(date, duree) {
    var splitedHour = date.split("H")
    var heureSansRetenue = (Number(date.split("H")[0]) + Number(Math.trunc((duree.split("H")[0])))) +
        'H' + (Number(splitedHour[1]) + Number((duree.split("H")[1])))
    var splitedHeureSansRetenue = heureSansRetenue.split("H")
    var heure = (Number(splitedHeureSansRetenue[0]) + Number((Math.trunc(Number(splitedHeureSansRetenue[1]) / 60)))) + 'H' +
        (Number(splitedHeureSansRetenue[1]) % 60)
    return heure;
}
