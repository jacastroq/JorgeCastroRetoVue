<template>    
<div class="container">
    

<div class="card">
    <div class="card-header">
    <h1> CREATE NEW DEPARTMENTS</h1>
    </div>
    <div class="card-body">
        <router-link :to="{name:'CreateDepartment'}" class="btn btn-success"> CREATE DEPARTMENT</router-link>
    </div>
</div>
<br>
<hr>
    <div class="card">
        <div class="card-header">
        <h2>    DEPARTMENTS LIST </h2>
        </div>
        <div class="card-body">
          <table class="table">
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>DESCRIPTION</th>
                      <th>NAME</th>
                      <th>PHONE</th>
                      <th>OPTIONS</th>
                  </tr>
              </thead>
              <tbody>
                  <tr  v-for="department in arrayDepartments" :key="department.id">
                      <td>{{department.id}}</td>
                      <td>{{department.description}}</td>
                      <td>{{department.name}}</td>
                      <td>{{department.phone}}</td>
                      <td>
                          <router-link :to="{name:'EditDepartment',params:{id:department.id}}" class="btn btn-primary"> EDITAR</router-link>
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
           arrayDepartments:[]
        }

    },
    created: function() {

    this.GetDepartments();

    },
    methods:{
        
        GetDepartments(){
            fetch('https://jorgecastroreto20230305112547.azurewebsites.net/api/departments')
            .then(allDepartments=>allDepartments.json())
            .then((dataAllDepartments)=>{
                console.log(dataAllDepartments)
                this.arrayDepartments = []
                if(typeof dataAllDepartments[0].success==='undefined'){
                    this.arrayDepartments = dataAllDepartments;
                }
            })
            .catch(console.log)
        }

    }
}
</script>
