// pages/api/profile.ts
import { ProfileInfoModel } from '@/models/ProfileInfo';
import { NextApiRequest, NextApiResponse } from 'next';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.query;
  const user = ProfileInfoModel.find((user) => user.email === email);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
}