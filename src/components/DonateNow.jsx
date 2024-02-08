import { useNavigate } from "react-router-dom"

export default function DonateNow() {

    const goFundMeButton = `<div class="gfm-embed" data-url="https://www.gofundme.com/f/wr28bm-unite-against-domestic-violence/widget/medium/"></div>
    <script defer src="https://www.gofundme.com/static/js/embed.js"></script>`

 
    return (
        <>
            <div style={{margin:"10%", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <h1 style={{color:"black", fontFamily:"Montserrat", marginBottom:"5vmin"}}>Thank you for contributing to our mission!</h1>
            
                <button onClick={()=>(window.location.href = "https://gofund.me/00d45e21")} style={{border:"2px solid white", backgroundColor:"#6ECD88", color:"#f3f3f3", fontFamily:"Montserrat", borderRadius:"20px", padding:"2%", maxWidth:"20%"}}>Donate Here</button>
            </div>

    </>
    )
}