<template>
  <div class="lobby">
    <div class="host">
      <form class="form" action="#" method="POST" @submit.prevent="host">
        <div class="form__field">
          <label for="username">Username:</label>
          <input id="username" type="text" placeholder="Username" required v-model="hostUsername">
        </div>
        <div class="form__field">
          <label for="server">Server IP:</label>
          <input type="text" placeholder="Server IP" value="127.0.0.1" required v-model="hostServer">
        </div>
        <div class="form__field">
          <label for="board-width">Board width:</label>
          <input id="board-width" type="number" min="5" step="1" max="100" required v-model="hostBoardWidth">
        </div>
        <div class="form__field">
          <label for="board-height">Board height:</label>
          <input id="board-height" type="number" min="5" step="1" max="100" required v-model="hostBoardHeight">
        </div>
        <div class="form__actions">
          <input type="submit" value="Host">
        </div>
      </form>
    </div>
    <div class="connect">
      <form class="form" action="#" method="POST" @submit.prevent="join">
        <div class="form__field">
          <label for="username">Username:</label>
          <input id="username" type="text" placeholder="Username" required v-model="joinUsername">
        </div>
        <div class="form__field">
          <label for="server">Server IP:</label>
          <input type="text" placeholder="Server IP" value="127.0.0.1" required v-model="joinServer">
        </div>
        <div class="form__field">
          <label for="host">Hostname:</label>
          <input id="host" type="text" placeholder="Hostname" required v-model="joinHostname">
        </div>
        <div class="form__actions">
          <input type="submit" value="Join">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lobby',
  data () {
    return {
      hostUsername: '',
      hostServer: '',
      hostBoardWidth: 10,
      hostBoardHeight: 10,
      joinServer: '',
      joinUsername: '',
      joinHostname: ''
    }
  },
  methods: {
    host () {

    },
    join () {
      const webSocket = new WebSocket(`ws://${this.joinServer}`)
      console.log(webSocket)
    }
  }
}
</script>

<style lang="scss">
.lobby {
  padding: 32px 8px;
  display: flex;
  border-radius: 2px;
  background: #ecf0f1;
  flex-direction: column;
  margin: 20px auto 0 auto;
  justify-content: space-around;
  box-shadow: 0 1px 1px 0 rgba(60,64,67,.08), 0 1px 3px 1px rgba(60,64,67,.16);
}

.form {
  margin-bottom: 16px;
}

.form__field {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  label {
    margin-bottom: 4px;
  }

  input {
    padding: 4px;
  }

}

@media screen and (min-width: 600px) {
  .lobby {
    max-width: 600px;
    flex-direction: row;
  }
}

</style>
