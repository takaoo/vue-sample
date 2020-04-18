<template>
  <v-container>

    <p class="animated bounceInDown">aaaa</p>
    <ul id="example-1">
      <li v-for="item in items" :key="item.message" class="animated bounceInDown">{{ item.message }}</li>
    </ul>
    <p>{{D}}</p>
    <p>{{i}}</p>
    <v-btn v-on:click="add">Normal</v-btn>
    <p>{{diff_value}}</p>
    <ul>
      <li v-for="a in arr" :key="a">{{ diff(a) + a}}</li>
    </ul>
  </v-container>
</template>
<script>
import moment from "moment"

export default {
  components: {},
  data: () => ({
    items: [
      { message: moment().toString() },
      { message: 'Bar' }
    ],
    D: "2021-04-01",
    NEXT_MEET: "2020-06-01",
    TWO_YEARS: "2020-11-11",
    arr : ['seconds', 'minutes', 'hours', 'days', 'weeks', 'months'],
    i:0,
    diff_value:null
  }),
  methods:{
    add: function(){
        this.i++
    },
    diff:function(time){
        let a = moment(this.D)
        return a.diff(moment(),time)
    }
  },
  mounted () {
    setInterval(()=> {
    this.diff_value = this.diff('seconds')
    }, 1000)
  }
};

</script>