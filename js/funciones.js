/////////////////////////CRUD CATEGORIA///////////////////
function getCategoria() {
    $.ajax({
        url: "http://132.226.31.143:8080/api/Category/all",
        type: "GET",
        datatype: "JSON",
        success: function(respuesta) {
            console.log(respuesta);
            pintarCategoria(respuesta);
        }
    });
}

function pintarCategoria(respuesta) {
    $("#resultadoCa").empty();
    let tableCategory = "<table align=" + "center" + ">";
    tableCategory += "<tr>";
    tableCategory += "<td class=" + "titles" + ">Name</td>";
    tableCategory += "<td class=" + "titles" + ">Description</td>";
    tableCategory += "<td class=" + "titles" + " colspan=" + "2" + ">Option</td>";
    tableCategory += "</tr>";
    for (i = 0; i < respuesta.length; i++) {
        tableCategory += "<tr>";
        tableCategory += "<td class=" + "titles2" + ">" + respuesta[i].name + "</td>";
        tableCategory += "<td class=" + "titles2" + ">" + respuesta[i].description + "</td>";
        tableCategory += "<td class=" + "titles2" + "><button onclick='putCategoria(" + respuesta[i].id + ")'>Actualizar</button>";
        tableCategory += "<td class=" + "titles2" + "><button onclick='deleteCategoria(" + respuesta[i].id + ")'>Eliminar</button>";
        tableCategory += "</tr>";
    }
    tableCategory += "</table>";
    $("#resultadoCa").append(tableCategory);
}

function postCategoria() {
    let myData = {
        name: $("#nameCa").val(),
        description: $("#descriptionCa").val(),
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://132.226.31.143:8080/api/Category/save",
        type: "POST",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        secure: false,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        success: function(respuesta) {
            $("#nameCa").val();
            $("#descriptionCa").val();
            getCategoria();
            alert("se ha guardado con exito")
        },

    })
}

function putCategoria(id) {
    let myData = {
        id: id,
        name: $("#nameCa").val(),
        description: $("#descriptionCa").val(),
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://132.226.31.143:8080/api/Category/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function(respuesta) {
            $("#resultadoPs").empty();
            $("#id").val();
            $("#descriptionCa").val();
            $("#nameCa").val();
            getCategoria();
            alert("se ha actualizado con exito")

        }
    })
}

function deleteCategoria(id) {
    let myData = {
        id: id
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://132.226.31.143:8080/api/Category/" + id,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function(respuesta) {
            $("#resultadoPs").empty();
            getCategoria();
            alert("se ha eliminado con exito!")

        }
    })
}
///////////////////////CRUD PATINETAS/////////////////////
function getPatinetas() {
    $.ajax({
        url: "http://132.226.31.143:8080/api/Skate/all",
        type: "GET",
        datatype: "JSON",
        success: function(respuesta) {
            console.log(respuesta);
            pintarPatinetas(respuesta);
        },

    });
}

function pintarPatinetas(respuesta) {
    $("#resultadoPs").empty();
    let tableSkate = "<table align=" + "center" + ">";
    tableSkate += "<tr>";
    tableSkate += "<td class=" + "titles" + ">name</td>";
    tableSkate += "<td class=" + "titles" + ">brand</td>";
    tableSkate += "<td class=" + "titles" + ">year</td>";
    tableSkate += "<td class=" + "titles" + ">description</td>";
    tableSkate += "<td class=" + "titles" + " colspan=" + "2" + ">Option</td>";
    tableSkate += "</tr>";
    for (i = 0; i < respuesta.length; i++) {
        tableSkate += "<tr>";
        tableSkate += "<td class=" + "titles2" + ">" + respuesta[i].name + "</td>";
        tableSkate += "<td class=" + "titles2" + ">" + respuesta[i].brand + "</td>";
        tableSkate += "<td class=" + "titles2" + ">" + respuesta[i].year + "</td>";
        tableSkate += "<td class=" + "titles2" + ">" + respuesta[i].description + "</td>";
        tableSkate += "<td class=" + "titles2" + "><button onclick='putPatinetas(" + respuesta[i].id + ")'>Actualizar</button>";
        tableSkate += "<td class=" + "titles2" + "><button onclick='deletePatinetas(" + respuesta[i].id + ")'>Eliminar</button>";
        tableSkate += "</tr>";
    }
    tableSkate += "</table>";
    $("#resultadoPs").append(tableSkate);
}

function postPatinetas() {
    let myData = {
        name: $("#namePs").val(),
        brand: $("#brandPs").val(),
        year: $("#yearPs").val(),
        description: $("#descriptionPs").val()
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://132.226.31.143:8080/api/Skate/save",
        type: "POST",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        secure: false,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        success: function(respuesta) {
            $("#resultadoPs").val();
            $("#namePs").val();
            $("#brandPs").val();
            $("#yearPs").val();
            $("#descriptionPs").empty('');
            getPatinetas();
            alert("se ha guardado con exito")
        }

    })
}

