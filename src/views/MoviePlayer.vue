<template>
  <div class="animatio-fadein">
    <video-player
      class="video-player"
      :options="playerOptions"
      playsinline
      @play="onPlay"
      @pause="onPause"
    />
  </div>
</template>

<script>
import "video.js/dist/video-js.css";
import { VideoPlayer } from "vue-video-player";

export default {
  components: {
    VideoPlayer,
  },
  data() {
    return {
      playerOptions: {
        autoplay: false,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [
          {
            src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            type: "video/mp4",
          },
        ],
        tracks: [
          {
            kind: "subtitles",
            src: "https://raw.githubusercontent.com/videojs/video.js/main/docs/examples/shared-scripts/subtitles-en.vtt",
            srclang: "en",
            label: "English",
            default: true,
          },
        ],
      },
    };
  },
  methods: {
    onPlay() {
      console.log("Movie is playing...");
    },
    onPause() {
      console.log("Movie is paused...");
    },
  },
};
</script>

<style>
.video-player {
  width: 720px;
  height: 400px;
  object-fit: cover;
  margin: 50px auto;
}
</style>
