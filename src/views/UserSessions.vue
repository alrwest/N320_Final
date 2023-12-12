<template>
  <user-slot></user-slot>
  <user-data :userSessions="userSessions" @user-sessions="submitData" ></user-data>
</template>

<script>
 import userData from '../components/user-data.vue'
 
export default { 
 components: { 
  userData,
 },

  data() { 
    return { 
      userSessions: [],
    }
  },
  methods: { 
    submitData(userSession) { 
      console.log("successfully passed!:", userSession);
      this.userSessions.push(userSession);
    }
  },
 
  }

</script>