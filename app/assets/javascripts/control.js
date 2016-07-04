$(document).ready(function(){
	var count = 0;

	console.log( "listeke" );
	$("#butt1").removeClass("disabled");
	$("#butt2").removeClass("disabled");
    $("#butt3").removeClass("disabled");
    $("#siman").hide();
    $("#deepse").hide();
    $("#datebot").hide();
		$("#mfer").hide();
		$("#result").hide();

    $("#butt2").click(function(){
    	 console.log( "but2 apretado!" );
        $(this).addClass("disabled");
        $("#butt1").removeClass("disabled");
        $("#butt3").removeClass("disabled");
		$("#deepse").hide();
        $("#datebot").hide();
        $("#siman").show();

    });

    $("#butt1").click(function(){
    	 console.log( "but 1 apretado!" );
        $(this).addClass("disabled");
        $("#butt2").removeClass("disabled");
        $("#butt3").removeClass("disabled");
        $("#siman").hide();
        $("#deepse").hide();
        $("#datebot").show();
    });

    $("#butt3").click(function(){
    	 console.log( "but 3 apretado!" );
        $(this).addClass("disabled");
        $("#butt1").removeClass("disabled");
        $("#butt2").removeClass("disabled");
        $("#siman").hide();
        $("#datebot").hide();
        $("#deepse").show();
    });


		$("#change-context").click(function(){
			if(count%2==0){
				$("#sonic").removeClass(".enablede")
				$("#sonic").addClass(".disenablede")
				$("#sonic").hide();
				$("#mfer").removeClass(".disenablede")
				$("#mfer").addClass(".enablede")
				$("#mfer").show();
			}else{
				$("#mfer").removeClass(".enablede")
				$("#mfer").addClass(".disenablede")
				$("#mfer").hide();
				$("#sonic").removeClass(".disenablede")
				$("#sonic").addClass(".enablede")
				$("#sonic").show();
			}

			count++;


		});

		$("#sebott").click(function(){
				$("#butsearch").hide();
				$("#result").show();

		});

});
