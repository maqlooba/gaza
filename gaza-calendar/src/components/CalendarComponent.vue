<template>
  <div class="calendar-container">
    <VCalendar min-date="2023-10-06">
      <template v-slot:day-content="{ day }">
        <div class="vc-day" :class="{
          'future': isFuture(day),
          'past-or-today': !isFuture(day),
          'shake': isShakingDay === day.id && isFuture(day),
          'pressed': pressedDay === day.id && !isFuture(day)
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
  data() {
    return {
      today: new Date(),
      isShakingDay: null,
      pressedDay: null,
    };
  },
  methods: {
    isFuture(day) {
      return day.date > this.today;
    },
    handleDayClick(day) {
      if (this.isFuture(day)) {
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
