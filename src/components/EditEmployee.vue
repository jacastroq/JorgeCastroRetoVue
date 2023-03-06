<template>    
<div class="container">
    
    <div class="card">
        <div class="card-header">
            <h1>UPDATE EMPLOYEE</h1>
        </div>
        <div class="card-body">
            <form v-on:submit.prevent="updateEmployee">
                <div class="form-group">
                  <label for="">Age:</label>
                  <input type="number" required
                    class="form-control" name="age" aria-describedby="Write Employee Age" placeholder="Age" v-model="employee.age">
                </div>
                 <div class="form-group">
                  <label for="">Email:</label>
                  <input type="email" required
                    class="form-control" name="email" aria-describedby="Write Employee Email" placeholder="Email" v-model="employee.email">
                </div>
                <div class="form-group">
                  <label for="">Name:</label>
                  <input type="text" required
                    class="form-control" name="name" aria-describedby="Write Employee Name" placeholder="Name" v-model="employee.name">
                </div>
                <div class="form-group">
                  <label for="">Position:</label>
                  <input type="text" required
                    class="form-control" name="position" aria-describedby="Write Employee Position" placeholder="Position"  v-model="employee.position">
                </div>
                <div class="form-group">
                  <label for="">Surname:</label>
                  <input type="text" required
                    class="form-control" name="surname" aria-describedby="Write Employee Surname" placeholder="Surname"  v-model="employee.surname">
                </div>

                <div class="btn-group" role="group" aria-label="">


                    <button type="submit" class="btn btn-primary">UPDATE</button>
                    <router-link :to="{name:'ListEmployee'}" class="btn btn-danger"> CANCEL</router-link>
                 
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
     employee:{}
    }

    },    
    created:function(){
           this.getEmployeeID();
    },
    methods:{
        getEmployeeID(){

             fetch('https://jorgecastroreto20230305112547.azurewebsites.net/api/employees/'+this.$route.params.id)
            .then(oneEmployee=>oneEmployee.json())
            .then((dataEmployee)=>{
             //   console.log(this.$route.params.id)

                 console.log(dataEmployee)
                 this.employee.age = dataEmployee.age;
                 this.employee.email = dataEmployee.email;
                 this.employee.name = dataEmployee.name;
                 this.employee.position = dataEmployee.position;
                 this.employee.surname = dataEmployee.surname;
            })
            .catch(console.log)

        },

        updateEmployee: function(){
        
        fetch('https://jorgecastroreto20230305112547.azurewebsites.net/api/employees/'+this.$route.params.id,{
            method:"PUT",
            body:JSON.stringify(
                {
                modifiedBy:"TestUser"
                ,age:this.employee.age
                ,email: this.employee.email
                ,name: this.employee.name
                ,position:this.employee.position
                ,surname:this.employee.surname
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
                    dataNewEmployee =>{
                    console.log(dataNewEmployee);
                    this.$router.push({ name: "ListEmployee"})
                    // window.location.href='../listEmployee'
                }
            )
        )


    }



    }

   
}
</script>