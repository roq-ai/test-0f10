import { CustomerInterface } from 'interfaces/customer';
import { GetQueryInterface } from 'interfaces';

export interface ActivityInterface {
  id?: string;
  name: string;
  description?: string;
  start_date: any;
  end_date: any;
  customer_id: string;
  created_at?: any;
  updated_at?: any;

  customer?: CustomerInterface;
  _count?: {};
}

export interface ActivityGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  customer_id?: string;
}
