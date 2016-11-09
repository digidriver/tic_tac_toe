$(function(){
	var X = "X";
	var O = "O";
	var elapsedTurns = 0;
	
	// Individual spots on board
	var spot1 = $('#spot1');
	var spot2 = $('#spot2');
	var spot3 = $('#spot3');
	var spot4 = $('#spot4');
	var spot5 = $('#spot5');
	var spot6 = $('#spot6');
	var spot7 = $('#spot7');
	var spot8 = $('#spot8');
	var spot9 = $('#spot9');
	
	$('#board li').click(function(){
		// Spot checking
		if (winCheck('O') === true){
			alert('Winner: O');
			//doneWithBoard();
		} else if (winCheck('X') === true){
			alert('Winner: X');
			//doneWithBoard();
		} else if (elapsedTurns === 9){
			alert('Tie game');
			//doneWithBoard();
		} else if ($(this).hasClass('disable')){
			alert('This spot is already filled');
		} else if (elapsedTurns % 2 === 0){
			elapsedTurns++;
			$(this).text(O);
			$(this).addClass('O');
			$(this).addClass('disable');
			if (winCheck('O') === true){
				alert('Winner: O');
				//doneWithBoard();
			} else if (elapsedTurns === 9){
				alert('Tie game');
				//doneWithBoard();
			}
		} else {
			elapsedTurns++;
			$(this).text(X);
			$(this).addClass('X');
			$(this).addClass('disable');
			if (winCheck('X') === true){
				alert('Winner: X');
				//doneWithBoard();
			} else if (elapsedTurns === 9){
				alert('Tie game');
				//doneWithBoard();
			}
		}
	});
	
	// Reset Handler
	$('#reset').click(function(){
		doneWithBoard();
	});
	
	function winCheck(player){
		var result = false;
		if (player === 'O'){
			if(spot1.hasClass('O') && spot2.hasClass('O') && spot3.hasClass('O') ||
			spot4.hasClass('O') && spot5.hasClass('O') && spot6.hasClass('O') ||
			spot7.hasClass('O') && spot8.hasClass('O') && spot9.hasClass('O') ||
			spot1.hasClass('O') && spot4.hasClass('O') && spot7.hasClass('O') ||
			spot2.hasClass('O') && spot5.hasClass('O') && spot8.hasClass('O') ||
			spot3.hasClass('O') && spot6.hasClass('O') && spot9.hasClass('O') ||
			spot1.hasClass('O') && spot5.hasClass('O') && spot9.hasClass('O') ||
			spot3.hasClass('O') && spot5.hasClass('O') && spot7.hasClass(player)){
				result = true;
			}
		} else if (player === 'X'){
			if(spot1.hasClass('X') && spot2.hasClass('X') && spot3.hasClass('X') ||
			spot4.hasClass('X') && spot5.hasClass('X') && spot6.hasClass('X') ||
			spot7.hasClass('X') && spot8.hasClass('X') && spot9.hasClass('X') ||
			spot1.hasClass('X') && spot4.hasClass('X') && spot7.hasClass('X') ||
			spot2.hasClass('X') && spot5.hasClass('X') && spot8.hasClass('X') ||
			spot3.hasClass('X') && spot6.hasClass('X') && spot9.hasClass('X') ||
			spot1.hasClass('X') && spot5.hasClass('X') && spot9.hasClass('X') ||
			spot3.hasClass('X') && spot5.hasClass('X') && spot7.hasClass(player)){
				result = true;
			}
		}
		
		return result;
	}
	
	function doneWithBoard(){
		$('#board li').text('+');
		$('#board li').removeClass('disable');
		$('#board li').removeClass('O');
		$('#board li').removeClass('X');
		elapsedTurns = 0;
	}
});