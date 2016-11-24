<template lang="pug">
div(class="mdl-layout mdl-js-layout mdl-layout--fixed-header")
    header(class="mdl-layout__header")
        .mdl-layout__header-row
            span(class="mdl-layout-title") Title
            .mdl-layout-spacer
            nav(class="mdl-navigation mdl-layout--large-screen-only")
                a(class="mdl-navigation__link", href="") Link

    .mdl-layout__drawer
        span(class="mdl-layout-title") Title
        nav(class="mdl-navigation")
            a(class="mdl-navigation__link", href="") Link

    main(class="mdl-layout__content")
        div(class="page-content")
            router-view

    footer(class="mdl-mini-footer")
        div(class="mdl-mini-footer__left-section")
            div(class="mdl-logo") Title
            ul(class="mdl-mini-footer__link-list")
                li
                    a(href="#") Help
                li
                    a(href="#") Privacy &amp; Terms
</template>

<script>
export default {

}
</script>

<style lang="stylus">
@import "../styles/main"
</style>
