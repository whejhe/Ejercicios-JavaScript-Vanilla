export function createWikiModal() {
    // Obtener las preguntas del sessionStorage
    const questions = JSON.parse(sessionStorage.getItem('block_questions')) || [];

    // Obtener las preguntas y respuestas correctas del localStorage
    const correctAnswers = JSON.parse(localStorage.getItem('correctAnswers')) || [];

    // Crear el HTML para mostrar las preguntas
    let questionsHTML = "<h3>Preguntas del Juego:</h3><ul>";
    questions.forEach((item, index) => {
        const isCorrect = correctAnswers.some(ca => ca.question === item.question);
        questionsHTML += `
            <li style="margin-top: 10px; position: relative;">
                <div class="question-overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 1); display: ${isCorrect ? 'none' : 'flex'}; justify-content: center; align-items: center; z-index: 1;">
                    <img src="sprites/ui/interrogacion.png" alt="Interrogación" style="width: 50px; height: 50px;">
                </div>
                <strong class="resaltar">Pregunta ${index + 1}:</strong> ${item.question}
                <br><strong class="resaltar">Respuesta Correcta:</strong> ${correctAnswers.find(ca => ca.question === item.question) ? correctAnswers.find(ca => ca.question === item.question).correctAnswer : 'Aún no respondida'}
            </li>`;
    });
    questionsHTML += "</ul>";

    const wikiModalHTML = `
        <div id="wikiModal" class="modal" style="display: none;">
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2 class="title">WIKI</h2>
                <div id="wikiContent">
                    <div class="questions-container">
                        ${questionsHTML}
                    </div>
                    <img class="sabio-wiki" src="sprites/ui/sabio-wiki.gif">
                </div>
            </div>
        </div>
    `;
    return wikiModalHTML;
}
