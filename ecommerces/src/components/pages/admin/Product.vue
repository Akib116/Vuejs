<template>
 <div>
   <modal modalHeading="Add New Product" :cond="showingAddModal" @modalClose="showingAddModal= false">
     <table>
       <tr>
         <td>
           Product Name
         </td>
         <td>
           <input type="text" id="newCatName" v-model="newproduct.name" placeholder="product Name">
         </td>
       </tr>

        <tr>
         <td>
           Category
         </td>
         <td>
           <select v-model="newproduct.category">
               <option value="">
                   --Select one--
               </option>
               

             
           </select>
         </td>
       </tr>

       <tr>
         <td>
           Supplier
         </td>
         <td>
           <select v-model="newproduct.supplier">
               <option value="">
                   --Select one--
               </option>
             
           </select>
         </td>
       </tr>

        <tr>
         <td>
           Price
         </td>
         <td>
           <input type="text"  v-model="newproduct.price" placeholder="Price">
           <label for=""><input type="checkbox" v-model="newproduct.negotiable">Negotiable</label>
         </td>
       </tr>

         <tr>
         <td>
           Image
         </td>
         <td>
           <input type="file" id="image" @change="onfileChange">

         </td>
       </tr>

       <tr>
         <td>
        
         </td>
         <td>
           <progress :value="percent" max="100" v-if="percent !=0 && percent!=100"></progress>
           <span v-if="percent !=0 && percent!=100"></span>
           <br>
           <br>
           <img src="http://beepeers.com/assets/images/tradeshows/default-image.jpg" alt="No image selected" class="thumbnile">
         </td>
       </tr>
       

        <tr>
         <td>
           Product description
         </td>
         <td>
           <textarea type="text"  v-model="newproduct.description" placeholder="Write short description..."></textarea>
         </td>
       </tr>

        <tr>
         <td>
           
         </td>
         <td>
           <button class="btnSave" @click="addNewproduct()">Save</button>
         </td>
       </tr>
     </table>
   </modal>
   <h2 class="fleft">Products</h2>
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

     
   </table>
 </div>
</template>

<script>
export default {
  name: 'product',
  data () {
    return {
     showingAddModal: false,
     newproduct: {
       name: "",
       description: "",
       supplier: "",
       category:"",
       price: 0,
       negotiable: true,
       image:"img/uploads/default.jpg"
     }, 
    }
  },

  clickedproduct: {},
  percent: 0,

  

  mounted() {
    console.log("Mounted");
  },

  methods: {
    init(){

    },
    addNewproduct(){
      console.log(this.newproduct);
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

