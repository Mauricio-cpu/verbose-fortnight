function validarFormulario(){
let txtNombre = document.getElementById('nombre').value;
let txtApellido = document.getElementById('apellido').value;
let txtEmail = document.getElementById('mail').value;
let txtTelefono = document.getElementById('telefono').value;
let txtComentario = document.getElementById('comentario').value;

if (txtNombre = null || txtNombre.length ==0 || /^\s+S/.test(txtNombre)){
    alert('Error: el campo Nombre no debe estar vacío o contener solo campos en blanco');
    return false;
}


if (txtApellido == null || txtApellido.length ==0 || /^\s+S/.test(txtApellido)){
    alert('Error: El campo Apellido no debe estar vacío o contener solo campos en blanco');
    return false;
}


if (txtEmail == null || txtEmail.length ==0 || /^\s+S/.test(txtEmail)){
    alert('Error: El campo E-mail no debe estar vacío o contener solo campos en blanco');
    return false;
}


if (txtTelefono == null || txtTelefono.length ==0 || /^\s+S/.test(txtTelefono)){
    alert('Error: El campo Teléfono no debe estar vacío o contener solo campos en blanco');
    return false;
}


if (txtComentario == null || txtComentario.length ==0 || /^\s+S/.test(txtComentario)){
    alert('Error: El campo Comentario no debe estar vacío o contener solo campos en blanco');
    return false;
}
return true
}
