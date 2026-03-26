import TextToSVG, {type GenerationOptions} from 'text-to-svg';


const items = ['\ue0ab'];

const textToSVG = TextToSVG.loadSync('font.ttf');

const attributes = {fill: 'red', stroke: 'black'};
const options: GenerationOptions = {x: 0, y: 0, fontSize: 72, anchor: 'top', attributes: attributes};


console.log(items.map(item => textToSVG.getPath(item, options).match(/d="(.*)"/)![1]));