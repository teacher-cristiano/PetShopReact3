import Banner from "../components/Banner"
import banner1 from "../assets/img/Banner-01.jpg"
import banner2 from "../assets/img/banner.jpg"
import banner3 from "../assets/img/vacina-cachorro.jpg"

export default function Home(){
    return(
        <>
        <Banner 
            foto1={banner1} 
            descricao1="foto 1" 
            foto2={banner2} 
            descricao2="foto 2"
            foto3={banner3} 
            descricao3="foto 3"
        />
        </>
    )
}