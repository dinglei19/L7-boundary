export interface IRegion {
  child: number[];
  code: string;
  name: string;
  center?: [number, number];
}
export const RegionList: { [key: string]: IRegion } = {
  '100': {
    name: '华北区',
    code: '100',
    child: [120000, 150000, 210000, 370000, 230000, 110000, 130000, 220000],
    center: [118.740234375, 42.87596410238256],
  },
  '101': {
    name: '华东区',
    code: '101',
    child: [320000, 340000, 310000],
    center: [118.564453125, 31.765537409484374],
  },
  '102': {
    name: '华南区',
    code: '102',
    child: [460000, 440000, 710000],
    center: [110.709228515625, 22.238259929564308],
  },
  '103': {
    name: '华西区',
    code: '103',
    child: [630000, 510000, 540000, 500000, 650000],
    center: [90.263671875, 36.73888412439431],
  },
  '104': {
    name: '华中区',
    code: '104',
    child: [360000, 420000, 350000, 330000],
    center: [118.05908203124999, 28.38173504322308],
  },
  '201': {
    name: '西南区',
    code: '201',
    child: [430000, 520000, 530000, 450000],
    center: [102.5244140625, 25.16517336866393],
  },
  '301': {
    name: '中西区',
    code: '301',
    child: [620000, 610000, 140000, 410000, 640000],
    center: [109.1162109375, 35.209721645221386],
  },
  '401': {
    name: '港澳台',
    code: '701',
    child: [710000, 810000, 820000],
  },
};
