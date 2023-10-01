<script>

	// Considering 2-D array having 3 rows and 3 columns
	let n = 3;
	let m = 3;
	let arr
		= [[ 3, 2, 7 ], [ 2, 6, 8 ], [ 5, 1, 9 ] ];

	// Iterating over all 1-D arrays in 2-D array
	for (let i = 0; i < n; i++) {

		// Printing all elements in ith 1-D array
		for (let j = 0; j < m; j++) {

			// Printing jth element of ith row
		document.write(arr[i][j] + " ");
		}
		document.write("<br>");
	}
	
	// This code is contributed by satwik4409.
	</script>
