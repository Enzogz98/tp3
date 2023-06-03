import Footer from "../components/Footer.jsx"
import Header from "../components/Header.jsx"
import Main from "../components/Main.jsx"
import Foto from "../assets/Foto.jpg"
const Home = () => {

    const persona = {nombre:"Enzo Javier Gonzalez", carrera: "Tecnicatura universitaria en Programacion", edad: 25, legajo:55481, deporte:"Futbol", logro:"8vo lugar en torneo profesional de FIFA 20", hobbie:"Videojuegos", conocimientosFront:"JavaScript, C#, Python", conocimientosBack: "SQL Server, MySql y JSon Server", imagen: {Foto}
    }
    const contacto={email:"mailto:enzo.114998@gmail.com_enlazado.com", telefono:"https://wa.me/5493814563507", facebook:"https://www.facebook.com/enzo.gonzalez.5891/", github: "https://github.com/Enzogz98", youtube:"https://www.youtube.com/channel/UCol7nkrJUilQ1T9UGuEQ11A", twitter:"https://twitter.com/EnzoJaviGonz", instagram:"https://www.instagram.com/enzoogonzalez98/"}

  return (
    <>
    <Header/>
    <Main person={persona}/>
    <Footer contact={contacto}/>
    </>
  )
}

export default Home