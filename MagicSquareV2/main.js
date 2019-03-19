$('#inp1').on('input',function test(){
	let sum = 65;
	let exi = 42;
	let inp = $('#inp1').val();

	if((sum - exi) == inp) $('.resultRow1').attr("style",'color:green');
	else $('.resultRow1').attr("style",'color:red');

	if((parseInt($('#inp1').val()) + parseInt($('#inp2').val()) + parseInt($('#inp3').val()) + parseInt($('#inp4').val()) + parseInt($('#inp5').val())) == 65) $('.resultDiag').attr("style",'color:green');
	else $('.resultDiag').attr("style",'color:red');
});

$('#inp2').on('input',function test(){
	let sum = 65;
	let exi = 58;
	let inp = $('#inp2').val();

	if((sum - exi) == inp) $('.resultRow2').attr("style",'color:green');
	else $('.resultRow2').attr("style",'color:red');

	if((parseInt($('#inp1').val()) + parseInt($('#inp2').val()) + parseInt($('#inp3').val()) + parseInt($('#inp4').val()) + parseInt($('#inp5').val())) == 65) $('.resultDiag').attr("style",'color:green');
	else $('.resultDiag').attr("style",'color:red');
});

$('#inp3').on('input',function test(){
	let sum = 65;
	let exi = 49;
	let inp = $('#inp3').val();

	if((sum - exi) == inp) $('.resultRow3').attr("style",'color:green');
	else $('.resultRow3').attr("style",'color:red');

	if((parseInt($('#inp1').val()) + parseInt($('#inp2').val()) + parseInt($('#inp3').val()) + parseInt($('#inp4').val()) + parseInt($('#inp5').val())) == 65) $('.resultDiag').attr("style",'color:green');
	else $('.resultDiag').attr("style",'color:red');
});

$('#inp4').on('input',function test(){
	let sum = 65;
	let exi = 60;
	let inp = $('#inp4').val();

	if((sum - exi) == inp) $('.resultRow4').attr("style",'color:green');
	else $('.resultRow4').attr("style",'color:red');

	if((parseInt($('#inp1').val()) + parseInt($('#inp2').val()) + parseInt($('#inp3').val()) + parseInt($('#inp4').val()) + parseInt($('#inp5').val())) == 65) $('.resultDiag').attr("style",'color:green');
	else $('.resultDiag').attr("style",'color:red');
});

$('#inp5').on('input',function test(){
	let sum = 65;
	let exi = 51;
	let inp = $('#inp5').val();

	if((sum - exi) == inp) $('.resultRow5').attr("style",'color:green');
	else $('.resultRow5').attr("style",'color:red');

	if((parseInt($('#inp1').val()) + parseInt($('#inp2').val()) + parseInt($('#inp3').val()) + parseInt($('#inp4').val()) + parseInt($('#inp5').val())) == 65) $('.resultDiag').attr("style",'color:green');
	else $('.resultDiag').attr("style",'color:red');
});

