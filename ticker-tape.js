class tickerTape extends HTMLElement {
	constructor() {
		super();

		this._shadowRoot = this.attachShadow({ mode: 'open' });
		this._text = this.innerHTML

		const el = document.createElement('h1')

		char = this._text.charAt(0);

		el.innerHTML = this._text.substr(1) + char;
		this.shadowRoot.appendChild(el)

		el.innerHTML = this._characters[i]
		this._shadowRoot.appendChild(el)
	}

	connectedCallback() {
	// 
	}


	disconnectedCallback() {
		this._clearTimer()
	}


	_addTimer() {

	}


	_clearTimer() {
		console.log('clear', this._time)
	clearInterval(this._timer)
	}
}

customElements.define('ticker-tape', tickerTape);
