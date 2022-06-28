<template>
    <v-app>
    <div 
      id="nav" 
      class="tab-area-base">
      <ul class="tab-menu-base">
        <!-- `router.js` で定義したルーティングルールとの紐付けを行っている -->
        <li><router-link to="/">Home</router-link></li>
        <!-- *** -->
        <!-- 省略 -->
        <!-- *** -->
        <li><router-link to="/Test">Rounting Test</router-link></li>
      </ul>
    </div>
    </v-app>
</template>

<script>
export default {

};
</script>
