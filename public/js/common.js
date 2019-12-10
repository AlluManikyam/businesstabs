$(document).on('click', '.number-spinner button', function () {    
	var btn = $(this),
		oldValue = btn.closest('.number-spinner').find('input').val().trim(),
		newVal = 0;
	
	if (btn.attr('data-dir') == 'up') {
		newVal = parseInt(oldValue) + 1;
	} else {
		if (oldValue > 1) {
			newVal = parseInt(oldValue) - 1;
		} else {
			newVal = 1;
		}
	}
	btn.closest('.number-spinner').find('input').val(newVal);
});

   $(document).ready(function(){
    $("#SubTabLevelOne").click(function(){
    $("#SubpanelTab").slideToggle("slow");
  })
    $('#datePicker')
        .datepicker({
            format: 'mm/dd/yyyy'
        })
        .on('changeDate', function(e) {
            // Revalidate the date field
            $('#eventForm').formValidation('revalidateField', 'date');
        });
        $('#planCodedatePicker1')
        .datepicker({
            format: 'mm/dd/yyyy'
        })
        .on('changeDate', function(e) {
            // Revalidate the date field
            $('#eventForm').formValidation('revalidateField', 'date');
        });
        $('#planCodedatePicker2')
        .datepicker({
            format: 'mm/dd/yyyy'
        })
        .on('changeDate', function(e) {
            // Revalidate the date field
            $('#eventForm').formValidation('revalidateField', 'date');
        });
        $('#planCodedatePicker3')
        .datepicker({
            format: 'mm/dd/yyyy'
        })
        .on('changeDate', function(e) {
            // Revalidate the date field
            $('#eventForm').formValidation('revalidateField', 'date');
        });

    $('#eventForm').formValidation({
        framework: 'bootstrap',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                validators: {
                    notEmpty: {
                        message: 'The name is required'
                    }
                }
            },
            date: {
                validators: {
                    notEmpty: {
                        message: 'The date is required'
                    },
                    date: {
                        format: 'MM/DD/YYYY',
                        message: 'The date is not a valid'
                    }
                }
            }
        }
    });


        // Add minus icon for collapse element which is open by default
        $(".collapse.in").each(function(){
        	$(this).siblings(".panel-heading").find(".glyphicon").addClass("rotate");
        });
        
        // Toggle plus minus icon on show hide of collapse element
        $(".collapse").on('show.bs.collapse', function(){
        	$(this).parent().find(".glyphicon").addClass("rotate");
        }).on('hide.bs.collapse', function(){
        	$(this).parent().find(".glyphicon").removeClass("rotate");
        });

    });
    
   //  $(document).ready(function(){
  
//   $(".AddPlancode").click(function(){
//     $("#planCode").show();
   
//   });
// });
$(document).ready(function() {
    $('#findEmp').DataTable();
} );

// Second Option DataTable
$(document).ready(function(){
   var table = $('#findExitemp').DataTable({
      'ajax': 'http://www.mocky.io/v2/5de7903d3700007b020929f6',
      'columnDefs': [
         {
            'targets': 0,
            'render': function(data, type, row, meta){
               if(type === 'display'){
                  data = '<div class="checkbox"><input type="checkbox" class="dt-checkboxes"><label></label></div>';
               }

               return data;
            },
            'checkboxes': {
               'selectRow': true,
               'selectAllRender': '<div class="checkbox"><input type="checkbox" class="dt-checkboxes"><label></label></div>'
            }
         }
      ],
      'select': 'multi',
      'order': [[1, 'asc']]
   });
});
$(document).ready(function(){
   var table = $('#impactEmp').DataTable({
      'ajax': 'http://www.mocky.io/v2/5de7a6823700005f00092b1a',
      'columnDefs': [
         {
            'targets': 0,
            'render': function(data, type, row, meta){
               if(type === 'display'){
                  data = '<div class="checkbox"><input type="checkbox" class="dt-checkboxes"><label></label></div>';
               }

               return data;
            },
            'checkboxes': {
               'selectRow': true,
               'selectAllRender': '<div class="checkbox"><input type="checkbox" class="dt-checkboxes"><label></label></div>'
            }
         }
      ],
      'select': 'multi',
      'order': [[1, 'asc']]
   });
});
$(document).ready(function(){
   var table = $('#SelectEmp').DataTable({
      'ajax': '',
      'columnDefs': [
         {
            'targets': 0,
            'render': function(data, type, row, meta){
               if(type === 'display'){
                  data = '<div class="checkbox"><input type="checkbox" class="dt-checkboxes"><label></label></div>';
               }

               return data;
            },
            'checkboxes': {
               'selectRow': true,
               'selectAllRender': '<div class="checkbox"><input type="checkbox" class="dt-checkboxes"><label></label></div>'
            }
         }
      ],
      'select': 'multi',
      'order': [[1, 'asc']]
   });
});
$(document).ready(function(){
   var table = $('#empInfo').DataTable({
      'ajax': 'http://www.mocky.io/v2/5de660443700000f000922d2',
      'columnDefs': [
         {
            'targets': 0,
            'render': function(data, type, row, meta){
               if(type === 'display'){
                  data = '<div class="checkbox"><input type="checkbox" class="dt-checkboxes"><label></label></div>';
               }

               return data;
            },
            'checkboxes': {
               'selectRow': true,
               'selectAllRender': '<div class="checkbox"><input type="checkbox" class="dt-checkboxes"><label></label></div>'
            }
         }
      ],
      'select': 'multi',
      'order': [[1, 'asc']]
   });
});
// $(document).ready(function(){
// $('#savePlan').on('click',function(){
//    alert("Plancode saved successfully");
// });
// $('#addPlanCode').on('click',function(){
//    $('#planName').text($('#planName-input').val());
//    $('#setId').text($('#setId-input').val())
   
// })
// });