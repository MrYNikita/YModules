import os from "os";
import { config } from "../config.mjs";

//#region getIP 0.0.0

/**
 * @typedef TBgetIP
 * @prop {string} type
 * @typedef {TBgetIP} TgetIP
*/

/** @arg {TgetIP} t */
function getIPDeceit(t) {

    try {

        return getIPVerify(t);

    } catch (e) {

        if (config.strict) throw e;

        return undefined;

    };

};
/** @arg {TgetIP} t */
function getIPVerify(t) {

    const {



    } = t;

    return getIPHandle(t);

};
/** @arg {TgetIP} t */
function getIPHandle(t) {

    let {



    } = t;



    t = {

        ...t,

    };

    return getIPComply(t);

};
/** @arg {TgetIP} t */
function getIPComply(t) {

    const {

        type,
        local,

    } = t;

    const net = Object.entries(os.networkInterfaces());

    switch (type) {

        default: return net.find(n => {

            switch (local) {

                case 'ru': if (n[0].includes('Беспроводная сеть')) return n[1];

            };

        })?.[1]?.[1].address ?? '127.0.0.1';

    };

};

/**
 * Функция для получения IP устройства по беспроводной сети.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
 * @arg {string} type Тип сети.
 * @arg {string} local Локаль.
*/
export function osGetIP(local, type) {

    return getIPDeceit({ local, type });

};

//#endregion