<template>
    <div class="user-sessions">
    <div class="session-background">
     <div class="session-card" v-for="(userSession, index) in userSessions" :key="index">
            {{ userSession.title }}
            {{ userSession.sDay }}
            {{ userSession.sTime }}
     </div>
    </div>
  </div>
</template>

<script>

export default { 
    props: { 
        userSessions: Array,
    }
}

</script>