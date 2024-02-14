	function mudaImagem (tipo) {
			if (tipo == 1) {
				arquivo = "icone-historia.png";
			}
			if (tipo == 2) {
				arquivo = "icone-personagem.png";
			}
			if (tipo == 3) {
				arquivo = "icone-escritora.png";
			}
			if (tipo == 4) {
				arquivo = "icone-ler.png";
			}
            if (tipo == 5) {
                arquivo = "livro.png";
            }
			document.getElementById("icones").src= arquivo;
		}