import './Cart.less';
import {template as GoodsItem} from './GoodsItem.html';

export default class Cart {
    constructor() {
        this.$el = $('.Cart');
        this.$goods = this.$el.find('.Cart-goods');
        this.$items = this.$el.find('.Cart-items');
        this.$goodsitem = $(GoodsItem()[0]);
        this.$maxSumInput = this.$el.find('.Cart-maxSumInput');
        this.$sum = this.$el.find('.Cart-sum');
        this.$clear = this.$el.find('.Cart-clear');

        this.availableKeys = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']);
        this.cartSum = 0;

        fetch('https://kodaktor.ru/cart_data.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                this.initItems(data);
            }.bind(this));

        this.$cart = this.$el.find('.Cart-cart').droppable({
            drop: this.onDrop.bind(this)
        });

        this.$maxSumInput.on('keydown', this.onInputKeyDown.bind(this));
        this.$clear.on('click', this.onClear.bind(this));
    }

    initItems(items) {
        var $item;

        for (var item in items) {
            $item = this.$goodsitem.clone();
            $item.find('.GoodsItem-titleText').text(item);
            $item.find('.GoodsItem-price').text(items[item]);
            $item.draggable({
                revert: true
            });
            this.$goods.append($item);
        }
    }

    onDrop(e, ui) {
        var $item = ui.draggable.clone().removeAttr('style');
        var name = $item.find('.GoodsItem-titleText').text();
        var price = Number($item.find('.GoodsItem-price').text());
        var maxSum = Number(this.$maxSumInput.val()) || 0;

        if (this.cartSum + price <= maxSum) {
            this.$items.append($item);
            if (!this.cartSum) {
                this.$el.addClass('isWithItems');
            }

            this.cartSum += price;

            this.$sum.text(this.cartSum);
        } else {
            this.blinkSum();
        }
    }

    onInputKeyDown(e) {
        // Check if was pressed number or operand or backspace key
        if (!this.availableKeys.has(e.key) && e.which != 8) {
            e.preventDefault();
            e.stopPropagation();
        }
    }

    blinkSum($el, count) {
        this.$sum.addClass('isBlinked');

        setTimeout(function () {
            this.$sum.removeClass('isBlinked');
        }.bind(this), 350);
    }

    onClear() {
        this.$items.html('');
        this.cartSum = 0;
        this.$sum.text(0);
    }
}