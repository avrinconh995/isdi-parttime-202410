//*
//*Headers -> Representa encabezados de respuesta/solicitud, lo que le permite consultarlos y realizar diferentes acciones según los resultados.


fetch('http://localhost:8080/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: '{"name":"Zana Horia","email":"zana@horia.com","username":"zanahoria","password":"123123123"}'
})
    //*callback
    .then(res => {
        const { status } = res

        if ('OK', status === 201) {
            console.log(status)

            return
        }

        return res.json()
            .then(body => console.log('KO', status, body))
    })
    .catch(error => console.error(error))