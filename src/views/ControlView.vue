<template>
  <div class="canvasVideo">
    <canvas
      id="channel1"
      class="canvasDesktop position-absolute"
      v-if="stateVideo == true"
    ></canvas>
    <canvas
      id="channel2"
      class="canvasSmartphone bg-transparent p-2 position-absolute"
      v-if="stateVideo == true"
    ></canvas>
    <canvas
      id="channel3"
      class="canvasBgDesktop bg-white position-absolute opacity-50"
      v-if="stateVideo == false"
    ></canvas>
    <canvas
      id="channel4"
      class="canvasBgSmartphone bg-white position-absolute opacity-50"
      v-if="stateVideo == false"
    ></canvas>
  </div>
  <nav class="navbar navbar-dark pt-0">
    <div class="container-fluid d-flex">
      <RouterLink to="/landingpage">
        <button
          v-tooltip="'Back'"
          type="button"
          class="btn btn-md btnBack"
          id="btnBack"
        >
          <i class="fa fa-arrow-left fa-2x"></i>
        </button>
      </RouterLink>
      <img src="../assets/SCOOPE02.png" class="img-fluid logoVideo" />
      <button
        v-tooltip="'Control'"
        @click="showModal = true"
        type="button"
        class="btn btn-md btnNavbar"
        disabled
      >
        <i class="fa fa-bars fa-2x"></i>
      </button>
    </div>
  </nav>
  <div class="btnStream text-center" id="btnStream">
    <input
      type="checkbox"
      class="btn-check"
      id="btn-check-mic"
      autocomplete="off"
      @change="micChange()"
    />
    <label
      v-tooltip="'Microphone'"
      class="btn btn-light rounded-circle mx-1"
      id="btn-check-label-mic"
      for="btn-check-mic"
      ><i class="bi-mic-fill"></i
    ></label>
    <input
      type="checkbox"
      class="btn-check"
      id="btn-check-cam"
      autocomplete="off"
      @change="camChange()"
    />
    <label
      v-tooltip="'Camera'"
      class="btn btn-light rounded-circle mx-1"
      id="btn-check-label-cam"
      for="btn-check-cam"
      ><i class="bi-camera-video-fill"></i
    ></label>
    <!-- <button
      v-tooltip="'Microphone On'"
      @click="audioOn()"
      type="button"
      class="btn btn-light rounded-circle mx-1"
    >
      <i
        class="bi-mic-fill"
      ></i>
    </button>
    <button
      v-tooltip="'Microphone Off'"
      @click="audioOff()"
      type="button"
      class="btn btn-light rounded-circle mx-1"
    >
      <i class="bi-mic-mute-fill"></i>
    </button>
    <button
      v-tooltip="'Camera On'"
      @click="camOn()"
      type="button"
      class="btn btn-light rounded-circle mx-1"
    >
      <i class="bi-camera-video-fill"></i>
    </button>
    <button
      v-tooltip="'Camera Off'"
      @click="camOff()"
      type="button"
      class="btn btn-light rounded-circle mx-1"
    >
      <i class="bi-camera-video-off-fill"></i>
    </button> -->
    <button
      v-tooltip="'Control'"
      @click="showModal = true"
      type="button"
      class="btn btn-light rounded-circle mx-1"
    >
      <i class="fa fa-cog"></i>
    </button>
  </div>

  <div class="modalControl">
    <vue-final-modal
      v-model="showModal"
      classes="modal-container me-4 d-flex justify-content-end align-items-center"
      content-class="modal-content bg-white border border-dark rounded justify-content-center align-items-center text-center"
      :drag="true"
      :resize="false"
      :hide-overlay="true"
    >
      <div class="btnArrow mb-4">
        <h5 class="fw-bold mb-4">Control</h5>
        <button
          @click="btnup()"
          type="button"
          class="btn btn-primary btn-lg btnUp border-dark border-opacity-50"
        >
          <i class="fa fa-arrow-up fa-2x"></i>
        </button>
        <br />
        <button
          @click="btnleft()"
          type="button"
          class="
            btn btn-primary btn-lg
            btnLeft
            border-dark border-opacity-50
            me-3
          "
        >
          <i class="fa fa-arrow-left fa-2x"></i>
        </button>
        <button
          @click="btnright()"
          type="button"
          class="
            btn btn-primary btn-lg
            btnRight
            border-dark border-opacity-50
            ms-3
          "
        >
          <i class="fa fa-arrow-right fa-2x"></i>
        </button>
        <br />
        <button
          @click="btndown()"
          type="button"
          class="btn btn-primary btn-lg btnDown border-dark border-opacity-50"
        >
          <i class="fa fa-arrow-down fa-2x"></i>
        </button>
        <br />
      </div>
      <!-- <div class="btnToggle">
        <div class="form-check form-switch form-switch-xl">
          <input
            @change="camChange()"
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="camChange"
          />
          <label class="form-check-label ps-3 fs-4" for="camChange">Video</label>
        </div>
        <div class="form-check form-switch form-switch-xl">
          <input
            @change="audioChange()"
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="audioChange"
          />
          <label class="form-check-label ps-3 fs-4" for="audioChange">Audio</label>
        </div>
      </div> -->
      <button
        @click="showModal = false"
        type="button"
        class="btn btn-lg btnClose"
      >
        <i class="fa fa-times fa-2x"></i>
      </button>
    </vue-final-modal>
  </div>

  <div class="footer text-center text-white">
    © 2022 Copyright: <b>Scoope (PT Stechoq Robotika Indonesia)</b>
  </div>
