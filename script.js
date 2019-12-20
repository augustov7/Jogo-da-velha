var op = 1;

function clique_aqui(e, id){
	
	if (op == 1) {
		e.innerHTML = 'X'
		op = 0;
	}else{
		e.innerHTML = 'O'
		op = 1;
	}

	if (id == 1) {
		checa_superior()
		checa_esquerdo()
		checa_diagonal_esquerdo()
	}else{
		if (id == 2) {
			checa_superior()
			checa_meio_reto()
		}else{
			if (id == 3) {
				checa_superior()
				checa_direito()
				checa_diagonal_direito()
			}else{
				if (id == 4) {
					checa_esquerdo()
					checa_meio_lado()					
				}else{
					if (id == 5) {
						checa_meio_lado()
						checa_meio_reto()
						checa_diagonal_direito()
						checa_diagonal_esquerdo()
					}else{
						if (id == 6) {
							checa_direito()
							checa_meio_lado()
						}else{
							if (id == 7 ) {
								checa_esquerdo()
								checa_inferior()
								checa_diagonal_direito()
							}else{
								if (id == 8) {
									checa_meio_reto()
									checa_inferior()
								}else{
									if (id == 9) {
										checa_inferior()
										checa_direito()
										checa_diagonal_esquerdo()
									}
								}
							}
						}
					}
				}
			}
		}		
	}


}


function checa_superior(){	
	var elemento01 = document.getElementById("1");
	var elemento02 = document.getElementById("2");
	var elemento03 = document.getElementById("3");
	if (elemento01.innerHTML == elemento02.innerHTML && elemento02.innerHTML == elemento03.innerHTML) {
		alert(`Vencedor: ${elemento03.innerHTML} `)
		window.location.reload()
	}
}

function checa_inferior(){	
	var elemento01 = document.getElementById("7");
	var elemento02 = document.getElementById("8");
	var elemento03 = document.getElementById("9");
	if (elemento01.innerHTML == elemento02.innerHTML && elemento02.innerHTML == elemento03.innerHTML) {
		alert(`Vencedor: ${elemento03.innerHTML} `)
		window.location.reload()
	}
}

function checa_esquerdo(){	
	var elemento01 = document.getElementById("1");
	var elemento02 = document.getElementById("4");
	var elemento03 = document.getElementById("7");
	if (elemento01.innerHTML == elemento02.innerHTML && elemento02.innerHTML == elemento03.innerHTML) {
		alert(`Vencedor: ${elemento03.innerHTML} `)
		window.location.reload()
	}
}

function checa_direito(){	
	var elemento01 = document.getElementById("3");
	var elemento02 = document.getElementById("6");
	var elemento03 = document.getElementById("9");
	if (elemento01.innerHTML == elemento02.innerHTML && elemento02.innerHTML == elemento03.innerHTML) {
		alert(`Vencedor: ${elemento03.innerHTML} `)
		window.location.reload()
	}
}

function checa_meio_reto(){	
	var elemento01 = document.getElementById("2");
	var elemento02 = document.getElementById("5");
	var elemento03 = document.getElementById("8");
	if (elemento01.innerHTML == elemento02.innerHTML && elemento02.innerHTML == elemento03.innerHTML) {
		alert(`Vencedor: ${elemento03.innerHTML} `)
		window.location.reload()
	}
}

function checa_meio_lado(){	
	var elemento01 = document.getElementById("4");
	var elemento02 = document.getElementById("5");
	var elemento03 = document.getElementById("6");
	if (elemento01.innerHTML == elemento02.innerHTML && elemento02.innerHTML == elemento03.innerHTML) {
		alert(`Vencedor: ${elemento03.innerHTML} `)
		window.location.reload()
	}
}

function checa_diagonal_esquerdo(){	
	var elemento01 = document.getElementById("1");
	var elemento02 = document.getElementById("5");
	var elemento03 = document.getElementById("9");
	if (elemento01.innerHTML == elemento02.innerHTML && elemento02.innerHTML == elemento03.innerHTML) {
		alert(`Vencedor: ${elemento03.innerHTML} `)
		window.location.reload()
	}
}

function checa_diagonal_direito(){	
	var elemento01 = document.getElementById("3");
	var elemento02 = document.getElementById("5");
	var elemento03 = document.getElementById("7");
	if (elemento01.innerHTML == elemento02.innerHTML && elemento02.innerHTML == elemento03.innerHTML) {
		alert(`Vencedor: ${elemento03.innerHTML} `)
		window.location.reload()
	}
}