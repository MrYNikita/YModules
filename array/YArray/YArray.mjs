import { jectFill } from "../../ject/ject.mjs";
import { YList } from "../../ject/YBasic/YList/YList.mjs";
import { arrayChangeSize, arrayLevel } from "../array.mjs";

/**
 * @typedef TBArray
 * @prop {any[]} array
 * @prop {number} size
 * @typedef {{[p in Exclude<keyof DArray,keyof SArray>|Exclude<keyof SArray,keyof DArray>]:(DArray[p]&SArray[p])}} TDArray
 * @typedef {TDArray&TBArray} TArray
*/

class SArray extends YList {



};
class DArray extends SArray {

    /**
     * Фиксированность элементов при смещении влево.
     * * Определяет, должны ли элементы сдвигаться влево, если при удалении есть пустое пространство.
     * - По умолчанию `true`.
     * @type {boolean}
    */
    fixedLeft = true;
    /**
     * Фиксированность элементов при смещении вправо.
     * Определяет, должны ли элементы сдвигаться вправо, если при вставке есть пустое пространство.
     * - По умолчанию `true`.
     * @type {boolean}
    */
    fixedRight = true;
    /**
     * Вытесняемость.
     * Если значение истино и массив фиксирован, то элементы, выходящие за рамки лимита будут удалены.
     * В противном случае, если значение ложно, то вставленные элементы могут быть размещены только в свободные ячейки.
     * @type {boolean}
    */
    displacement = true;

};
class IArray extends DArray {



};
class MArray extends IArray {



};
class FArray extends MArray {

    /**
     * Контсруктор класса `YArray`
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @arg {TArray} t
    */
    constructor(t = {}) {

        t = FArray.#before(Object.values(arguments));

        FArray.#deceit(t);

        super(t);

        FArray.#create.apply(this, [t]);

    };

    /** @arg {any[]} t */
    static #before(t) {

        if (t?.length === 1 && [Object, YArray].includes(t[0]?.constructor) && !Object.getOwnPropertyNames(t[0]).includes('_ytp')) {

            return t[0];

        } else if (t?.length) {

            /** @type {TArray&DArray} */
            const r = {};

            if (t[0]._ytp) t = [...t[0]._ytp];

            switch (t.length) {

                case 3:
                case 2:
                case 1: r.values = t;

            };

            return Object.values(r).length ? r : { _ytp: t };

        } else return {};

    };
    /** @arg {TArray} t @this {YArray} */
    static #deceit(t) {

        try {

            FArray.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @arg {TArray} t @this {YArray} */
    static #verify(t) {

        const {



        } = t;

        FArray.#handle(t);

    };
    /** @arg {TArray} t @this {YArray} */
    static #handle(t) {

        if (t.size) {

            if (t?.array?.length) t.values = t.array.slice(0, t.size);
            else t.values = new Array(t.size).fill(undefined);

        } else if (t?.array?.length) t.values = t.array;

    };
    /** @arg {TArray} t @this {YArray} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};

/**
 * Класс `YArray`
 *
 *
 * - Тип `SDIMFY`
 * - Версия `0.0.0`
 * - Модуль ``
 * - Цепочка `BDVHC`
*/
export class YArray extends FArray {

    /**
     * Метод получения массива без обертки.
     * - Версия `0.0.0`
    */
    get() {

        return this.values;

    };
    /**
     * Метод получения значений по курсорам.
     * - Версия `0.0.0`
    */
    getByCursors() {



    };

    /**
     * Метод создания объема для указанных элементов массива.
     *
     * Если указано одно значение, то оно будет применено для всех элементов массива.
     *
     * Елси указано несколько значений, то каждое будет последовательно применяться к элементам массива с соотвествующей позицией их очередности.
     * - Версия `0.0.0`
     * @arg {...number} dimension Размерность.
    */
    bulk(...dimension) {



        return this;

    };
    /**
     * Метод добавления элементов в конец массива.
     * - Версия `0.0.0`
     * @arg {...any} elements
    */
    push(...elements) {

        if (!this.limited) this.values.push(...elements);

        return this;

    };
    /**
     * Метод увеличения размерности массива.
     * - Версия `0.0.0`
     * @arg {...number} levels Размерности.
    */
    level(...levels) {

        this.values = arrayLevel(this.values, ...levels);

        return this;

    };
    /**
     * Метод заполнения массива.
     * - Версия `0.0.0`
     * @arg {any} filler
    */
    fill(filler) {

        this.values.fill(filler);

        return this;

    };

    /**
     * Метод изменения размера.
     *
     * Размер изменяет обернутое значение расширяя или уменьшая его.
     * При увелечении размера, массив получит дополнительное пространство равное `undefined` (пустым значениям).
     * В противном случае массив уничтожит значения и уменьшит размер.
     * Значения незатронутые изменениями размеров останутся.
     * - Версия `0.0.0`
     * @arg {number} size Новый размер.
    */
    changeSize(size) {

        arrayChangeSize(this.values, size);

        return this;

    };

};