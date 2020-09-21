$(document).on('change','#department_list', function(){
      var deptID = $(this).val();
      if(deptID){
          $.ajax({
              type:'POST',
              url:'get_desig.php',
              data:{'dept_id':deptID},
              success:function(result){
                  $('#designation_list').html(result);
                 
              }
          }); 
      }else{
          $('#state').html('<option value="">Country</option>');
          
      }
  });