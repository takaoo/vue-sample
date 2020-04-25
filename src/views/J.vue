<template>
  <v-container>
    <p class="animated bounceInDown">{{i}}</p>
    <v-btn v-on:click="add">Normal</v-btn>
      <v-img src="@/assets/ko.png" width="200" class="animated bounceInDown ma-10"/>

    <!-- 横に並べる -->

    <v-row>
      <p hidden>{{diff_value}}</p>
      <v-col>
        <v-card>
          <v-expansion-panels>
            <v-expansion-panel v-for="(item,i) in [NEXT_MEET,TWO_YEARS,D]" :key="i">
              <v-expansion-panel-header>{{item}}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <ul>
                  <li v-for="a in arr" :key="a">{{ diff(a,item) + a}}</li>
                </ul>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import moment from "moment";
export default {
  components: {},
  data: () => ({
    items: [{ message: moment().toString() }, { message: "Bar" }],
    D: "2021-04-01",
    NEXT_MEET: "2020-06-01",
    TWO_YEARS: "2020-11-11",
    arr: ["seconds", "minutes", "hours", "days", "weeks", "months"],
    i: 0,
    diff_value: null
  }),
  methods: {
    add: function() {
      this.i++;
    },
    diff: function(diff_value, time) {
      let t = moment(time);
      return t.diff(moment(), diff_value);
    }
  },
  mounted() {
    setInterval(() => {
      this.diff_value = this.diff("seconds", this.D);
    }, 1000);
  }
};
</script>