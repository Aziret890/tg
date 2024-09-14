import React, { useRef, useEffect } from "react";

function App() {
  const videoRef = useRef(null);

  // Запускаем камеру при загрузке компонента
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

  function takePicture() {
    const video = videoRef.current;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Получаем изображение в формате dataURL
    const imageDataUrl = canvas.toDataURL("image/png");

    // Создаем ссылку для загрузки
    const link = document.createElement("a");
    link.href = imageDataUrl;
    link.download = "snapshot.png"; // Название файла
    link.click(); // Имитация клика для загрузки изображения
  }

  return (
    <>
      <h1>Сделайте снимок с камеры</h1>
      {/* Видео, куда выводится поток с камеры */}
      <video ref={videoRef} style={{ width: "100%", maxWidth: "600px" }} />
      {/* Кнопка для снимка */}
      <button onClick={takePicture}>Сделать снимок</button>
    </>
  );
}

export default App;
