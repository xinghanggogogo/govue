<template>
    <div class="">
        <p>{{itemTagModuleA}}</p>
        <button @click="testVuexModuleA">testVuexModuleA</button>
        <p>{{itemTagModuleB}}</p>
        <button @click="testVuexModuleB">testVuexModuleB</button>
        <p>{{province}}</p>
        <button @click="testVuexHttp">testVuexHttp</button>
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
        itemTagModuleB: 'getItemTagModuleB',
        province: 'getProvince'
    }),
    methods: {
        testVuexModuleA() {
            console.log('testVuexModuleA');
            this.$store.dispatch('initializeDataA');
        },
        testVuexModuleB() {
            console.log('testVuexModuleB');
            this.$store.dispatch('initializeDataB');
        },
        testVuexHttp() {
            console.log('testVuexHttp')
            this.$store.dispatch('fetchProvince', {id: 'xing', value: 'hang'})
        }
    },
}
</script>

<style>
</style>
