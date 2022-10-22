import { arrayAppend, arrayRemove } from "../../../array/array.mjs";
import { configLog } from "../../../config.mjs";
import { jectFill } from "../../../ject/ject.mjs";
import { stringCastToDate, stringReplace } from "../../../string/string.mjs";
import { YNotice } from "../YNotice.mjs";

/**
 * @typedef TBSection
 * @prop {any} _
 * @typedef {DSection&TBSection} TSection
*/
class SSection {

    

};
class DSection extends SSection {

    /**
     * Область видимости логов.
     * @type {number}
    */
    vis = configLog.visiable;
    /**
     * Лимит уведомлений.
     * @type {number}
    */
    size = configLog.size;
    /**
     * Список уведомлений.
     * @type {[YNotice]}
    */
    list = [];
    /**
     * Метка.
     * @type {string}
    */
    label;
    /**
     * Символьная метка.
     * @type {string}
    */
    symbol;
    /**
     * Цвет переднего фона.
     * @type {string}
    */
    colorF;
    /**
     * Цвет заднего плана.
     * @type {string}
    */
    colorB;

};
class FSection extends DSection {

    /**
     * 
     * - Версия `0.0.0`
     * - Цепочка `BDVHC`
     *  @param {TSection} t
    */
    constructor(t = {}) {

        t = FSection.#before(...arguments);

        FSection.#deceit(t);

        super(t);

        FSection.#create.apply(this, [t]);

    };

    /** @param {TSection} t @this {[]} */
    static #before(t) {



        if (!t) t = {};

        return t;

    };
    /** @param {TSection} t @this {YSection} */
    static #deceit(t) {

        try {

            FSection.#verify(t);

        } catch (e) {

            throw e;

        };

    };
    /** @param {TSection} t @this {YSection} */
    static #verify(t) {

        const {



        } = t;

        FSection.#handle(t);

    };
    /** @param {TSection} t @this {YSection} */
    static #handle(t) {

        let {



        } = t;



        t = {

            ...t,

        };

    };
    /** @param {TSection} t @this {YSection} */
    static #create(t) {

        const {



        } = t;

        jectFill(this, t);



    };

};

/**
 *
 * - Тип `SDFY-2.0`
 * - Версия `0.0.0`
 * - Цепочка `BDVHC`
*/
export class YSection extends FSection {

    /**
     * Метод для отображения уведомлений.
     * - Версия `0.0.0`
    */
    log() {

        const {

            colorF,
            colorB,

        } = this;

        if (colorF || colorB) this.get().forEach(n => stringReplace(n.get(), [/.*? - (?<r>.*?) -/, ]));
        else this.get().forEach(n => n.log());

        return this;

    };
    /**
     * Метод для получения всех уведомлений в виде строки.
     * - Версия `0.0.0`
    */
    get() {

        const {

            list,
            label,
            symbol,

        } = this;

        return this.list.map(n => new YNotice({ ...n, data: stringReplace(configLog.templates.section, ['s', this.symbol ?? this.label], ['d', n.data]) }));

    };
    /**
     * Метод для добавления новых уведомлений в секцию.
     * Версия `0.0.0`
     * @param {...string|YNotice} notices - Остаточный набор строк или уведомлений, предназначенных для размещения в секцию.
    */
    append(...notices) {

        const {

            list,
            size,

        } = this;

        notices.forEach((n, i, a) => a[i] = (n.constructor === String) ? new YNotice(n) : n);

        if (notices.length === size) this.list = notices;
        else if (notices.length > size) arrayAppend(arrayRemove(list), ...notices.splice(notices.length - size));
        else if (notices.length + list.length > size) arrayAppend(list, ...notices).splice(0, list.length - size);
        else arrayAppend(list, ...notices);

        return this;

    };

};