document.getElementById('removed').textContent = '<<';

document.getElementById('displayed').addEventListener('click',function(){

})

document.getElementById('removed').addEventListener('click',function(){

})

document.getElementById('input-file').addEventListener('change',function(event){
    var result;
    const file_to_read = document.getElementById("input-file").files[0];
    const fileread = new FileReader();
    fileread.onload = function(e) {
      const content = e.target.result;
      result = JSON.parse(content); 
      console.log(result);
      displayInAvailableFields(result);
    };
    fileread.readAsText(file_to_read);
    
})

function displayInAvailableFields(jsonData){
    console.log(jsonData.products[0]);
}

