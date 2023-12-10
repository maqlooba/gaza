<template>
  <div>
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal">
      <div class="instagram-embed-container">
        <blockquote class="instagram-media" data-instgrm-captioned :data-instgrm-permalink="postUrl" data-instgrm-version="14"></blockquote>
        <button class="close-button" @click="closeModal">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['postUrl'],
  methods: {
    closeModal() {
      this.$emit('close');
      // Restore body scroll when modal closes
      document.body.style.overflow = '';
    }
  },
  mounted() {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    // Load Instagram embed script
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = "https://www.instagram.com/embed.js";
    document.head.appendChild(script);
    script.onload = () => {
      window.instgrm.Embeds.process(); // This will render the Instagram post
    };
  }
};
</script>

<style scoped>

.modal-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-height: 90vh;
  max-width: 540px;
  background: white;
  padding: 20px;
  z-index: 1001;
  border-radius: 8px;
  overflow-y: auto; /* Ensure that the modal content is scrollable */
  box-sizing: border-box;
}

.instagram-embed-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

.instagram-media {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.close-button {
  cursor: pointer;
  background: #f5f5f5;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 5px;
  font-weight: bold;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .modal {
    width: 100%;
    height: 100%;
    max-height: 100%;
    border-radius: 0;
  }
  .instagram-media {
    width: 100%;
  }
}

</style>