function putPatinetas(id) {
    let myData = {
        id: id,
        name: $("#namePs").val(),
        brand: $("#brandPs").val(),
        year: $("#yearPs").val(),
        description: $("#descriptionPs").val()
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://132.226.31.143:8080/api/Skate/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function(respuesta) {
            $("#resultadoPs").empty();
            $("#namePs").val('');
            $("#brandPs").val('');
            $("#yearPs").val('');
            $("#descriptionPs").val('');
            getPatinetas();
            alert("se ha actualizado con exito")

        }
    })
}

function deletePatinetas(id) {
    let myData = {
        id: id
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://132.226.31.143:8080/api/Skate/" + id,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function(respuesta) {
            $("#resultadoPs").empty();
            getPatinetas();
            alert("se ha eliminado con exito!")

        }
    })
}

//////////////////////////Crud Clientes//////////////////////////////

function getClientes() {
    $.ajax({
        url: "http://132.226.31.143:8080/api/Client/all",
        type: "GET",
        datatype: "JSON",
        success: function(respuesta) {
            console.log(respuesta);
            pintarClientes(respuesta);
        }
    });
}

function pintarClientes(respuesta) {
    $("#resultadoCs").empty();
    let tableClient = "<table align=" + "center" + ">";
    tableClient += "<tr>";
    tableClient += "<td class=" + "titles" + ">email</td>";
    tableClient += "<td class=" + "titles" + ">name</td>";
    tableClient += "<td class=" + "titles" + ">age</td>";
    tableClient += "<td class=" + "titles" + " colspan=" + "2" + ">Option</td>";
    tableClient += "</tr>";
    for (i = 0; i < respuesta.length; i++) {
        tableClient += "<tr>";
        tableClient += "<td class=" + "titles2" + ">" + respuesta[i].name + "</td>";
        tableClient += "<td class=" + "titles2" + ">" + respuesta[i].email + "</td>";
        tableClient += "<td class=" + "titles2" + ">" + respuesta[i].age + "</td>";
        tableClient += "<td class=" + "titles2" + "><button onclick='putClientes(" + respuesta[i].idClient + ")'>Actualizar</button>";
        tableClient += "<td class=" + "titles2" + "><button onclick='deleteClientes(" + respuesta[i].idClient + ")'>Eliminar</button>";
        tableClient += "</tr>";
    }
    tableClient += "</table>";
    $("#resultadoCs").append(tableClient);
}

function postClientes() {
    let myDataC = {
        name: $("#nameCl").val(),
        email: $("#emailCl").val(),
        password: $("#passwordCl").val(),
        age: $("#ageCl").val()

    };
    let dataToSend = JSON.stringify(myDataC);
    $.ajax({
        url: "http://132.226.31.143:8080/api/Client/save",
        type: "POST",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        secure: false,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        success: function(respuesta) {
            $("#resultadoCs").empty();
            $("#emailCl").val();
            $("#passwordCl").val();
            $("#nameCl").val();
            $("#ageCl").val();
            getClientes();
            alert("se ha guardado con exito")
        }
    })
}

function putClientes(id) {
    let myData = {
        idClient: id,
        name: $("#nameCl").val(),
        email: $("#emailCl").val(),
        password: $("#passwordCl").val(),
        age: $("#ageCl").val()
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://132.226.31.143:8080/api/Client/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function(respuesta) {
            $("#resultadoCs").empty();
            $("#nameCl").val();
            $("#emailCl").val();
            $("#passwordCl").val();
            $("#ageCl").val();
            getClientes();
            alert("se ha actualizado con exito")

        }
    })
}

function deleteClientes(id) {
    let myData = {
        idClient: id
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://132.226.31.143:8080/api/Client/" + id,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function(respuesta) {
            $("#resultadoCs").empty();
            getClientes();
            alert("se ha eliminado con exito!")

        }
    })
}

/////////////////////////CRUD MENSAJES/////////////////////////
function getMensajes() {
    $.ajax({
        url: "http://132.226.31.143:8080/api/Message/all",
        type: "GET",
        datatype: "JSON",
        success: function(respuesta) {
            console.log(respuesta);
            pintarMensajes(respuesta);
        }
    });
}

function pintarMensajes(respuesta) {
    $("#resultadoMs").empty();
    let tableMessage = "<table align=" + "center" + ">";
    tableMessage += "<tr>";
    tableMessage += "<td class=" + "titles" + ">message</td>";
    tableMessage += "<td class=" + "titles" + " colspan=" + "2" + ">Option</td>";
    tableMessage += "</tr>";
    for (i = 0; i < respuesta.length; i++) {
        tableMessage += "<tr>";
        tableMessage += "<td class=" + "titles2" + ">" + respuesta[i].messageText + "</td>";
        tableMessage += "<td class=" + "titles2" + "><button onclick='putMensajes(" + respuesta[i].idMessage + ")'>Actualizar</button>";
        tableMessage += "<td class=" + "titles2" + "><button onclick='deleteMensajes(" + respuesta[i].idMessage + ")'>Eliminar</button>";

        tableMessage += "</tr>";
    }
    tableMessage += "</table>";
    $("#resultadoMs").append(tableMessage);
}

