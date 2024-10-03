import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => {
        return {
            fooOpts: [] as any[],
            fooComp: [] as any[]
        }
    },
    actions: {
        async getFooOpts() {
            const { data} = await useFetch('/', {
                baseURL: "https://5b8b9ce9-0e17-41db-8c21-d64ca0007883.mock.pstmn.io"
            })
            console.log(data.value)
            this.fooOpts = data
        },
        async getFooComp() {
            const { data} = await useFetch('/', {
                baseURL: "https://5b8b9ce9-0e17-41db-8c21-d64ca0007883.mock.pstmn.io"
            })
            console.log(data.value)
            this.fooComp = data
        }
    }
})