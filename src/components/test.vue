<template>
	<div>
	这是一个测试组件
	<span>{{ test_value }}</span>
	<span>{{ test_value2 }}</span>
	<span>{{ xinghang }}</span>
	</div>
</template>

<script>
	export default{
		props: ['test_value', 'test_value2'],
		data:function(){
            			return{
            				'xinghang': 'xinghanggogo'
            			}
        		}
    	}
</script>