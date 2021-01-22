<template>
  <div>
    <div class="header">
      <div class="hzt-center title service-name-text">Qube</div>
      <div class="hzt-center subtitle game-mode-text">Single Player game</div>
      <div class="hzt-center quiz-subject">
        <span class="center quiz-text">Qube 만들기</span>
      </div>
    </div>

    <div class="content">
      <div class="hzt-center join">
        <span class="hzt-center subtitle join-game-text">Join the game</span>
        <div class="hzt-center nickname">
          <input type="text" id="nickname" />
          <button id="btn-join" @click="goToQuestionPage">join</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToQuestionPage() {
      this.$router.push("/question");
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

.header {
  position: relative;
  background-color: #47178f;
  width: 100%;
  height: 350px;
}

.content {
  position: relative;
  background-color: #25076b;
  width: 100%;
  height: 400px;
}

.join {
  top: 150px;
  background-color: #864bbf;
  width: 400px;
  height: 150px;
}

.title {
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
