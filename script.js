const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let sum=0;
	  let x=[];
	  let y=0;
	  let first=0;
	  for(let i=0;i<arr.length;){
		  sum+=arr[i];
		  if(sum<=n){
				  i++;
		  }
		  if(sum>n||i==arr.length-1){
			if(i==arr.length-1){
				x[y]=arr.slice(first,i+1)
			}
			else{
			  sum=0;
			  x[y]=arr.slice(first,i);
			  y++;
			  first=i;
			}
		  }
		  console.log(y);
		}
	  return x;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));


