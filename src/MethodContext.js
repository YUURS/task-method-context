import { EventEmitter } from './EventEmitter';

/*
1) В методе subscribe подпишитесь на событие click с помощью EventEmitter.on(eventName, callback).
В обработчике нужно увеличивать значение поля count на 1
2)В методе unsubscribe отпишитесь от события click с помощью EventEmitter.off(eventName, callback).
В качестве callback нужно передавать тот же самый обработчик, который был передан при подписке.
 */
export const obj = {
    count: 0,

    subscribe() {
        this._clickHandler = () => {
            this.count += 1;
        };
        EventEmitter.on('click', this._clickHandler);
    },
    
    unsubscribe() {
        if (this._clickHandler) {
            EventEmitter.off('click', this._clickHandler);
        }
    }
};


/*
Сделайте так, чтобы метод first вызывал метод second со своими аргументами, но в обратном порядке:

obj1.first(1, 2, 3);
// Внутренний вызов должен быть равносилен obj1.second(3, 2, 1)
 */
export const obj1 = {
    first(...args) {
        args = args.reverse()
        return this.second(...args)
    },
    second() {
        // здесь ничего писать не нужно
    },
};
