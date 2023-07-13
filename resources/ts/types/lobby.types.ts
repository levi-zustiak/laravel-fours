import { User } from '@types/user.types';

export type Lobby = {
  id: string;
  status: 'pending' | 'connected' | 'disconnected';
  host_id: number;
  host?: User;
  peer_id: number;
  peer?: User;
  created_at: string;
  updated_at: string;
};
