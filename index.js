const vistas = document.querySelectorAll("#vista")
const btnInicio = document.querySelector("#inicio")
const btnBlog = document.querySelector("#blog")
const btnIMC = document.querySelector("#IMC")

const seccionInicio=document.querySelector(".seccion_inicio")
const seccionIMC=document.querySelector(".seccion_IMC")
const seccionBlog=document.querySelector(".seccion_blog")
const btnCalculoImc=document.querySelector("#btn_calc_imc")
const formImc=document.querySelector(".form_imc")
const inputNombre=document.querySelector("#input_nombre")
const selectSexo=document.querySelector("#select_sexo")
const inputPeso=document.querySelector("#input_peso")
const inputAltura=document.querySelector("#input_altura")


const guardarEnLocalStorage = (clave, objeto) => {

    const objetoConvertidoAJSON = JSON.stringify(objeto)
    return localStorage.setItem(clave, objetoConvertidoAJSON)
}


//funcion para obtener info de Local Storage y convertirla a objeto JS
const obtenerDesdeLS = (clave) => {
    const infoGuardada = localStorage.getItem(clave)
    return JSON.parse(infoGuardada)

}


const mostrarVistas = (elemento) => {
    elemento.classList.remove("is-hidden")
}

const ocultarVistas = () => {

    for (let i = 0; i < vistas.length; i++) {
        vistas[i].classList.add("is-hidden")
    }
}


btnBlog.onclick = () => {
    ocultarVistas()
    mostrarVistas(seccionBlog)
}

btnInicio.onclick = () => {
    ocultarVistas()
    mostrarVistas(seccionInicio)
}

btnIMC.onclick=()=>{
    ocultarVistas()
    mostrarVistas(seccionIMC)
}

btnCalculoImc.onclick=()=>{
    ocultarVistas()
    mostrarVistas(formImc)
}


formImc.onsubmit=(e)=>{
e.preventDefault()

const nuevoUsuario={
    nombre:inputNombre.value,
    sexo:selectSexo.value,
    peso:Number(inputPeso.value),
    altura:Number(inputAltura.value),

}
console.log(nuevoUsuario)
ocultarVistas()


}


const funcionCalculoIMC=(peso,altura)=>{
return peso / altura * 2
}
//calculo imc
//peso en kg / altura*2
//por ejemplo peso 70.8 altura 1,65
//70.8/ 1,65*2

//BAJO PESO: 18,5
//NORMAL: 19- 24.9
//SOBREPESO: 25 29.9
//OBESIDAD I 30-34.9
//OBESIDAD II 35- 39,9
//OBESIDAD III 40- 49.9
//OBESIDAD IV 50
