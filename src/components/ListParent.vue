<template>
    <div>
        
        <div>
            <h2>list</h2>
            <List />
        </div>
        <div>
            <h2>listAdd</h2>
            <ListAdd />
        </div>
    </div>
</template>

<script>

import ListAdd from './ListAdd.vue';
import List from './List.vue';


export default {
    name: "ListParent",
    components: {
        ListAdd,
        List,
    }
}
</script>