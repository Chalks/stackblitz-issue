<script setup>
import sdk from '@stackblitz/sdk';

const props = defineProps({
    domId: {
        type: String,
        required: true,
    },
});

const build = () => {
    sdk.embedProject(
        document.getElementById(props.domId),
        {
            title: 'History bug',
            description: 'An example of the history bug',
            template: 'javascript',
            settings: {
                compile: {
                    clearConsole: false,
                },
            },
            files: {
                'index.html': '<p>hi</p>',
                'index.js': 'console.log(\'hi\');',
            },
        },
        {
            clickToLoad: true,
            openFile: ['index.js:L1-L1'],
            hideExplorer: true,
            hideDevTools: true,
            view: 'preview',
        },
    );
};

onMounted(async () => {
    await nextTick();
    build();
});
</script>

<template>
    <ClientOnly>
        <iframe :id="domId" />
    </ClientOnly>
</template>

