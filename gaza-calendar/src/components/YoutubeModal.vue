<template>
  <div class="modal-backdrop" @click="$emit('close')">
    <div class="modal" @click.stop>
      <iframe width="560" height="315" :src="videoUrl" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
      <button class="close-button" @click="$emit('close')">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    videoUrl: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
  width: 80%; /* Responsive width */
  max-width: 560px; /* Maximum width */
  z-index: 1001;
  position: relative; /* Position relative for aspect ratio padding */
  padding-bottom: 31.25%; /* Aspect ratio for 16:9 videos */
  height: 0; /* Collapse the div to just the padding */
}

.modal iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
}

.close-button {
  cursor: pointer;
  background: #f5f5f5;
  border: none;
  padding: 10px 20px;
  margin-top: 20px; /* Adjusted to 20px for better spacing */
  border-radius: 5px;
  font-weight: bold;
  position: absolute;
  bottom: -45px; /* Position below the video */
  left: 50%;
  transform: translateX(-50%); /* Center the button */
  z-index: 1002; /* Ensure it's above the modal content */
}

@media (max-width: 768px) {
  .modal {
    width: 90%; /* Slightly increase width for smaller devices */
    padding-bottom: 50.25%; /* Increase padding-bottom for a taller aspect ratio if needed */
  }

  .close-button {
    bottom: -65px; /* Adjust if more space is needed */
  }
}
</style>
