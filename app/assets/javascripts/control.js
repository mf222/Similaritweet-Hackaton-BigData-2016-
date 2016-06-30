$(document).ready(function(){

	console.log( "listeke" );
	$("#butt1").removeClass("disabled");
	$("#butt2").removeClass("disabled");
    $("#butt3").removeClass("disabled");
    $("#siman").hide();
    $("#deepse").hide();
    $("#datebot").hide();

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

}); 