// script.js
function submitForm() {
    const radios = document.querySelectorAll('input[type="radio"]');
    let totalScore = 0;
    let group1Score = 0; // For questions 6, 9, 13, 15
    let group2Score = 0; // For questions 3, 5, 8, 11
    let group3Score = 0; // For questions 2, 10, 12, 14
    let group4Score = 0; // For questions 1, 4, 7, 16

    const group1Questions = [6, 9, 13, 15];
    const group2Questions = [3, 5, 8, 11];
    const group3Questions = [2, 10, 12, 14];
    const group4Questions = [1, 4, 7, 16];

    const numQuestions = radios.length / 5;

    for (let i = 0; i < numQuestions; i++) {
        let questionScore = 0;
        const radioName = `question${i + 1}`;
        const selectedRadio = document.querySelector(`input[name="${radioName}"]:checked`);
        if (selectedRadio) {
            questionScore = parseInt(selectedRadio.value);
            totalScore += questionScore;
            if (group1Questions.includes(i + 1)) {
                group1Score += questionScore;
            } else if (group2Questions.includes(i + 1)) {
                group2Score += questionScore;
            } else if (group3Questions.includes(i + 1)) {
                group3Score += questionScore;
            } else if (group4Questions.includes(i + 1)) {
                group4Score += questionScore;
            }
        }
    }

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `Your total score is: ${totalScore} <br>`;

    let comment = "";
    if (totalScore <= 34) {
        comment = "You need to work hard on your leadership skills. The good news is that if you use more of these skills at work, at home, and in the community, you'll be a real asset to the people around you. You can do it – and now is a great time to start!";
    } else if (totalScore <= 52) {
        comment = "You're doing OK as a leader, but you have the potential to do much better. While you've built the foundation of effective leadership, this is your opportunity to improve your skills, and become the best you can be. Examine the areas where you lost points, and determine what you can do to develop skills in these areas.";
    } else if (totalScore <= 90) {
        comment = "Excellent! You're well on your way to becoming a good leader. However, you can never be too good at leadership or too experienced – so look at the areas where you didn't score maximum points, and discover more about what you can do to improve your performance.";
    } else {
        comment = "Thank you! We are thrilled that you loved our product.";
    }

    resultsDiv.innerHTML += `<strong>${comment}</strong> <br><br>`;

    resultsDiv.innerHTML += "Leadership is a choice, you are leader only when you choice to be leader<br><br>";

    resultsDiv.innerHTML += `Interpersonal Communication Skills: ${group1Score} <br>`;
    resultsDiv.innerHTML += `Managing Differences: ${group2Score} <br>`;
    resultsDiv.innerHTML += `Managing Agreement: ${group3Score} <br>`;
    resultsDiv.innerHTML += `Personal Integrity: ${group4Score} <br>`;
    resultsDiv.innerHTML += `Total Group Score: ${group1Score + group2Score + group3Score + group4Score} <br><br>`;

    const scores = [group1Score, group2Score, group3Score, group4Score];
    const minScore = Math.min(...scores);
    const sortedScores = [...scores].sort((a, b) => a - b);
    const colors = scores.map(score => {
        if (score === minScore) return "red";
        if (score === sortedScores[1]) return "blue";
        return "grey";
    });

    let barChartHTML = "<div style='display: flex;'>";
    for (let i = 0; i < scores.length; i++) {
        barChartHTML += `<div class="bar ${colors[i]}" style="height: ${scores[i] * 10}px;">${scores[i]}</div>`;
    }
    barChartHTML += "</div>";

    resultsDiv.innerHTML += barChartHTML;

    resultsDiv.innerHTML += "<button onclick='window.print()'>Print</button>";
}

