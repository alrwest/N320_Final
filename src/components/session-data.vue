<template>
    <div class ="session-data">
        <div class="card-top">
            <h2> {{ session.title }}</h2>
            <div @click ="addSession" ref ="addedToggle" class="add-item-btn"> Add Item </div>
        </div>
       <div class ="mid-card"> 
        <div class ="presenter-section">
            <h4 class ="presenter-tag" @click="filterByPresenter"> 
            Presented by: </h4>
            <div class ="presenter-name"> {{ session.presenter }} </div> </div>
            <div class="day-time">{{ session.sDay }} at {{ formatTime }} </div>
        </div>
        <div class="border"></div>
        <div class= "session-desc"> {{ session.desc }}</div>
        
        <div class="tag-wrapper">
            <p> Categories: </p>
             <div class = "tags" v-for = "(tag,index) in session.tags" :key="index" @click="filterByCategory(index)">
            {{ tag }}
            </div>
        </div>
       
        </div>
</template>

<script>

export default { 
    components: { 
    },
    data() { 
        return { 
            userSessions: [],
            //addedSession: null,
            };
        },
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
    addSession() { 
        //const addedSession = this.sessions.find(s => s.id === this.sessions.id);
        //console.log("current session", addedSession);

        //toggle
        //if (addedSession) { 
            //toggle added
          //  addedSession.added = !addedSession.added;
          //  console.log("added?", addedSession.added);
      //  } else { 
          //create new user session when add item is clicked
        /*    const userSession = { 
                id: this.session.id,
                title: this.session.title,
                sTime: this.session.sTime,
                sDay: this.session.sDay,
                added: true,
            };
            
            this.userSessions.push(userSession);
            console.log("clicked!:", this.userSessions);
            this.$emit('user-data', this.session);
            //console.log("current user sessions array:", this.userSessions);
            this.userSessions.forEach(session => { 
                console.log("Title:", session.title);
                console.log("Time:", session.sTime);
                console.log("Day:", session.sDay);
            });*/
            console.log("clicked!", this.session);
            this.$refs.addedToggle.innerText = "Added Session!";
            const userSession = { 
                id: this.session.id,
                title: this.session.title,
                sTime: this.session.sTime,
                sDay: this.session.sDay,
            };

            console.log("updated obj", userSession);
           this.$emit('user-sessions', userSession);
        }
    },
  computed: { 
     //computed method to format time
    formatTime() { 
      let sessionTime = this.session.sTime;
      let mer = "";
      console.log("current obj time:", sessionTime);
      if (sessionTime > 12) { 
        mer = "PM"; //night
        sessionTime = (sessionTime % 12) + ":00";
        console.log(sessionTime, mer);
      } else if (sessionTime < 12) { 
        mer = "AM"; //morning
        sessionTime = sessionTime + ":00";
        console.log(sessionTime, mer);
      }
     return sessionTime + " " + mer;
    },

  }
}

</script>

<style>
    body {
        font-family:Arial, Helvetica, sans-serif;
    }
    .card-top {
        display: flex;
        justify-content: space-between;
    }

    .card-top h2 {
        margin-left: 20px;
    } 
    .mid-card {
        height: 50px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .mid-card h4 {
        margin-left: 20px;
    }

    .day-time {
        margin-right: 20px;
    }


    .add-item-btn {
        width: 100px;
        height: 15px;
        padding: 10px;
        font-size: 14px;
        border-radius: 10px;
        margin: 18px;
        text-align: center;
        background-color: #e9b046;
        border: 2px solid #000080;
    }

    .add-item-btn:hover {
        background-color:  #000080;
        color: #e9b046;
        cursor: pointer;
    }

    .tag-wrapper {
        width: 100%;
        height: 50px;
        display: flex; 
        justify-content: left;
        align-items: center;
        text-align: center;
        margin-left: 20px;
    }

    .tags {
        width: 100px;
        height: 20px;
        display: flex;
        justify-content: center;
        background-color: #e9b046;
        padding: 3px;
        margin: 10px;
        border-radius: 10px;
        text-align: center;
    }

    .tags:hover {
        background-color: #000080;
        color:#e9b046;
        cursor: pointer;
    }

    .day-time {
        display: flex;
    }

    .session-desc {
        padding: 10px;
       margin-bottom: 20px;
    }

    .border {
        width: 98%;
        margin: 0 auto;
        border-bottom: 2px solid #D8D8D8;
    }

    .presenter-tag, .tag-wrapper {
        color: #000080;
    }

    .tag-wrapper p {
        font-weight: bold;
    }

    .presenter-section {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .presenter-name {
        color:#e9b046;
        margin: 5px;
        cursor: pointer;
    }
    .presenter-name:hover {
        text-decoration: underline;
    }



</style>