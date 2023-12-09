<template>
    <div class ="session-data">
        <h2> {{ session.title }}</h2>
        <h4> Presented by: {{ session.presenter }}</h4>
        <p> {{ session.desc }}</p>
        <p>{{ session.sTime }}</p>
        <p>{{ session.sDay }}</p>
        <div class = "tags">
            {{ session.tags }}
        </div>
    </div>
</template>

<script>
export default { 
    props: {
    session: { 
            type: Object,
            required: true,
        }
  }
}

</script>