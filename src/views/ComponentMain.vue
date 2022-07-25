<template>
  <div class="dashboard">
    <main-section class="mainsection">
    <div slot="pages-user">
      <router-view/>
    </div>
    </main-section>
    <header-section class="header"/>
    <side-bar-secition class="sidebar"></side-bar-secition>
    <note-section class="notes"/>
  </div>
</template>
<script>
import headerSection from "@/components/HeaderSection";
import mainSection from "@/components/MainSection";
import noteSection from "@/components/NoteSection";
import sideBarSecition from "@/components/SideBarSecition";




export default {
  name: 'componentMain',
  components: {
    headerSection,
    mainSection,
    noteSection,
    sideBarSecition,

  }
}
</script>
<style>
.dashboard {
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 1fr 18fr 39px;
  grid-template-columns: 380px 40fr 1fr;
  height: 100vh;
  grid-template-areas:
  "sidebar header notes"
   "sidebar mainsection mainsection"
  "sidebar statics statics"
;

}
.mainsection {
  grid-area: mainsection;
  background: #F5F6FA;
}
.sidebar {
  grid-area: sidebar;
  background: #ffffff;
}
.notes {
  grid-area: notes;
  background: #F5F6FA;
}
.statics {
  grid-area: statics;
  background: #f5f3f3;
}
.header {
  grid-area: header;
  background: #F5F6FA;
}
</style>
