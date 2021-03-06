import { Scene } from '@antv/l7';
// tslint:disable-next-line: no-submodule-imports
import merge from 'lodash/merge';
import { adcodeType, IDistrictLayerOption } from './interface';
import ProvinceLayer from './province';

export interface IProvinceLayerOption extends IDistrictLayerOption {
  adcode: adcodeType;
}
export default class CityLayer extends ProvinceLayer {
  protected getDefaultOption(): IProvinceLayerOption {
    const config = super.getDefaultOption();
    return merge({}, config, {
      adcode: ['110100'],
      depth: 3,
    });
  }
  protected filterData(data: any, adcode: adcodeType) {
    const adcodeArray = Array.isArray(adcode) ? adcode : [adcode];
    const features = data.features.filter((fe: any) => {
      const code = fe.properties.adcode;
      return (
        adcodeArray.indexOf(code) !== -1 ||
        adcodeArray.indexOf('' + code) !== -1
      );
    });
    return { type: 'FeatureCollection', features };
  }

  protected filterLabelData(data: any, adcode: adcodeType) {
    const adcodeArray = Array.isArray(adcode) ? adcode : [adcode];
    const features = data.filter((fe: any) => {
      const code = fe.adcode;
      return (
        adcodeArray.indexOf(code) !== -1 ||
        adcodeArray.indexOf('' + code) !== -1
      );
    });
    return features;
  }
}
