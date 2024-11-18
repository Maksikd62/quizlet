import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import picture_1 from "./pictures/picture_1.avif";
import picture_2 from "./pictures/picture_2.avif";
import picture_3 from "./pictures/picture_3.avif";
import picture_4 from "./pictures/picture_4.avif";
import picture_5 from "./pictures/picture_5.avif";
import "./MainPage.css";
 
interface ImageData {
    src: string;
    title: string;
    color: string;
}
 
const images: ImageData[] = [
    { src: picture_1, title: "Заучування", color: "#B2EBF2" },
    { src: picture_2, title: "Картки", color: "#5E35B1" },
    { src: picture_3, title: "Тест", color: "#FFEB3B" },
    { src: picture_4, title: "Підбір", color: "#FFCDD2" },
    { src: picture_5, title: "Рішення від експертів", color: "#C8E6C9" }
];
 
const MainPage: React.FC = () => {
    const [visibleStartIndex, setVisibleStartIndex] = useState<number>(0);
 
    const showPrevious = (): void => {
        setVisibleStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };
 
    const showNext = (): void => {
        setVisibleStartIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 4));
    };
 
    return (
        <div className="main-page">
            <h1>Як ви хочете займатися?</h1>
            <p>Опануйте будь-який матеріал за допомогою інтерактивних карток, пробних тестів і навчальних занять у Quizlet.</p>
            <Link to="/login">
                <Button
                    label="Зареєструватися безкоштовно"
                    style={{ margin: "8px", backgroundColor: "#4247e8" }}
                />
            </Link>
            <Link to="/">
                <span className="teacher-link">Я вчитель</span>
            </Link>
 
            <div className="topics">
                {visibleStartIndex > 0 && (
                    <button className="button" onClick={showPrevious}>
                        &lt;
                    </button>
                )}
                <div className="cards">
                    {images.slice(visibleStartIndex, visibleStartIndex + 4).map((image, index) => (
                        <div
                            key={index}
                            className="card"
                            style={{ backgroundColor: image.color }}
                        >
                            <h2>{image.title}</h2>
                            <img src={image.src} alt={image.title} />
                        </div>
                    ))}
                </div>
                {visibleStartIndex < images.length - 4 && (
                    <button className="button" onClick={showNext}>
                        &gt;
                    </button>
                )}
            </div>
        </div>
    );
};
 
export default MainPage;