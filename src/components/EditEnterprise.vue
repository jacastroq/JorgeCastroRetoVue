<template>    
<div class="container">
    
    <div class="card">
        <div class="card-header">
            <h1>UPDATE ENTERPRISE</h1>
        </div>
        <div class="card-body">
            <form v-on:submit.prevent="updateEnterprise">
                <div class="form-group">
                  <label for="">Addres:</label>
                  <input type="text" required
                    class="form-control" name="address" aria-describedby="Write Enterprise Adress" placeholder="Adress" v-model="enterprise.address">
                </div>
                <div class="form-group">
                  <label for="">Name:</label>
                  <input type="text" required
                    class="form-control" name="name" aria-describedby="Write Enterprise Name" placeholder="Name" v-model="enterprise.name">
                </div>
                <div class="form-group">
                  <label for="">Phone</label>
                  <input type="text" required
                    class="form-control" name="phone" aria-describedby="Write Enterprise Phone" placeholder="Phone"  v-model="enterprise.phone">
                </div>

                <div class="btn-group" role="group" aria-label="">


                    <button type="submit" class="btn btn-primary">UPDATE</button>
                    <a name="" id="" class="btn btn-danger" href="../listEnterprise" role="button">CANCEL</a>
                    
                 
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
     enterprise:{}
    }

    },    
    created:function(){
           this.getEnterpriseID();
    },
    methods:{
        getEnterpriseID(){

             fetch('http://jacastroq-002-site3.ftempurl.com/api/enterprises/'+this.$route.params.id)
            .then(oneEnterprise=>oneEnterprise.json())
            .then((dataEnterprise)=>{
             //   console.log(this.$route.params.id)

                 console.log(dataEnterprise)
                 this.enterprise.modifiedBy = dataEnterprise.modifiedBy;
                 this.enterprise.address = dataEnterprise.address;
                 this.enterprise.name = dataEnterprise.name;
                 this.enterprise.phone = dataEnterprise.phone;
            })
            .catch(console.log)

        },

        updateEnterprise: function(){
        
        fetch('http://jacastroq-002-site3.ftempurl.com/api/enterprises/'+this.$route.params.id,{
            method:"PUT",
            body:JSON.stringify(
                {
                modifiedBy:"TestUser"
                ,address:this.enterprise.address
                ,name: this.enterprise.name
                ,phone:this.enterprise.phone
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
                    dataNewEnterprise =>{
                    console.log(dataNewEnterprise);
                    window.location.href='../listEnterprise'
                }
            )
        )


    }



    }

   
}
</script>