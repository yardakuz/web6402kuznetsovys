document.getElementById("postForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    // Получаем значения из формы
    const username = document.getElementById("username").value;
    const comment = document.getElementById("comment").value;

    // Отправляем POST-запрос на сервер
    fetch("http://localhost:3000/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            comment: comment
        })
    })
        .then(response => response.json())
        .then(data => {
            alert("Данные успешно отправлены на сервер!");
            console.log("Ответ сервера:", data);
        })
        .catch(error => {
            alert("Ошибка при отправке данных!");
            console.error("Ошибка:", error);
        });
});
