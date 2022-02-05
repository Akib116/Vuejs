<template>
 <div>
   <modal modalHeading="Add New Suppliers" :cond="showingAddModal" @modalClose="showingAddModal= false">
     <table>
       <tr>
         <td>
           Supplier Name
         </td>
         <td>
           <input type="text" id="newCatName" v-model="newCategory.name" placeholder="Supplier Name">
         </td>
       </tr>

        <tr>
         <td>
           Supplier description
         </td>
         <td>
           <textarea type="text"  v-model="newCategory.description" placeholder="Write short description..."></textarea>
         </td>
       </tr>

        <tr>
         <td>
           
         </td>
         <td>
           <button class="btnSave" @click="addNewCategory()">Save</button>
         </td>
       </tr>
     </table>
   </modal>
   <h2 class="fleft">Suppliers</h2>
   <button class="addBtn fright" @click="showingAddModal = true">Add New</button>
   <div class="clear"></div>
   <hr>

   <table class="nice-table">
     <tr>
       <th>ID</th>
       <th>Name</th>
       <th>Description</th>
       <th>Edit</th>
       <th>Delete</th>
       
     </tr>

     <tr>
       <td>1</td>
       <td>Hp</td>
       <td>Description</td>
       <td><button class="edit">Edit</button></td>
       <td><button class="delete">Delete</button></td>
     </tr>

     <tr>
       <td>2</td>
       <td>Samsung</td>
       <td>Description</td>
       <td><button class="edit">Edit</button></td>
       <td><button class="delete">Delete</button></td>
     </tr>
   </table>
 </div>
</template>

<script>
export default {
  name: 'category',
  data () {
    return {
     showingAddModal: false,
     newCategory: {
       name: "",
       description: ""
     } 
    }
  },

  clickedCategory: {},

  mounted() {
    console.log("Mounted");
  },

  methods: {
    init(){

    },
    addNewCategory(){
      console.log(this.newCategory);
      this.$eventBus.$emit("loadingStatus", false);

      this.$axios.post("",this.user)
       .then(res=>{
         this.$eventBus.$emit("loadingStatus",false);
         this.showingAddModal=false;

      });
    }
  },
}

</script>

