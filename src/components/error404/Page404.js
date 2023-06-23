
import "./Page404.css"

const Page404 = () =>{
    return(
    <main className="container flex flex--center flex--colum">
        <img className="dog-image" src={`${process.env.PUBLIC_URL}/images/404.jpg`} alt="error 404" />
    </main>
    )
}

export default Page404;