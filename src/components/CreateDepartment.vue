<template>    
<div class="container">
    
    <div class="card">
        <div class="card-header">
            <h1>NEW DEPARTMENT</h1>
        </div>
        <div class="card-body">
            <form v-on:submit.prevent="insertDepartment">
                <div class="form-group">
                  <label for="">Description:</label>
                  <input type="text" required
                    class="form-control" name="address" aria-describedby="Write Department Description" placeholder="Description" v-model="department.description">
                </div>
                <div class="form-group">
                  <label for="">Name:</label>
                  <input type="text" required
                    class="form-control" name="name" aria-describedby="Write Department Name" placeholder="Name" v-model="department.name">
                </div>
                <div class="form-group">
                  <label for="">Phone</label>
                  <input type="text" required
                    class="form-control" name="phone" aria-describedby="Write Department Phone" placeholder="Phone"  v-model="department.phone">
                </div>

                <div class="btn-group" role="group" aria-label="">


                    <button type="submit" class="btn btn-primary">AGREGATE</button>
                    <router-link :to="{name:'ListDepartment'}" class="btn btn-danger"> CANCEL</router-link>                    
                    
                 
                </div>
            </form>
        </div>
     
    </div>
</div>
</template>
<script>
export default {
    
    data(){

    return{
     department:{}

    }

    },
    methods:{

    insertDepartment: function(){
        
        fetch('https://jorgecastroreto20230305112547.azurewebsites.net/api/departments',{
            method:"POST",
            body:JSON.stringify(
                {
                createdBy:"TestUser"
                ,description:this.department.description
                ,name: this.department.name
                ,phone:this.department.phone
                }
                ),
               headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                }
        }
        )
        .then(
            (
                    dataNewDepartment =>{
                    console.log(dataNewDepartment);
                    this.$router.push({ name: "ListDepartment"});

                    // window.location.href='listDepartment'
                }
            )
        )


    }

    }

}
</script>