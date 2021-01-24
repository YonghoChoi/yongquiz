<template>
  <div>
    <div class="header">
      <div class="hzt-center title service-name-text">Qube</div>
      <div class="hzt-center subtitle game-mode-text">혼자 하기</div>
      <div class="hzt-center quiz-subject">
        <span class="center quiz-text">Qube 만들기</span>
      </div>
    </div>

    <div class="content">
      <div class="hzt-center join">
        <span class="hzt-center subtitle join-game-text">게임 시작하기</span>
        <div class="hzt-center nickname">
          <input type="text" id="nickname" placeholder="닉네임" v-model="nickname" />
          <button id="btn-join" @click="goToQuestionPage">시작!</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      nickname: "",
    }
  },
  methods: {
    goToQuestionPage() {
      if(this.nickname === "") {
        alert("닉네임을 입력해주세요.");
        return;
      }
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

#btn-join {
  background-color: green;
  width: 70px;
  height: 40px;
  margin-left: 10px;
  color: white;
}
</style>
