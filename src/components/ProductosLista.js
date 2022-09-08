import imgS7 from "../Img-proyectoReact/S7Tab.png"
import img2S7 from "../Img-proyectoReact/S7Tabimg2.png"
import imgS22 from "../Img-proyectoReact/S22.png"
import img2S22 from "../Img-proyectoReact/S22img2.png"
import imgHP from "../Img-proyectoReact/NotebookHP.png"
import img2HP from "../Img-proyectoReact/NotebookHPimg2.png"
import imgIphone13 from "../Img-proyectoReact/iphone13.jpg"
import img2Iphone13 from "../Img-proyectoReact/iphone13img2.png"

const productosStock = [
    {
        "id": "1",
        "categoria": "tablets",
        "stock": 10,
        "nombre": "Samsung Tab S7",
        "precio": 120000,
        "imagen": imgS7,
        "imagen2":img2S7,
        "altImg": "Tab S7",
        "titleImg": "Samsung Tab S7"
    },
    {
        "id": "2",
        "categoria": "celulares",
        "stock": 15,
        "nombre": "Celular Samsung S22",
        "precio": 220000,
        "imagen": imgS22,
        "imagen2":img2S22,
        "altImg": "Telefono Samsung S22",
        "titleImg": "Samsung S22"
    },
    {
        "id": "3",
        "categoria": "notebooks",
        "stock": 5,
        "nombre": "Notebook HP Pavilion 15.7¨",
        "precio": 180000,
        "imagen": imgHP,
        "imagen2":img2HP,
        "altImg": "Notebook HP Pavilion",
        "titleImg": "Notebook HP"
    },
    {
        "id": "4",
        "categoria": "celulares",
        "stock": 20,
        "nombre": "Iphone 13 Pro",
        "precio": 350000,
        "imagen": imgIphone13,
        "imagen2":img2Iphone13,
        "altImg": "Celular Iphone 13 PRO",
        "titleImg": "Iphone 13",
        "camara": "Cámara principal de 12 MP",
        "colores": "Blanco estrella, medianoche, azul y rosa",
        "capacidad": "128GB",

    }
]

export const data = new Promise((res,rej)=>{
    let condition = true
    setTimeout(()=>{
        if(condition){
            res(productosStock)
        }else{
            rej("no se pudo cargar")
        }
    },2000)
})