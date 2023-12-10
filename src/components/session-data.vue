<template>
    <div class ="session-data">
        <div class="card-top">
            <h2> {{ session.title }}</h2>
            <div class="add-item-btn"> Add Item </div>
        </div>
       <div class ="mid-card"> 
            <h4 @click="filterByPresenter"> Presented by: {{ session.presenter }}</h4>
            <div class="day-time">{{ session.sDay }} at {{ session.sTime }}</div>
        </div>
        <div class="border"></div>
        <span> {{ session.desc }}</span>
        <div class="tag-wrapper">
            <p>Categories: </p>
             <div class = "tags" v-for = "(tag,index) in session.tags" :key="index" @click="filterByCategory(index)">
            {{ tag }}
            </div>
        </div>
       
        </div>
</template>

<script>
export default { 
    props: {
       session: { 
                type: Object,
                required: true,
       },
       filteredSessions: { 
        type: Array,
       }
  },
    methods: { 
    filterByPresenter() { 
        console.log("clicked!:", this.session.presenter);
        this.$emit('filter-by-presenter', this.session.presenter);
    },
    filterByCategory(index) { 
        console.log("clicked!:", this.session.tags[index]);
        this.$emit('filter-by-category', this.session.tags[index]);
    },
  }
}

</script>

<style>
    .card-top {
        display: flex;
        justify-content: space-between;
    }
    .mid-card {
        height: 50px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .day-time {
        margin-right: 15px;
    }

    .add-item-btn {
        width: 100px;
        height: 15px;
        padding: 10px;
        border-radius: 10px;
        margin: 18px;
        text-align: center;
        background-color: orange;
    }

    .tag-wrapper {
        width: 100%;
        height: 50px;
        display: flex; 
        justify-content: left;
        align-items: center;
        text-align: center;
    }

    .tags {
        width: 120px;
        display: flex;
        justify-content: center;
    }

    .day-time {
        display: flex;
    }

    .border {
        width: 98%;
        margin: 0 auto;
        border-bottom: 2px solid #D8D8D8;
    }


</style>