</template>

<style>
@media screen and (max-width: 600px) {
  .canvasDesktop,
  .canvasBgDesktop {
    visibility: hidden;
  }
  .canvasSmartphone {
    width: 100%;
    height: auto;
    top: 25%;
  }
  .canvasBgSmartphone {
    width: 95%;
    height: 35%;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url("../assets/NewLogo.PNG");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
  }
  .btnStream {
    position: absolute;
    top: 75%;
    left: calc(50vw - 174px / 2);
    padding: 10px;
    border-radius: 50rem;
  }
  .footer {
    position: absolute;
    top: 90%;
  }
}
@media screen and (min-width: 600px) {
  .canvasSmartphone,
  .canvasBgSmartphone {
    visibility: hidden;
  }
  .canvasDesktop {
    width: 100%;
    height: 100%;
  }
  .canvasBgDesktop {
    width: 50%;
    height: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url("../assets/NewLogo.PNG");
    background-repeat: no-repeat;
    background-position: center;
  }
  .btnStream {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    border-radius: 50rem;
  }
  .footer {
    position: absolute;
    bottom: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
canvas {
  width: 100%;
  height: 100%;
}
.logoVideo {
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  max-width: 60%;
  max-height: 75px;
  box-shadow: 10px 6px 20px -5px rgba(0, 0, 0, 0.66);
  -webkit-box-shadow: 10px 6px 20px -5px rgba(0, 0, 0, 0.66);
  -moz-box-shadow: 10px 6px 20px -5px rgba(0, 0, 0, 0.66);
}
.btnBack .fa-arrow-left {
  color: white;
}
.fa-bars {
  color: transparent;
}
.btnBack .fa-arrow-left:hover,
.fa-times:hover {
  color: silver;
}
.btnUp,
.btnLeft,
.btnRight,
.btnDown {
  border-radius: 0;
  width: 75px;
  height: 75px;
}
.btnBack,
.btnNavbar,
.btnClose {
  border: none;
}
.btnUp {
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  border-bottom-left-radius: 3rem;
  border-bottom-right-radius: 3rem;
}
.btnDown {
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border-top-left-radius: 3rem;
  border-top-right-radius: 3rem;
}
.btnRight {
  border-start-end-radius: 1rem;
  border-end-end-radius: 1rem;
  border-start-start-radius: 3rem;
  border-end-start-radius: 3rem;
}
.btnLeft {
  border-start-start-radius: 1rem;
  border-end-start-radius: 1rem;
  border-start-end-radius: 3rem;
  border-end-end-radius: 3rem;
}
.btnStream button {
  width: 50px;
  height: 50px;
}
.btnStream label {
  padding: 13px 17px;
  border: none;
}
.btnStream label:hover {
  background-color: #bebebe;
}
.modal-content {
  width: 210px;
  height: 375px;
  box-shadow: 10px 6px 20px -5px rgba(0, 0, 0, 0.66);
  -webkit-box-shadow: 10px 6px 20px -5px rgba(0, 0, 0, 0.66);
  -moz-box-shadow: 10px 6px 20px -5px rgba(0, 0, 0, 0.66);
}
/* .form-switch.form-switch-xl {
  margin-bottom: 1.5rem;
}
.form-switch.form-switch-xl .form-check-input {
  height: 2rem;
  width: calc(3rem + 0.75rem);
  border-radius: 4rem;
} */
</style>

<script>
import { loadPlayer } from "rtsp-relay/browser";
import axios from "axios";
import getUserMedia from "getusermedia";
import { VueFinalModal } from "vue-final-modal";

var url = "192.168.86.246";

export default {
  data: () => ({
    showModal: false,
    stateVideo: false,
  }),

  components: {
    VueFinalModal,
  },

  methods: {
    btnup() {
      btnup();
    },

    btndown() {
      btndown();
    },

    btnright() {
      btnright();
    },

    btnleft() {
      btnleft();
    },

    // audioOn() {
    //   navigator.mediaDevices.getUserMedia({audio: true, video: false}).then(function(mediaStream){
    //       var audio = document.querySelector('audio')
    //       audio.audio = mediaStream
    //       audio.srcObject = mediaStream
    //       audio.autoplay = true
    //   })

    //   getUserMedia({ audio: true, video: false }, function (err, stream) {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       var audio = document.querySelector("audio");
    //       audio.audio = stream;
    //       audio.srcObject = stream;
    //       audio.autoplay = true;
    //     }
    //   });

    //   axios.get('http://' + url + ':2000/audioOn')
    // },

    // audioOff() {
    //   var audio = document.querySelector("audio");
    //   audio.pause();

    //   axios.get('http://' + url + ':2000/audioOff')
    // },

    // camOn() {
    //   this.stateVideo = true;
    //   setTimeout(() => {
    //     loadPlayer({
    //       url: "ws://" + url + ":2000/api/stream",
    //       canvas: document.getElementById("channel1"),
    //     });
    //   }, 500);
    //   setTimeout(() => {
    //     loadPlayer({
    //       url: "ws://" + url + ":2000/api/stream",
    //       canvas: document.getElementById("channel2"),
    //     });
    //   }, 500);
    // },

    // camOff() {
    //   this.stateVideo = false;
    // },

    camChange() {
      if (document.getElementById("btn-check-cam").checked === true) {
        this.stateVideo = true;
        document.getElementById(
          "btn-check-label-cam"
        ).innerHTML = `<i class="bi-camera-video-off-fill"></i>`;
        document.getElementById("btnStream").style.backgroundImage =
          "linear-gradient(90deg, rgba(37,84,255,1) 35%, rgba(0,165,255,1) 100%)";
        document.getElementById("btnBack").style.backgroundImage =
          "linear-gradient(90deg, rgba(37,84,255,1) 35%, rgba(0,165,255,1) 100%)";
        setTimeout(() => {
          loadPlayer({
            url: "ws://" + url + ":2000/api/stream",
            canvas: document.getElementById("channel1"),
          });
        }, 500);
        setTimeout(() => {
          loadPlayer({
            url: "ws://" + url + ":2000/api/stream",
            canvas: document.getElementById("channel2"),
          });
        }, 500);
      } else {
        this.stateVideo = false;
        document.getElementById(
          "btn-check-label-cam"
        ).innerHTML = `<i class="bi-camera-video-fill"></i>`;
        document.getElementById("btnStream").style.backgroundImage = "none";
        document.getElementById("btnBack").style.backgroundImage = "none";
      }
    },

    micChange() {
      if (document.getElementById("btn-check-mic").checked === true) {
        document.getElementById(
          "btn-check-label-mic"
        ).innerHTML = `<i class="bi-mic-mute-fill"></i>`;
        getUserMedia({ audio: true, video: false }, function (err, stream) {
          if (err) {
            console.log(err);
          } else {
            var audio = document.querySelector("audio");
            audio.audio = stream;
            audio.srcObject = stream;
            audio.autoplay = true;
          }
        });
      } else {
        document.getElementById(
          "btn-check-label-mic"
        ).innerHTML = `<i class="bi-mic-fill"></i>`;
        var audio = document.querySelector("audio");
        audio.pause();
      }
    },
  },
};

function btnup() {
  axios.get("http://" + url + ":2000/btnup");
}
function btndown() {
  axios.get("http://" + url + ":2000/btndown");
}

function btnright() {
  axios.get("http://" + url + ":2000/btnright");
}

function btnleft() {
  axios.get("http://" + url + ":2000/btnleft");
}

window.addEventListener("keydown", function (event) {
  if (event.code === "ArrowUp") {
    btnup();
  }
  if (event.code === "ArrowDown") {
    btndown();
  }
  if (event.code === "ArrowLeft") {
    btnleft();
  }
  if (event.code === "ArrowRight") {
    btnright();
  }
});
</script>