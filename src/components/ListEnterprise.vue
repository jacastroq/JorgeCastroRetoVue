<template>    
<div class="container">
    

<div class="card">
    <div class="card-header">
    <h1> CREATE NEW ENTERPRISES</h1>
    </div>
    <div class="card-body">
        <a name="" id="" class="btn btn-success" href="./createEnterprise" role="button">CREATE ENTERPRISE</a>
    </div>
</div>
<br>
<hr>
    <div class="card">
        <div class="card-header">
        <h2>    ENTERPRISES LIST </h2>
        </div>
        <div class="card-body">
          <table class="table">
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>ADDRESS</th>
                      <th>NAME</th>
                      <th>PHONE</th>
                      <th>OPTIONS</th>
                  </tr>
              </thead>
              <tbody>
                  <tr  v-for="enterprise in arrayEnterprises" :key="enterprise.id">
                      <td>{{enterprise.id}}</td>
                      <td>{{enterprise.address}}</td>
                      <td>{{enterprise.name}}</td>
                      <td>{{enterprise.phone}}</td>
                      <td>
                          <router-link :to="{name:'EditEnterprise',params:{id:enterprise.id}}" class="btn btn-primary"> EDITAR</router-link>
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
           arrayEnterprises:[]
        }

    },
    created: function() {

    this.GetEnterprises();

    },
    methods:{
        
        GetEnterprises(){
            fetch('http://jacastroq-002-site3.ftempurl.com/api/enterprises')
            .then(allEnterprises=>allEnterprises.json())
            .then((dataAllEnterprises)=>{
                console.log(dataAllEnterprises)
                this.arrayEnterprises = []
                if(typeof dataAllEnterprises[0].success==='undefined'){
                    this.arrayEnterprises = dataAllEnterprises;
                }
            })
            .catch(console.log)
        }

    }
}
</script>
