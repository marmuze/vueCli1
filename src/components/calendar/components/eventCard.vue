<template>
    <p class="event-item" :class="cssClasses"
       @click="$emit('click', event, $event)">
        <slot :event="event" v-if="showTitle">
            Def: {{ event.title }}
        </slot>
    </p>
</template>

<script>

    import XDate from 'xdate'

    export default {
        props: ['event', 'date', 'firstDay'],
        computed: {
            cssClasses () {
                let cssClasses = this.event.cssClass;

                if (Array.isArray(cssClasses)) {
					cssClasses = Array.from(cssClasses);
				} else {
					cssClasses = [cssClasses];
				}

                if (this.start.diffDays(this.date)<1) {
                    cssClasses.push('is-start');
                }

                if (this.end.diffDays(this.date)<1) {
                    cssClasses.push('is-end');
                }

                if (! this.event.isShow) {
                    cssClasses.push('is-opacity');
                }


                return cssClasses.join(' ');
            },
            showTitle() {
                return (this.date.getDate() === this.firstDay || this.start.diffDays(this.date)<1);
            },
            start () {
                return new XDate(this.event.start);
            },
            end () {
                return new XDate(this.event.end);
            }
        }
    }
</script>