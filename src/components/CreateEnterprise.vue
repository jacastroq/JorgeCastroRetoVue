<template>    
<div class="container">
    
    <div class="card">
        <div class="card-header">
            <h1>NEW ENTERPRISE</h1>
        </div>
        <div class="card-body">
            <form v-on:submit.prevent="insertEnterprise">
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


                    <button type="submit" class="btn btn-primary">AGREGATE</button>
                    <a name="" id="" class="btn btn-danger" href="./listEnterprise" role="button">CANCEL</a>
                    
                 
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
    methods:{

    insertEnterprise: function(){
        
        fetch('http://jacastroq-002-site3.ftempurl.com/api/enterprises',{
            method:"POST",
            body:JSON.stringify(
                {
                createdBy:"TestUser"
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
                    window.location.href='listEnterprise'
                }
            )
        )


    }

    }

}
</script>