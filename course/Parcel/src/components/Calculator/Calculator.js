import './Calculator.less';

export default class Calculator {
    constructor() {
        this.value = '';
        this.availableKeys = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/']);
        this.$el = $('.Calculator');
        this.$input = this.$el.find('input');
        this.$el.find('button').on('click', this.onClick.bind(this));
        this.$input.on('keydown', this.onKeyDown.bind(this));
    }

    onClick(e) {
        this.value = this.$input.val();
        var action = $(e.target).closest('button').data('action');
        if (action == 'sqrt' || action == 'calculate') {
            var value = eval(this.value);
            if (action == 'sqrt') value = Math.sqrt(value);
            this.value = String(value);
        } else this.value += action;
        this.$input.val(this.value);
    }

    onKeyDown(e) {
        // Check if was pressed number or operand or backspace key
        if (!this.availableKeys.has(e.key) && e.which != 8) {
            e.preventDefault();
            e.stopPropagation();
        }
    }
}