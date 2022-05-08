// Global variables
const drumsInstruments = ["Kick", "Snare", "Hihat", "Tom", "Clap", "Crash"]
var padStates = new Array(drumsInstruments.length * 16).fill(false);
var drumPads;

function addListeners()
{
	drumPads = document.querySelectorAll(".drumPad");

	for (var i = 0; i < drumPads.length; i++)
	{
		drumPads[i].addEventListener('click', function()
		{
			let pad = this.nextElementSibling;
			console.log('Pad: ', pad);
		});
	}
}

function getDrumLine(inInstrument)
{
	var drumLine = document.createElement('div');
	drumLine.className = 'drumLine';

	drumLine.innerHTML = "<div class='drumInstrument'>" + inInstrument + "</div>";
	
	for(let i = 0; i < 16; i++)
		drumLine.innerHTML += "<div type='button' class='drumPad'></div>";
	//drumLine.innerHTML += "<div type='button' class=" + "drumPad-" + i + "></div>";

	return drumLine;
}

function createDrumMachine()
{
	const drumsContainer = document.querySelector('.drumContainer');

	for(var i = 0; i < drumsInstruments.length; i++)
	{
		console.log(drumsInstruments[i]);
		drumsContainer.appendChild(getDrumLine(drumsInstruments[i]));
	}

	addListeners();
}

window.onload = createDrumMachine;