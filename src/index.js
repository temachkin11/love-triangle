/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var j = 0, k = 0, m = 0;
  var triangles = [];
  for(var i = 0; i < preferences.length; i++)
        {
          if (triangles.includes(preferences[i])) continue;
          
          k = preferences[i];
          j = preferences[k - 1];
          m = preferences[j - 1];
          if(k === j) continue;
          if (k == preferences[m - 1])
          {

          triangles.push(k);
          triangles.push(j);
          triangles.push(m);
          }
         
    
  }
  return triangles.length / 3;
}

  
