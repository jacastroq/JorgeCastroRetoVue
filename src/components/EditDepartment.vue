<template>    
<div class="container">
    
    <div class="card">
        <div class="card-header">
            <h1>UPDATE DEPARTMENT</h1>
        </div>
        <div class="card-body">
            <form v-on:submit.prevent="updateDepartment">
                <div class="form-group">
                  <label for="">Description:</label>
                  <input type="text" required
                    class="form-control" name="description" aria-describedby="Write Department Description" placeholder="Description" v-model="department.description">
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


                    <button type="submit" class="btn btn-primary">UPDATE</button>
                    <a name="" id="" class="btn btn-danger" href="../listDepartment" role="button">CANCEL</a>
                    
                 
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
    created:function(){
           this.getDepartmentID();
    },
    methods:{
        getDepartmentID(){

             fetch('http://jacastroq-002-site3.ftempurl.com/api/departments/'+this.$route.params.id)
            .then(oneDepartment=>oneDepartment.json())
            .then((dataDepartment)=>{
             //   console.log(this.$route.params.id)

                 console.log(dataDepartment)
                 this.department.modifiedBy = dataDepartment.modifiedBy;
                 this.department.description = dataDepartment.description;
                 this.department.name = dataDepartment.name;
                 this.department.phone = dataDepartment.phone;
            })
            .catch(console.log)

        },

        updateDepartment: function(){
        
        fetch('http://jacastroq-002-site3.ftempurl.com/api/departments/'+this.$route.params.id,{
            method:"PUT",
            body:JSON.stringify(
                {
                modifiedBy:"TestUser"
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
                    window.location.href='../listDepartment'
                }
            )
        )


    }



    }

   
}
</script>