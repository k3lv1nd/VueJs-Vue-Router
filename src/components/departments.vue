<template>
    <section class="departments">
        <h1>Select Below to view our various Departments</h1>

        <select v-model="selectedComponent">
            <option
                    v-for="(component, index) in componentList"
                    :key="index"
                    :value="component">
                {{ component.name }}
            </option>
        </select>

        <hr>
        <keep-alive>
        <component :is="selectedComponent"></component>
            </keep-alive>
    </section>
</template>

<script>
    import ITsupport from '@/components/dynamic/ITsupport'
    import Networking from '@/components/dynamic/Networking'
    import Softwaredev from '@/components/dynamic/Softwaredev'

    export default {
        name: 'departments',
        data: function () {
            return {
                componentList: [Softwaredev, Networking, ITsupport],
                selectedComponent: 'Softwaredev'
            }
        }
    }
</script>