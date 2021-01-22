<template>
  <div class="wrapper">
    <div class="title">
      <div class="hzt-center question-text">{{ question }}</div>
    </div>

    <div class="hzt-center banner">
      <span class="center banner-text">Qube</span>
    </div>

    <div class="hzt-center answers">
      <div class="answer" style="background-color: #1268cd">{{ answers[0] }}</div>
      <div class="answer" style="background-color: #26890b">{{ answers[1] }}</div>
      <div class="answer" style="background-color: #e21b3c">{{ answers[2] }}</div>
      <div class="answer" style="background-color: #d89e00">{{ answers[3] }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      question: "다음 코드 중 문자열을 표준 출력으로 표시하는 것은?",
      answers: [
        `print:("이름이 모니?")`,
        `print("이름이 모니?)`,
        `print("이름이 모니?")`,
        `Print("이름이 모니?")`,
      ],
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.wrapper {
  position: relative;
}

.question-text {
  top: 30px;
  color: black;
  width: 100%;
  height: 150px;
  font-size: 2rem;
  font-weight: 600;
}

.banner {
  top: 150px;
  background-color: #461f8c;
  width: 500px;
  height: 250px;
}

.answers {
  display: flex;
  top: 500px;
  width: 100%;
}

.answer {
  margin-left: 20px;
  background-color: #461f8c;
  width: 47%;
  height: 80px;
}

.join {
  top: 150px;
  background-color: #864bbf;
  width: 400px;
  height: 150px;
}

.banner-text {
  color: rgb(255, 255, 255);
  font-size: 3rem;
  font-weight: 600;
}

.subtitle {
  color: rgb(255, 255, 255);
  font-size: 1.5rem;
  font-weight: 600;
}

.service-name-text {
  top: 50px;
}

.game-mode-text {
  top: 120px;
}

.join-game-text {
  top: 30px;
}

.nickname {
  position: absolute;
  display: flex;
  top: 80px;
}

.quiz-subject {
  top: 230px;
  background-color: rgb(255, 255, 255);
  width: 600px;
  height: 150px;
  z-index: 1;
}

.quiz-text {
  color: black;
  font-size: 3rem;
  font-weight: 600;
}
</style>
