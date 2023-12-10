<template>
  <div id="app">
    <CalendarComponent @dateSelected="handleDateSelect" />
    <!-- Conditionally render YouTube or Instagram modal based on the link type -->
    <YoutubeModal v-if="showModal && modalType === 'youtube'" :videoUrl="selectedContentUrl" @close="closeModal" />
    <InstagramModal v-if="showModal && modalType === 'instagram'" :postUrl="selectedContentUrl" @close="closeModal" />
  </div>
</template>

<script>
import CalendarComponent from './components/CalendarComponent.vue';
import InstagramModal from './components/InstagramModal.vue';
import YoutubeModal from './components/YoutubeModal.vue';
import contentData from './data/contentData.js';

export default {
  components: {
    CalendarComponent,
    InstagramModal,
    YoutubeModal
},
  data() {
    return {
      showModal: false,
      modalType: '',
      selectedContentUrl: ''
    };
  },
  methods: {
    handleDateSelect(date) {
      const content = contentData[date];
      if (content) {
        this.selectedContentUrl = content.url;
        this.modalType = content.type;
        this.showModal = true;
      }
    },
    closeModal() {
      this.showModal = false;
      this.selectedContentUrl = '';
      this.modalType = '';
    }
  }
};
</script>
