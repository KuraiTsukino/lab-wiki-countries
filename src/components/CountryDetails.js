// Ayuda a extraer el dato de la URL- cca3
import { Link, useParams } from "react-router-dom"

const CountryDetails = (props) => {

    const { allCountries } = props
    const {cca3} = useParams ()

    // Extraer la información necesaria del allCountries del país específico clickeado.
    const found = allCountries.find(pais => pais.cca3 === cca3)

    // Encontrar los objetos de cada borde para usar el nombre completo y la bandera.
    const bordes = found.borders.map(cca3Borde => {
        return  allCountries.find(country => cca3Borde === country.cca3)
    })
    

    return (
        <div class="col-7">
            <h1>{found.name.common}</h1>
            <table class="table">
              <tbody>
                <tr>
                  <td style={{width: '30%'}}>Capital</td>
                  <td>{found.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {found.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                        {
                            bordes.map((borde, i) => {
                                return (
                                    <li key={i}>
                                        <Link to={`/countries/${borde.cca3}`}>{`${borde.flag}`}{borde.name.common}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    )
}

export default CountryDetails
