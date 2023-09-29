<script>
export default {
    name: 'LanguageItem',
    props: ['position', 'url']
}
</script>

<template>
    <p>
        Lingua:

        <img v-if="position == 'EN'" :src="url + 'GB/shiny/24.png'" alt="">

        <img v-else-if="position == 'JA'" :src="url + 'JP/shiny/24.png'" alt="">

        <img v-else-if="position == 'ZH'" :src="url + 'CN/shiny/24.png'" alt="">

        <img v-else :src="url + position + '/shiny/24.png'" alt="">
    </p>
</template>



<style></style>