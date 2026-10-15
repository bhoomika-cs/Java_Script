//THIS keyword

const obj={
    username : "Bhoomika",
    age : 21,
    welcome : function(){
        console.log(`Good Morning, ${this.username}`);
        console.log(this);
        
    }
}
obj.welcome()
obj.username = "Khushi"
obj.welcome()
