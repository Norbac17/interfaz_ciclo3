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
    tableCategory += "</tr>";
    for (i = 0; i < respuesta.length; i++) {
        tableCategory += "<tr>";
        tableCategory += "<td class=" + "titles2" + ">" + respuesta[i].name + "</td>";
        tableCategory += "<td class=" + "titles2" + ">" + respuesta[i].description + "</td>";
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
            $("#nameCa").empty();
            $("#descriptionCa").empty();
            getCategoria();
            alert("se ha guardado con exito")
        },
        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("no se guardo correctamente");
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
    tableSkate += "</tr>";
    for (i = 0; i < respuesta.length; i++) {
        tableSkate += "<tr>";
        tableSkate += "<td class=" + "titles2" + ">" + respuesta[i].name + "</td>";
        tableSkate += "<td class=" + "titles2" + ">" + respuesta[i].brand + "</td>";
        tableSkate += "<td class=" + "titles2" + ">" + respuesta[i].year + "</td>";
        tableSkate += "<td class=" + "titles2" + ">" + respuesta[i].description + "</td>";
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
            $("#descriptionPs").empty();
            getPatinetas();
            alert("se ha guardado con exito")
        },
        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("no se guardo correctamente");
        }
    })
}

function putPatinetas() {
    /*let myData = {
        id: $("#id").val(),
        brand: $("#brand").val(),
        model: $("#model").val(),
        category_id: $("#category_id").val(),
        name: $("#name").val(),
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://gb53455c16ecd61-dbskate.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/skate/skate",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function(respuesta) {
            $("#resultadoPs").empty();
            $("#id").val();
            $("#brand").val();
            $("#model").val();
            $("#category_id").val();
            $("#name").val();
            getPatinetas();
            alert("se ha actualizado con exito")

        }
    })*/
}

function deletePatinetas(idElemto) {
    /*let myData = {
        id: idElemto
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://gb53455c16ecd61-dbskate.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/skate/skate",
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function(respuesta) {
            $("#resultadoPs").empty();
            getPatinetas();
            alert("se ha eliminado con exito!")

        }
    })*/
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
    tableClient += "</tr>";
    for (i = 0; i < respuesta.length; i++) {
        tableClient += "<tr>";
        tableClient += "<td class=" + "titles2" + ">" + respuesta[i].email + "</td>";
        tableClient += "<td class=" + "titles2" + ">" + respuesta[i].name + "</td>";
        tableClient += "<td class=" + "titles2" + ">" + respuesta[i].age + "</td>";
        tableClient += "</tr>";
    }
    tableClient += "</table>";
    $("#resultadoCs").append(tableClient);
}

function postClientes() {
    let myDataC = {
        email: $("#emailCl").val(),
        password: $("#passwordCl").val(),
        name: $("#nameCl").val(),
        age: $("#ageCl").val(),

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
        },
        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("no se guardo correctamente");
        }
    })
}

function putClientes() {
    /*let myData = {
        id: $("#idC").val(),
        name: $("#nameC").val(),
        email: $("#emailC").val(),
        age: $("#ageC").val(),
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://gb53455c16ecd61-dbskate.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function(respuesta) {
            $("#resultadoCs").empty();
            $("#idC").val();
            $("#nameC").val();
            $("#emailC").val();
            $("#ageC").val();
            getClientes();
            alert("se ha actualizado con exito")

        }
    })*/
}

function deleteClientes(idElemento) {
    /*let myData = {
        id: idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://gb53455c16ecd61-dbskate.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function(respuesta) {
            $("#resultadoCs").empty();
            getClientes();
            alert("se ha eliminado con exito!")

        }
    })*/
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
    tableMessage += "</tr>";
    for (i = 0; i < respuesta.length; i++) {
        tableMessage += "<tr>";
        tableMessage += "<td class=" + "titles2" + ">" + respuesta[i].messageText + "</td>";
        tableMessage += "</tr>";
    }
    tableMessage += "</table>";
    $("#resultadoMs").append(tableMessage);
}

function postMensajes() {
    let myDataC = {
        messagetext: $("#messagetext").val(),

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
        },
        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("no se guardo correctamente");
        }
    })
}

function putMensajes() {
    /*let myData = {
        id: $("#idM").val(),
        messagetext: $("#messagetext").val(),
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://gb53455c16ecd61-dbskate.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/message",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function(respuesta) {
            $("#resultadoMs").empty();
            $("#idM").val();
            $("#messagetext").val();
            getMensajes();
            alert("se ha actualizado con exito")

        }
    })*/
}

function deleteMensajes(idElemento) {
    /*let myData = {
        id: idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://gb53455c16ecd61-dbskate.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/message",
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function(respuesta) {
            $("#resultadoMs").empty();
            getMensajes();
            alert("se ha eliminado con exito!")

        }
    })*/
}
//////////////////////CRUD RESERVACION/////////////////////
function getReservacion() {
    $.ajax({
        url: "http://132.226.31.143:8080/api/Reservation/all",
        type: "GET",
        datatype: "JSON",
        success: function(respuesta) {
            console.log(respuesta);
            pintarReservacio(respuesta);
        }
    });
}

function pintarReservacion(respuesta) {
    $("#resultadoRe").empty();
    let tableReservation = "<table align=" + "center" + ">";
    tableReservation += "<tr>";
    tableReservation += "<td class=" + "titles" + ">id reservacion</td>";
    tableReservation += "<td class=" + "titles" + ">Fecha de inicio</td>";
    tableReservation += "<td class=" + "titles" + ">mecha de entrega</td>";
    tableReservation += "</tr>";
    for (i = 0; i < respuesta.length; i++) {
        tableReservation += "<tr>";
        tableReservation += "<td class=" + "titles2" + ">" + respuesta[i].idReservation + "</td>";
        tableReservation += "<td class=" + "titles2" + ">" + respuesta[i].startDate + "</td>";
        tableReservation += "<td class=" + "titles2" + ">" + respuesta[i].devolutionDate + "</td>";
        tableReservation += "<td class=" + "titles2" + ">" + respuesta[i].status + "</td>";
        tableReservation += "<td class=" + "titles2" + ">" + respuesta[i].score + "</td>";
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
            getMensajes();
            alert("se ha guardado con exito")
        },
        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("no se guardo correctamente");
        }
    })
}