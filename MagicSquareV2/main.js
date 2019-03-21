var bleep = new Audio();
bleep.src = "./audio/Click2.wav";

var sum = 65;

$('.box').mouseover(function(){
	bleep.play();
});

$('input').on('input',function(){
	let inp = this.id;
	let idCol = parseInt(inp.substring(1,2));
	let idRow = parseInt(inp.substring(3,4));

	let result = (parseInt($('#c1l1').val()) + parseInt($('#c2l2').val()) + parseInt($('#c3l3').val()) + parseInt($('#c4l4').val()) + parseInt($('#c5l5').val()));

	if(result == 65) $('#resultDiag').attr("style",'visibility:visible');

	verifRow(idRow);
	verifCol(idCol);
});

function verifRow(id){
	let result = (parseInt($('#c1'+'l'+id).val()) + parseInt($('#c2'+'l'+id).val()) + parseInt($('#c3'+'l'+id).val()) + parseInt($('#c4'+'l'+id).val()) + parseInt($('#c5'+'l'+id).val()));

	if(result == 65) $('#resultRow'+id).attr("style",'visibility:visible');
};

function verifCol(id){
	let result = (parseInt($('#c'+ id + 'l1').val()) + parseInt($('#c'+ id + 'l2').val()) + parseInt($('#c'+ id + 'l3').val()) + parseInt($('#c'+ id + 'l4').val()) + parseInt($('#c'+ id + 'l5').val()));

	if(result == 65) $('#resultCol'+id).attr("style",'visibility:visible');
};
