var names=new Array();
names[0]="Yassir";
names[1]="Jaden";
names[2]="Jordan";
names[3]="jonathan";
names[4]="pranav";
names[5]="francis";
names[6]="lawrence";
names[7]="parth";
names[8]="lamar";
names[9]="john";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}