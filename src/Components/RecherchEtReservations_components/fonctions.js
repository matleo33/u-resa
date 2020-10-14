function loadreferentiel(props) {
    fetch("http://localhost:8080/Salles/Salles", {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }).then(response => response.json())
        .then(response => props.setState({ salles: response }))
    fetch("http://localhost:8080/Salles/Batiments", {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }).then(response => response.json())
        .then(response => props.setState({ batiments: response }))
    fetch("http://localhost:8080/Salles/Sites", {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }).then(response => response.json())
        .then(response => props.setState({ sites: response }))
}

function resultat(data, props) {
    var str = data["Horaire"].split("H")
    var heuresansretenue = (Number(str[0]) + Number(Math.trunc((data["Duree"] * 30) / 60))) + 'H' + (Number(str[1]) + Number((data["Duree"] * 30) % 60))
    var str2 = heuresansretenue.split("H")
    var heure = data["Date"] + ' ' + (Number(str2[0]) + Number((Math.trunc(Number(str2[1]) / 60)))) + 'H' + (Number(str2[1]) % 60)
    if (data["Horaire"] === "Aucune préférence") {
        fetch("http://localhost:8080/Salles/Disponibilitesalle", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                date: data["Date"],
                idsalle: data["idSalle"]
            })
        }).then(response => response.json())
            .then(response => props.setState({ response: response }))
    }
    else if (data["idSalle"] === '0') {
        fetch("http://localhost:8080/Salles/Disponibilitehoraire", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                horaire: data["Date"] + ' ' + data["Horaire"],
                horairefin: heure,
                idBatiment: data["Batiment"]
            })
        }).then(response => response.json())
            .then(response => props.setState({ response: response }))
    }
    else {
        fetch("http://localhost:8080/Salles/Disponibilite", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                horaire: data["Date"] + ' ' + data["Horaire"],
                horairefin: heure,
                idsalle: data["idSalle"],
            })
        }).then(response => response.json())
            .then(response => props.setState({ response: response }))
    }
}

function handleResa(e, titleProps, props) {
    const { index } = titleProps
    fetch("http://localhost:8080/User/1/CGU", {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then(response => response.json())
        .then(response => props.setState({ CGU: response[0]["CGU"] }, function () {
            if (props.state.CGU === 1) {
                var str = props.state.Horaire.split("H")
                var heuresansretenue = (Number(str[0]) + Number(Math.trunc((props.state.Duree * 30) / 60))) + 'H' + (Number(str[1]) + Number((props.state.Duree * 30) % 60))
                var str2 = heuresansretenue.split("H")
                var horairefin = props.state.Date + ' ' + (Number(str2[0]) + Number((Math.trunc(Number(str2[1]) / 60)))) + 'H' + (Number(str2[1]) % 60)
                fetch("http://localhost:8080/Salles/Reserver", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        horaire: props.state.Date + ' ' + props.state.Horaire,
                        idsalle: props.state.response[index.toString()]["id_salle"],
                        duree: Number(props.state.Duree) * 30,
                        idreservant: "1",
                        horairefin: horairefin
                    })
                })
                let data = [
                    {
                        Date: props.state.Date,
                        Horaire: props.state.Horaire,
                        Fac: props.state.Fac,
                        Batiment: props.state.Batiment,
                        idSalle: props.state.response[index.toString()]["id_salle"],
                        nomSalle: props.state.response[index.toString()]["nomSalle"],
                        Duree: props.state.Duree,
                    }
                ]
                props.props.history.push({
                    pathname: '/u-resa/HistoEtResas',
                    data: data
                })
            }
            else if (props.state.CGU === 0) {
                let data = [
                    {
                        Date: props.state.Date,
                        Horaire: props.state.Horaire,
                        Fac: props.state.Fac,
                        Batiment: props.state.Batiment,
                        idSalle: props.state.response[index.toString()]["id_salle"],
                        nomSalle: props.state.response[index.toString()]["nomSalle"],
                        Duree: props.state.Duree,
                    }
                ]
                props.props.history.push({
                    pathname: '/u-resa/CGU',
                    data: data
                })
            }
            else {
                console.log("Erreur")
            }
        }));
}