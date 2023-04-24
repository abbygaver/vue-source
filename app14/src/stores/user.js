import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const firstName = ref("")
    const lastName = ref("")
    const streetAddr = ref("")
    const city = ref("")
    const state = ref("")
    const zip = ref("")

    return { firstName, lastName, streetAddr, city, state, zip }
})