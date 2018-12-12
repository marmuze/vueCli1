<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <calendar :events="fcEvents" first-day='1' locale="fr"
              @changeMonth="changeMonth"
              @eventClick="eventClick"
              @dayClick="dayClick"
              @moreClick="moreClick">
      <template slot="fc-event-card" slot-scope="p">
        <p><i class="fa"></i> {{ p.event.title }}toto </p>
      </template>
  </calendar>
  </div>
</template>

<script>
/* eslint no-console: 0 */
import HelloWorld from './components/HelloWorld.vue'
import calendar from './components/calendar/fullCalendar.vue'

let demoEvents = [
  {
    title    : 'Sunny 725-727',
    start    : '2018-12-26',
    end      : '2018-12-27',
    cssClass : 'family'
  },
  {
    title : 'Lunfel 726-727',
    start : '2018-12-26',
    end : '2018-12-27',
    cssClass : ['home', 'work']
  }, {
    title : 'Lunfel 726-727',
    start : '2018-12-26',
    end : '2018-12-27',
    cssClass : ['home', 'work']
  }, {
    title : 'Lunfel 726-727',
    start : '2018-12-26',
    end : '2018-12-27',
    cssClass : ['home', 'work']
  },
  {
    title : 'Lunfel 2/27-2/28',
    start : '2017-02-27',
    end : '2017-02-28'
  },
  {
    title : 'Lunfel 2/27-2/28',
    start : '2017-02-27',
    end : '2017-02-28'
  },
  {
    title : 'Lunfel 2/27-2/28',
    start : '2017-02-27',
    end : '2017-02-28'
  },
  {
    title : 'Lunfel 2/26-3/05',
    start : '2017-02-26',
    end : '2017-03-05'
  },
  {
    title : 'Lunfel 1/27-1/28',
    start : '2017-01-27',
    end : '2017-01-28'
  },
  {
    title : 'Lunfel 1/27-2/2',
    start : '2017-01-27',
    end : '2017-02-02'
  },
  {
    title : 'Lunfel 3/27-3/28',
    start : '2017-03-27',
    end : '2017-03-28'
  },
];
export default {
  name: 'app',
  components: {
    calendar,
    HelloWorld
  },
  data () {
    return {
      name:'Sunny!',
      fcEvents : demoEvents
    }
  },
	methods : {
		'changeMonth' (start, end, current) {
			console.log('changeMonth', start.format(), end.format(), current.format())
		},
		'eventClick' (event, jsEvent, pos) {
			console.log('eventClick', event, jsEvent, pos)
		},
		'dayClick' (day, jsEvent) {
			console.log('dayClick', day, jsEvent)
		},
		'moreClick' (day, events, jsEvent) {
			console.log('moreCLick', day, events, jsEvent)
		}
	},
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
