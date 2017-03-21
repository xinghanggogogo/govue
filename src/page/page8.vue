<template>
    <div class="">
        <p>{{itemTag}}</p>
        <button @click="testVuex">testVuex</button>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
        }
    },
    computed: mapState({
	  	itemTag: state => state.itemTag,
	}),
    methods: {
        testVuex() {
            console.log('testVuex');
            this.$store.dispatch('initializeData');
        }
    },
}
</script>

<style>
</style>
