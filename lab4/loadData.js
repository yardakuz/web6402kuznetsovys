document.getElementById("loadDataBtn").addEventListener("click", function () {
    const dataContainer = document.getElementById("dataContainer");

    // Очищаем старые данные перед загрузкой новых
    dataContainer.innerHTML = "";

    // Асинхронный GET-запрос на сервер
    fetch("http://localhost:3000/comments")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка сети: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.length === 0) {
                dataContainer.innerHTML = `<div style="text-align: center; padding: 10px; color: red;">
                                    Данных нет</div>`;
            } else {
                // Создаём строки данных с анимацией
                data.forEach((item, index) => {
                    const row = document.createElement("div");
                    row.classList.add("data-row", "fade-in"); // Добавляем класс анимации
                    row.style.animationDelay = `${index * 0.2}s`; // Задержка для каждой строки
                    row.innerHTML = `
            <div class="data-item">${index + 1}</div>
            <div class="data-item">${item.username}</div>
            <div class="data-item">${item.comment}</div>
          `;
                    dataContainer.appendChild(row);
                });
            }
        })
        .catch(error => {
            console.error("Ошибка при загрузке данных:", error);
            dataContainer.innerHTML = `<div style="color: red; text-align: center;">
                                    Ошибка при загрузке данных</div>`;
        });
});
