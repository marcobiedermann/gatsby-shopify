import {
  COLLECTIONS,
  NEWS,
  PRIVACY_POLICY,
  PRODUCTS,
  REFUND_POLICY,
  Route,
  TERMS_OF_SERVICE,
} from './routes';

type Menu = Route[];

export const FOOTER: Menu = [PRIVACY_POLICY, REFUND_POLICY, TERMS_OF_SERVICE];

export const MAIN: Menu = [COLLECTIONS, PRODUCTS, NEWS];
