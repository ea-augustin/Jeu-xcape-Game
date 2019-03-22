/* ajout de sons sur les cases */
var bleep = new Audio();
bleep.src = "./audio/Click2.wav";

var sum = 65;
var count = 0;
var c1l1 = 23;
var c2l2 = 7;
var c3l3 = 16;
var c4l4 = 5;
var c5l5 = 14;

/* fonction pour le son */
$('.box').mouseover(function(){
	bleep.play();
});

/* fonction qui vérifie les données entrées */
$('input').on('input',function(){
	let result = (parseInt($('#c1l1').val()) + parseInt($('#c2l2').val()) + parseInt($('#c3l3').val()) + parseInt($('#c4l4').val()) + parseInt($('#c5l5').val()));

	if((this.value == 23) || (this.value == 7) || (this.value == 16) || (this.value == 5) || (this.value == 14))
		if((this.id == "c1l1") || (this.id == "c2l2") || (this.id == "c3l3") || (this.id == "c4l4") || (this.id == "c5l5")) count++;


	console.log(this.value);
	if(count >= 2) $('.result').attr("style",'visibility:visible');
});

/* affichage/masquage des instructions (=aide) */
$('#instructions').click(function(){
	$('#instr').toggle('slow');
});

/* bouton reset pour repartir de zéro */
$('#reset').click(function(){
	location.reload();
});