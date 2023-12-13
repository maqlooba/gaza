<template>
  <div class="calendar-container">
    <VCalendar min-date="2023-10-01">
      <template v-slot:day-content="{ day }">
        <div class="vc-day" 
        :class="{
          'filled': contentData[day.id],
          'missing': !contentData[day.id],
          'shake': isShakingDay === day.id,
          'pressed': pressedDay === day.id
        }" @click="handleDayClick(day)">
          {{ day.day }}
        </div>
      </template>
    </VCalendar>
  </div>
</template>

<script>
import './CalendarComponent.css'

export default {
  props: {
    contentData: Object
  },
  data() {
    return {
      today: new Date(),
      isShakingDay: null,
      pressedDay: null,
    };
  },
  methods: {
    handleDayClick(day) {
    if (!this.contentData[day.id]) {
        this.isShakingDay = day.id;
        setTimeout(() => this.isShakingDay = null, 500);
      } else {
        this.pressedDay = day.id;
        setTimeout(() => {
          this.$emit('dateSelected', day.id);
          this.pressedDay = null;
        }, 700);

      }
    }
  }
};
</script>
