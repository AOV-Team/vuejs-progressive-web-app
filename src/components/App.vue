<template lang="pug">
div(class="mdl-layout mdl-js-layout mdl-layout--fixed-header")
    header(class="mdl-layout__header")
        .mdl-layout__header-row
            span(class="mdl-layout-title") Title
    main(class="mdl-layout__content")
        div(class="page-content")
            router-view
</template>

<script>
export default {

}
</script>

<style lang="stylus">
@import "../styles/main"
</style>
