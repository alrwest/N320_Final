
import { RouterLink } from 'vue-router';

import { RouterLink } from 'vue-router';

<template>
    <header>
        <nav>
            <h2 class ="nav-header">Web Dev Conference</h2>
            <div class = "routeStyles">
                <RouterLink to ="/" class ="routeBtn"> Home </RouterLink>
                <RouterLink to = "/UserSessions" class ="routeBtn"> User Sessions </RouterLink>
            </div>
        </nav>
    </header>
</template>

<style>
  nav {
    width: 1200px;
    height: 100px;
    border-radius: 10px;
    background-color: #D8D8D8;
    display: flex;
    justify-content: space-between;
    margin: 30px 75px;
  }

  .nav-header {
    margin: 35px 15px;
    color: #000080;
  }

  .routeStyles {
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
  }

  .routeBtn {
    background-color: #7DB1FA;
    color: #f2f2f2;
    text-decoration: none;
    width: 125px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 10px;
    border: 1px solid grey;
  }

  .routeBtn:hover {
    background-color: #000080;
    cursor: pointer;
  }

</style>