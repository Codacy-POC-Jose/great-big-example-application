/* tslint:disable:no-bitwise */
export const IMAGES_ROOT = 'content/img/';

export const layoutSizes = {
    resWidthCollapseSidebar: 1200,
    resWidthHideSidebar: 500
};

export const layoutPaths = {
    images: {
        root: IMAGES_ROOT,
        profile: IMAGES_ROOT + 'app/profile/',
        amMap: 'content/img/theme/vendor/ammap/',
        amChart: 'content/img/theme/vendor/amcharts/dist/amcharts/img/'
    }
};

export class ColorHelper {
    static shade = (color, weight) => {
        return ColorHelper.mix('#000000', color, weight);
    };

    static tint = (color, weight) => {
        return ColorHelper.mix('#ffffff', color, weight);
    };

    static hexToRgbA = (hex, alpha) => {
        let c;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
            c = hex.substring(1).split('');
            if (c.length === 3) {
                c = [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c = '0x' + c.join('');
            return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + alpha + ')';
        }
        throw new Error('Bad Hex');
    };

    static mix = (color1, color2, weight) => {

        const d2h = (d) => d.toString(16);
        const h2d = (h) => parseInt(h, 16);

        let result = '#';
        for (let i = 1; i < 7; i += 2) {
            const color1Part = h2d(color1.substr(i, 2));
            const color2Part = h2d(color2.substr(i, 2));
            const resultPart = d2h(Math.floor(color2Part + (color1Part - color2Part) * (weight / 100.0)));
            result += ('0' + resultPart).slice(-2);
        }
        return result;
    };
}

export const isMobile = () => (/android|webos|iphone|ipad|ipod|blackberry|windows phone/).test(navigator.userAgent.toLowerCase());
