class toolToip extends HTMLElement {
    constructor() {
        super();

        this._show = this._show.bind(this);
        this._hide = this._hide.bind(this);
    };

    // called when element ins added to dom
    connectedCallback() {
        
        if (!this.hasAttribute('role')) {
            this.setAttribute('role', 'tooltip');
        };
    
        if (!this.hasAttribute('tabindex')) {
            this.setAttribute('tabindex', -1);
        }

        this._hide();

        this._target = document.querySelector('[aria-describedby=' + this.id + ']');
        if (!this._target){
            return;
        }
        
        // add events
        this._target.addEventListener('focus', this._show);
        this._target.addEventListener('blur', this._hide);
        this._target.addEventListener('mouseenter', this._show);
        this._target.addEventListener('mouseleave', this._hide);
    }
}