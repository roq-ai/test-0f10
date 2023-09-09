import { ActivityInterface } from 'interfaces/activity';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface CustomerInterface {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  activity?: ActivityInterface[];
  organization?: OrganizationInterface;
  _count?: {
    activity?: number;
  };
}

export interface CustomerGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone_number?: string;
  organization_id?: string;
}
