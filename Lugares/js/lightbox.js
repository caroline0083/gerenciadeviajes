const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')

imagenes.forEach(imagenes=>{
    imagenes.addEventListener('click', ()=>{
       aparecerImagen(imagenes.getAttribute('src'))  
    })
})

contenedorLight.addEventListener('click', (e)=>{
    if(e.target !==imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
    }
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
}
