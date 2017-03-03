<template>
	<div>
	这是一个传值组件.
	<span>这个值来自父组件变量{{ value1 }}</span>
	<span>这个值来自父组件直接定义的字符串{{ value2 }}</span>
	<span>这个值来自组件本身的变量{{ value3 }}</span>
	</div>
</template>

<script>
	export default{
		props: ['value1', 'value2'],
		data:function(){
            			return{
            				'value3': '333333'
            			}
        		}
    	}
</script>
