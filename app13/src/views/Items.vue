<script setup>
    import Heading from '../components/Heading.vue'
    import itemDesc from '../components/itemDesc.vue'
    import itemImg from '../components/itemImg.vue'
    import itemList from '../assets/itemList'
    import { useRoute } from 'vue-router'
    import { watch, computed, ref } from 'vue'

    const props = defineProps(['main'])
    props.main.style.backgroundColor = '#f5c3b5'

    const route = useRoute()

    let label = undefined
    setLabel()

    watch(() => route.path, () => { console.log("path changed")})

    watch(() => route.params.id, setLabel)

    function setLabel() {
        let id = route.params.id
        let name = id ? '${id.charAt(0).toUpperCase()}${id.slice(1)}' : ''
        label = id ? '${route.name} ${itemDesc.name}' : route.name
    }

    const itemGo = computed(() => {
        return itemList.find((item) => item.name.toLowerCase() === route.params.id)
    })

    const nameDescItem = (itemGo) => {
        return itemGo ? ref(itemGo.name, itemGo.description).value : ''
    }

    const imageItem = (itemGo) => {
        return itemGo ? ref(itemGo.image).value : ''
    }
</script>

<template>
    <div class="card">
        <div class="card-body">
            <div v-if="$route.params.id">
                <div v-if="itemGo">
                    <itemDesc :name="itemGo.name" />
                    <itemImg :src="itemGo.image" />
                    <itemDesc :desc="itemGo.desc" />
                </div>
                <div v-else>
                    <h2>There is no item with this name. Get it together. :/</h2>
                </div>
            </div>
            <div v-else>
                Items
                <ul>
                    <li v-for="(item, index) in itemList" :key="index">
                        <router-link :to="'/items/' + item.name.toLowerCase()">{{ item.name }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>