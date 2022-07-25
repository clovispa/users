<template>
<div>
  <div>
    <div class="button-div">
      <button @click="showModal" class="button">Add new user</button>
      <modal-general v-if="openModal" :openModal="openModal" @addUser="addUser" @closeModal="closeModal"/>
    </div>
    <br>
    <br>
  </div>
  <div class="container-grid">
    <div class="position-user">Users</div>
    <div class="position">
      <font-awesome-icon icon="ellipsis-h"/>
    </div>
    </div>
  <table id="customers">
<thead>
<tr>
  <th>id</th>
  <th>Name</th>
  <th>LastName</th>
  <th>Email</th>
  <th>Address </th>
  <th>Company</th>
  <th>Option</th>
</tr>

</thead>
    <tbody>
    <tr v-for=" item in users" :key="item.id" >
      <td>{{item.id}}</td>
      <td>{{item.name}}</td>
      <td>{{item.lastName}}</td>
      <td>{{item.email}}</td>
      <td>{{item.address}}</td>
      <td>{{item.company}}</td>
      <td> <a @click="select(item)" class="view-all">ver todos</a></td>
    </tr>
    </tbody>


  </table>
</div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex'
import ModalGeneral from "@/components/componentUser/ModalUser";
export default {
  name: "TableUser",
  components: {ModalGeneral},
  data() {
    return {
      users: [],
      openModal: false,
    }
  },
  computed: {
    ...mapGetters(['userListState',])
  },
  mounted() {
    this.getUserFull()

  },

  methods: {
    ...mapActions(['getUserList', 'getTodo']),
    addUser(item) {
      this.users = [...this.users, item]
    },
   async getUserFull() {
    await  this.getUserList()
     this.users = this.userListState;
     this.converted(this.users)
    },
   async select(item) {
     await this.getTodo(item.id)
      this.$router.push({ path: '/todos/' })
    },
    showModal() {
      this.openModal = true
    },
    closeModal() {
      this.openModal= false
    },
    converted(item) {
      this.users = item.map (item => {
        return {
          id: item.id,
          name: this.splitName(item.name).firstName,
          lastName: this.splitName(item.name).lastName,
          company: item.company.name,
          email: item.email ,
          address: this.concatAddress(item.address)
        }
      })

    },
     splitName (name)  {
      const [firstName, ...lastName] = name.split(' ').filter(Boolean);
      return {
        firstName: firstName,
        lastName: lastName.join(' ')
      }
    },
    concatAddress(item) {
      return item.street + " " + item.suite  + " " + item.suite
    }
  }
}
</script>

<style scoped>
.container-grid {
  display: grid;
  grid-template-columns: 50% 50%;
  background-color: #ffffff;

}
.position-user {
  text-align: start;
  color: black;
  font-weight: bold;
  padding-left: 24px;
  padding-bottom: 24px;
  padding-top: 24px;
}
.position {
  text-align: end;
  color: black;
  padding-right: 50px;
  padding-top: 24px;
  padding-bottom: 24px;
}
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
 color: black;
  padding: 19px;
}

#customers tr:nth-child(even){background-color: #ffffff;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #ffffff;
  color: #9B9EAC;
}
.view-all{
  color: #2c52ed;
  cursor: pointer;
  text-decoration-line: underline;
}

.button {
  background: #0054FE;
  border-radius: 8px;
  border: none;
  color: white;
  width: 180px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.button-div {
  text-align: start;
}
</style>
