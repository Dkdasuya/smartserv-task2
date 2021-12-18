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
    const keyArray = Object.keys(Object.values(jsonData.products)[0]);
    const avaiableDisplay = document.querySelector('.container-table-fields');
    for(let i=0;i<keyArray.length;i++){
        const pElement = document.createElement('p');
        pElement.value = keyArray[i];
        pElement.name = keyArray[i];
        pElement.textContent = keyArray[i];
        avaiableDisplay.append(pElement);
    }
}

