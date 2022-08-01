<template>
<div class="navbar">
    <v-navigation-drawer app v-model="drawer" clipped>
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title grey--text text--darken-2">
              Navigation lists
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list dense nav>
            <v-list-item v-for="nav_list in nav_lists" :key="nav_list.name">
                <v-list-item-content>
                  <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
      </v-container>
    </v-navigation-drawer>

    <v-app-bar :color="navbarColor" dark app clipped-left>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Vuetify</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text>Button</v-btn>
      </v-toolbar-items>
    </v-app-bar>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NavBarComponent extends Vue{
  @Prop({ default: '' })
  color!: '' | 'red' | 'grey' | 'green' | 'blue' | 'orange'

  get navbarColor() {
    const colorPattarn = {
      '': '#B0BEC5',
      grey: '#B0BEC5',
      red: '#D50000',
      green: '#66BB6A',
      blue: '#0091EA',
      orange: '#FF9800'
    }
    return colorPattarn[this.color]
  }

  drawer = null;
  nav_lists = [
    {
      name: 'Getting Started',
      icon: 'mdi-speedometer',
      lists: ['Quick Start', 'Pre-made layouts']
    },
  ];
}
</script>

