/**
 * CTCI - 1.8 ZERO MATRIX
 * 
 * Write an algorithm such that if na element in an NxN matrix is 0, its entire row and column are set to 0.
 */

const zeroMatrix = (matrix,n) => {
    // mark the positions
    for(let r=0; r<n; r++)
    {
        for(let c=0; c<n; c++)
        {
            if(matrix[r][c]===0) matrix[r][c]=true;
        }
    }
    // find the locations and zero
    for(let r=0; r<n; r++)
    {
        for(let c=0; c<n; c++)
        {
            if(matrix[r][c]===true) {
                // zero row
                for(let i=0; i<n; i++)
                    matrix[r][i] = 0;

                // zero the col
                for(let i=0; i<n; i++)
                    matrix[i][c] = 0;
            }
        }
    }
    return matrix;
}