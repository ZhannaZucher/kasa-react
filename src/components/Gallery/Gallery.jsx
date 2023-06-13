import { useState } from "react"
import Arrow from "../../assets/arrow-back.svg"
import "./Gallery.css"

export default function Gallery({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className="gallery">
      {slides.length === 1 ? null : (
        <img
          src={Arrow}
          alt="arrow-left"
          className="gallery__previous"
          onClick={goToPrevious}
        />
      )}
      {slides.length === 1 ? null : (
        <img
          src={Arrow}
          alt="arrow-right"
          className="gallery__next"
          onClick={goToNext}
        />
      )}
      <img
        src={slides[currentIndex]}
        alt="Accommodation view"
        className="gallery__view"
      />
      <p className="gallery__counter">
        {currentIndex + 1} / {slides.length}
      </p>
    </div>
  )
}
