<template>
  <div id="app">
      <button @click="jour">Jour</button>
      <button @click="semaine">Semaine</button>
      <button @click="mois">Mois</button>

    <calendar :events="fcEvents" first-day='1' locale="fr" :nb-semaine="nbSemaine" :nb-jour="nbJour"
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

import calendar from './components/calendar/fullCalendar.vue'

let demoEvents = [
  {
    title    : 'Sunny 725-725',
    start    : '2018-12-26',
    end      : '2018-12-27',
    cssClass : 'family',
      toto:"titi"
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
	  calendar
  },
  data () {
    return {
      name:'Sunny!',
      fcEvents : demoEvents,
        nbSemaine:6,
        nbJour:7
    }
  },
	methods : {
		'changeMonth' (start, end, current) {
			//console.log('changeMonth', start.format(), end.format(), current.format())
		},
		'eventClick' (event, jsEvent, pos) {
			console.log('eventClick', event, jsEvent, pos)
		},
		'dayClick' (day, jsEvent) {
			console.log('dayClick', day, jsEvent)
		},
		'moreClick' (day, events, jsEvent) {
			console.log('moreCLick', day, events, jsEvent)
		},
        semaine(){
			this.nbJour=7;
			this.nbSemaine=1;
        },
        mois(){
			this.nbJour=7;
			this.nbSemaine=6;
        },
        jour(){
			this.nbJour=1;
			this.nbSemaine=1;

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
