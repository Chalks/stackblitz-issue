<script setup>
</script>

<template>
    <div class="">
        <p>
            When this page loads your history will have N + 1 things in it, where N is the number of embeds below (5).
        </p>

        <StackblitzEmbed dom-id="foo" />
        <StackblitzEmbed dom-id="foo1" />
        <StackblitzEmbed dom-id="foo2" />
        <StackblitzEmbed dom-id="foo3" />
        <StackblitzEmbed dom-id="foo4" />

        <a href="/" target="_blank">When you open this page, there will be one thing in your history</a>
    </div>
</template>
