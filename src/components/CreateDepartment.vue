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
                    class="form-control" name="address" aria-describedby="Write Department Description" placeholder="Description" v-model="department.address">
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
                    <a name="" id="" class="btn btn-danger" href="./listDepartment" role="button">CANCEL</a>
                    
                 
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
        
        fetch('http://jacastroq-002-site3.ftempurl.com/api/departments',{
            method:"POST",
            body:JSON.stringify(
                {
                createdBy:"TestUser"
                ,address:this.department.address
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
                    window.location.href='listDepartment'
                }
            )
        )


    }

    }

}
</script>