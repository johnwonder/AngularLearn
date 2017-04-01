function testInstance(args){

	 //this.name = args ? args : "helloApply";

	 return {

	 	  log:  args ? args : "helloApply"
	 }
}

var provider = {

};

 var  instance  = testInstance.apply(provider,['sss']);

 console.log(instance.log);

