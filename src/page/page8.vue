<template>
    <div class="">
        <p>{{itemTagModuleA}}</p>
        <button @click="testVuexModuleA">testVuexModuleA</button>
        <p>{{itemTagModuleB}}</p>
        <button @click="testVuexModuleB">testVuexModuleB</button>
    </div>
</template>

<script>
// import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
        }
    },
    // computed: mapState({
	//   	itemTag: state => state.itemTag,
	// }),
    computed: mapGetters({
        itemTagModuleA: 'getItemTagModuleA',
        itemTagModuleB: 'getItemTagModuleB'
    }),
    methods: {
        testVuexModuleA() {
            console.log('testVuexModuleA');
            this.$store.dispatch('initializeDataA');
        },
        testVuexModuleB() {
            console.log('testVuexModuleB');
            this.$store.dispatch('initializeDataB');
        }
    },
}
</script>

<style>
</style>
