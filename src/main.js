// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import $ from 'jquery'
import Layout from './components/layout'
import Nav from './components/nav'
import VueRouter from 'vue-router'
import IndexPage from './pages/index'
import About from './components/about'
import Education from './components/education'
import Project from './components/project'
import Skills from './components/skills'
import Work from './components/work'
import Contact from './components/contact'
import Aside from './components/aside'


Vue.use(VueRouter);

let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        nav: Nav,
        about: About,
        education: Education,
        layout: Layout,
        nav: Nav,
        project: Project,
        skills: Skills,
        work: Work,
        contact: Contact,
        aside: Aside
      }
    }
  ]
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => {
    return h(Layout)
  }
})
