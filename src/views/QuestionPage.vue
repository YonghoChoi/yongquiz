/* eslint-disable vue/require-v-for-key */
<template>
  <div class="wrapper">
    <div class="title">
      <div class="hzt-center question-text">{{ questions[step].question }}</div>
    </div>

    <div class="score-popup" :style="getScorePopupStyle()" v-if="isResult">
      <div class="center">
        <div class="score-text">{{ incScore > 0? "정답입니다.": "틀렸습니다." }}</div>
        <div class="score-text">+{{ incScore }}</div>
      </div>
    </div>
    <div class="hzt-center banner">
      <span class="center banner-text">Qube</span>
    </div>

    <div v-if="isResult" class="bl-next">
      <button class="btn-next" @click="next">{{ nextBtnText }}</button>
    </div>

    <div class="hzt-center answers">
      <div v-if="isResult">
        <div
          class="answer"
          v-for="(item, i) in questions[step].answers"
          :key="i"
          :style="getResultStyle(item)"
        >
          <div class="answer-text">{{ item.text }}</div>
        </div>
      </div>
      <div v-else>
        <div
          class="answer"
          v-for="(item, i) in questions[step].answers"
          :key="i"
          :style="getAnswerStyle(i)"
          @click="selectAnswer(i)"
        >
          <div class="answer-text">
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
      scoreTitle: "", // 문제 선택 후 결과 문구 (정답입니다. 틀렸습니다. 등)
      incScore: 0,  // 획득한 점수
      nextBtnText: "다음",
      questions: [
        {
          score: 100,
          question: "우리 프로젝트 이름은?",
          answers: [
            {
              text: `Quizzle`,
              isCorrect: false,
            },
            {
              text: `Qubric`,
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
          question: "재권이 결혼은 몇 월?",
          answers: [
            {
              text: `3월`,
              isCorrect: false,
            },
            {
              text: `6월`,
              isCorrect: false,
            },
            {
              text: `10월`,
              isCorrect: true,
            },
            {
              text: `12월`,
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
    initialize() {
      this.step = 0;
      this.score = 0;
      this.incScore = 0;
      this.isResult = false;
    },
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
          backgroundColor: "#68bf3a",
        };
      } else {
        return {
          backgroundColor: "#ff3457",
        };
      }
    },
    getScorePopupStyle() {
      if (this.incScore > 0) {
        return {
          backgroundColor: "#68bf3a",
        };
      } else {
        return {
          backgroundColor: "#ff3457",
        };
      }
    },
    selectAnswer(index) {
      console.log(
        `step : ${this.step}, index : ${index}, data : ${
          this.questions[this.step].answers[index]
        }`
      );
      const selectedAnswer = this.questions[this.step].answers[index];
      const incScore = this.questions[this.step].score;
      if (selectedAnswer.isCorrect) {
        this.score += incScore;
        this.incScore = incScore;
      } else {
        this.incScore = 0;
      }
      this.isResult = true;
    },
    next() {
      if (++this.step >= this.questions.length) {
        alert(`퀴즈가 완료되었습니다.\n총점 : ${this.score}`);
        this.initialize();
        this.$router.push("/");
      }

      if (this.step + 1 >= this.questions.length) {
        this.nextBtnText = "점수보기";
      } else {
        this.nextBtnText = "다음";
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
  top: 450px;
  width: 100%;
}

.answer {
  border: 1px solid red;
  display: inline-block;
  margin-top: 5px;
  margin-left: 10px;
  background-color: #461f8c;
  width: 48%;
  height: 100px;
  cursor: pointer;
}

.answer-text {
  margin-top: 30px;
  color: rgb(255, 255, 255);
  font-size: 1.5rem;
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
  width: 90px;
  height: 40px;
  color: white;
}

.score-popup {
  position: absolute;
  background-color: #65bf39;
  top: 100px;
  width: 100%;
  height: 100px;
  font-size: 1rem;
  font-weight: 400;
  z-index: 1;
}

.score-text {
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
}
</style>
