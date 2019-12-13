<template>
  <div>
    <div class="topo">
      <div class="container">
        <div class="item">
          <img
            alt="Aircom logo"
            src="../assets/aircom-vertical-branco 1.png"
            width="83px"
            height="51px"
          />,
        </div>
        <div class="item">
          <img src="../assets/totalvoice.png" alt="TotalVoice logo" width="93px" height="15px" />
        </div>
      </div>
    </div>

    <div class="logociaaerea">
      <img src="../assets/latam.png" alt="Latam logo" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  components: {}
}
</script>

<style>
.topo {
  width: 100%;
  height: 70px;
  left: 0px;
  top: 0px;
  background: #000080;
}

.container {
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin-left: 30px;
  margin-right: 30px;
  padding: none;
}

.item {
  margin: 10px;
}

.logociaaerea {
  height: 100px;
  background: black;
}
</style>
