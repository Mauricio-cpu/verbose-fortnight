function validarFormulario(){
    let txtRazon = document.getElementById('razon').value;
    let txtFecha = document.getElementById('fecha').value;
    let txtDomicilio = document.getElementById('domicilio').value;
    let txtProvincia = document.getElementById('provincia').value;
    let txtCodPostal = document.getElementById('codpostal').value;
    let txtResponsable = document.getElementById('responsable').value;
    let txtEmail = document.getElementById('mail').value;
    let txtRegistro = document.getElementById('registro').value;
    let txtObservaciones = document.getElementById('observaciones').value;
    

    if (txtRazon == null || txtRazon.length ==0 || /^\s+S/.test(txtRazon)){
        alert('Error!: El campo Razón Social no debe estar vacío o solo contener espacios en blanco');
        return false
    }
    if (txtFecha == null || txtFecha.length ==0 || /^\s+S/.test(txtFecha)){
        alert('Error!: El campo Fecha no debe estar vacío o solo contener espacios en blanco');
        return false
    }
    if (txtDomicilio == null || txtDomicilio.length ==0 || /^\s+S/.test(txtDomicilio)){
        alert('Error!: El campo Domicilio no debe estar vacío o solo contener espacios en blanco');
        return false
    }
    if (txtProvincia == null || txtProvincia.length ==0 || /^\s+S/.test(txtProvincia)){
        alert('Error!: El campo Estado/Provincia no debe estar vacío o solo contener espacios en blanco');
        return false
    }
    if (txtCodPostal == null || txtCodPostal.length ==0 || /^\s+S/.test(txtCodPostal)){
        alert('Error!: El campo Código Postal no debe estar vacío o solo contener espacios en blanco');
        return false
    }
    if (txtResponsable == null || txtResponsable.length ==0 || /^\s+S/.test(txtResponsable)){
        alert('Error!: El campo Responsable/Gerente no debe estar vacío o solo contener espacios en blanco');
        return false
    }
    if (txtEmail == null || txtEmail.length ==0 || /^\s+S/.test(txtEmail)){
        alert('Error!: El campo E-mail no debe estar vacío o solo contener espacios en blanco');
        return false
    }
    if (txtRegistro == null || txtRegistro.length ==0 || /^\s+S/.test(txtRegistro)){
        alert('Error!: El campo Nro. de Registro no debe estar vacío o solo contener espacios en blanco');
        return false
    }
    if (txtObservaciones == null || txtObservaciones.length ==0 || /^\s+S/.test(txtObservaciones)){
        alert('Error!: El campo Observaciones no debe estar vacío o solo contener espacios en blanco');
        return false
    }
    return true
}