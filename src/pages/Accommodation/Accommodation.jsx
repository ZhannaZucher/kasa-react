import housingData from "../../data/housing.json"
import { useParams, Navigate } from "react-router-dom"
import Gallery from "../../components/Gallery/Gallery"
import Tag from "../../components/Tag/Tag"
import Rating from "../../components/Rating/Rating"
import Collapse from "../../components/Collapse/Collapse"
import "./Accomodation.css"

export default function Accommodation() {
  const { id } = useParams()
  const queryData = housingData.find((data) => data.id === id)
  return queryData ? (
    <main id="main-accommodation">
      <Gallery slides={queryData.pictures} />
      <section className="acc">
        <div className="acc-about__row">
          <div className="acc-about__column">
            <h1 className="acc-about__label">{queryData.title}</h1>
            <h3 className="acc-about__location">{queryData.location}</h3>
            <div className="acc-about__tags">
              {queryData.tags.map((tag, index) => (
                <Tag key={index} content={tag} />
              ))}
            </div>
          </div>
          <div className="acc-owner__column">
            <div className="acc-owner__row">
              <h2 className="acc-owner__name">
                {queryData.host.name.split(" ")[0]}
                <br />
                {queryData.host.name.split(" ")[1]}
              </h2>
              <div className="acc-owner__img">
                <img src={queryData.host.picture} alt={queryData.host.name} />
              </div>
            </div>
            <Rating scaleValue={queryData.rating} />
          </div>
        </div>
        <div className="acc-details">
          <Collapse
            classModifier="collapsible collapsible--accommodation"
            title="Description"
          >
            <p>{queryData.description}</p>
          </Collapse>
          <Collapse
            classModifier="collapsible collapsible--accommodation"
            title="Equipements"
          >
            <ul>
              {queryData.equipments.map((element, index) => (
                <li key={index}>{element}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </section>
    </main>
  ) : (
    <Navigate to="/error" />
  )
}
