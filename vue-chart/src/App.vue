<template>
  <div id="app">
    <v-chat
      style="width: 800px; height: 600px;"
      :data="chartData"
      :options="options"
      type="bar"
    ></v-chat>
  </div>
</template>

<script>
import VueChart from '@seregpie/vue-chart'
export default {
  name: 'app',
  data() {
    return {
      chartData: {
        labels: [
          'Show full order type names',
          'Switched tooltips on',
          'Use order reminders',
          'Use reminder notifications',
          'reminderPopup',
          'reminderTime',
        ],
        datasets: [{
            label: 'Percentage of users that',
            backgroundColor: 'rgba(71, 171, 253, 1)',
            borderColor: 'rgba(71, 171, 253, 1)',
            data: [0.21, 0.85, 0.35, 0.35, 0.35, 0.35, 0.45],
        }],
      },
      options: {
        scales: { 
          yAxes: [{
            ticks: { 
              beginAtZero: true 
            }
          }]
        },
        title: {
          display: true,
          text: 'Percentage of users'
        },
        legend: {
            display: false,
            labels: {
                fontColor: 'rgb(255, 99, 132)',
            },
        }

      }
    } 
  },
  components: {
    VChat: VueChart
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