function postMensajes() {
    let myDataC = {
        messageText: $("#messagetext").val()

    };
    let dataToSend = JSON.stringify(myDataC);
    $.ajax({
        url: "http://132.226.31.143:8080/api/Message/save",
        type: "POST",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        secure: false,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        success: function(respuesta) {
            $("#resultadoMs").empty();
            $("#messagetext").val();
            getMensajes();
            alert("se ha guardado con exito")
        }

    })
}

function putMensajes(id) {
    let myData = {
        idMessage: id,
        messageText: $("#messagetext").val()
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://132.226.31.143:8080/api/Message/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function(respuesta) {
            $("#resultadoMs").empty();
            $("#messagetext").val('');
            getMensajes();
            alert("se ha actualizado con exito")

        }
    })
}

function deleteMensajes(id) {
    let myData = {
        idMessage: id
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://132.226.31.143:8080/api/Message/" + id,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function(respuesta) {
            $("#resultadoMs").empty();
            getMensajes();
            alert("se ha eliminado con exito!")

        }
    })
}
//////////////////////CRUD RESERVACION/////////////////////
function getReservacion() {
    $.ajax({
        url: "http://132.226.31.143:8080/api/Reservation/all",
        type: "GET",
        datatype: "JSON",
        success: function(respuesta) {
            console.log(respuesta);
            pintarReservacion(respuesta);
        }
    });
}

function pintarReservacion(respuesta) {
    $("#resultadoRe").empty();
    let tableReservation = "<table align=" + "center" + ">";
    tableReservation += "<tr>";
    tableReservation += "<td class=" + "titles" + ">id reservacion</td>";
    tableReservation += "<td class=" + "titles" + ">Fecha de inicio</td>";
    tableReservation += "<td class=" + "titles" + ">Fecha de entrega</td>";
    tableReservation += "<td class=" + "titles" + ">estado</td>";
    tableReservation += "<td class=" + "titles" + ">puntuación</td>";
    tableReservation += "<td class=" + "titles" + " colspan=" + "2" + ">Option</td>";
    tableReservation += "</tr>";
    for (i = 0; i < respuesta.length; i++) {
        tableReservation += "<tr>";
        tableReservation += "<td class=" + "titles2" + ">" + respuesta[i].idReservation + "</td>";
        tableReservation += "<td class=" + "titles2" + ">" + respuesta[i].startDate + "</td>";
        tableReservation += "<td class=" + "titles2" + ">" + respuesta[i].devolutionDate + "</td>";
        tableReservation += "<td class=" + "titles2" + ">" + respuesta[i].status + "</td>";
        tableReservation += "<td class=" + "titles2" + ">" + respuesta[i].score + "</td>";
        tableReservation += "<td class=" + "titles2" + "><button onclick='putReservacion(" + respuesta[i].idReservation + ")'>Actualizar</button>";
        tableReservation += "<td class=" + "titles2" + "><button onclick='deleteReservacion(" + respuesta[i].idReservation + ")'>Eliminar</button>";

        tableReservation += "</tr>";
    }
    tableReservation += "</table>";
    $("#resultadoRe").append(tableReservation);
}

function postReservacion() {
    let myDataC = {
        startDate: $("#startDate").val(),
        devolutionDate: $("#devolutionDate").val(),
    };
    let dataToSend = JSON.stringify(myDataC);
    $.ajax({
        url: "http://132.226.31.143:8080/api/Reservation/save",
        type: "POST",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        secure: false,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        success: function(respuesta) {
            $("#resultadoRe").empty();
            $("#startDate").val();
            $("#devolutionDate").val();
            getReservacion();
            alert("se ha guardado con exito")
        },
        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("no se guardo correctamente");
        }
    })
}

function putReservacion(id) {
    let myData = {
        idReservation: id,
        startDate: $("#startDate").val(),
        devolutionDate: $("#devolutionDate").val(),
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://132.226.31.143:8080/api/Reservation/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function(respuesta) {
            $("#resultadoRe").empty();
            $("#id").val();
            $("#descriptionCa").val();
            $("#nameCa").val();
            getReservacion();
            alert("se ha actualizado con exito")

        }
    })
}

function deleteReservacion(id) {
    let myData = {
        idReservation: id
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://132.226.31.143:8080/api/Reservation/" + id,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function(respuesta) {
            $("#resultadoRe").empty();
            getReservacion();
            alert("se ha eliminado con exito!")

        }
    })
}