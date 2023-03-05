<template>    
<div class="container">
    

<div class="card">
    <div class="card-header">
    <h1> CREATE NEW EMPLOYEES</h1>
    </div>
    <div class="card-body">
        <router-link :to="{name:'CreateEmployee'}" class="btn btn-success"> CREATE EMPLOYEE</router-link>
    </div>
</div>
<br>
<hr>
    <div class="card">
        <div class="card-header">
        <h2>    EMPLOYEES LIST </h2>
        </div>
        <div class="card-body">
          <table class="table">
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>AGE</th>
                      <th>EMAIL</th>
                      <th>NAME</th>
                      <th>POSITION</th>
                      <th>SURNAME</th>
                  </tr>
              </thead>
              <tbody>
                  <tr  v-for="employee in arrayEmployees" :key="employee.id">
                      <td>{{employee.id}}</td>
                      <td>{{employee.age}}</td>
                      <td>{{employee.email}}</td>
                      <td>{{employee.position}}</td>
                      <td>{{employee.surname}}</td>
                      <td>
                          <router-link :to="{name:'EditEmployee',params:{id:employee.id}}" class="btn btn-primary"> EDITAR</router-link>
                        <!-- <a name="" id="" class="btn btn-primary" href="#" role="button">Editar</a> -->
                      </td>
                  </tr>
                 
              </tbody>
          </table>

        </div>

    </div>
    <hr>
    <hr>
    
</div>
</template>
<script>
export default {


    data(){
        return{
           arrayEmployees:[]
        }

    },
    created: function() {

    this.GetEmployees();

    },
    methods:{
        
        GetEmployees(){
            fetch('https://jorgecastroreto20230305112547.azurewebsites.net/api/employees')
            .then(allEmployees=>allEmployees.json())
            .then((dataAllEmployees)=>{
                console.log(dataAllEmployees)
                this.arrayEmployees = []
                if(typeof dataAllEmployees[0].success==='undefined'){
                    this.arrayEmployees = dataAllEmployees;
                }
            })
            .catch(console.log)
        }

    }
}
</script>
