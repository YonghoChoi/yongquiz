/* eslint-disable vue/require-v-for-key */
<template>
  <div class="wrapper">
    <div class="title">
      <div class="hzt-center question-text">{{ questions[step].question }}</div>
    </div>

    <div class="hzt-center banner">
      <span class="center banner-text">Qube</span>
    </div>

    <div v-if="isResult" class="bl-next">
      <button class="btn-next" @click="next">Next</button>
    </div>

    <div class="hzt-center answers">
      <div v-if="isResult">
        <div
          class="answer"
          v-for="item in questions[step].answers"
          :key="item"
          :style="getResultStyle(item)"
        >
          <div class="answer-text">{{ item.text }}</div>
        </div>
      </div>
      <div v-else>
        <div
          class="answer"
          v-for="(item, i) in questions[step].answers"
          :key="item"
          :style="getAnswerStyle(i)"
        >
          <div class="answer-text" @click="selectAnswer(i)">
            {{ item.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      step: 0,
      score: 0,
      questions: [
        {
          score: 100,
          question: "우리 프로젝트 이름은?",
          answers: [
            {
              text: `Kahoot`,
              isCorrect: false,
            },
            {
              text: `Depromeet`,
              isCorrect: false,
            },
            {
              text: `Qube`,
              isCorrect: true,
            },
            {
              text: `Qubrio`,
              isCorrect: false,
            },
          ],
        },
        {
          score: 100,
          question: "다음 코드 중 문자열을 표준 출력으로 표시하는 것은?",
          answers: [
            {
              text: `print:("이름이 모니?")`,
              isCorrect: false,
            },
            {
              text: `print("이름이 모니?)`,
              isCorrect: false,
            },
            {
              text: `print("이름이 모니?")`,
              isCorrect: true,
            },
            {
              text: `Print("이름이 모니?")`,
              isCorrect: false,
            },
          ],
        },
      ],
      answerColors: ["#1268cd", "#26890b", "#e21b3c", "#d89e00"],
      isResult: false,
    };
  },
  methods: {
    getAnswerStyle(index) {
      if (this.answerColors.length < index) {
        return {
          backgroundColor: this.answerColors[0],
        };
      } else {
        return {
          backgroundColor: this.answerColors[index],
        };
      }
    },
    getResultStyle(item) {
      if (item.isCorrect) {
        return {
          backgroundColor: "green",
        };
      } else {
        return {
          backgroundColor: "red",
        };
      }
    },
    selectAnswer(index) {
      const selectedAnswer = this.questions[this.step].answers[index];
      if(selectedAnswer.isCorrect) {
        this.score += this.questions[this.step].score;
        alert(`정답입니다.\n현재 점수는 ${this.score} 입니다.`);
      } else {
        alert("틀렸습니다.");
      }
      this.isResult = true;
    },
    next() {
      if(++this.step >= this.questions.length) {
        this.step = 0;
        alert("퀴즈가 완료되었습니다.");
      }

      this.isResult = false;
    },
  },
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
  top: 500px;
  width: 100%;
}

.answer {
  border: 1px solid red;
  display: inline-block;
  margin-top: 20px;
  margin-left: 20px;
  background-color: #461f8c;
  width: 47%;
  height: 80px;
  cursor: pointer;
}

.answer-text {
  /* vertical-align: middle; */
  margin-top: 30px;
  color: rgb(255, 255, 255);
  font-size: 1rem;
  font-weight: 400;
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

.bl-next {
  position: absolute;
  top: 350px;
  left: 1200px;
}

.btn-next {
  background-color: blue;
  width: 70px;
  height: 40px;
  color: white;
}
</style>
