import React from "react";
import logo from "../public/logo.png";
import { useNavigate } from "react-router-dom";
function Home() {
  const nav = useNavigate();
  return (
    <div className="container">
      <div style={{}}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "35px",
          }}
        >
          <img width={130} src={logo} />
          <h1>AI PHOTO</h1>
        </div>
        <h1 style={{ fontSize: "26px", marginTop: "24px" }}>
          Сделайте снимок, чтобы <br /> узнать, как окружающие видят вас в
          реальности!
        </h1>
        <p style={{ fontSize: "22px", marginTop: "24px" }}>
          Представляем вам уникальный проект, который поможет вам узнать, как
          окружающие воспринимают ваш возраст! Сделайте снимок, и наш передовой
          алгоритм проанализирует ваше изображение, чтобы определить, какой
          возраст видят в вас люди. Это не только увлекательный способ узнать,
          как вас оценивают окружающие, но и возможность получить интересные
          инсайты о своем внешнем виде. Просто нажмите кнопку, чтобы сделать
          фото, и получите результаты, которые могут вас удивить. Возможно, вы
          будете удивлены, узнав, как ваши особенности и выражение лица влияют
          на восприятие вашего возраста. Попробуйте и узнайте, как окружающие
          видят вас!
        </p>
        <div
          style={{ display: "flex", justifyContent: "end", marginTop: "30px" }}
        >
          <button onClick={() => nav("/chat")}>попробовать</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
