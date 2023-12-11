const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let sum=0;
	let count=0;
	let x=[];
	let y=0;
	let res=arr.map(function(e){
		sum+=e;
		if(sum<=n){
				count++;
		}
		if(sum>n){
			sum=0;
			x[y]=arr.splice(0,count);
			count=0;
			y++;
		}
		return x;
	});
	return x;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));


